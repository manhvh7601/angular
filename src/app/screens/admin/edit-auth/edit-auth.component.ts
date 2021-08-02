import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorsService } from 'src/app/services/authors.service';

@Component({
  selector: 'app-edit-auth',
  templateUrl: './edit-auth.component.html',
  styleUrls: ['./edit-auth.component.css']
})
export class EditAuthComponent implements OnInit {
  authId!: string;
  editForm: FormGroup;
  constructor(private route: ActivatedRoute, private authService: AuthorsService, private router: Router) {
    this.editForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ])
    })
   }
   get f(){
     return this.editForm.controls;
   }
  async ngOnInit(){
    await this.route.params.subscribe(params => {
      this.authId = params.id;
    });
    await this.authService.findById(this.authId).subscribe(data => {
      this.editForm.setValue({
        id: data.id,
        name: data.name
      })
    })
  }
  onSubmit(event: any){
    event.preventDefault();
    this.authService.editAuth(this.editForm.value).subscribe(data => {
      this.router.navigate(['/admin/authors'])
    })
  }

}

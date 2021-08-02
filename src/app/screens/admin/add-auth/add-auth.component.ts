import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorsService } from 'src/app/services/authors.service';

@Component({
  selector: 'app-add-auth',
  templateUrl: './add-auth.component.html',
  styleUrls: ['./add-auth.component.css']
})
export class AddAuthComponent implements OnInit {
  formAuth: FormGroup;
  constructor(private authService: AuthorsService, private router: Router) {
    this.formAuth = this.createFormGroup();
   }
   get f(){
     return this.formAuth.controls;
   }
  ngOnInit(): void {
  }
  onSubmit(){
    this.authService.addAuthor(this.formAuth.value).subscribe(data => {
      this.router.navigate(['/admin/authors'])
    })
  }
  createFormGroup(){
    return new FormGroup({
      name: new FormControl("",[
        Validators.required,
        Validators.minLength(4)
      ])
    })
  }

}

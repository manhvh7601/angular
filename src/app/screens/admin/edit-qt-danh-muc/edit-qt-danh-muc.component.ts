import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-edit-qt-danh-muc',
  templateUrl: './edit-qt-danh-muc.component.html',
  styleUrls: ['./edit-qt-danh-muc.component.css']
})
export class EditQtDanhMucComponent implements OnInit {
  cateId!: string;
  editForm: FormGroup;
  constructor(private route: ActivatedRoute, private categoryService: CategoryService, private router: Router) {
    this.editForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl('',[Validators.required,Validators.minLength(4)])
    })
   }
  
  async ngOnInit(){
    await this.route.params.subscribe(params => {
      this.cateId = params.id;
    })
    await this.categoryService.findById(this.cateId).subscribe(data => {
      this.editForm.setValue({
        id: data.id,
        name: data.name
      })
    })
  }
get f(){
  return this.editForm.controls;
}
onSubmit(event: any){
  event.preventDefault();
  this.categoryService.editCategory(this.editForm.value).subscribe(data => {
    this.router.navigate(['/admin/danh-muc']);
  })
}

}

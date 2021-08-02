import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-new-qt-danh-muc',
  templateUrl: './new-qt-danh-muc.component.html',
  styleUrls: ['./new-qt-danh-muc.component.css']
})
export class NewQtDanhMucComponent implements OnInit {
  danhmucForm: FormGroup;
  constructor(private categoryService: CategoryService, private router: Router) {
    this.danhmucForm = this.createFormGroup();
  }
  get f(){
    return this.danhmucForm.controls;
  }
  // danhmucForm: FormGroup = new FormGroup({
  //   name: new FormControl(),
  // });
  ngOnInit(): void {
  }
  onSubmit(){
    this.categoryService.addNewCategory(this.danhmucForm.value).subscribe(data => {
      if(data != undefined){
        this.router.navigate(['/admin/danh-muc']);
      }
    })
  }
  createFormGroup(){
    return new FormGroup({
        name: new FormControl("",[
        Validators.required,
        Validators.minLength(4) 
        ]
        )
      })
  }

}

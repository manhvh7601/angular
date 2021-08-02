import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-qt-danh-muc',
  templateUrl: './qt-danh-muc.component.html',
  styleUrls: ['./qt-danh-muc.component.css']
})
export class QTDanhMucComponent implements OnInit {
  
  cates: Category[] = [];
  keyword: string = "";
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAll(true).subscribe(data => {
      this.cates = data;
    })
  }
  search(event: any){
    this.keyword = event.target.value.trim();
    this.categoryService.searchByName(this.keyword, true).subscribe(data => {
      this.cates = data;
    })
  }
  removeCategory(cateObj: Category){
    if(confirm('Bạn chắc chắn xóa danh mục này')){
    this.categoryService.removeByID(cateObj.id).subscribe(data => {
      this.cates = this.cates.filter(item => item.id != cateObj.id)
    })
    } 
  }
  
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-danhmuc',
  templateUrl: './danhmuc.component.html',
  styleUrls: ['./danhmuc.component.css']
})
export class DanhmucComponent implements OnInit {
  cateID: string = "";
  cate: Category = new Category(0,"",);
  constructor(private route: ActivatedRoute, 
    private categoryServices: CategoryService) { }

   ngOnInit() {
    this.route.params.subscribe(params => {
      this.cateID = params.id;
      this.categoryServices.findById(this.cateID).subscribe(data => {
        this.cate = data;
        // console.log(this.cate)
      });
    });
    
  }

}

import { Component, OnInit } from '@angular/core';
import { Authors } from 'src/app/models/Authors';
import { AuthorsService } from 'src/app/services/authors.service';

@Component({
  selector: 'app-qt-auth',
  templateUrl: './qt-auth.component.html',
  styleUrls: ['./qt-auth.component.css']
})
export class QtAuthComponent implements OnInit {
  auth: Authors[] = [];
  constructor(private authService: AuthorsService) { }

  ngOnInit(): void {
    this.authService.getAll(true).subscribe(data => {
      this.auth = data;
    })
  }
  removeAuth(cateObj: Authors){
    if(confirm('Bạn chắc chắn xóa danh mục này')){
    this.authService.removeById(cateObj.id).subscribe(data => {
      this.auth = this.auth.filter(item => item.id != cateObj.id)
    })
    } 
  }

}

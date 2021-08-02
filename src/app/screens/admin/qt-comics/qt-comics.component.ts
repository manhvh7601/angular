import { Component, OnInit } from '@angular/core';
import { Comics } from 'src/app/models/comics';
import { ComicsService } from 'src/app/services/comics.service';

@Component({
  selector: 'app-qt-comics',
  templateUrl: './qt-comics.component.html',
  styleUrls: ['./qt-comics.component.css']
})
export class QtComicsComponent implements OnInit {

  comics: Comics[] = [];
  keyword: string = "";

  constructor(private comicService: ComicsService) { }

  ngOnInit(): void {
    this.comicService.getAll(true).subscribe(data => {
      // console.log(data);
      this.comics = data;
    })
  }
  search(event:any){
    this.keyword = event.target.value.trim();
    this.comicService.searchByName(this.keyword, true).subscribe(data => {
      this.comics = data;
    })
  }
  removeComics(comicsObj: Comics){
    if(confirm('Bạn có chắc muốn xóa')){
      this.comicService.removeByID(comicsObj.id).subscribe(data => {
        this.comics = this.comics.filter(item => item.id != comicsObj.id);
      })
    }
  }
}

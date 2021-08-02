import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'manhvhph10983';
  name= "FPT Polytechnic";
  changeName(e:any){
    this.name = e.target.any;
  }
  gender = 1;
}

import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";
import { FormControl, FormGroup } from '@angular/forms';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-upload-demo',
  templateUrl: './upload-demo.component.html',
  styleUrls: ['./upload-demo.component.css']
})
export class UploadDemoComponent implements OnInit {
  downloadURL!: Observable<string>;
  bookForm: FormGroup;
  cates!: Category[];
  authors!: any[];
  constructor(private storage: AngularFireStorage) {

    this.bookForm = new FormGroup({
      id: new FormControl(0),
      title: new FormControl(''),
      image: new FormControl(''),
      categoryId: new FormControl(0)
    })
   }

  ngOnInit(): void {
    // sử dụng categoryService để lấy danh sách category về 
    // sau đó gán cho this.cates
    // sử dụng authorService để lấy danh sách author 
    // về gán cho this.authors

  }

  get f(){
    return this.bookForm.controls;
  }

  uploadFile(event: any){
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `Uploads/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`Uploads/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            console.log(url)
            this.bookForm.value.image = url;
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }

}
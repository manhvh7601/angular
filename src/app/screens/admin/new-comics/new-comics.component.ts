import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { Comics } from 'src/app/models/comics';
import { Router} from '@angular/router'
import { finalize } from "rxjs/operators";
import { ComicsService } from 'src/app/services/comics.service';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { Authors } from 'src/app/models/Authors';
import { AuthorsService } from 'src/app/services/authors.service';
import { Status } from 'src/app/models/status';
import { StatusService } from 'src/app/services/status.service';

@Component({
  selector: 'app-new-comics',
  templateUrl: './new-comics.component.html',
  styleUrls: ['./new-comics.component.css']
})
export class NewComicsComponent implements OnInit {
  downloadURL!: Observable<string>;
  comics: Comics[] = [];
  category: Category[] = [];
  auth: Authors[] = [];
  status: Status[] =[];
  formComics: FormGroup;
  image: String = "";
  constructor( private comicsService: ComicsService, 
    private router: Router,
    private storage: AngularFireStorage, 
    private categoryService: CategoryService,
    private authService: AuthorsService,
    private statusService: StatusService
    ) {
    this.formComics = this.createFormGroup();
   }

  ngOnInit(): void {
    this.comicsService.getAll(true).subscribe(data => {
      this.comics = data;
    });
    this.categoryService.getAll(true).subscribe(data=>{
      this.category = data;
    });
    this.authService.getAll(true).subscribe(data => {
      this.auth = data;
    });
    this.statusService.getAll(true).subscribe(data => {
      this.status = data;
    })
  }
  
  onSubmit(){
    setTimeout(()=>{
      this.comicsService.addComics(this.formComics.value).subscribe(data => {
        if(data != undefined){
          this.router.navigate(['/admin/comics'])
        }
      })
    }, 1500);
  }
  createFormGroup(){
    return new FormGroup({
      name: new FormControl("",Validators.required),
      image: new FormControl(this.image,Validators.required),
      authorId: new FormControl("",Validators.required),
      categoryId: new FormControl("",Validators.required),
      statusId: new FormControl("",Validators.required),
      views: new FormControl("",Validators.required)
    })
  }
  get f(){
    return this.formComics.controls;
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
          this.downloadURL.subscribe(image => {
            this.formComics.patchValue({image})
          });
        })
      )
      .subscribe();
  }
}

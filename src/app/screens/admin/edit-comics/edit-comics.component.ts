import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { ComicsService } from 'src/app/services/comics.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { CategoryService } from 'src/app/services/category.service';
import { Authors } from 'src/app/models/Authors';
import { AuthorsService } from 'src/app/services/authors.service';
import { Status } from 'src/app/models/status';
import { StatusService } from 'src/app/services/status.service';

@Component({
  selector: 'app-edit-comics',
  templateUrl: './edit-comics.component.html',
  styleUrls: ['./edit-comics.component.css']
})
export class EditComicsComponent implements OnInit {
  downloadURL!: Observable<string>;
  comicsId!: string;
  editForm: FormGroup;
  image: String = "";
  category: Category[] = [];
  auth: Authors[] = [];
  status: Status[] = [];
  constructor(private route: ActivatedRoute, 
    private comicService: ComicsService, 
    private router: Router, 
    private storage: AngularFireStorage, 
    private categoryService: CategoryService,
    private authorService: AuthorsService,
    private statusService: StatusService
    ) { 
    this.editForm = this.createFormGroup();
  }

 async ngOnInit() {
   await this.route.params.subscribe(params => {
     this.comicsId = params.id;
   });
   await this.comicService.findById(this.comicsId).subscribe(data => {
     this.editForm.setValue({
       id: data.id,
       name: data.name,
       image: data.image,
       authorId: data.author?.id,
       categoryId: data.category?.id,
       statusId: data.status?.id,
       views: data.views
     })
    //  console.log(this.editForm.value);
   });
   await this.categoryService.getAll(true).subscribe(data => {
     this.category = data;
   });
   await this.authorService.getAll(true).subscribe(data => {
     this.auth = data;
   });
   await this.statusService.getAll(true).subscribe(data => {
     this.status = data;
   })
  }

  get f(){
    return this.editForm.controls;
  }
  onSubmit(event: any){
    event.preventDefault();
    this.comicService.editComics(this.editForm.value).subscribe(data => {
      this.router.navigate(['/admin/comics']);
    })
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
            this.editForm.patchValue({image})
          });
        })
      )
      .subscribe();
  }
  createFormGroup(){
    return new FormGroup({
      id: new FormControl(),
      name: new FormControl("",Validators.required),
      image: new FormControl(this.image,Validators.required),
      authorId: new FormControl("",Validators.required),
      categoryId: new FormControl("",Validators.required),
      statusId: new FormControl("",Validators.required),
      views: new FormControl("",Validators.required)
    })
  }
}
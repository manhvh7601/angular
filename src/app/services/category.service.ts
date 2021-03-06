import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Observable} from 'rxjs';
import { Category } from '../models/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private API_URL = "http://localhost:3000/categories/"

  constructor(private http: HttpClient) { }
  getAll(embed: Boolean = false): Observable<Category[]> {
    let requestUrl = embed == true ? `${this.API_URL}?_embed=comics` : this.API_URL;
    return this.http.get<Category[]>(requestUrl)
  }
  findById(cateId: string): Observable<Category>{
    let requestUrl = `${this.API_URL}/${cateId}?_embed=comics`;
    return this.http.get<Category>(requestUrl);
  }
  searchByName(keyword: string, embed: boolean = false): Observable<Category[]>{
    let requestUrl = `${this.API_URL}?name_like=${keyword}`;
    if(embed)
      requestUrl += `&_embed=comics`
    return this.http.get<Category[]>(requestUrl);
  }
  addNewCategory(data: any): Observable<any>{
    return this.http.post<any>(this.API_URL, data);
  }
  removeByID(cateId: Number): Observable<any>{
    return this.http.delete<any>(this.API_URL + cateId);
  }
  editCategory(data: Category): Observable<any>{
    let requestUrl = `${this.API_URL}/${data.id}`;
    return this.http.put<any>(requestUrl, data);
  }
}

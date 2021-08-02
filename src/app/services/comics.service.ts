import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comics } from '../models/comics';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  private API_URL = "http://localhost:3000/comics/"

  constructor(private http: HttpClient) { }
  getAll(expand: Boolean = false): Observable<Comics[]> {
    let requestUrl = expand == true ? `${this.API_URL}?_expand=category&_expand=author&_expand=status`:this.API_URL;
    return this.http.get<Comics[]>(requestUrl)
  }
  searchByName(keyword: string, expand: boolean = false): Observable<Comics[]>{
    let requestUrl = `${this.API_URL}?name_like=${keyword}`;
    if(expand)
      requestUrl += `&_expand=category&_expand=author&_expand=status`
    return this.http.get<Comics[]>(requestUrl);
  }
  removeByID(comicsId: Number): Observable<any>{
    return this.http.delete<any>(this.API_URL + comicsId);
  }
  addComics(data: any): Observable<any>{
    return this.http.post<any>(this.API_URL, data);
  }
  findById(comicId: string): Observable<Comics>{
    let requestUrl = `${this.API_URL}/${comicId}?_expand=category&_expand=author&_expand=status`;
    return this.http.get<Comics>(requestUrl);
  }
  editComics(data: Comics): Observable<any>{
    let requestUrl = `${this.API_URL}/${data.id}?_expand=category&_expand=author&_expand=status`;
    return this.http.put<any>(requestUrl, data);
  }
}

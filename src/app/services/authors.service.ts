import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Authors } from '../models/Authors';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  private API_URL = "http://localhost:3000/authors/";
  constructor( private http: HttpClient ) { }
  getAll(embed: Boolean = false): Observable<Authors[]>{
    let requestUrl = embed == true ? `${this.API_URL}?_embed=comics` : this.API_URL;
    return this.http.get<Authors[]>(requestUrl)
  }
  addAuthor(data: any): Observable<any>{
    return this.http.post(this.API_URL, data);
  }
  removeById(authId: Number): Observable<any>{
    return this.http.delete<any>(this.API_URL + authId);
  }
  findById(authId: string): Observable<Authors>{
    let requestUrl = `${this.API_URL}/${authId}?_embed=comics`
    return this.http.get<Authors>(requestUrl);
  }
  editAuth(data: Authors): Observable<any>{
    let requestUrl = `${this.API_URL}/${data.id}`;
    return this.http.put<any>(requestUrl, data);
  }
}

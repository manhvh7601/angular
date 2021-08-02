import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Status } from '../models/status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private API_URL = "http://localhost:3000/statuses/";
  constructor(private http: HttpClient) { }

  getAll(embed: Boolean = false): Observable<Status[]>{
    let requestUrl = embed == true ? `${this.API_URL}?_embed=comics` : this.API_URL;
    return this.http.get<Status[]>(requestUrl)
  }
}

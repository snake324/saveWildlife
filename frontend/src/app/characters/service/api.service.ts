import { Injectable } from '@angular/core';
import { Family } from '../models/family.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private ApiUrl = "http://localhost:8000/families"

  constructor(private http:HttpClient) { }
  getAll() :Observable<Family[]>{
    return this.http.get<Family[]>(this.ApiUrl)
  }

}

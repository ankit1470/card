import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnInit {

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
   
  }
  getData(){
   return this.http.get('http://localhost:3000/posts')
  }

}

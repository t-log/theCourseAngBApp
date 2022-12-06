import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  // to send data to api
  addCourses=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/add",dataToSend)
  }
}

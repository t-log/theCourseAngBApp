import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  //to get data from api
  fetchCourses = () =>
  {
    return this.http.get("http://localhost:8080/view")
  }
  // to send data to api
  addCourses=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/add",dataToSend)
  }
  searchCourse=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/search",dataToSend)
  }
}

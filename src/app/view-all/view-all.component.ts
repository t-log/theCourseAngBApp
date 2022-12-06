import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent {
  courseData:any=[]
  constructor(private api:ApiService){
    api.fetchCourses().subscribe(
      (response)=>
      {
      this.courseData = response;
      }
      )
  }
  
}

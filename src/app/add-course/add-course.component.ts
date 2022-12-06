import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {

  title=""
  description=""
  venue=""
  duration=""
  date=""

  constructor(private api:ApiService){}

  readCourseValue = ()=>{
    let courseData:any={"title":this.title,"description":this.description,"venue":this.venue,"duration":this.duration,"date":this.date}
    // console.log(courseData)
    this.api.addCourses(courseData).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.status=="success"){
          alert("Course Added Successfully")
          this.title=""
          this.description=""
          this.venue=""
          this.duration=""
          this.date=""
        }
        else{
          alert("Something wrong happened!")
        }
      }
    )

  }

}

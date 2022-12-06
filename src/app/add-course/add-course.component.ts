import { Component } from '@angular/core';

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

  readCourseValue = ()=>{
    let courseData:any={"title":this.title,"description":this.description,"venue":this.venue,"duration":this.duration,"date":this.date}
    // console.log(courseData)
    

  }

}

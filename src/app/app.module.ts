import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { SearchCourseComponent } from './search-course/search-course.component';

const myRoute:Routes=[{path:"",component:AddCourseComponent},
                      {path:"add",component:AddCourseComponent},
                      {path:"view",component:ViewAllComponent},
                      {path:"search",component:SearchCourseComponent},
                      ]

@NgModule({
  declarations: [
    AppComponent,
    AddCourseComponent,
    NavBarComponent,
    ViewAllComponent,
    SearchCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

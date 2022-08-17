import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentDashboardComponent} from "./components/student-dashboard/student-dashboard.component";
import {HomeComponent} from "./components/home/home.component";
import {CreateStudentComponent} from "./components/create-student/create-student.component";
import {StudentListComponent} from "./components/student-list/student-list.component";
import {UpdateStudentComponent} from "./components/update-student/update-student.component";

const routes: Routes = [
  {path:"", component:StudentDashboardComponent, children:[
      {path:"home", component:HomeComponent},
      {path:"addStudent", component: CreateStudentComponent},
      {path:"allStudent", component: StudentListComponent},
      {path: "update-student/:sid", component: UpdateStudentComponent},
      {path:"", redirectTo:"/student/home", pathMatch:"full"}
    ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }

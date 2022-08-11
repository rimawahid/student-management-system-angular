import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentListComponent} from "./components/student-list/student-list.component";
import {CreateStudentComponent} from "./components/create-student/create-student.component";
import {UpdateStudentComponent} from "./components/update-student/update-student.component";
import {LoginComponent} from "./auth/login/login.component";

const routes: Routes = [
  {path: "", component: StudentListComponent},
  {path: "addStudent", component: CreateStudentComponent},
  {path: "update-student/:sid", component: UpdateStudentComponent},
  {path: "login", component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

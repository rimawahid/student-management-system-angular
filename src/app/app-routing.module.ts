import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentListComponent} from "./modules/student/components/student-list/student-list.component";
import {CreateStudentComponent} from "./modules/student/components/create-student/create-student.component";
import {UpdateStudentComponent} from "./modules/student/components/update-student/update-student.component";
import {LoginComponent} from "./components/login/login.component";
import {ForgotPasswordComponent} from "./components/forgot-password/forgot-password.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "forgot-password", component: ForgotPasswordComponent},
  {path: "", redirectTo: "/login", pathMatch: "full"},
  {
    path: "student",
    canActivate: [AuthGuard],
    loadChildren: () => import("./modules/student/student.module").then((m) => m.StudentModule),
  },
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CreateStudentComponent} from './modules/student/components/create-student/create-student.component';
import {StudentListComponent} from './modules/student/components/student-list/student-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {UpdateStudentComponent} from './modules/student/components/update-student/update-student.component';
import { StudentDashboardComponent } from './modules/student/components/student-dashboard/student-dashboard.component';
import { HeaderComponent } from './modules/student/components/header/header.component';
import { FooterComponent } from './modules/student/components/footer/footer.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateStudentComponent,
    StudentListComponent,
    UpdateStudentComponent,
    StudentDashboardComponent,
    HeaderComponent,
    FooterComponent,
    ForgotPasswordComponent,
    NotFoundComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

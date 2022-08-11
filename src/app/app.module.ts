import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CreateStudentComponent} from './components/create-student/create-student.component';
import {StudentListComponent} from './components/student-list/student-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {UpdateStudentComponent} from './components/update-student/update-student.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateStudentComponent,
    StudentListComponent,
    UpdateStudentComponent,

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

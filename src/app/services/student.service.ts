import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../model/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseURL = "http://localhost:8080/api/student";

  constructor(private httpClient: HttpClient) {
  }

  //for insect..
  addStudent(student: Student): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/addstudent`, student)
  }

  //for get All...
  getAllStudent(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${this.baseURL}/getall`);
  }

  //for getbyid...
  getStudentById(sid: number): Observable<Student> {
    return this.httpClient.get<Student>(`${this.baseURL}/${sid}`);
  }

//for update..
  updateStudentData(student: Student, sid: number): Observable<Student> {
    return this.httpClient.put<Student>(`${this.baseURL}/update/${sid}`, student);
  }

//for delete..
  deleteStudentData(sid: number): Observable<Student> {
    console.log(sid + "form service");
    return this.httpClient.delete<Student>(`${this.baseURL}/delete/${sid}`);
  }
}

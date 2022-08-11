import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../services/student.service";
import {Router} from "@angular/router";
import {Student} from "../../model/student";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private studentService: StudentService, private router: Router) {
  }

  students: Student[] = [];
  student: Student = new Student();

  ngOnInit(): void {
    this.getAllStudent();
  }

  getAllStudent() {
    this.studentService.getAllStudent().subscribe(data => {
      this.students = data;
    })
  }

  updateStudent(sid: number) {
    console.log(sid);
    this.router.navigate(["update-student", sid])
  }

  deleteStudent(sid: number) {
    this.studentService.deleteStudentData(sid).subscribe(data => {
        this.student = data;
        alert("student data delete successfully");
        this.getAllStudent();
      }, error => alert("sorry unable to delete student data")
    )
  }

}

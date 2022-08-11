import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {StudentService} from "../../services/student.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Student} from "../../model/student";

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  updateStudentForm = new FormGroup({
    //sId: new FormControl(''),
    sName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    sEmail: new FormControl('', [Validators.required, Validators.email]),
    sCourse: new FormControl('', [Validators.required]),
    sGender: new FormControl('', [Validators.required]),
    sAddress: new FormControl('', [Validators.required, Validators.maxLength(250)]),
    isCheck: new FormControl('',)
  })

  constructor(private activeRouter: ActivatedRoute, private studentService: StudentService, private router: Router) {
  }

  sid!: number;


  student: Student = new Student();

  ngOnInit(): void {
    this.sid = this.activeRouter.snapshot.params['sid'];
    console.log(this.sid);
    this.studentService.getStudentById(this.sid).subscribe(data => {
      console.log(data)
      this.student = data;
    })
  }

  updateStudentData() {
    this.studentService.updateStudentData(this.updateStudentForm.value, this.sid).subscribe(data => {
      alert("Update /successfully");
      this.router.navigate(['/'])
    })
  }

  get f() {
    return this.updateStudentForm.controls;
  }
}

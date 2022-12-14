import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import {StudentService} from "../../../../services/student.service";
import {Router} from "@angular/router";
import {Student} from "../../../../model/student";

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  studentForm!: FormGroup;
  // studentForm = new FormBuilder({
  //   //sId: new FormControl(''),
  //   sName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
  //   sEmail: new FormControl('', [Validators.required, Validators.email]),
  //   sDob: new FormControl([Validators.required]),
  //   sCourse: new FormControl('', [Validators.required]),
  //   sGender: new FormControl('', [Validators.required]),
  //   sAddress: new FormControl('', [Validators.required, Validators.maxLength(250)]),
  //   isCheck: new FormControl('',)
  // })

  constructor(private studentService: StudentService, private router: Router, private  formBuilder:FormBuilder) {
  }

  ngOnInit(): void {
    this.studentForm = this.formBuilder.group(
      {
        sName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
          sEmail: new FormControl('', [Validators.required, Validators.email]),
          sDob: new FormControl('',[Validators.required]),
          sCourse: new FormControl('', [Validators.required]),
          sGender: new FormControl('', [Validators.required]),
          sAddress: new FormControl('', [Validators.required, Validators.maxLength(250)]),
          isCheck: new FormControl('',)
      }
    )
  }

  get f() {
    return this.studentForm.controls;
  }

  addStudent() {
    console.log(this.studentForm.value);
    this.studentService.addStudent(this.studentForm.value).subscribe(data => {
      alert("student data insert successfully");
      this.goToListOfStudentPage();
    }, error => alert("sorry unable to insert student data"))
  }

  goToListOfStudentPage() {
    this.router.navigate(['/'])
  }

}

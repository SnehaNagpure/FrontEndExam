import { Component, OnInit } from '@angular/core';
import { student } from '../student';
import { StudentServiceService } from '../student-service.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-creation',
  standalone: false,
  templateUrl: './student-creation.component.html',
  styleUrl: './student-creation.component.css'
})
export class StudentCreationComponent implements OnInit {

  students:student={
    studentId: 0,
    studentName: '',
    studentAge: 0,
    studentClass: 0
 
  }

  constructor(private studentservice:StudentServiceService, private router: Router){}
  ngOnInit(): void {

  }

  createStudent(form:NgForm)
  {
      if (form.invalid) 
      {
         Swal.fire({
                icon: 'error',
                title: 'Validation Error',
                text: 'Please fill all required fields before submitting.',
                });
        return;
      }
      console.log(this.students.studentName);
      this.studentservice.createStudent(this.students).subscribe(
      data=>
      {
          Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Student is created successfully!',
              });
          this.goToStudentList();
      }, error=>
        {
            {
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Something went wrong!',
              });
            }
       }
    );
  }

  goToStudentList()
  {
    this.router.navigate(['/studentList']);
  }

  cancelStudent(form:NgForm)
  {
      form.resetForm();
  }
}



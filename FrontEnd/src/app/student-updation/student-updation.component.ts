import { Component, OnInit } from '@angular/core';
import { student } from '../student';
import { StudentServiceService } from '../student-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-updation',
  standalone: false,
  templateUrl: './student-updation.component.html',
  styleUrl: './student-updation.component.css'
})
export class StudentUpdationComponent implements OnInit {

students:student=
{
  studentId: 0,
  studentName: '',
  studentAge: 0,
  studentClass: 0
}
studentId !:number
constructor(private studentservice:StudentServiceService, private route:ActivatedRoute, private router:Router){}
  ngOnInit(): void {
     this.studentId=this.route.snapshot.params['studentId'];
     this.studentservice.getStudentById(this.studentId).subscribe(
      data=>
      {
        this.students=data;
        console.log(data);
      }
     )
    
  }
goToStudentList()
{
    this.router.navigate(['/studentList']);
}

updateStudent(form:NgForm,studentId:number)
    {
        this.studentservice.updateStudent(this.studentId,this.students).subscribe(
        data=>
        {
          Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Student is updated successfully!',
              });
          this.goToStudentList();
          
        },error=>console.log(error)
      );
    }
 
}

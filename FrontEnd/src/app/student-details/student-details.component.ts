import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { student } from '../student';
import { StudentServiceService } from '../student-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-details',
  standalone: false,
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent  implements OnInit
{
  studentId!:number;
  students:student=
  {
    studentId: 0,
    studentName: '',
    studentAge: 0,
    studentClass: 0
  }
  constructor(private studentservice:StudentServiceService,private router:Router,private route:ActivatedRoute){}
  ngOnInit(): void {

    this.studentId=this.route.snapshot.params['studentId'];
    this.studentservice.getStudentById(this.studentId).subscribe(
      data=>
      {
        this.students=data;
      }
    )
  }

  goToStudentList()
  {
    this.router.navigate(['/studentList']);
  }
}

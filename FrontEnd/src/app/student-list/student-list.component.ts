import { Component, OnInit } from '@angular/core';
import { student } from '../student';
import { StudentServiceService } from '../student-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student-list',
  standalone: false,
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {

  students:student[]=[];
  constructor(private studentservice:StudentServiceService,private router:Router, private route:ActivatedRoute){}  
  ngOnInit(): void {
    this.getAllStudentList();
  }

  getAllStudentList()
  {
      this.studentservice.getStudentList().subscribe(data=>
      {
        this.students=data;
      }
      )
  }

  createStudent()
  {
      this.router.navigate(['createStudent']);
  }
  updateStudent(studentId:number)
  {
    this.router.navigate(['updateStudent',studentId]);
  }

  studentDetails(studentId:number)
  {
    this.router.navigate(['detailsStudent',studentId]);
  }
  deleteStudent(studentId:number)
  {
      // const confirmed = window.confirm('Are you sure you want to delete this student?');
      // if (!confirmed)
      // {
      //   return;
      // }
      // this.studentservice.deleteStudent(studentId).subscribe(
      //   data=>
      //   {
      //     Swal.fire({
      //                   icon: 'success',
      //                   title: 'Success',
      //                   text: 'Student is deleted successfully!',
      //                 });
        
      //      this.getAllStudentList();
      //    },erorr=>
      //     {   Swal.fire({
      //         icon: 'error',
      //         title: 'Error',
      //         text: 'Failed to delete student.',
      //     });
      //  });
// }
 Swal.fire({
    title: 'Confirm Deletion',
    text: 'Are you sure you want to delete this student?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete',
    cancelButtonText: 'Cancel',
    reverseButtons: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6'
  }).then((result) => {
    if (result.isConfirmed) {
      this.studentservice.deleteStudent(studentId).subscribe(() => {
        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: 'The student has been deleted successfully.',
          timer: 2000,
          showConfirmButton: false
        });
        this.getAllStudentList(); // Refresh the list
      }, error => {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Failed to delete the student. Please try again later.'
        });
      });
    }
  });
}
}

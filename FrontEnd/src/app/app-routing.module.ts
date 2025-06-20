import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentCreationComponent } from './student-creation/student-creation.component';
import { StudentUpdationComponent } from './student-updation/student-updation.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [
  {path:'', redirectTo:'studentList',pathMatch:'full'},
  {path:'studentList', component:StudentListComponent},
  {path:'createStudent', component:StudentCreationComponent},
  {path:'updateStudent/:studentId', component:StudentUpdationComponent},
  {path:'detailsStudent/:studentId', component:StudentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

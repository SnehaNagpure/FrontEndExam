import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  private baseURL="http://localhost:8080/api/student"
  constructor(private httpclient:HttpClient) { }

  getStudentList():Observable <student[]>
  {
    return this.httpclient.get<student[]>(`${this.baseURL}`);
  }

  getStudentById(studentId:number):Observable<student>
  {
    return this.httpclient.get<student>(`${this.baseURL}/${studentId}`);
  }

  createStudent(studentobj:student):Observable<object>
  {
    return this.httpclient.post(`${this.baseURL}/createStudent`,studentobj);
  }

  updateStudent(studentId:number,studentobj:student):Observable<object>
  {
    return this.httpclient.put(`${this.baseURL}/${studentId}`,studentobj);
  }

  deleteStudent(studentId:number):Observable<object>
  {
    return this.httpclient.delete(`${this.baseURL}/${studentId}`);
  }
}

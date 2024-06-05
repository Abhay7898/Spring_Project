import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../class/student';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class StudentSreviceService {

  private url="http://localhost:8080/";

  constructor(private http:HttpClient) { }

  createStudent(student:Student):Observable<Object>{
    return this.http.post(`${this.url+'saveStudent'}`,student)
  }

  deleteStudent(id:any):Observable<Student>{
    return this.http.delete<Student>(`${this.url+'deleteStudent/'+id}`);
  }
  
  updateStudent(student:Student):Observable<Object>{
    return this.http.put(`${this.url+'updateStudent'}`,student);
  }

  viewAllStudent():Observable<Student[]>{
    return this.http.get<Student[]>(`${this.url+'getAllStudent'}`);
  }

  getById(id:any):Observable<Student>{
    return this.http.get<Student>(`${this.url+'getStudentById/'+id}`)
  }
}

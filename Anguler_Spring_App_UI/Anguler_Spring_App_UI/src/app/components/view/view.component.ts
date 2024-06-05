import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/class/student';
import { StudentSreviceService } from 'src/app/service/student-srevice.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{

  studentlist:Student[]=[]
  isLoggedIn = false;

  constructor(private studentService:StudentSreviceService,private router:Router){ }

  ngOnInit(): void {
    localStorage.setItem("Menu", "false");
    localStorage.setItem("Login", "false");
    localStorage.setItem("Logout", "true");
    localStorage.setItem("Register", "true");
  this.studentService.viewAllStudent().subscribe(data=>{
    this.studentlist=data
    this.isAdminLogged();
  }) 

  }
  updateStudent(id:any){
    this.router.navigate(['update',id])
  }

  deleteStudent(id:any){
    this.router.navigate(['delete',id])
  }

  public isAdminLogged() {
    const flag = localStorage.getItem("isAdmin");
    if(flag == "true"){
      this.isLoggedIn = true;
    }
  }
}

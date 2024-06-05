import { Component, ContentChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/class/login';
import { LoginServiceService } from 'src/app/service/login-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userId: any
  password: any

  constructor(private loginservice: LoginServiceService, private router: Router) { 
    localStorage.setItem("Menu", "false");
    localStorage.setItem("Login", "false");
    localStorage.setItem("Logout", "false");
    localStorage.setItem("Register", "true");
  }
  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.validation()){
      return;
    }
    this.loginservice.login(this.userId, this.password).subscribe(
      (data: any) => {
        this.userId = '';
        this.password = '';
        Swal.fire('Success !!', 'Login Successfull', 'success');
        localStorage.setItem("isAdmin", data.admin);
        // localStorage.setItem("Register", "false");
        this.viewUser()
      },

      (error) => {
        Swal.fire('Failed !!', 'error.error', 'error');
        console.log(error.error)
      });
      this.ngOnInit();
  }

  errorAlreat(msg: any) {
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: msg,
      timer: 1000,
      showConfirmButton: false,
    })
  }
  validation(): boolean {

    if (this.userId == null || this.userId.trim() == '') {
      this.errorAlreat('Please Enter userId');
      return false;
    }

    if (this.password == null || this.password.trim() == '') {
      this.errorAlreat('Please Enter Password');
      return false;
    }
    return true;
  }

  viewUser() {
    this.router.navigate(['view'])
  }

  singUp() {
    this.router.navigate(['createuser'])
  }
}

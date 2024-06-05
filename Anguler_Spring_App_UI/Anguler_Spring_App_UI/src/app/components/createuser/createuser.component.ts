import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/class/login';
import { LoginServiceService } from 'src/app/service/login-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent {
  user:Login=new Login

  constructor(private loginService:LoginServiceService,private router:Router){
    localStorage.setItem("Menu", "false");
    localStorage.setItem("Login", "true");
    localStorage.setItem("Logout", "false");
    localStorage.setItem("Register", "false");
  }

  onSubmit(){
    if(!this.validation()){
      return;
    }

  this.loginService.createUSer(this.user).subscribe((data: any) => {
    Swal.fire('Success !!', 'User is added successfuly with id ' + data.userId, 'success',);
    this.login();
  },
  (error) => {
   Swal.fire('Failed !!', error.error,'error');
  });
}

  login(){
    this.router.navigate([''])
   }

   errorAlreat(msg : any){
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: msg,
      timer: 1000,
      showConfirmButton: false,
    })
   }

     validation() : boolean {

    if (this.user.userId == null || this.user.userId.trim() == '') {
      this.errorAlreat('Please Enter User Name');
       return false;
     }

     if (this.user.password == null || this.user.password.trim() == '') {
      this.errorAlreat('Please Enter Password');
       return false;
     }

     return true;
   }

}

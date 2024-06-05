import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Student } from '../class/student';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }
  
  errorAlreat(msg: any) {
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: msg,
      timer: 1000,
    })
  }

  validation(stu:Student): boolean {

    if (stu.firstName== null || stu.firstName.trim() == '') {
      this.errorAlreat('Please Enter First Name');
      return false;
    }

    if (stu.lastName == null || stu.lastName.trim() == '') {
      this.errorAlreat('Please Enter Last Name');
      return false;
    }
    if (stu.age == null || stu.age=='') {
      this.errorAlreat('Please Enter Age');
      return false;
    }
    if (stu.mobileNumber == null || stu.mobileNumber== '') {
      this.errorAlreat('Please Enter Mobile Number');
      return false;
    }
    if (stu.emailId == null || stu.emailId.trim() == '') {
      this.errorAlreat('Please Enter EmailId');
      return false;
    }
    if (stu.address == null || stu.address.trim() == '') {
      this.errorAlreat('Please Enter Address');
      return false;
    }
    if (stu.userId == null ||stu.userId.trim() == '') {
      this.errorAlreat('Please Enter UserId');
      return false;
    }
    return true;
  }
}

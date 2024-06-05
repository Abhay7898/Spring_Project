import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/class/student';
import { StudentSreviceService } from 'src/app/service/student-srevice.service';
import { UtilsService } from 'src/app/service/utils.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(private stuService: StudentSreviceService, private router: Router,private utils:UtilsService) { 
    localStorage.setItem("Menu", "true");
    localStorage.setItem("Login", "false");
    localStorage.setItem("Logout", "true");
    localStorage.setItem("Register", "false");
  }

  stu: Student = new Student()

  onSubmit() {
    if (!this.utils.validation(this.stu)) {
      return;
    }
    this.stuService.createStudent(this.stu).subscribe(data => {
      Swal.fire('Success !!', 'Create SuccessfullY', 'success',);
    })
    this.router.navigate(['view'])
  }
}

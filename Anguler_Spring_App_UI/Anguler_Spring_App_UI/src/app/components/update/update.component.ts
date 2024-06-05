import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/class/student';
import { StudentSreviceService } from 'src/app/service/student-srevice.service';
import { UtilsService } from 'src/app/service/utils.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{

  stu:Student=new Student()

  id:any;

  constructor(private studentservice:StudentSreviceService,private router:Router,private arouter:ActivatedRoute,private utils:UtilsService){}
  
  ngOnInit(): void {

    this.id=this.arouter.snapshot.params['id']

   this.studentservice.getById(this.id).subscribe(data=>{
    this.stu=data;
   })
  }

  onSubmit(){
    if(!this.utils.validation(this.stu)){
      return;
    }
    this.studentservice.updateStudent(this.stu).subscribe(data=>{
      Swal.fire('Success !!', 'User Update SuccessfullY', 'success',);
    })
    this.router.navigate(['view'])
  }
}

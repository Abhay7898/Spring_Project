import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentSreviceService } from 'src/app/service/student-srevice.service';
import { UtilsService } from 'src/app/service/utils.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  id: any

  constructor(private studentservice: StudentSreviceService, private router: Router, private arouter: ActivatedRoute,private utils:UtilsService) { }

  ngOnInit(): void {
    this.id = this.arouter.snapshot.params['id']


    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to delete this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.studentservice.deleteStudent(this.id).subscribe(data =>{

        })
        this.router.navigate(['view'])
      
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary data is safe for delete :)',
          'error'
        )
        this.router.navigate(['view'])
      }
    })










    
  }

}

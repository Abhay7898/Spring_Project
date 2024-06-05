import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  isMenu =false;
  isLoggedIn =false;
  isRegister =false;
  isLoggedOut =false;

  constructor(private router:Router){}
  ngOnInit(): void {
  this.isMenu = false;
  this.isLoggedIn  = false;
  this.isRegister = false;
  this.isLoggedOut  = false;
  this.setparamter();
  //location.reload()
  }


  setparamter(){
    if(localStorage.getItem("Menu") == "true"){
      this.isMenu = true;
    }
    if(localStorage.getItem("Login") == "true"){
      this.isLoggedIn = true;
    }
  
    if(localStorage.getItem("Logout") == "true"){
      this.isLoggedOut = true;
    }
  
    if(localStorage.getItem("Register") == "true"){
      this.isRegister = true;
    }
  }
}

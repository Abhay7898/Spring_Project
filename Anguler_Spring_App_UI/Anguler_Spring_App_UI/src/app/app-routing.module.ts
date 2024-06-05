import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ViewComponent } from './components/view/view.component';
import { CreateuserComponent } from './components/createuser/createuser.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';
import { CreateComponent } from './components/create/create.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'view',
    component:ViewComponent,
    pathMatch:'full'
  },
  {
    path:'createuser',
    component:CreateuserComponent,
    pathMatch:'full'

  },
  {
    path:'create',
    component:CreateComponent,
    pathMatch:'full'
  },
  {
    path:'update/:id',
    component:UpdateComponent,
    pathMatch:'full'
  },
  {
    path:'delete/:id',
    component:DeleteComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

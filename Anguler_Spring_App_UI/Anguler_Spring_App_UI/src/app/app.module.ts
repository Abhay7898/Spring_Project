import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './components/create/create.component';
import { DeleteComponent } from './components/delete/delete.component';
import { UpdateComponent } from './components/update/update.component';
import { ViewComponent } from './components/view/view.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { CreateuserComponent } from './components/createuser/createuser.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    DeleteComponent,
    UpdateComponent,
    ViewComponent,
    LoginComponent,
    CreateuserComponent,
    NavbarComponent,    
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      MatButtonModule,
      MatIconModule,
      MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


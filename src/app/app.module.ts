import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './modules/users/users.component';
import { PostService } from './modules/posts/posts.service';


@NgModule({
  declarations: [
    AppComponent  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    HttpClientModule    
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }

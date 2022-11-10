import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FetchUserComponent } from './fetch-user/fetch-user.component';
import { AboutAppComponent } from './about-app/about-app.component';
import { AboutDeveloperComponent } from './about-developer/about-developer.component';
import { TodoFormComponent } from './todo-form/todo-form.component'


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    NavBarComponent,
    FetchUserComponent,
    AboutAppComponent,
    AboutDeveloperComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
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
import {HttpClientModule} from "@angular/common/http";
import {SearchTodoComponent} from "./search-todo/search-todo.component";
import {FormsModule} from "@angular/forms";
import { TodoItemDetailsComponent } from './todo-item-details/todo-item-details.component';
import {ButtonColorDirective} from "./directives/button-color.directive";
import {TodoService} from "./services/todo.service";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    NavBarComponent,
    FetchUserComponent,
    AboutAppComponent,
    AboutDeveloperComponent,
    PageNotFoundComponent,
    SearchTodoComponent,
    TodoItemDetailsComponent,
    ButtonColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TodoService], // Inject at the possible higher component [ or in module file], single instance of TodoService will be shared.
  bootstrap: [AppComponent]
})
export class AppModule { }

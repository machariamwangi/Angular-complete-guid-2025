import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderCompenent } from "./header/header.component";
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
// import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderCompenent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent { 
  users = DUMMY_USERS;
  selectedUserId? : string;
  onSelectUser(id:string) {
    console.log('selected user with id ' + id)
    this.selectedUserId = id;
  } 
 get selectedUser() {
  return this.users.find((user) =>user.id === this.selectedUserId )
 }
 
}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  constructor( private userService: UserService) { }

  users: string[];

  ngOnInit() {

  	this.users = this.userService.activeUsers;
  }

 onSetToInactive(id: number){

   this.userService.setToInactive(id);
 }
}

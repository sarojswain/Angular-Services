import { Component, OnInit } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  constructor( private userService: UserService) { }

  users: string[];

  ngOnInit() {
    
    this.users = this.userService.inactiveUsers;
  }

  onSetToActive(id: number){
    this.userService.setToActive(id);
  }
}

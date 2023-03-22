import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/UserModel';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  
  usersList: User[] = [];
  loadingIndicator = true;
  reorderable = true;

  constructor(private _router : Router) {
    this.fetch((data: any) => {
      this.usersList = data;
      console.log(this.usersList);
      setTimeout(() => {
        this.loadingIndicator = false;
      }, 1500);
    });
  }

  ngOnInit(): void {
  }

  fetch(cb: any) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/users.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  addUser() {
    this._router.navigate(['manage-users/new-user']);
  }
}

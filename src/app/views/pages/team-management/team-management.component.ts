import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-team-management',
  templateUrl: './team-management.component.html',
  styleUrls: ['./team-management.component.scss']
})
export class TeamManagementComponent implements OnInit {

  
  rows = [];
  loadingIndicator = true;
  reorderable = true;
  ColumnMode = ColumnMode;

  constructor(private _router : Router) {
    this.fetch((data: any) => {
      this.rows = data;
      console.log(this.rows)
      setTimeout(() => {
        this.loadingIndicator = false;
      }, 1500);
    });
  }

  ngOnInit(): void {
  }

  fetch(cb: any) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/teams.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  addNewTeam() {
    this._router.navigate(['manage-teams/new-team']);
  }
}

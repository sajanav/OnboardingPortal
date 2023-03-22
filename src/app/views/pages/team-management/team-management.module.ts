import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamManagementComponent } from './team-management.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormTeamManagementComponent } from './form-team-management/form-team-management.component';


const routes: Routes = [
  {
    path: '',
    component: TeamManagementComponent
  },
  {
    path: 'new-team',
    component: FormTeamManagementComponent
  }
]
@NgModule({
  declarations: [
    TeamManagementComponent
  ],
  imports: [
    CommonModule,
    NgxDatatableModule,
    RouterModule.forChild(routes)
  ]
})
export class TeamManagementModule { }

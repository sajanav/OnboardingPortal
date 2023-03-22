import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { ManageUsersComponent } from './manage-users.component';


const routes : Routes = [
  {
    path: '',
    component: ManageUsersComponent,
    children: [
      {
        path: 'user-list',
        component:UsersListComponent
      },
      {
        path: 'new-user',
        component:UsersFormComponent
      },
      {
        path: '',
        redirectTo: 'user-list',
        pathMatch: 'full'
      }
    ]
  },
]
@NgModule({
  declarations: [ManageUsersComponent, UsersListComponent,UsersFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ManageUsersModule { }

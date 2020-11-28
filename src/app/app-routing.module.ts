import { RouterModule, Routes } from '@angular/router';

import { ActiveAssignmentComponent } from './pages/active-assignment/active-assignment.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { DefaultComponent } from './default/default/default.component';
import { NewAssignmentComponent } from './pages/new-assignment/new-assignment.component';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    path :'',
    component : DefaultComponent,
    children : [
     {
      path : 'new-assignment',
      component : NewAssignmentComponent
     },
     {
       path : 'active-assignment',
       component : ActiveAssignmentComponent
     },
     {
       path : 'profile',
       component : ProfileComponent
     },
     {
       path : 'change-password',
       component : ChangePasswordComponent
     }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

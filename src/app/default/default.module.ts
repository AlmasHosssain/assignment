import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ActiveAssignmentComponent } from './../pages/active-assignment/active-assignment.component';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CKEditorModule } from 'ng2-ckeditor';
import { ChangePasswordComponent } from './../pages/change-password/change-password.component';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { NewAssignmentComponent } from './../pages/new-assignment/new-assignment.component';
import { NgModule } from '@angular/core';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ProfileComponent } from './../pages/profile/profile.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [DefaultComponent, ActiveAssignmentComponent, NewAssignmentComponent, ProfileComponent, ChangePasswordComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FlexLayoutModule,
    MatCardModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    BsDatepickerModule.forRoot(),
    AmazingTimePickerModule,
    MatButtonToggleModule,
    MatSelectModule,
    PaginationModule.forRoot(),
    HttpClientModule,
    CKEditorModule,
    MatPaginatorModule,
    MatTableModule,
  ]
})
export class DefaultModule { }

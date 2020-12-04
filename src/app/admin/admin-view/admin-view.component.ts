import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { InfoPasssService } from './../../services/info-passs.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})
export class AdminViewComponent implements AfterViewInit {
  displayedColumns: string[] = ['ASSIGNMENT_ID', 'STUDENT_NAME', 'ASSIGNMENT_TITLE', 'REFERENCE', 'DUE_DATE','ASSIGNMENT_DETAILS','DELETE'];
  dataSource: MatTableDataSource<AssignmentInfo>;
  public obj : any={}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private infoPasssService : InfoPasssService
  ) {
    this.dataSource = new MatTableDataSource(providedData);
   }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.infoPasssService.passingInfo$.subscribe(data=>{
      this.obj = data
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

export interface AssignmentInfo {
  ASSIGNMENT_ID: string;
  STUDENT_NAME: string;
  ASSIGNMENT_TITLE: string;
  REFERENCE: string;
  DUE_DATE: string;
}
const providedData : AssignmentInfo[] = [
  { ASSIGNMENT_ID: '1', STUDENT_NAME: 'Alams', ASSIGNMENT_TITLE: 'Angular', REFERENCE: 'AGCI', DUE_DATE: '11/27/2020 : 17:15:00' },
  { ASSIGNMENT_ID: '2', STUDENT_NAME: 'Hossain', ASSIGNMENT_TITLE: 'MongoDB', REFERENCE: 'IEE', DUE_DATE: '11/25/2020 : 23:00:00' },
];

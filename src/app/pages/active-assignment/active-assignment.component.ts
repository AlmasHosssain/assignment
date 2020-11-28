import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-active-assignment',
  templateUrl: './active-assignment.component.html',
  styleUrls: ['./active-assignment.component.scss']
})
export class ActiveAssignmentComponent implements AfterViewInit {
  displayedColumns: string[] = ['ORDER_ID', 'SUBJECT', 'PAYMENT', 'ORDER_QUOTE', 'PAID_AMOUNT', 'DUE_DATE'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(providedData)
   }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

export interface UserData {
  ORDER_ID: string;
  SUBJECT: string;
  PAYMENT: string;
  ORDER_QUOTE: string;
  PAID_AMOUNT: string;
  DUE_DATE: string;
}
const providedData : UserData[] = [
  {ORDER_ID : '1', SUBJECT: 'Angular',PAYMENT : 'CHAT NOW',ORDER_QUOTE: '0.00 AUD', PAID_AMOUNT : '0.00 AUD',DUE_DATE: '11/27/2020 : 17:15:00'},
  {ORDER_ID : '2', SUBJECT: 'NodeJS',PAYMENT : 'CHAT NOW',ORDER_QUOTE: '0.01 AUD', PAID_AMOUNT : '0.02 AUD',DUE_DATE: '11/25/2020 : 23:00:00'},
]

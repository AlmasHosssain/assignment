import { Component, OnInit } from '@angular/core';

import { InfoPasssService } from './../../services/info-passs.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public textValue ;
  public date;
  constructor(
    private infoPasssService : InfoPasssService
  ) { }

  ngOnInit(): void {
    let value = localStorage.getItem('assignment')
    let orginalValue = JSON.parse(value);
    this.textValue = orginalValue.assignmentDetailsValue;
    this.date = orginalValue.assignmentInfoValue.date
  }

}

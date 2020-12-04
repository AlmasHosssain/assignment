import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AmazingTimePickerService } from 'amazing-time-picker';
import { InfoPasssService } from './../../services/info-passs.service';

@Component({
  selector: 'app-new-assignment',
  templateUrl: './new-assignment.component.html',
  styleUrls: ['./new-assignment.component.scss']
})
export class NewAssignmentComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private infoServices : InfoPasssService
  ) { }
  afuConfig = {
    uploadAPI: {
      url: "https://example-file-upload-api"
    }
  };
  public assignmentInfo: FormGroup;
  public assignmentDetails: FormGroup;
  validationError1 = {
    'email': {
      'required': "Email is required"
    },
    'subject': {
      'required': "Please enter subject name"
    },
    'date': {
      'required': "Date is required"
    },
    'time': {
      'required': "Time is required"
    }
  };
  formError1 = {
    'email': '',
    'subject': '',
    'date': '',
    'time': ''
  };
  pagesNumber = 1;
  wordsNumber = 250;
  public wordValue = `${this.pagesNumber}Pages/${this.wordsNumber}Words`;
  arr = ['IEE', 'AGCl', 'APA', 'BMJ', 'KKR', 'IOP', 'SAD', 'ERO'];

  contactHeadArr = ['AU(+06)', 'IND(+99)', 'PK(+07)', 'AFG(+66)', 'AIU(+96)', 'BGU(+08)', 'QA(+86)', 'WOU(+01)', 'ZIU(+00)'];

  callBackTime = ['12:00 AM To 03:00 AM', '03:00 AM To 06:00 AM', '06:00 AM To 09:00 AM', '09:00 AM To 12:00 PM', '12:00 PM To 03:00 PM', '03:00 PM To 06:00 PM'];

  public submittedObj={
    assignmentInfoValue : {}
  };

  ngOnInit(): void {
    this.assignmentInfo = this.fb.group({
      email: ['', Validators.required],
      subject: ['', Validators.required],
      wordInfo: [''],
      date: [new Date(), Validators.required],
      time: ['', Validators.required]
    });
    this.assignmentDetails = this.fb.group({
      textBody: ['', Validators.required]
    });

    this.assignmentInfo.get('wordInfo').valueChanges.subscribe(data => {
      this.logValidationError1(this.assignmentInfo)
    })
  }

  logValidationError1 = (group: FormGroup = this.assignmentInfo) => {
    Object.keys(group.controls).forEach(key => {
      const absValue = group.get(key);
      this.formError1[key] = '';
      if (absValue && !absValue.valid && (absValue.touched || absValue.dirty || absValue.value !== '')) {
        const messages = this.validationError1[key];
        for (const errorKey in absValue.errors) {
          if (errorKey) {
            this.formError1[key] += messages[errorKey];
          }
        }
      }
    });
  }

  increase() {
    this.pagesNumber = this.pagesNumber + 1;
    this.wordsNumber = this.wordsNumber + 250;
    this.wordValue = `${this.pagesNumber}Pages/${this.wordsNumber}Words`;
  }
  decrease() {
    if (this.pagesNumber > 1 || this.wordsNumber > 250) {
      this.pagesNumber = this.pagesNumber - 1;
      this.wordsNumber = this.wordsNumber - 250;
      this.wordValue = `${this.pagesNumber}Pages/${this.wordsNumber}Words`;
    } else {
      this.pagesNumber = 1;
      this.wordsNumber = 250;
      this.wordValue = `${this.pagesNumber}Pages/${this.wordsNumber}Words`;
    }
  }
  onsubmit1() {
      this.submittedObj.assignmentInfoValue = this.assignmentInfo.value
  }
  onsubmit2() {
    let descriptionValue = this.assignmentDetails.value.textBody.substring(this.assignmentDetails.value.textBody.indexOf('>')+1, this.assignmentDetails.value.textBody.lastIndexOf('<'));

     // this.submittedObj.assignmentDetailsValue = descriptionValue;
      this.infoServices.passingInfo$.next(this.submittedObj);
     localStorage.setItem('assignment',JSON.stringify(this.submittedObj));
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  name = "Almas Hossain Antar";
  email = "almas121@gmail.com"
  constructor() { }

  ngOnInit(): void {
  }

}

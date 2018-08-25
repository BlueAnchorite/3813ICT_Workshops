import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  userid:string = '';
  username:string = '';
  birth:string = '';
  age:string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    var user = JSON.parse(localStorage.getItem('user'));
    this.userid = user.userid;
    this.username = user.username;
    this.birth = user.birth;
    this.age = user.age;
  }

  logout(event) {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}

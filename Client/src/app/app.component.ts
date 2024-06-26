import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { user } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //users: any;
  constructor(/*private http: HttpClient,*/private accountService:AccountService) { }
  ngOnInit(): void {
    //this.getUsers();
    this.setCurrentUser();
  }
  //getUsers() {
  //  this.http.get('https://localhost:5001/api/User').subscribe({
  //    next: response => this.users = response,
  //    error: error => console.log(error),
  //    complete: () => console.log("Request has completed")
  //  });
  //}
  setCurrentUser() {
    //const user: user = JSON.parse(localStorage.getItem('user')!);
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const user: user = JSON.parse(userString);
    this.accountService.setCurrentUser(user);
  }
  title = 'Client';
}

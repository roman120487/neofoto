import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private auth: AuthService,private router: Router) { }

  ngOnInit() {
  }

  logoutIsAdmin(){
    this.auth.logout();
    this.router.navigate(['/main'])
  }
}

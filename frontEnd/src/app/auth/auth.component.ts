import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BgService } from 'src/app/shared/services/bg.service';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  formData: any;
  constructor(private api: BgService, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.resetForm();
  }
  public resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.formData = {
      _id: null,
      login: '',
      pass: '',
    }
  }
  public onSubmit(form: NgForm) {
    const data = Object.assign({}, form.value);
    const user = {
      login: data.login,
      pass: data.pass
    };
    this.auth.authUser(user).subscribe(res => {
      if (!res.success) {
        console.log('no')
      }
      else{
        console.log('no else');
        this.router.navigate(['/admin'])
        this.auth.storeUser(res.token, res.user);
      }
    });
    delete data.id;
  }
}

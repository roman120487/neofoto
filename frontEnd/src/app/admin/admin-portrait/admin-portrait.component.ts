import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BgService } from 'src/app/shared/services/bg.service';
import Portrait from 'src/app/shared/classes/portrait';

@Component({
  selector: 'app-admin-portrait',
  templateUrl: './admin-portrait.component.html',
  styleUrls: ['./admin-portrait.component.css']
})
export class AdminPortraitComponent implements OnInit {
  formData: any;
  portrait: Portrait[] = [];
  constructor(private api: BgService) { }

  ngOnInit() {
    this.api.getPortrait()
      .subscribe((res: any) => {
        this.portrait = res;
        console.log(this.portrait);
      }, err => {
        console.log(err);
      });

    this.resetForm();
  }
  public resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.formData = {
      id: null,
      nameProject: '',
      categoryProject: '',
    }
  }
  public onSubmit(form: NgForm) {
    const data = Object.assign({}, form.value);
    console.log(data)
    this.api.createPortrait(data).subscribe((res: any) => {
    }, (err: any) => {
        console.log(err);
      });
    delete data.id;;
  }
}

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
  formData: Portrait;
  formDataImg: any = new FormData();

  constructor(private api: BgService) {}

  ngOnInit() {
    this.resetForm();
  }


  public resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.formData = {
      _id: null,
      nameProject: '',
      categoryProject: '',
    }
  }
  public onSubmit(form: NgForm) {
    const data = Object.assign({}, form.value);
    this.formDataImg.append('nameProject', data.nameProject);
    this.formDataImg.append('categoryProject', data.categoryProject);
    console.log(this.formDataImg.get('files'))
    if(this.formDataImg.get('files') !== null){
      this.api.createPortrait(this.formDataImg).subscribe((res: any) => {}, (err: any) => {console.log(err);});
      this.resetForm();
    }
    this.formDataImg.delete('nameProject');
    this.formDataImg.delete('categoryProject');
    this.formDataImg.delete('files');
    (<HTMLInputElement>window.document.getElementById('files')).value = "";
    delete data.id;
  }
  onFileSelected(event) {
    if (event.target.files.length > 1) {
      // this.multipleImages = event.target.files;
      for (let img of event.target.files) {
        this.formDataImg.append('files', img);
      }
    }
    else {
      this.formDataImg.append('files', event.target.files[0]);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import Portrait from 'src/app/shared/classes/portrait';
import { BgService } from 'src/app/shared/services/bg.service';

import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-admin-list-project',
  templateUrl: './admin-list-project.component.html',
  styleUrls: ['./admin-list-project.component.css'],
  providers: [BgService]
})
export class AdminListProjectComponent implements OnInit {
  portrait: Portrait[] = [];
  formData: Portrait;
  portraitOne;
  checkEdit: boolean;
  saveId: string;
  formDataImg: any = new FormData();



  nameProject: string;
  categoryProject: string;

  constructor(private api: BgService) { }

  ngOnInit() {
    this.refreshProject();
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
    this.formDataImg.append('dirPhoto', this.portraitOne.dirPhoto);

    this.api.updatePortraitAll(this.saveId, this.formDataImg).subscribe((res: any) => {
      console.log(this.formDataImg)
      this.refreshProject();
    }, (err: any) => { console.log(err); });
    this.formDataImg.delete('nameProject');
    this.formDataImg.delete('categoryProject');
    this.formDataImg.delete('dirPhoto');
    this.formDataImg.delete('filesUpdate');
    this.resetForm();
    this.checkEdit = false;
  }
  // saveFunction() {
  //   this.formDataImg.append('nameProject', this.nameProject);
  //   this.formDataImg.append('categoryProject', this.categoryProject);
  //   this.formDataImg.append('dirPhoto', this.portraitOne.dirPhoto);

  //   this.api.updatePortraitAll(this.saveId, this.formDataImg).subscribe((res: any) => {
  //     console.log(this.formDataImg)
  //     this.refreshProject();
  //   }, (err: any) => { console.log(err); });
  //   this.formDataImg.delete('nameProject');
  //   this.formDataImg.delete('categoryProject');
  //   this.formDataImg.delete('dirPhoto');
  //   this.resetForm();
  //   this.checkEdit = false;
  // }
  onEdit(item) {
    this.checkEdit = true;
    this.saveId = item._id;
    this.getProjectByID();
  }
  deleteImg(event) {
    console.log(event.target)
    let deleteImg: any = new FormData();
    deleteImg.append('response', event.target.name);
    deleteImg.append('dirPhoto', this.portraitOne.dirPhoto);

    if (confirm('Are you sure to delete this record')) {
      // this.api.updatePortrait(this.formData._id, this.formData)
      this.api.updatePortrait(this.saveId, deleteImg)
        .subscribe((res: any) => {
          this.getProjectByID()
          this.refreshProject()
        }, (err: any) => {
          console.log(err);
        });
    }
  }
  refreshProject() {
    this.api.getPortrait().subscribe((res) => {
      this.api.getPortraitsArray = res as Portrait[];
    })
  }
  getProjectByID() {
    this.api.getIdPortait(this.saveId).subscribe((res: any) => {
      this.portraitOne = res;
      this.formData._id = res._id;
      this.formData.categoryProject = res.categoryProject;
      this.formData.nameProject = res.nameProject;
      // this.formData._id = res._id;
      // this.categoryProject = res.categoryProject;
      // this.nameProject = res.nameProject;
    }, err => { console.log(err); });
  }
  onFileSelected(event) {
    let arrayOneImg=[];
    console.log(event.target.files.length)
    if (event.target.files.length > 1) {
      for (let img of event.target.files) {
        console.log(img)
        this.formDataImg.append('filesUpdate', img);
      }
    }
    else {
      this.formDataImg.append('filesUpdate', event.target.files[0]);
    }
    this.formDataImg.get('filesUpdate')
  }
  onDelete(item) {
    if (confirm('Are you sure to delete this record')) {
      this.api.deletePortait(item._id)
        .subscribe((res: any) => {
          this.refreshProject()
        }, (err: any) => {
          console.log(err);
        });
    }
  }
}

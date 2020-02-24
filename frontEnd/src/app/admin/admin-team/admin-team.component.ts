import { Component, OnInit } from '@angular/core';
import Team from 'src/app/shared/classes/team';
import { BgService } from 'src/app/shared/services/bg.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-admin-team',
  templateUrl: './admin-team.component.html',
  styleUrls: ['./admin-team.component.css']
})
export class AdminTeamComponent implements OnInit {
  formData: Team;
  arrayTeam = [];
  fileData;
  constructor(private api: BgService) { }

  ngOnInit() {
    this.refreshDate();
    this.resetForm();
    
  }
  public resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.formData = {
      _id: null,
      firstName: '',
      lastName: '',
      linkNetwork: ''
    }
  }
  public onSubmit(form: NgForm) {
    const formDataImg: any = new FormData();
    const data = Object.assign({}, form.value);
    formDataImg.append('firstName', data.firstName);
    formDataImg.append('lastName', data.lastName);
    formDataImg.append('linkNetwork', data.linkNetwork);
    formDataImg.append('file', this.fileData);
    
    this.api.postTeam(formDataImg).subscribe((res: any) => {
      this.refreshDate();
      (<HTMLInputElement>window.document.getElementById('file')).value = "";
    }, (err: any) => { console.log(err); })
    this.resetForm();
    delete data.id;
  }
  onFileSelected(event) { this.fileData = <File>event.target.files[0]; }
  refreshDate() {
    this.api.getTeam().subscribe((res) => {
      this.api.getTeamsArray = res as Team[];
    });
  }
  onDelete(item) {
    if (confirm('Are you sure to delete this record')) {
      this.api.deleteTeam(item._id)
        .subscribe((res: any) => {
          this.refreshDate();
        }, (err: any) => {
          console.log(err);
        });
    }
  }
  
}

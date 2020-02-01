import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BgService } from 'src/app/shared/services/bg.service';
import Response from 'src/app/shared/classes/response';
@Component({
  selector: 'app-admin-response',
  templateUrl: './admin-response.component.html',
  styleUrls: ['./admin-response.component.css'],
  providers: [BgService]
})
export class AdminResponseComponent implements OnInit {
  response: string;
  author: string;
  fileData;
  responseObj;
  edit: boolean;
  saveId: string;

  constructor(private api: BgService) { }

  ngOnInit() {
    this.refreshResponse();
  }

  addResponse() {
    if (this.response) {
      let formDataImg: any = new FormData();
      formDataImg.append('response', this.response);
      formDataImg.append('author', this.author);
      formDataImg.append('file', this.fileData);
      this.api.createResponse(formDataImg).subscribe((res: any) => {
        this.refreshResponse()
      }, (err: any) => { console.log(err); })
    }
    this.response = '';
    this.author = '';
    (<HTMLInputElement>window.document.getElementById('file')).value = "";
  }
  onFileSelected(event) {
    this.fileData = <File>event.target.files[0];
  }
  refreshResponse() {
    this.api.getResponse().subscribe((res) => {
      this.api.getResponsesArray = res as Response[]
    })
  }
  onEdit(item) {
    console.log(item)
    this.saveId = item._id;
    this.response = item.response;
    this.author = item.author;
    this.edit = true;
  }
  saveResponse() {
    console.log(this.response)
    let formDataSave: any = new FormData();
    formDataSave.append('response', this.response);
    formDataSave.append('author', this.author);
    this.api.updateResponse(this.saveId, formDataSave)
      .subscribe((res: any) => {
        this.refreshResponse();
      }, (err: any) => {
        console.log(err);
      });
    this.response = '';
    this.author = '';
    this.edit = false;
  }
  onDelete(item) {
    if (confirm('Are you sure to delete this record')) {
      this.api.deleteResponse(item._id)
        .subscribe((res: any) => {
          this.refreshResponse();
        }, (err: any) => {
          console.log(err);
        });
    }
  }
}

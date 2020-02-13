import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BgService } from 'src/app/shared/services/bg.service';
import { GallaryService } from 'src/app/shared/services/gallary.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  formData: any;
  constructor(private api: BgService, private galService: GallaryService) { }

  ngOnInit() {
    this.resetForm();
    console.log(this.formData);
    
  }
  public resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.formData = {
      _id: null,
      namePerson: '',
      namePersonPhone: '',
      namePersonEmail: '',
      namePersonMessage: '',
      typeOfPhoto: ''
    }
  }
  public onSubmit(form: NgForm) {
    const data = Object.assign({}, form.value);
    this.api.feedback(data).subscribe((res: any) => {}, (err: any) => {console.log(err);});
    delete data.id;
    console.log('send');
    
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { GallaryService } from 'src/app/shared/services/gallary.service';

@Component({
  selector: 'app-view-photo',
  templateUrl: './view-photo.component.html',
  styleUrls: ['./view-photo.component.css']
})
export class ViewPhotoComponent implements OnInit {
  arrayPhoto: any = {};
  photo: any = {};
  constructor(public gallry: GallaryService) { }

  ngOnInit() {
    this.arrayPhoto = this.gallry.arrayPhoto;
    this.photo = this.arrayPhoto.arrayImg[0];
  }

  viewBigPhoto(e) {
    this.photo = e;
  }


}

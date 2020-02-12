import { Component, OnInit } from '@angular/core';
import { BgService } from 'src/app/shared/services/bg.service';
import { GallaryService } from 'src/app/shared/services/gallary.service';

@Component({
  selector: 'app-galary',
  templateUrl: './galary.component.html',
  styleUrls: ['./galary.component.css']
})
export class GalaryComponent implements OnInit {
  photoArray: any;
  photoArrayPies: any = [];

  constructor(public api: BgService, public galary: GallaryService) { }

  ngOnInit() {
    this.refreshProject();
  }



  refreshProject() {
    const lastslide = { 'arrayImg': [{ lastSlide: "More projects soon!" }] };
    this.api.getPortrait().subscribe((res) => {
      this.photoArray = res;
      this.photoArray.push(lastslide);
      this.dropPhoto();
    });
  }

  dropPhoto() {
    for (let i = 0; i < this.photoArray.length; i += 6) {
      this.photoArrayPies.push(this.photoArray.slice(i, i + 6));
    }
  }

  photoDetails(e) {
    this.galary.arrayPhoto = e;
  }

}

import { Component, OnInit } from '@angular/core';
import { BgService } from 'src/app/shared/services/bg.service';

@Component({
  selector: 'app-galary',
  templateUrl: './galary.component.html',
  styleUrls: ['./galary.component.css']
})
export class GalaryComponent implements OnInit {
  photoArray: any;
  photoArrayPies: any = [];
  constructor(public api: BgService) { }

  ngOnInit() {
    this.refreshProject();
    this.dropPhoto();

  }


  refreshProject() {
    this.api.getPortrait().subscribe((res) => {
      this.photoArray = res;
    });
  }

  dropPhoto() {
    setTimeout(() => {
      console.log(this.photoArray);
      for (let i = 0; i < this.photoArray.length; i += 6) {
        this.photoArrayPies.push(this.photoArray.slice(i, i + 6));
      }
      console.log(this.photoArrayPies);
    }, 500);
  }

}

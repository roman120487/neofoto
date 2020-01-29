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
      // debugger
      console.log(this.photoArray);
      const r = Math.ceil(this.photoArray.length / 6);
      console.log(r);


      for (let i = 0; i < r; i++) {
        this.photoArrayPies.push(this.photoArray.slice(i, 6));
      }
      console.log(this.photoArrayPies);

    }, 1000);
  }

}

import { Component, OnInit } from '@angular/core';
import { BgService } from 'src/app/shared/services/bg.service';

@Component({
  selector: 'app-galary',
  templateUrl: './galary.component.html',
  styleUrls: ['./galary.component.css']
})
export class GalaryComponent implements OnInit {
  photoArray: any;
  constructor(public api: BgService) { }

  ngOnInit() {
    this.refreshProject();
    

  }


  refreshProject() {
    this.api.getPortrait().subscribe((res) => {
      this.photoArray = res;
      console.log(this.photoArray);
      console.log(this.photoArray[1].arrayImg[1]);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import Portrait from 'src/app/shared/classes/portrait';
import { BgService } from 'src/app/shared/services/bg.service';

@Component({
  selector: 'app-admin-list-project',
  templateUrl: './admin-list-project.component.html',
  styleUrls: ['./admin-list-project.component.css']
})
export class AdminListProjectComponent implements OnInit {
  portrait: Portrait[] = [];
  constructor(private api: BgService) { }

  ngOnInit() {
    this.api.getPortrait()
      .subscribe((res: any) => {
        this.portrait = res;
        console.log(this.portrait);
      }, err => {
        console.log(err);
      });
  }

}

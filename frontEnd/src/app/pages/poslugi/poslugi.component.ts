import { Component, OnInit } from '@angular/core';
import { GallaryService } from 'src/app/shared/services/gallary.service';
import { BgService } from 'src/app/shared/services/bg.service';
import Team from 'src/app/shared/classes/team';

@Component({
  selector: 'app-poslugi',
  templateUrl: './poslugi.component.html',
  styleUrls: ['./poslugi.component.css']
})
export class PoslugiComponent implements OnInit {
  // arrayTeam = [];
  constructor( private lagService: GallaryService, private api: BgService) { }

  ngOnInit() {
    // this.refreshDate()
  }
  // refreshDate() {
  //   this.api.getTeam().subscribe((res) => {
  //     this.api.getTeamsArray = res as Team[];
  //   })
  // }
}

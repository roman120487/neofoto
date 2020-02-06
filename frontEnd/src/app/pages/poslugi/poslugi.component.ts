import { Component, OnInit } from '@angular/core';
import { GallaryService } from 'src/app/shared/services/gallary.service';

@Component({
  selector: 'app-poslugi',
  templateUrl: './poslugi.component.html',
  styleUrls: ['./poslugi.component.css']
})
export class PoslugiComponent implements OnInit {

  constructor( private lagService: GallaryService) { }

  ngOnInit() {
  }

}

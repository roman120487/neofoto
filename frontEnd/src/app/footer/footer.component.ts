import { Component, OnInit } from '@angular/core';
import { GallaryService } from '../shared/services/gallary.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor( private langService: GallaryService) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { GallaryService } from '../shared/services/gallary.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuActive: boolean;
  constructor(private langService: GallaryService) { }

  ngOnInit() {
  }
  selectLang() {


    if (this.langService.lang === false) {
      this.langService.lang = true;
    } else { this.langService.lang = false; }
  }
  scrollUp(): void {
    const scroll = setInterval(scrollStep, 20);

    function scrollStep() {
      const top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
      if (top > 0) {
        window.scrollBy(0, -100);
      } else {
        clearInterval(scroll);
      }
    }
  }

  public menuMinActive(): void {
    if (this.menuActive) {
      this.menuActive = false;
    } else {
      this.menuActive = true;
    }
  }
}

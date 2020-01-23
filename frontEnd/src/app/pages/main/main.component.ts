import { Component, OnInit, HostListener } from '@angular/core';
import { BgService } from 'src/app/shared/services/bg.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  scrollBtn: boolean = false;
  reviews: any;

  slides2: any = [[]];
  constructor(public bgService: BgService) {

  }

  ngOnInit() {
    this.refreshResponse();
    setTimeout(() => {
      this.slides2 = this.chunk2(this.reviews, 3);
      console.log(this.slides2);
    }, 1000);

  }

  chunk2(arr, chunkSize) {
    let Z = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      Z.push(arr.slice(i, i + chunkSize));
    }
    // console.log(R);
    return Z;
  }


  refreshResponse() {
    this.bgService.getResponse().subscribe((res) => {
      this.reviews = res;
      // console.log(this.reviews);

    })
  }

  @HostListener('window:scroll', ['$event']) onscroll(event): void {
    const top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if (top > 0) {
      this.scrollBtn = true;
    } else {
      this.scrollBtn = false;
    }
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











}



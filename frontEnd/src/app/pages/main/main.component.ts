import { Component, OnInit, HostListener } from '@angular/core';
import { BgService } from 'src/app/shared/services/bg.service';
// import { setInterval } from 'timers';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  scrollBtn: boolean = false;
  reviews: any;
  widthRewDiv: number;
  positionLeft: string;
  positionRight: string;
  positionRew: number = 0;

  constructor(public bgService: BgService) {

  }

  ngOnInit() {
    this.refreshResponse();
    console.log(this.widthRewDiv);


  }

  moveRightBtn() {
    if (this.positionRew < 0) {
      this.positionRew = 0;
    }
    let move;
    move = setInterval(() => {
      this.positionLeft = `-${this.positionRew}px`;
      this.positionRew += 10;
      console.log(this.positionRew);
    }, 5);

    setTimeout(() => {
      move = clearInterval(move)
    }, 500);
  }

  moveLeftBtn() {
    if (this.positionRew > 0) {
      let move;
      move = setInterval(() => {
        this.positionLeft = `-${this.positionRew}px`;
        this.positionRew -= 10;
        console.log(this.positionRew);
      }, 5);

      setTimeout(() => {
        move = clearInterval(move)
      }, 500);
    } else {
      this.positionRew = 0;
      console.log(this.positionRew);
    }

  }


  refreshResponse() {
    this.bgService.getResponse().subscribe((res) => {
      this.reviews = res;
      console.log(this.reviews);

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



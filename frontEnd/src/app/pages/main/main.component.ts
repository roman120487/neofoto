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
  positionLeft: string;
  positionRight: string;
  positionRew: number = 0;
  widthClient: number;
  offsetWidth: number;
  counter: number = 0;

  timer: any;
  step: number;

  photoArray: any;
  numStart: number = 1;
  numFinish: number = 7;

  constructor(public bgService: BgService) {

  }

  ngOnInit() {
    this.refreshResponse();
    this.refreshProject();

  }
  refreshProject() {
    this.bgService.getPortrait().subscribe((res) => {
      this.photoArray = res;
      this.numStart = Math.floor((Math.random() * ((this.photoArray.length - 6) - 0) + 0));
      this.numFinish = this.numStart + 6;
    });
  }


  windowParam(elem) {
    if (this.counter == 0) {
      this.widthClient = elem.clientWidth;
      // console.log(elem.target.clientWidth);
      this.widthClient = elem.target.clientWidth;
      this.offsetWidth = elem.relatedTarget.offsetWidth;
      console.log(this.offsetWidth);
      this.counter = 1;
    }
  }

  moveRightBtn() {
    console.log('------------------------');
    console.log(this.positionRew);
    console.log(this.widthClient);
    console.log(this.offsetWidth);

    if (this.positionRew < this.widthClient - this.offsetWidth) {
      if (this.positionRew < 0) {
        this.positionRew = 0;
      }
      if (this.step == this.offsetWidth) {
        this.step += this.offsetWidth
      }
      this.step = this.offsetWidth;
      this.timer = setInterval(() => {
        this.positionLeft = `-${this.positionRew}px`;
        this.positionRew += 5;
        // console.log(this.positionRew);
        if (this.positionRew > this.step) {
          this.stopp();
        }
      }, 1);
    }
  }

  stopp() {
    clearInterval(this.timer)
  }

  moveLeftBtn() {
    if (this.positionRew > 0) {
      let move;
      move = setInterval(() => {
        this.positionLeft = `-${this.positionRew}px`;
        this.positionRew -= 10;
        // console.log(this.positionRew);
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



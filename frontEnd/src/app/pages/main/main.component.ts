import { Component, OnInit, HostListener } from '@angular/core';
import { BgService } from 'src/app/shared/services/bg.service';
// declare var $: any;
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { GallaryService } from 'src/app/shared/services/gallary.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  scrollBtn: boolean = false;
  reviews: any;
  x: number = 2;

  photoArray: any;
  numStart: number;
  numFinish: number;

  modalImg: any = [];
  slideConfig = {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1500,
    infinite: true,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 5000,
          speed: 1500
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 5000,
          speed: 1500
        }
      }
    ]
  };

  constructor(public bgService: BgService, public galary: GallaryService) {

  }

  ngOnInit() {

    this.refreshResponse();
    this.refreshProject();
    
    

  }
  addModalImg(e) {
    this.modalImg = e;
  }

  refreshProject() {
    this.bgService.getPortrait().subscribe((res) => {
      this.photoArray = res;
      this.numStart = Math.floor((Math.random() * ((this.photoArray.length - 5) - 0) + 0));
      this.numFinish = this.numStart + 6;
    });
  }

  photoDetails(e) {
    this.galary.arrayPhoto = e;
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



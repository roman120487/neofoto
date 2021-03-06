import { Component, OnInit, HostListener } from '@angular/core';
import { BgService } from 'src/app/shared/services/bg.service';
// declare var $: any;
// import { SlickCarouselModule } from 'ngx-slick-carousel';
import { GallaryService } from 'src/app/shared/services/gallary.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  scrollBtn: boolean = false;
  reviews: any;
  photografImg: Array<any>;
  modalPhotos: Array<any> = [];
  viewModal: boolean = false;
  // x: number = 2;

  photoArray: any;
  numStart: number;
  numFinish: number;

  slideConfigPhoto = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    infinite: true,
    lazyLoad: 'ondemand',
  };
  slideConfigPhotoModal = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    infinite: true,
    lazyLoad: 'ondemand',
    dots: true,
    fade: true,
    pauseOnHover: false
  };


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
    this.photografImg = [
      { src: "assets/img/team1.jpg" },
      { src: "assets/img/photographer.jpg" },
      { src: "assets/img/photographer2.jpg" },
    ];
  }


  refreshProject() {
    this.bgService.getPortrait().subscribe((res) => {
      this.photoArray = res;
      this.numStart = Math.floor((Math.random() * ((this.photoArray.length - 5) - 0) + 0));
      this.numFinish = this.numStart + 6;
    });
  }

  photoDetails(e) {
    this.viewModal = true;
    this.modalPhotos = e.arrayImg;
  }



  refreshResponse() {
    this.bgService.getResponse().subscribe((res) => {
      this.reviews = res;
    })
  }

  closeModal(){
    this.viewModal = false;
  }


}



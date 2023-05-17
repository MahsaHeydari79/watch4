// import { CommonModule } from '@angular/common';
// import {Subscription } from 'rxjs';
// import { interval } from 'rxjs';
// import { MediaChange,MediaObserver  } from '@angular/flex-layout';
// import { MediaObserver  } from '@angular/flex-layout';

import { Component, OnInit,HostListener } from '@angular/core';
// import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // public sidebarShow: boolean = false;
  // public innerWidth: any;
  // @HostListener('window:resize', ['$event'])
  // onResize(event) {
  //   this.innerWidth = window.innerWidth;
  //   console.log(this.innerWidth);
  // }
  ngOnInit(): void {
    // if (window.screen.width === 100) { // 768px portrait
    //   var mobile = true;
    // }
   }
  // toggleSidebar() {
  //   document.getElementById("sidebar").classList.toggle('active');
  // }
  Text:'Every time ' | undefined
  title = 'watch';
  imageObject = [{
    image: 'https://angular.pixelstrap.com/multikart/assets/images/slider/9.jpg',
    thumbImage: 'https://angular.pixelstrap.com/multikart/assets/images/slider/9.jpg',
    title: 'Every time',
    Text:'Every time '
}, {
    image: 'https://angular.pixelstrap.com/multikart/assets/images/slider/10.jpg',
    thumbImage: 'https://angular.pixelstrap.com/multikart/assets/images/slider/10.jpg'
}];
// constructor(media :MediaObserver){
//   this.watcher=media.subscribe(())

// }
}

import { Component, ViewChild,
  ElementRef, } from '@angular/core';
import {
  style,
  animate,
  trigger,
  state,
  transition
} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger("fadeAnimation", [
      transition("false=>true", [
        style({ opacity: 0 }),
        animate("2000ms", style({ opacity: 1 }))
      ]),
      //when we write '500ms  100ms' means that the animation spend 500ms, and start afer 100ms
      transition("true=>false", [animate("2000ms 1000ms", style({ opacity: 0 }))])
    ])
  ]
})
export class AppComponent {
  date: Date;
  countries = [{
    "name": "ENG",
    "icon": "../../assets/flags/england.png"
  },
  {
    "name": "HIN",
    "icon": "../../assets/flags/india.png"
  }
 ]
  selectedCountry = this.countries[0];
  index = 0;
  constructor(){
    setInterval(() => {
      this.date = new Date()
    }, 1000)
  }
  title = 'HelliBurton';
  archives= [
    "../assets/archive1.jpg",
    "../assets/archive2.jpg",
    "../assets/archive3.jpg",
    "../assets/archive4.jpg",
    "../assets/archive5.jpg",
    "../assets/archive6.jpg",
    "../assets/archive7.jpg",
  ]
    imageArray = [
      {
        path: '../assets/img1.jpg'
      },
      {
        path: '../assets/img2.jpg'
      },
      {
        path: '../assets/img3.jpg'
      },
      {
        path: '../assets/img4.jpg'
      }
    ]
    images = this.imageArray.map((i)=> i.path);
    @ViewChild("wordCarousel", { static: false }) wordCarouselEl: ElementRef;

    wordCarousel = ["National Data Repository (NDR) is an integrated data repository of Exploration and Production (E&P) data of Indian sedimentary basins.", 
    "National Data Repository (NDR) was launched for public on 28th July 2017.NDR is a fully Government of India owned E&P data repository.", 
    "NDR is hosted at Directorate General of Hydrocarbons (DGH) Noida, Sector-73, UP 201301, India. DGH is a technical arm of the Ministry of Petroleum and Natural Gas (MoPNG)",
     "NDR offers an unique platform to all E&P Operators, E&P Service Companies, E&P Investors, Academia to delve inside diverse E&P datasets of Indian sedimentary basins. Nic Gent – Facebook Page",
     
  ];
    wordCounter = -1;
    toogle:boolean=true;
    ngAfterViewInit() {
      setTimeout(()=>{
      this.toogle=false;
      })
    }
    nextWord(event: any) {
        this.toogle = !this.toogle;
        if (event.fromState)
          this.wordCounter = (this.wordCounter + 1) % this.wordCarousel.length;
    }

    public slides = [
      {
        src: 'https://www.infragistics.com/angular-demos/assets/images/carousel/ignite-ui-angular-indigo-design.png'
      },
      {
        src: 'https://www.infragistics.com/angular-demos/assets/images/carousel/slider-image-chart.png'
      },
      {
        src: 'https://www.infragistics.com/angular-demos/assets/images/carousel/ignite-ui-angular-charts.png'
      }
  ];
  changeCountry(i){
    if(i>0)
     {
       this.index = this.index + i > 1 ? 0 : (this.index + i)
       this.selectedCountry = this.countries[this.index];
     }
     else{
       this.index = this.index + i < 0 ? 1 : (this.index + i)
       this.selectedCountry = this.countries[this.index];
     }
 }
}

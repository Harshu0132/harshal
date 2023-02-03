import { Component, OnInit } from '@angular/core';
import AOS from "aos"


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  
  nextIcon = document.getElementsByClassName("carousel-control-next-icon")[0]
  constructor() {

    console.log("nextIcon",this.nextIcon);
    
   }
  
  ngOnInit(): void {
    AOS.init();

  }

}

import { Component, OnInit } from '@angular/core';
import AOS from "aos"


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();

  }

}

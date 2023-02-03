import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isMenuCollapsed = true;
  nav_variable = false;

  @HostListener("document:scroll")
  scrollFunction() {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
      this.nav_variable = true
    }
    else {
      this.nav_variable = false
    }
  }

  toHome(){
    document.getElementById("Home")?.scrollIntoView({behavior:"smooth"})
  }
  toAbout(){
    document.getElementById("About")?.scrollIntoView({behavior:"smooth"})
  }
  toSkills(){
    document.getElementById("Skills")?.scrollIntoView({behavior:"smooth"})
  }
  toContact(){
    document.getElementById("Contact")?.scrollIntoView({behavior:"smooth"})
  }
  toServices(){
    document.getElementById("Services")?.scrollIntoView({behavior:"smooth"})
  }
  toProject(){
    document.getElementById("Projects")?.scrollIntoView({behavior:"smooth"})
  }
  toEducation(){
    document.getElementById("Education")?.scrollIntoView({behavior:"smooth"})
  }
}

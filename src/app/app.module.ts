import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './layout/header/header.component';
import { SectionComponent } from './layout/section/section.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavComponent } from './layout/header/nav/nav.component';
import { HomeComponent } from './layout/section/home/home.component';
import { SkillsComponent } from './layout/section/skills/skills.component';
import { ContactComponent } from './layout/section/contact/contact.component';
import { AboutComponent } from './layout/section/about/about.component';
import { ServicesComponent } from './layout/section/services/services.component';
import {ProgressBarModule} from "angular-progress-bar";
import { EducationComponent } from './layout/section/education/education.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    SkillsComponent,
    ContactComponent,
    AboutComponent,
    ServicesComponent,
    EducationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

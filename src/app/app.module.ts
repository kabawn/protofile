import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; // Import RouterModule and Routes

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { MilestonesComponent } from './milestones/milestones.component';
import { ProjectsComponent } from './projects/projects.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { TechSectionComponent } from './tech-section/tech-section.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { LanguagesComponent } from './languages/languages.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { TrainSectionComponent } from './train-section/train-section.component'; // Added as you mentioned

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'projects', component: ProjectsComponent },
  { path: 'project/:id', component: ProjectDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    MilestonesComponent,
    ProjectsComponent,
    TestimonialsComponent,
    ContactComponent,
    NavbarComponent,
    HeroSectionComponent,
    TechSectionComponent,
    ProjectDetailsComponent,
    AboutMeComponent,
    LanguagesComponent,
    FooterComponent,
    HeroComponent,
    TrainSectionComponent // Added in the declarations array
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes) // Added the RouterModule with the routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

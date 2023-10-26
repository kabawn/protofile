import { Component, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements AfterViewInit {

  ngOnInit() {
    AOS.init({
        duration: 1200, // Duration of animation in milliseconds.
    });
  }

  ngAfterViewInit() {
    // Refreshes AOS to recognize any new elements that might have been added
    AOS.refresh();
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-train-section',
  templateUrl: './train-section.component.html',
  styleUrls: ['./train-section.component.css']
})
export class TrainSectionComponent {

  onCompartmentClick(technology: string): void {
    alert(`You clicked on ${technology}`);
    // Add logic, maybe navigate to a section about this technology
  }
}

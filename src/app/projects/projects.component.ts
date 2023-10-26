import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service'; // Import the service here

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  // Updated project structure to include image and frameworks.
  projects: { 
    name: string, 
    image: string, 
    frameworks: string[] 
  }[] = [];

  constructor(private dataService: DataService) { } // Inject the service here

  ngOnInit(): void {
    this.projects = this.dataService.getProjects(); // Fetch the list of projects from the service
  }
}

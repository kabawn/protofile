import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/data.service'; // Import the service here

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  project: any = null; // This will hold the specific project details

  constructor(private route: ActivatedRoute, private dataService: DataService) { } // Inject both ActivatedRoute and DataService

  ngOnInit(): void {
    const projectId = +this.route.snapshot.paramMap.get('id')!;
    this.project = this.dataService.getProjectById(projectId); // Fetch the specific project details from the service
  }
}

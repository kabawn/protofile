import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-section',
  templateUrl: './tech-section.component.html',
  styleUrls: ['./tech-section.component.css']
})
export class TechSectionComponent implements OnInit {
  languages = [
    { name: 'JavaScript', logo: 'assets/js.png' },
    { name: 'Php', logo: 'assets/php.png' },
    { name: 'TypeScript', logo: 'assets/typescript.png' },
    { name: 'Java', logo: 'assets/java.png' },
    //... add other languages
  ];

  frameworks = [
    { name: 'React', logo: 'assets/react.png' },
    { name: 'Angular', logo: 'assets/angular.png' },
    { name: 'Laravel', logo: 'assets/laravel.png' },
    { name: 'Spring Boot', logo: 'assets/spring.png' },

    //... add other frameworks
  ];

  contentManagementSystems = [
    { name: 'WordPress', logo: 'assets/WordPress.png' },
    //... add other CMSs
];

  constructor() { }

  ngOnInit(): void { }
}

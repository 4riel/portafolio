import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.less']
})
export class SkillsComponent {
  skills: any[] = [
    {
      category: 'Languages & Frameworks 🚀',
      items: [
        'C#', '.NET', 'JavaScript', 'TypeScript', 'Angular', 'PHP', 'Laravel', 'jQuery'
      ]
    },
    {
      category: 'Databases & Cloud 🌩️',
      items: [
        'MSSQL', 'NoSQL', 'Azure Cloud Computing', 'Lambda'
      ]
    },
    {
      category: 'Tools & Practices 🛠️',
      items: [
        'Git', 'CI/CD', 'TeamCity', 'XUnit', 'Unit Testing', 'JIRA', 'GitHub', 'Postman', 'ngrok'
      ]
    },
    {
      category: 'Principles & Methodologies 📚',
      items: [
        'OOP', 'SOLID', 'SCRUM', 'Agile', 'Frontend', 'Backend', 'Full-Stack'
      ]
    },
    {
      category: 'Soft Skills & Languages 🌍',
      items: [
        'Strong communication', 'Team Player', 'English', 'Spanish', 'Italian'
      ]
    }
  ];
}


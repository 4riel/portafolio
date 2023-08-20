import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Experience } from '../models/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private experiences: Experience[] = [
    {
      title: 'Remote Software Engineer 💻',
      company: 'Tradify',
      location: 'Remote 🌍',
      date: '02/2022 - Current',
      tasks: [
        'Transitioned to contractor role.',
        'Mastered budgeting & project analysis.'
      ]
    },
    {
      title: 'Full Stack Software Engineer 🖥️',
      company: 'Tradify',
      location: 'Auckland, NZ',
      date: '07/2019 - 02/2022',
      tasks: [
        'Developed features for 20k+ users.',
        'Enhanced SaaS platform reliability.',
        'Boosted CI/CD for faster deployments.',
        'Aligned features with business goals.'
      ]
    },
    {
      title: 'Software Engineer 🔧',
      company: 'Informix S&S',
      location: 'Buenos Aires, AR',
      date: '08/2018 - 04/2019',
      tasks: [
        'Updated legacy software for cloud readiness.',
        'Introduced JIRA & Git for better collaboration.',
        'Attracted major clients with robust solutions.'
      ]
    },
    {
      title: 'Software Engineer 🛠️',
      company: 'Ternium',
      location: 'Buenos Aires, AR',
      date: '07/2016 - 07/2018',
      tasks: [
        'Developed software for a major steel producer.',
        'Managed tight deadlines & delivered projects.',
        'Used diverse tech for varied project needs.'
      ]
    },
    {
      title: 'PHP Software Engineer Jr 🌐',
      company: 'Informix s&s',
      location: 'Buenos Aires, AR',
      date: '05/2015 - 06/2016',
      tasks: [
        'Contributed to diverse projects alongside senior devs.',
        'Developed using PHP, Laravel, & explored ASP .NET.'
      ]
    },
    {
      title: '.NET Software Engineer Intern 🎓',
      company: 'Efisat+',
      location: 'Rosario, AR',
      date: '02/2015 - 05/2015',
      tasks: [
        'Contributed to SaaS platform smartmovepro.net.',
        'Worked with tech like ASP.NET MVC & MSSQL.'
      ]
    }
  ];

  getExperiences(): Observable<Experience[]> {
    return of(this.experiences);
  }
}

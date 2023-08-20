import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienceComponent } from './experience.component';
import { ExperienceService } from '../../../services/experience.service';
import { of } from 'rxjs';
import { Experience } from '../../../models/experience';
import { By } from '@angular/platform-browser';

describe('ExperienceComponent', () => {
    let component: ExperienceComponent;
    let fixture: ComponentFixture<ExperienceComponent>;
    let mockExperienceService: any;

    beforeEach(async () => {
        mockExperienceService = jasmine.createSpyObj(['getExperiences']);

        await TestBed.configureTestingModule({
            declarations: [ExperienceComponent],
            providers: [
                { provide: ExperienceService, useValue: mockExperienceService }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(ExperienceComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should load experiences on init', () => {
        const mockExperiences: Experience[] = [
            {
                title: 'Software Engineer',
                company: 'TechCorp',
                location: 'California, USA',
                date: '01/2020 - Present',
                tasks: ['Develop software', 'Collaborate with team']
            }
        ];
        mockExperienceService.getExperiences.and.returnValue(of(mockExperiences));

        component.ngOnInit();

        expect(component.experiences).toEqual(mockExperiences);
    });

    it('should render experiences', () => {
        const mockExperiences: Experience[] = [
            {
                title: 'Software Engineer',
                company: 'TechCorp',
                location: 'California, USA',
                date: '01/2020 - Present',
                tasks: ['Develop software', 'Collaborate with team']
            }
        ];
        mockExperienceService.getExperiences.and.returnValue(of(mockExperiences));

        component.ngOnInit();
        fixture.detectChanges();

        const titleEl = fixture.debugElement.query(By.css('.experience h4')).nativeElement;
        expect(titleEl.textContent).toContain('Software Engineer at TechCorp');
    });
});

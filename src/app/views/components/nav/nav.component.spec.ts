import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavComponent } from './nav.component';
import { Router } from '@angular/router';
import { ColorService } from '../../color.service';
import { By } from '@angular/platform-browser';

describe('NavComponent', () => {
    let component: NavComponent;
    let fixture: ComponentFixture<NavComponent>;
    let mockRouter: any;

    beforeEach(async () => {
        mockRouter = {
            navigate: jasmine.createSpy('navigate'),
            url: '/'
        };

        await TestBed.configureTestingModule({
            declarations: [NavComponent],
            providers: [
                { provide: Router, useValue: mockRouter },
                ColorService
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(NavComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should identify the active route correctly', () => {
        expect(component.isActive('')).toBeTrue();
        mockRouter.url = '/experience';
        expect(component.isActive('experience')).toBeTrue();
    });
});

import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { DinosaurService } from 'src/app/services/dinosaur.service';

@Component({
  selector: 'app-dinosaur',
  templateUrl: './dinosaur.component.html',
  styleUrls: ['./dinosaur.component.less'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DinosaurComponent {
  showDinosaur$ = this.dinosaurService.showDinosaur$;

  constructor(private dinosaurService: DinosaurService) {}
  
  toggleDinosaur(): void {
    this.dinosaurService.toggleDinosaur();
  }
}
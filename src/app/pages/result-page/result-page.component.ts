import { NavbarComponent } from './../../shared/components/navbar/navbar.components';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponent } from '../../../result/result.component';

@Component({
  selector: 'app-exam-page',
  standalone: true,
  imports: [CommonModule, ResultComponent , NavbarComponent],
  template: `
    <app-navbar/>
    <div class="container">
        <app-result/>
    </div>
  `
})
export class ResultPageComponent {}

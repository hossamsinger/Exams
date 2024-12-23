import { NavbarComponent } from '../../shared/components/navbar/navbar.components';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddExamsComponent } from '../../../add-exams/add-exams.component';
@Component({
  selector: 'app-exam-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent, AddExamsComponent],
  template: `
    <app-navbar></app-navbar>
    <app-add-exam/>
  `
})
export class AddExamPageComponent {}
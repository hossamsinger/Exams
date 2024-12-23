import { NavbarComponent } from './../../shared/components/navbar/navbar.components';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddQuestionComponent } from "../../../add-question/add-question.component";
@Component({
  selector: 'app-questions-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent, AddQuestionComponent],
  template: `
    <app-navbar/>
    <app-add-question/>
  `
})
export class AddQuestionPageComponent {}
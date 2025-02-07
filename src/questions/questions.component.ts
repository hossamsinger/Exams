import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IQuestion } from './../app/models/question.model';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent {
  @Input() AllQuestion!: IQuestion;
}
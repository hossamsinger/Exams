import { CommonModule } from '@angular/common';
import { IExam } from '../app/models/exam.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exams',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exams.component.html',
  styleUrl: './exams.component.scss'
})
export class ExamsComponent {
  @Input() AllExam!: IExam;
}

// import { Component } from '@angular/core';
// import { MatTableModule } from '@angular/material/table';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-result',
//   standalone: true,
//   imports: [CommonModule, MatTableModule],
//   templateUrl: './result.component.html',
//   styleUrl: './result.component.scss'
// })
// export class ResultComponent {
//   displayedColumns: string[] = ['testName', 'userName', 'totalQuestions', 'correctAnswers', 'percentage'];
//   results = [
//     { testName: 'Beginner Level Developer Test', userName: 'Root', totalQuestions: 5, correctAnswers: 1, percentage: 20 },
//     { testName: 'Junior Level Developer Test', userName: 'test5', totalQuestions: 5, correctAnswers: 3, percentage: 60 },
//     { testName: 'Comprehensive Skills Assessment', userName: 'Test', totalQuestions: 1, correctAnswers: 0, percentage: 0 },
//     { testName: 'Senior Level Developer Test', userName: 'Test', totalQuestions: 5, correctAnswers: 3, percentage: 60 },
//   ];
// }
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [MatTableModule, MatSortModule],
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent {
  displayedColumns: string[] = ['testName', 'userName', 'totalQuestions', 'correctAnswers', 'percentage'];
  results = new MatTableDataSource([
    { testName: 'Beginner Level Developer Test', userName: 'Root', totalQuestions: 5, correctAnswers: 1, percentage: 20 },
    { testName: 'Junior Level Developer Test', userName: 'test5', totalQuestions: 5, correctAnswers: 3, percentage: 60 },
    { testName: 'Comprehensive Skills Assessment', userName: 'Test', totalQuestions: 1, correctAnswers: 0, percentage: 0 },
    { testName: 'Senior Level Developer Test', userName: 'Test', totalQuestions: 5, correctAnswers: 3, percentage: 60 },
    { testName: 'Beginner Level Developer Test', userName: 'Root', totalQuestions: 5, correctAnswers: 1, percentage: 20 },
    { testName: 'Junior Level Developer Test', userName: 'test5', totalQuestions: 5, correctAnswers: 3, percentage: 60 },
    { testName: 'Comprehensive Skills Assessment', userName: 'Test', totalQuestions: 1, correctAnswers: 0, percentage: 0 },
    { testName: 'Senior Level Developer Test', userName: 'Test', totalQuestions: 5, correctAnswers: 3, percentage: 60 },
  ]);

}

import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { QuestionsPageComponent } from './pages/question-page/question.page.component';
import { ExamsPageComponent } from './pages/exam-page/exam.page';
import { AddExamPageComponent } from './pages/addExam-page/addExam.page';
import { AddQuestionPageComponent } from './pages/addQuestion-page/addQuestion.page';
import { ResultPageComponent } from './pages/result-page/result-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'questions', component: QuestionsPageComponent },
  { path: 'exams', component: ExamsPageComponent },
  { path: 'add-question', component: AddQuestionPageComponent },
  { path: 'add-exam', component: AddExamPageComponent },
  { path: 'view-result', component: ResultPageComponent },
];
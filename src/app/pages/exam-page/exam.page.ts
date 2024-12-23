import { NavbarComponent } from './../../shared/components/navbar/navbar.components';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamsComponent } from '../../../exams/exams.component';
import { IExam , CategoryType } from '../../models/exam.model';
@Component({
  selector: 'app-exam-page',
  standalone: true,
  imports: [CommonModule, ExamsComponent , NavbarComponent],
  template: `
    <app-navbar/>
    <div class="container">
        <div class="row">
            <h5>Avaliable Exams Here...</h5>
        </div>
        <div class="row">
            <app-exams *ngFor="let item of Exams" [AllExam]="item" class="col-md-4 mb-4"></app-exams>
        </div>
    </div>
  `
})
export class ExamsPageComponent {
    readonly Exams: Array <IExam>=[
        {
          id : 1 , 
          title : "THis is A Exam About How to be A good Banker",
          questions : ["Nile" , "Cater" , "Zepra" , "Yango" ],
          answers : ["Nile" , "Cater" , "Zepra" , "Yango" ],
          result : 1,
          category: CategoryType.begineer
        },    
        {
          id : 2 , 
          title : "THis is A Exam About How to be A good Banker  ",
          questions : ["Nile" , "Cater" , "Zepra" , "Yango" ],
          answers : ["Nile" , "Cater" , "Zepra" , "Yango" ],
          result : 2,
          category: CategoryType.begineer
        },    
        {
          id : 3 , 
          title : "THis is A Exam About How to be A good Banker",
          questions : ["Nile" , "Cater" , "Zepra" , "Yango" ],
          answers : ["Nile" , "Cater" , "Zepra" , "Yango" ],
          result : 3,
          category: CategoryType.intermediate
        },    
        {
          id : 4 , 
          title : "THis is A Exam About How to be A good Banker",
          questions : ["Nile" , "Cater" , "Zepra" , "Yango" ],
          answers : ["Nile" , "Cater" , "Zepra" , "Yango" ],
          result : 1,
          category: CategoryType.intermediate
        },    
        {
          id : 5 , 
          title : "THis is A Exam About How to be A good Banker",
          questions : ["Nile" , "Cater" , "Zepra" , "Yango" ],
          answers : ["Nile" , "Cater" , "Zepra" , "Yango" ],
          result : 3,
          category: CategoryType.intermediate
        },    
        {
          id : 6 , 
          title : "THis is A Exam About How to be A good Banker ",
          questions : ["Nile" , "Cater" , "Zepra" , "Yango" ],
          answers : ["Nile" , "Cater" , "Zepra" , "Yango" ],
          result : 4,
          category: CategoryType.intermediate
        },    
      ];
      BegginerQuestion = this.Exams[0];
      InermediatQuestion = this.Exams[1];
      AdvancedQuestion = this.Exams[3];
}

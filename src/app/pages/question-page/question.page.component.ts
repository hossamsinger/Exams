import { NavbarComponent } from './../../shared/components/navbar/navbar.components';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from '../../../questions/questions.component';
import { CategoryType, IQuestion } from '../../models/question.model';

@Component({
  selector: 'app-questions-page',
  standalone: true,
  imports: [CommonModule, QuestionsComponent , NavbarComponent],
  template: `
    <!-- Navbar -->
    <app-navbar/>
    <!-- Questions Section -->
    <div class="container d-flex align-content-center justify-content-evenly">
      <div class="row mt-2">
        <div class="col-md-3">
          @for (item of Questions; track item.id) {
            <ng-container>
              <app-questions [AllQuestion]="item" />
            </ng-container>
          }
        </div>
      </div>
    </div>
  `
})
export class QuestionsPageComponent {
    readonly Questions: Array <IQuestion>=[
        {
          id : 1 , 
          title : "what is Loneset River In Egypt or london ? ",
          choises : ["Nile" , "Cater" , "Zepra" , "Yango" ],
          correctedAnswer : 1,
          category: CategoryType.begineer
        },    
        {
          id : 2 , 
          title : "what is Loneset River In Egypt  or london ?  ",
          choises : ["Nile" , "Cater" , "Zepra" , "Yango" ],
          correctedAnswer : 2,
          category: CategoryType.begineer
        },    
        {
          id : 3 , 
          title : "what is Loneset River In Egypt or london ? ",
          choises : ["Nile" , "Cater" , "Zepra" , "Yango" ],
          correctedAnswer : 3,
          category: CategoryType.intermediate
        },    
        {
          id : 4 , 
          title : "what is Loneset River In Egypt or london ? ",
          choises : ["Nile" , "Cater" , "Zepra" , "Yango" ],
          correctedAnswer : 1,
          category: CategoryType.intermediate
        },    
        {
          id : 5 , 
          title : "what is Loneset River In Egypt or london ? ",
          choises : ["Nile" , "Cater" , "Zepra" , "Yango" ],
          correctedAnswer : 3,
          category: CategoryType.intermediate
        },    
        {
          id : 6 , 
          title : "what is Loneset River In Egypt or london  ? ",
          choises : ["Nile" , "Cater" , "Zepra" , "Yango" ],
          correctedAnswer : 4,
          category: CategoryType.intermediate
        },    
      ];
      BegginerQuestion = this.Questions[0];
      InermediatQuestion = this.Questions[1];
      AdvancedQuestion = this.Questions[3];
}

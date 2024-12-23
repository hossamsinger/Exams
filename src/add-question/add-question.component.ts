import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-question',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-question.component.html',
  styleUrl: './add-question.component.scss'
})
export class AddQuestionComponent {
  questionForm: FormGroup;
  options = ['A', 'B', 'C', 'D'];

  constructor(private fb: FormBuilder) {
    this.questionForm = this.fb.group({
      questionTitle: ['', Validators.required],
      option0: ['', Validators.required],
      option1: ['', Validators.required],
      option2: ['', Validators.required],
      option3: ['', Validators.required],
      correctOption: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.questionForm.valid) {
      console.log(this.questionForm.value);
      alert('Question added successfully!');
      this.questionForm.reset();
    }
  }
}

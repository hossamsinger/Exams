

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-exam',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './add-exams.component.html',
  styleUrl: './add-exams.component.scss'
})
export class AddExamsComponent {
  examForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.examForm = this.fb.group({
      examTitle: ['', Validators.required],
      examCategory: ['', Validators.required],
      examDescription: ['', Validators.required],

    });
  }

  onSubmit() {
    if (this.examForm.valid) {
      console.log(this.examForm.value);
      alert('Exams added successfully!');
      this.examForm.reset();
    }
  }
}

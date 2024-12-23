import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid d-flex">
        <a class="navbar-brand fw-bold" href="#">Exam App</a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                class="nav-link"
                routerLink="/exams"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: true }"
              >
                All Exams
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                routerLink="/questions"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: true }"
              >
                All Questions
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                routerLink="/add-exam"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: true }"
              >
                Add Exam
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                routerLink="/add-question"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: true }"
              >
                Add Question
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                routerLink="/view-result"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: true }"
              >
                View Result
              </a>
            </li>
          </ul>
        </div>
        <div>
          <button type="button" class="btn btn-danger">
            <a class="nav-link" routerLink="/login">Log out</a>
          </button>
        </div>
      </div>
    </nav>
  `,
  styles: [
    `
      nav {
        margin-bottom: 1rem;
      }
      .nav-link.active {
        font-weight: bold;
      }
      .navbar-nav {
        display: flex;
        justify-content: center;
        width: 100%;
      }
    `,
  ],
})
export class NavbarComponent {}

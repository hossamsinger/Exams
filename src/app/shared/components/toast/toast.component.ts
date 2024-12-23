import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../services/toast.services';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (toastService.toast$ | async; as toast) {
      <div class="toast" [class]="toast.type">
        {{ toast.message }}
      </div>
    }
  `,
  styles: [`
    .toast {
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 1rem;
      border-radius: 4px;
      color: white;
      animation: slideIn 0.3s ease-out;
      z-index: 1000;
    }

    .error {
      background-color: #ff4d4f;
    }

    .success {
      background-color: #52c41a;
    }

    .info {
      background-color: #1890ff;
    }

    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  `]
})
export class ToastComponent {
  constructor(public toastService: ToastService) {}
}
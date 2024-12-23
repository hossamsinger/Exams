import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastComponent } from './shared/components/toast/toast.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
// import { trigger, state, style, transition, animate } from '@angular/animations';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToastComponent, LoaderComponent ],
  template: `
    <router-outlet></router-outlet>
    <app-toast />
    <app-loader/>

  `
})
export class AppComponent {}
import { ToastService } from './app/shared/services/toast.services';
/// <reference types="@angular/localize" />


  // import { bootstrapApplication } from '@angular/platform-browser';
  // import { provideRouter } from '@angular/router';
  // import { AppComponent } from './app/app.component';
  // import { routes } from './app/app.routes';
  // import { appConfig } from './app/app.config';
  
  // bootstrapApplication(AppComponent , {
  //   providers: [
  //     provideRouter(routes)
  //   ]
  // } ).catch(err => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withHashLocation } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withHashLocation()),
    ToastService
  ]
}).catch(err => console.error(err));
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';



bootstrapApplication(AppComponent, {
  providers:[
    provideHttpClient(),
    provideRouter(appRoutes),
  ]
}).catch(err => console.error(err));

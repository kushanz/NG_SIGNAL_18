import { Route, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { AppComponent } from './app/app.component';
import { ProductComponent } from './app/product/product.component';
import { CartComponent } from './app/cart/cart.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { ScanComponent } from './app/scan/scan.component';

export const appRoutes: Route[] = [
//   {path: '',component:AppComponent},
  // {path: '',component: AppComponent, children: [
    {path: 'products', component: ProductComponent},
    {path: 'cart', component: CartComponent},
    {path: 'scan', component: ScanComponent},
  // ]},
];

// bootstrapApplication(AppComponent, {
//     providers: [provideRouter(appRoutes)]
//   });
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
//import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
const APP_ROUTES: Routes =[
  { path: 'home', component: HomeComponent },
  { path: 'precios', component: PreciosComponent },
  //{ path: 'protegida', component: ProtegidaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});

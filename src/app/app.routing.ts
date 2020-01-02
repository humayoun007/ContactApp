import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { ContactformComponent } from './contactform/contactform.component';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';

const appRoutes: Routes = [
  // { path: '',  pathMatch: 'full' , component: ContactlistComponent },
  // { path: 'contactform', component: ContactformComponent }
  // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', component: ContactlistComponent, canActivate: [AuthGuard] },
  { path: 'contactform', component: ContactformComponent , canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

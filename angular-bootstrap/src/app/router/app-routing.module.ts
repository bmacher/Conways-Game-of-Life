import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// COMPONENTS
import { ConwaysNavComponent } from '../components/conways-nav/conways-nav.component';
import { ConwaysFieldComponent } from '../components/conways-field/conways-field.component';

// ROUTES
const routes: Routes = [
  { path: '', redirectTo: '/nav', pathMatch: 'full' },
  { path: 'nav', component: ConwaysNavComponent },
  { path: 'conways-field/:fieldsize', component: ConwaysFieldComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }

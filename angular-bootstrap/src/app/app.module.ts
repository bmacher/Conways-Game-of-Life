// MODULS | LIBRAIES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// ROUTER
import { AppRoutingModule } from './router/app-routing.module';

// COMPONENTS
import { AppComponent } from './app.component';
import { ConwaysNavComponent } from './components/conways-nav/conways-nav.component';
import { ConwaysFieldComponent } from './components/conways-field/conways-field.component';

// SERVICES
import { FieldManager } from './services/field-manager.service';

@NgModule({
  declarations: [
    AppComponent,
    ConwaysNavComponent,
    ConwaysFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    FieldManager
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

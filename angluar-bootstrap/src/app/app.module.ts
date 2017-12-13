// MODULS | LIBRAIES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ROUTER
import { AppRoutingModule } from './router/app-routing.module';

// COMPONENTS
import { AppComponent } from './app.component';
import { FieldComponent } from './components/field/field.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

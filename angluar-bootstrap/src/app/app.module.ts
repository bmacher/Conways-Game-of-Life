// MODULS | LIBRAIES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// ROUTER
import { AppRoutingModule } from './router/app-routing.module';

// COMPONENTS
import { AppComponent } from './app.component';
import { FieldComponent } from './components/field/field.component';

// SERVICES
import { FieldService } from './services/field.service';

@NgModule({
  declarations: [
    AppComponent,
    FieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    FieldService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

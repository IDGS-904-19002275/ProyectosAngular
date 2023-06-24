import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DosPuntosComponent } from './app/dos-puntos/dos-puntos.component';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { ModulosModule } from './app/dos-puntos/modulos/modulos.module';

@NgModule({
  declarations: [
    AppComponent,
    DosPuntosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    ModulosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

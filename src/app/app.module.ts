import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DosPuntosComponent } from './app/dos-puntos/dos-puntos.component';
import {MatSelectModule} from '@angular/material/select';
import { ModulosModule } from './app/dos-puntos/modulos/modulos.module';
import { ResistenciasModule } from './app/rest/resistencias/resistencias.module';
import { CineComponent } from './app/cine/cine.component';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    DosPuntosComponent,
    CineComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    ModulosModule,
    ResistenciasModule,
    MatRadioModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

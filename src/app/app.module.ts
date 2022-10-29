import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Modules/material/material.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { MainComponent } from './Components/main/main.component';
import { EquipmentComponent } from './Components/equipment/equipment.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, MainComponent, EquipmentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

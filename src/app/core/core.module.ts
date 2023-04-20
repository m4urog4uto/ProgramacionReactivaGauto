import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from '../shared/material/material.module';
import { SharedModule } from '../shared/shared.module';

import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    SharedModule
  ],
  providers: [],
  exports: [
    LayoutComponent
  ]
})
export class CoreModule { }

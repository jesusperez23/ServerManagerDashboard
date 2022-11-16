import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerciosbebeterciosRoutingModule } from './perciosbebetercios-routing.module';
import { PerciosbebeterciosComponent } from './perciosbebetercios.component';


@NgModule({
  declarations: [
    PerciosbebeterciosComponent
  ],
  imports: [
    CommonModule,
    PerciosbebeterciosRoutingModule
  ]
})
export class PerciosbebeterciosModule { }

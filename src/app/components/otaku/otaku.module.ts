import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtakuRoutingModule } from './otaku-routing.module';
import { OtakuComponent } from './otaku.component';


@NgModule({
  declarations: [
    OtakuComponent
  ],
  imports: [
    CommonModule,
    OtakuRoutingModule
  ]
})
export class OtakuModule { }

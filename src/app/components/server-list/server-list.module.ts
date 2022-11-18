import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServerListRoutingModule } from './server-list-routing.module';
import { ServerListComponent } from './server-list.component';


@NgModule({
  declarations: [
    ServerListComponent
  ],
  imports: [
    CommonModule,
    ServerListRoutingModule
  ]
})
export class ServerListModule { }

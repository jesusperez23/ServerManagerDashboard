import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerciosbebeterciosComponent } from './perciosbebetercios.component';

const routes: Routes = [{ path: '', component: PerciosbebeterciosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerciosbebeterciosRoutingModule { }

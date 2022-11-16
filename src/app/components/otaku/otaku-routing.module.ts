import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtakuComponent } from './otaku.component';

const routes: Routes = [{ path: '', component: OtakuComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtakuRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdiosComponent } from './components/adios/adios.component';
import { ToRouteComponent } from './components/to-route/to-route.component';

const routes: Routes = [{ path: 'toRoute', component: ToRouteComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

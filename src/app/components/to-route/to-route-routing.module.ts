import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ToRouteComponent } from "./to-route.component";

const routes: Routes = [{ path: "", component: ToRouteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToRouteRoutingModule {}

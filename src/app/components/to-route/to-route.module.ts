import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ToRouteRoutingModule } from "./to-route-routing.module";

import { ToRouteComponent } from "./to-route.component";

@NgModule({
  declarations: [ToRouteComponent],
  imports: [ToRouteRoutingModule],
  providers: [],
})
export class ToRouteModule {}

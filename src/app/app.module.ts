import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AdiosComponent } from "./components/adios/adios.component";
import { ToRouteComponent } from "./components/to-route/to-route.component";

@NgModule({
  declarations: [AppComponent, AdiosComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

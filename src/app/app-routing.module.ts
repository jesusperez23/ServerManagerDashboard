import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { AdiosComponent } from "./components/adios/adios.component";
import { ToRouteComponent } from "./components/to-route/to-route.component";

const routes: Routes = [
  {
    path: "toRoute",
    loadChildren: () =>
      import("./components/to-route/to-route.module").then(
        (m) => m.ToRouteModule
      ),
  },
  {
    path: "otaku/:id",
    loadChildren: () =>
      import("./components/otaku/otaku.module").then((m) => m.OtakuModule),
  },
  {
    path: "percios",
    loadChildren: () =>
      import("./components/perciosbebetercios/perciosbebetercios.module").then(
        (m) => m.PerciosbebeterciosModule
      ),
  },
  {
    path: "**",
    loadChildren: () =>
      import("./components/canvas/canvas.module").then((m) => m.CanvasModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "canvas",
    loadChildren: () =>
      import("./components/canvas/canvas.module").then((m) => m.CanvasModule),
  },
  {
    path: "**",
    loadChildren: () =>
      import("./components/server-list/server-list.module").then(
        (m) => m.ServerListModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

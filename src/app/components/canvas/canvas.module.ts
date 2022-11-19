import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CanvasRoutingModule } from "./canvas-routing.module";
import { CanvasComponent } from "./canvas.component";
import { FileFormComponent } from "./file-form/file-form.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [CanvasComponent, FileFormComponent],
  imports: [CommonModule, CanvasRoutingModule, ReactiveFormsModule],
})
export class CanvasModule {}

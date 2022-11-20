import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { CardComponent } from "./card/card.component";

const material = [MatCardModule];
const modules = [CommonModule, ReactiveFormsModule, ...material];
const components = [CardComponent];
@NgModule({
  declarations: [CardComponent],
  imports: modules,
  exports: [...modules, ...components],
})
export class SharedModule {}

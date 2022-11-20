import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ServerListRoutingModule } from "./server-list-routing.module";
import { ServerListComponent } from "./server-list.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [ServerListComponent],
  imports: [SharedModule, ServerListRoutingModule],
})
export class ServerListModule {}

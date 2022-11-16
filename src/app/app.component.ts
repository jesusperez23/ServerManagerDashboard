import { Component } from "@angular/core";
import { CommunicationsService } from "./services/communications.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "ServerManagerDashboard";

  public id: number;

  constructor(private communicationService: CommunicationsService) {
    this.id = this.communicationService.getStorage();
  }

  public lavida(param: string) {
    console.log(param);
  }
}

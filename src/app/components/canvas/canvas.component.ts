import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Ifile, Iserver } from "src/app/model/server.interface";
import { ServerService } from "src/app/services/server.service";

@Component({
  selector: "app-canvas",
  templateUrl: "./canvas.component.html",
  styleUrls: ["./canvas.component.scss"],
})
export class CanvasComponent implements OnInit {
  public textContent = "";
  public serverInformation: Iserver;
  public formEnabled = false;

  constructor(private serverService: ServerService, private route: Router) {
    this.serverInformation =
      this.route.getCurrentNavigation()?.extras.state?.server;
  }

  ngOnInit(): void {
    this.serverInformation.scripts = this.serverInformation.scripts.map(
      (script: Ifile) => {
        return {
          ...script,
          cardContent: [`${script.content}`],
        };
      }
    );
    this.serverInformation.logs = this.serverInformation.logs.map(
      (log: Ifile) => {
        return {
          ...log,
          cardContent: [`${log.content}`],
        };
      }
    );
  }
  public showForm() {
    this.formEnabled = !this.formEnabled;
  }

  public actionsButton(event: any) {}
}

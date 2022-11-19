import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Iserver } from "src/app/model/server.interface";
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
    // this.serverService
    //   .getFile("sardina.sh", "perciosbebetercios", "SCRIPT")
    //   .subscribe(
    //     (res: any) => {
    //       this.textContent = res.response;
    //     },
    //     (err) => {
    //       console.log(err);
    //     }
    //   );
  }
  public showForm() {
    this.formEnabled = !this.formEnabled;
  }
}

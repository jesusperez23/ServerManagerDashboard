import { Component, OnInit } from "@angular/core";
import { ServerService } from "src/app/services/server.service";

@Component({
  selector: "app-canvas",
  templateUrl: "./canvas.component.html",
  styleUrls: ["./canvas.component.scss"],
})
export class CanvasComponent implements OnInit {
  public textContent = "";

  constructor(private serverService: ServerService) {}

  ngOnInit(): void {
    this.serverService
      .getFile("sardina.sh", "perciosbebetercios", "SCRIPT")
      .subscribe(
        (res: any) => {
          this.textContent = res.response;
        },
        (err) => {
          console.log(err);
        }
      );
  }
}

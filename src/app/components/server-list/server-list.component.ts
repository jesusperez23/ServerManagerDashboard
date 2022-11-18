import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Iserver } from "src/app/model/server.interface";
import { ServerService } from "src/app/services/server.service";

@Component({
  selector: "app-server-list",
  templateUrl: "./server-list.component.html",
  styleUrls: ["./server-list.component.scss"],
})
export class ServerListComponent implements OnInit {
  public listado: Iserver[];

  constructor(private router: Router, private serverService: ServerService) {}

  ngOnInit(): void {
    this.serverService.getServer().subscribe(
      (res: Iserver[]) => {
        this.listado = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public openServer(server: Iserver) {
    this.router.navigate(["canvas"], { state: { server: server } });
  }
}

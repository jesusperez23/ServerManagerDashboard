import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subject, takeUntil } from "rxjs";
import { Iserver } from "src/app/model/server.interface";
import { ServerService } from "src/app/services/server.service";

@Component({
  selector: "app-server-list",
  templateUrl: "./server-list.component.html",
  styleUrls: ["./server-list.component.scss"],
})
export class ServerListComponent implements OnInit, OnDestroy {
  public listado: Iserver[];

  private destroyBs: Subject<boolean> = new Subject<boolean>();

  constructor(private router: Router, private serverService: ServerService) {}

  ngOnInit(): void {
    this.serverService
      .getServer()
      .pipe(takeUntil(this.destroyBs))
      .subscribe(
        (res: Iserver[]) => {
          this.listado = res.map((server: Iserver) => {
            return {
              ...server,
              cardContent: [
                `Scripts:${server.scripts.length}`,
                `Logs:${server.logs.length}`,
              ],
            };
          });
        },
        (err) => {
          console.log(err);
        }
      );
  }

  public openServer(server: Iserver) {
    this.router.navigate(["canvas"], { state: { server: server } });
  }

  public actionsButton(event: any) {
    if (event.event === "Open") {
      this.openServer(event.object);
    }
  }

  ngOnDestroy(): void {
    this.destroyBs.next(true);
  }
}

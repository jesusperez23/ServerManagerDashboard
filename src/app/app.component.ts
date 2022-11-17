import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { Subject, takeUntil } from "rxjs";
import { CommunicationsService } from "./services/communications.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
  title = "ServerManagerDashboard";

  public id: number;
  public loading = true;

  private destroyBs: Subject<boolean> = new Subject<boolean>();

  constructor(private communicationService: CommunicationsService) {}

  ngOnInit(): void {
    // this.communicationService
    //   .getStorage$()
    //   .pipe(takeUntil(this.destroyBs))
    //   .subscribe((id: number) => {
    //     this.id = id;
    //     this.loading = false;
    //   });
  }

  public onClick(numero: number) {
    this.communicationService.setStorage(numero);
  }

  public lavida(param: string) {
    console.log(param);
  }

  ngOnDestroy(): void {
    this.destroyBs.next(true);
  }
}

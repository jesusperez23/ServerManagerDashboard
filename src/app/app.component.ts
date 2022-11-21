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
export class AppComponent implements OnInit {
  title = "ServerManagerDashboard";

  public id: number;
  public loading = true;

  constructor(private communicationService: CommunicationsService) {}

  ngOnInit(): void {}

  public onClick(numero: number) {
    this.communicationService.setStorage(numero);
  }

  public lavida(param: string) {
    console.log(param);
  }
}

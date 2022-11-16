import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { CommunicationsService } from "src/app/services/communications.service";

@Component({
  selector: "app-otaku",
  templateUrl: "./otaku.component.html",
  styleUrls: ["./otaku.component.scss"],
})
export class OtakuComponent implements OnInit, OnDestroy {
  public id = 0;

  constructor(
    private route: ActivatedRoute,
    private communicationService: CommunicationsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = Number(params.get("id"));
      this.communicationService.setStorage(this.id);
    });
  }

  ngOnDestroy(): void {}
}

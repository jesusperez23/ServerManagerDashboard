import { Component, OnInit } from "@angular/core";
import { CommunicationsService } from "src/app/services/communications.service";

@Component({
  selector: "app-perciosbebetercios",
  templateUrl: "./perciosbebetercios.component.html",
  styleUrls: ["./perciosbebetercios.component.scss"],
})
export class PerciosbebeterciosComponent implements OnInit {
  public id: number;
  public items: string[] = ["asd", "lol", "fuckotakus", "juja"];

  constructor(private communicationService: CommunicationsService) {
    this.id = communicationService.getStorage();
  }

  ngOnInit(): void {}
}

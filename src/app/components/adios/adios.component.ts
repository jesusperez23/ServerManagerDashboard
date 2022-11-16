import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "adios",
  templateUrl: "./adios.component.html",
  styleUrls: ["./adios.component.scss"],
})
export class AdiosComponent {
  @Input() id = -1;
  @Output() buttonClicked = new EventEmitter<string>();
  public selectedId: number;

  constructor() {
    this.selectedId = this.id;
  }

  public onEventeClicked(event: any) {
    this.buttonClicked.emit(event);
  }
}

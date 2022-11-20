import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() content: string[];
  @Input() actions: string[];
  @Input() objectToReturn: any;
  @Output() actionClick = new EventEmitter<{ event: any; object: any }>();

  constructor() {}

  ngOnInit(): void {}

  public onActionClicked(action: string) {
    this.actionClick.emit({
      event: action,
      object: this.objectToReturn,
    });
  }
}

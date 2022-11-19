import { Component, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Ifile, Iserver } from "src/app/model/server.interface";
import { ServerService } from "src/app/services/server.service";

@Component({
  selector: "app-file-form",
  templateUrl: "./file-form.component.html",
  styleUrls: ["./file-form.component.scss"],
})
export class FileFormComponent implements OnInit {
  @Input() server: Iserver;

  public inputData: Ifile;

  public formGroup: FormGroup = new FormGroup({
    type: new FormControl("", [Validators.required]),
    name: new FormControl("", [Validators.required]),
    content: new FormControl("", [Validators.required]),
  });

  constructor(private serverService: ServerService, private router: Router) {}

  ngOnInit(): void {}

  public sendForm() {
    this.inputData = {
      serverName: this.server.name,
      type: this.formGroup.get("type")?.value,
      name: this.formGroup.get("name")?.value,
      content: this.formGroup.get("content")?.value,
    };
    this.serverService.createFile(this.inputData).subscribe(
      (res) => {
        this.router.navigate([""]);
      },
      (err) => {
        console.error(err);
      }
    );
  }
}

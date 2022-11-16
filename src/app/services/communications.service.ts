import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CommunicationsService {
  public storage: number;

  constructor() {
    this.storage = -1;
  }

  public setStorage(storage: number): void {
    this.storage = Number(storage);
  }

  public getStorage(): number {
    return this.storage;
  }
}

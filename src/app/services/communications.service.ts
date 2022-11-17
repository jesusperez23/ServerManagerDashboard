import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CommunicationsService {
  public storage: number;

  private storageBS: Subject<number> = new Subject<number>();
  private storage$: Observable<number> = this.storageBS.asObservable();

  constructor() {
    this.storage = -1;
  }

  public setStorage(storage: number): void {
    this.storage = Number(storage);
    this.storageBS.next(storage);
  }

  public getStorage(): number {
    return this.storage;
  }

  public getStorage$(): Observable<number> {
    return this.storage$;
  }
}

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ServerService {
  private baseRoute = "http://localhost:3003";

  constructor(private http: HttpClient) {}

  public getFile(fileName: string, serverName: string, type: string) {
    const headers = new HttpHeaders({
      Authorization: "Bearer julenverne",
    });
    return this.http.get(
      `${this.baseRoute}/file?fileName=${fileName}&serverName=${serverName}&type=${type}`,
      {
        headers,
      }
    );
  }
}

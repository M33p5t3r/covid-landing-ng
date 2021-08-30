import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CovidApiService {

  headers = new Headers();
  options: any;

  private worldurl: string = "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php";

  constructor(private http: HttpClient) {

  }

  /* Get World Stats Call */
  getWorld(): Observable<any> {
    return this.http.get(this.worldurl, {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
        'x-rapidapi-key': 'cbdb94a2b5msha31004a4d5ce07fp126634jsncf0173485209'
      })
    }).pipe((response) => response);
  }

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CovidApiService {

  headers = new Headers();
  options: any;


  /* For Api Usage Please Subscribe to Api: https://rapidapi.com/astsiatsko/api/coronavirus-monitor 

    Which will provide you with a X-rapidapi-host url and X-rapidapi-key to use in the function below
    
  */

  private worldurl: string = "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php";

  constructor(private http: HttpClient) {

  }

  /* Get World Stats Call */
  getWorld(): Observable<any> {
    return this.http.get(this.worldurl, {
      headers: new HttpHeaders({
        //'x-rapidapi-host': 'Please enter x-rapidapi-host url here',
        //  'x-rapidapi-key': 'Please enter x-rapidapi-key here'
      })
    }).pipe((response) => response);
  }

}

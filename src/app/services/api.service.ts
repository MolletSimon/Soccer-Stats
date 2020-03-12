import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public apiUrl = 'http://api.football-data.org/v2';
  public httpOptions = {
    headers: new HttpHeaders(
        {
          'X-Auth-Token': '790700acac2045d8875e16647c449d96'
        }
    )
  };

  constructor(private httpClient: HttpClient) { }
}

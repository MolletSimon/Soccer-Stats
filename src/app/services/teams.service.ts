import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  logo: string;
  teams: any[];
  public httpOptions = {
    headers: new HttpHeaders(
        {
          'X-Auth-Token': '7f22ae6e327546f0b197400f8b9b70ef'
        }
    )
  };
  constructor(private httpClient: HttpClient, private apiService: ApiService) { }

  getLogo(id: number): Observable<any> {
    return this.httpClient.get<any>(this.apiService.apiUrl + `/teams/${id}`, this.httpOptions);
  }

  getLogosRequest(idLeague: number): Observable<any> {
    return this.httpClient.get<any>(this.apiService.apiUrl + `/competitions/${idLeague}/teams`, this.httpOptions);
  }
}

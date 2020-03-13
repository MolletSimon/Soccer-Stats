import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {TeamList} from '../model/team-list';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
<<<<<<< Updated upstream

  logo: string;
  constructor(private httpClient: HttpClient, private apiService: ApiService) { }

  getLogo(id: number): Observable<any> {
    return this.httpClient.get<any>(this.apiService.apiUrl + `/teams/${id}`, this.apiService.httpOptions);
  }

  getTeams(): Observable<any> {
    return this.httpClient.get<any>();
=======
  public httpOptions = {
    headers: new HttpHeaders(
        {
          'X-Auth-Token': '7f22ae6e327546f0b197400f8b9b70ef'
        }
    )
  };
  constructor(private httpClient: HttpClient, private apiService: ApiService) { }

  getLogosRequest(idLeague: number): Observable<TeamList> {
    return this.httpClient.get<TeamList>(this.apiService.apiUrl + `/competitions/${idLeague}/teams`, this.httpOptions);
>>>>>>> Stashed changes
  }
}

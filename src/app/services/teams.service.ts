import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {TeamList} from '../model/team-list';
import {Team} from '../model/team';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  public httpOptions = {
    headers: new HttpHeaders(
        {
          'X-Auth-Token': '7f22ae6e327546f0b197400f8b9b70ef'
        }
    )
  };
  public httpOptions2 = {
    headers: new HttpHeaders(
        {
          'X-Auth-Token': '8e7c3277e9f7499d987010dca7c65f46'
        }
    )
  };
  constructor(private httpClient: HttpClient, private apiService: ApiService) { }

  getTeams(idLeague: number): Observable<TeamList> {
    return this.httpClient.get<TeamList>(this.apiService.apiUrl + `/competitions/${idLeague}/teams`, this.httpOptions);
  }

  getTeam(idTeam: number): Observable<Team> {
    return this.httpClient.get<Team>(this.apiService.apiUrl + `/teams/${idTeam}`, this.httpOptions2);
  }
}

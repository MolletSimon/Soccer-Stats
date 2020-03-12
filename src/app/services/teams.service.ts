import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  logo: string;
  constructor(private httpClient: HttpClient, private apiService: ApiService) { }

  getLogo(id: number): Observable<any> {
    return this.httpClient.get<any>(this.apiService.apiUrl + `/teams/${id}`, this.apiService.httpOptions);
  }

  getTeams(): Observable<any> {
    return this.httpClient.get<any>();
  }
}

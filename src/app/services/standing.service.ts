import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StandingList} from '../model/standing-list';

@Injectable({
    providedIn: 'root'
})
export class StandingService {

    constructor(private apiService: ApiService, private httpClient: HttpClient) {
    }

    getStanding(league: number): Observable<StandingList> {
        return this.httpClient.get<StandingList>(this.apiService.apiUrl + `/competitions/${league}/standings`, this.apiService.httpOptions);
    }
}

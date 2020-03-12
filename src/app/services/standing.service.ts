import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StandingService {

    constructor(private apiService: ApiService, private httpClient: HttpClient) {
    }

    getStanding(league: number): Observable<any[]> {
        return this.httpClient.get<any>(this.apiService.apiUrl + `/competitions/${league}/standings`, this.apiService.httpOptions);
    }
}

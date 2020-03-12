import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ScorerService {

    constructor(private apiService: ApiService, private httpClient: HttpClient) {
    }

    getScorers(code: string): Observable<any[]> {
        return this.httpClient.get<any>(this.apiService.apiUrl + `/competitions/${code}/scorers`, this.apiService.httpOptions);
    }
}

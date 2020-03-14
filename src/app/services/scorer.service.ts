import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Scorer} from '../model/scorer';
import {ScorerList} from '../model/scorer-list';

@Injectable({
    providedIn: 'root'
})
export class ScorerService {

    public httpOptions = {
        headers: new HttpHeaders(
            {
                'X-Auth-Token': '8a326a8ed7744246b76d4845d70c0e5d'
            }
        )
    };

    constructor(private apiService: ApiService, private httpClient: HttpClient) {
    }

    getScorers(code: string): Observable<ScorerList> {
        return this.httpClient.get<ScorerList>(this.apiService.apiUrl + `/competitions/${code}/scorers`, this.apiService.httpOptions);
    }
}

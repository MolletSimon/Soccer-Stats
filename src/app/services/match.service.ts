import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {MatchList} from '../model/match-list';

@Injectable({
    providedIn: 'root'
})
export class MatchService {
    public httpOptions = {
        headers: new HttpHeaders(
            {
                'X-Auth-Token': '1ea6c0643bd54e42bb02340589a77fcf'
            }
        )
    };
    constructor(private httpClient: HttpClient, private apiService: ApiService) {
    }

    getMatches(idTeam: number): Observable<MatchList> {
        return this.httpClient.get<MatchList>(this.apiService.apiUrl + `/teams/${idTeam}/matches`, this.httpOptions);
    }

}

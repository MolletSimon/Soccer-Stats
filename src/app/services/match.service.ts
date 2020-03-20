import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {MatchList} from '../model/match-list';
import {MatchCompetitionList} from '../model/match-competition-list';
import {Match} from '../model/match';
import {Result} from '../model/result';
import {Team} from '../model/team';

@Injectable({
    providedIn: 'root'
})
export class MatchService {
    public httpOptions1 = {
        headers: new HttpHeaders(
            {
                'X-Auth-Token': '1ea6c0643bd54e42bb02340589a77fcf'
            }
        )
    };
    public httpOptions2 = {
        headers: new HttpHeaders(
            {
                'X-Auth-Token': '26361a01d3b14c0281e54c20c82127b7'
            }
        )
    };

    constructor(private httpClient: HttpClient, private apiService: ApiService) {
    }

    getMatches(idTeam: number): Observable<MatchList> {
        return this.httpClient.get<MatchList>(this.apiService.apiUrl + `/teams/${idTeam}/matches`, this.httpOptions1);
    }

    getMatchesByLeague(idLeague: number): Observable<MatchCompetitionList> {
        return this.httpClient.get<MatchCompetitionList>(this.apiService.apiUrl + `/competitions/${idLeague}/matches`, this.httpOptions2);
    }

    doTeamWin(match: Match, club: Team): number {
        if (this.checkIfHomeTeam(match, club)) {
            if (match.score.winner === 'HOME_TEAM') {
                return Result.WIN;
            } else if (match.score.winner === 'AWAY_TEAM') {
                return Result.LOSE;
            } else {
                return Result.DRAW;
            }
        } else {
            if (match.score.winner === 'HOME_TEAM') {
                return Result.LOSE;
            } else if (match.score.winner === 'AWAY_TEAM') {
                return Result.WIN;
            } else {
                return Result.DRAW;
            }
        }
    }

    checkIfHomeTeam(match: Match, club: Team): boolean {
        return match.homeTeam.id === club.id;
    }

}

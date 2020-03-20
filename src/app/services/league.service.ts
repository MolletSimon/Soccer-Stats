import {Injectable} from '@angular/core';
import {LeagueId} from '../model/league-id';
import {LeagueCode} from '../model/league-code';

@Injectable({
    providedIn: 'root'
})
export class LeagueService {
    public static league = Number(localStorage.getItem('leagueId') ? localStorage.getItem('leagueId') : LeagueId.FRANCE1);
    public static code = localStorage.getItem('leagueCode') ? localStorage.getItem('leagueCode') : LeagueCode.FRANCE1;

    constructor() {
    }
}

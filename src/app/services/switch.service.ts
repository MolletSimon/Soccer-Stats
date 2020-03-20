import {Injectable} from '@angular/core';
import {LeagueService} from './league.service';
import {LeagueId} from '../model/league-id';
import {LeagueCode} from '../model/league-code';

@Injectable({
    providedIn: 'root'
})
export class SwitchService {

    constructor() {
    }

    switchBpl() {
        localStorage.setItem('leagueId', LeagueId.ENGLAND1.toString());
        localStorage.setItem('leagueCode', LeagueCode.ENGLAND1);
    }

    switchLigueOne() {
        localStorage.setItem('leagueId', LeagueId.FRANCE1.toString());
        localStorage.setItem('leagueCode', LeagueCode.FRANCE1);
    }

    switchPrimeraDivison() {
        localStorage.setItem('leagueId', LeagueId.SPAIN1.toString());
        localStorage.setItem('leagueCode', LeagueCode.SPAIN1);
    }

    switchBundesliga() {
        localStorage.setItem('leagueId', LeagueId.GERMANY1.toString());
        localStorage.setItem('leagueCode', LeagueCode.GERMANY1);
    }

    switchSerieA() {
        localStorage.setItem('leagueId', LeagueId.ITALY1.toString());
        localStorage.setItem('leagueCode', LeagueCode.ITALY1);
    }
}

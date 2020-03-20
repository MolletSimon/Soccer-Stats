import {Injectable} from '@angular/core';
import {LeagueId} from '../model/league-id';

@Injectable({
    providedIn: 'root'
})
export class LeagueService {
    public static league = LeagueId.FRANCE1;

    constructor() {
    }
}

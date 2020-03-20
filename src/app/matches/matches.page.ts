import {Component, OnInit} from '@angular/core';
import {MatchService} from '../services/match.service';
import {Match} from '../model/match';
import {Result} from '../model/result';
import {LeagueId} from '../model/league-id';
import {TeamsService} from '../services/teams.service';
import {LeagueService} from '../services/league.service';

@Component({
    selector: 'app-matches',
    templateUrl: 'matches.page.html',
    styleUrls: ['matches.page.scss']
})
export class MatchesPage implements OnInit{
    matches: Match[];
    tenNextMatches: Match[];

    constructor(private matchService: MatchService, private teamService: TeamsService) {
    }

    ngOnInit(): void {
        this.getMatches(LeagueService.league);
    }

    getMatches(idLeague: number) {
        this.matchService.getMatchesByLeague(idLeague).subscribe(matches => {
            this.matches = matches.matches;
            this.matches = this.matches.reverse();
            this.teamService.getTeams(idLeague).subscribe(teams => {
                this.matches.forEach(match => {
                    match.homeTeam = teams.teams.find(t => t.id === match.homeTeam.id);
                    match.awayTeam = teams.teams.find(t => t.id === match.awayTeam.id);
                });
            });
            this.tenNextMatches = this.matches.slice(0, 10);
        });
    }

}

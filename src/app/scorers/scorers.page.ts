import { Component, OnInit } from '@angular/core';
import { ScorerService } from '../services/scorer.service';
import { Scorer } from '../model/scorer';
import { TeamsService } from '../services/teams.service';
import { Team } from '../model/team';
import { LeagueCode } from '../model/league-code';
import { LeagueId } from '../model/league-id';

@Component({
    selector: 'app-scorers',
    templateUrl: './scorers.page.html',
    styleUrls: ['./scorers.page.scss'],
})
export class ScorersPage implements OnInit {

    scorers: Scorer[];
    constructor(private scorerService: ScorerService, private teamService: TeamsService) {
    }

    ngOnInit() {
        this.getScorers(LeagueCode.FRANCE1);
    }

    getScorers(league: string) {
        this.scorerService.getScorers(league).subscribe(scorers => {
            this.scorers = scorers.scorers;
            this.teamService.getLogosRequest(LeagueId.FRANCE1).subscribe(teams => {
                this.teams = teams.teams;
                console.log(scorers);
                this.scorers.forEach(scorer => {
                    scorer.team.crestUrl = this.teams.find(t => t.id === scorer.team.id).crestUrl;
                });
            });
        });
    }
}

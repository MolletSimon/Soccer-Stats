import {Component, OnInit} from '@angular/core';
import {ScorerService} from '../services/scorer.service';
import {Scorer} from '../model/scorer';
import {TeamsService} from '../services/teams.service';
import {Team} from '../model/team';

@Component({
    selector: 'app-scorers',
    templateUrl: './scorers.page.html',
    styleUrls: ['./scorers.page.scss'],
})
export class ScorersPage implements OnInit {
    teams: Team[];
    scorers: Scorer[];
    constructor(private scorerService: ScorerService, private teamService: TeamsService) {
    }

    ngOnInit() {
      this.getScorers('FL1');
    }

    getScorers(league: string) {
        this.scorerService.getScorers(league).subscribe(scorers => {
          this.scorers = scorers["scorers"];
          this.teamService.getLogosRequest(2015).subscribe(teams => {
              this.teams = teams.teams;
              console.log(this.teams);
              this.scorers.forEach(scorer => {
                  scorer.team.crestUrl = this.teams.find(t => t.id === scorer.team.id).crestUrl;
              });
          });
        });
    }
}

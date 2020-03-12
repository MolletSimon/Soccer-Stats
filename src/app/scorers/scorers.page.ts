import {Component, OnInit} from '@angular/core';
import {ScorerService} from '../services/scorer.service';
import {Scorer} from '../model/scorer';
import {TeamsService} from '../services/teams.service';

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
      this.getScorers('FL1');
    }

    getScorers(league: string) {
        this.scorerService.getScorers(league).subscribe(scorers => {
          this.scorers = scorers["scorers"];
          this.scorers.forEach((scorer) => {
              this.teamService.getLogo(scorer.team.id).subscribe(response => {
                  scorer.team.crestUrl = response["crestUrl"];
              })
          });
        });
    }
}

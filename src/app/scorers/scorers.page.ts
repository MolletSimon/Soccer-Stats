import { Component, OnInit } from '@angular/core';
import { ScorerService } from '../services/scorer.service';
import { Scorer } from '../model/scorer';
import { TeamsService } from '../services/teams.service';
import { Team } from '../model/team';
import { LeagueCode } from '../model/league-code';
import { LeagueId } from '../model/league-id';
import {ModalController} from '@ionic/angular';
import {ScorerInfoComponent} from '../scorer-info/scorer-info.component';
import {LeagueService} from '../services/league.service';

@Component({
    selector: 'app-scorers',
    templateUrl: './scorers.page.html',
    styleUrls: ['./scorers.page.scss'],
})
export class ScorersPage implements OnInit {
    teams: Team[];
    scorers: Scorer[];
    constructor(private scorerService: ScorerService, private teamService: TeamsService, private modalCtrl: ModalController) {
    }

    ngOnInit() {
        this.getScorers(LeagueCode.FRANCE1);
    }

    async openModal(scorer: Scorer) {
        const modal = await this.modalCtrl.create({
            component: ScorerInfoComponent,
            componentProps: {
                'scorer': scorer
            }
        });

        await modal.present();
    }

    getScorers(league: string) {
        this.scorerService.getScorers(league).subscribe(scorers => {
            this.scorers = scorers.scorers;
            this.teamService.getTeams(LeagueService.league).subscribe(teams => {
                this.teams = teams.teams;
                this.scorers.forEach(scorer => {
                    scorer.team.crestUrl = this.teams.find(t => t.id === scorer.team.id).crestUrl;
                });
            });
        });
    }
}

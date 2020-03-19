import {Component, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {Team} from '../model/team';
import {Match} from '../model/match';
import {Result} from '../model/result';
import {LeagueId} from '../model/league-id';
import {MatchService} from '../services/match.service';
import {TeamsService} from '../services/teams.service';

@Component({
    selector: 'app-last-result',
    templateUrl: './last-result.component.html',
    styleUrls: ['./last-result.component.scss'],
})
export class LastResultComponent implements OnInit {
    club: Team;
    result: number;
    done = false;
    lastTwentyGames: Match[];
    WIN = Result.WIN;
    LOSE = Result.LOSE;
    DRAW = Result.DRAW;

    constructor(
        private navParams: NavParams,
        private modalCtrl: ModalController,
        private matchService: MatchService,
        private teamService: TeamsService
    ) {
        this.club = navParams.get('team');
        this.result = navParams.get('result');
    }

    ngOnInit() {
        this.getMatches();
    }

    closeModal() {
        this.modalCtrl.dismiss();
    }

    getMatchesResult() {
        console.log(this.lastTwentyGames);
        const lastResult = this.lastTwentyGames;
        if (this.result === 1) {
            this.lastTwentyGames = [];
            lastResult.forEach((match) => {
                if (this.doTeamWin(match) === Result.LOSE) {
                    this.lastTwentyGames.push(match);
                }
            });
        } else if (this.result === 2) {
            this.lastTwentyGames = [];
            lastResult.forEach((match) => {
                if (this.doTeamWin(match) === Result.DRAW) {
                    this.lastTwentyGames.push(match);
                }
            });
        } else if (this.result === 3) {
            this.lastTwentyGames = [];
            lastResult.forEach((match) => {
                if (this.doTeamWin(match) === Result.WIN) {
                    this.lastTwentyGames.push(match);
                }
            });
        }
        this.done = true;
    }

    getMatches() {
        this.matchService.getMatches(this.club.id).subscribe((matches) => {
            this.lastTwentyGames = matches.matches.slice(0, 20);
            this.teamService.getTeams(LeagueId.FRANCE1).subscribe((teams) => {
                this.lastTwentyGames.forEach(match => {
                    match.score.homeTeam = teams.teams.find(t => t.id === match.homeTeam.id);
                    match.score.awayTeam = teams.teams.find(t => t.id === match.awayTeam.id);
                });
            });

            this.getMatchesResult();
        });
    }

    doTeamWin(match: Match): number {
        return this.matchService.doTeamWin(match, this.club);
    }

}

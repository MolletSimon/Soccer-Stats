import {Component, OnInit} from '@angular/core';
import {LeagueService} from '../services/league.service';
import {LeagueId} from '../model/league-id';
import {LeagueCode} from '../model/league-code';
import {SwitchService} from '../services/switch.service';
import {Router} from '@angular/router';
import {RankingPage} from '../ranking/ranking.page';

@Component({
    selector: 'app-fab',
    templateUrl: './fab.component.html',
    styleUrls: ['./fab.component.scss'],
})
export class FabComponent implements OnInit {
    private league = LeagueService.league;

    constructor(
        private switchService: SwitchService,
        private router: Router,
    ) {
    }

    ngOnInit() {
    }

    switchBpl() {
        this.switchService.switchBpl();
        this.league = LeagueId.ENGLAND1;
        window.location.reload();
    }

    switchLigueOne() {
        this.switchService.switchLigueOne();
        this.league = LeagueId.FRANCE1;
        window.location.reload();
    }

    switchPrimeraDivison() {
        this.switchService.switchPrimeraDivison();
        this.league = LeagueId.SPAIN1;
        window.location.reload();
    }

    switchBundesliga() {
        this.switchService.switchBundesliga();
        this.league = LeagueId.GERMANY1;
        window.location.reload();
    }

    switchSerieA() {
        this.switchService.switchSerieA();
        this.league = LeagueId.ITALY1;
        window.location.reload();
    }
}

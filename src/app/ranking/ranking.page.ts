import {Component, OnInit} from '@angular/core';
import {MenuController, ModalController} from '@ionic/angular';
import {StandingService} from '../services/standing.service';
import {TeamPosition} from '../model/team-position';
import {StandingInfoComponent} from '../standing-info/standing-info.component';

@Component({
    selector: 'ranking',
    templateUrl: 'ranking.page.html',
    styleUrls: ['ranking.page.scss']
})
export class RankingPage implements OnInit {

    standing: TeamPosition[];

    constructor(private menu: MenuController, private standingService: StandingService, private modalCtrl: ModalController) {
    }

    ngOnInit(): void {
      this.getStanding(2015);
    }

    async showModal(club: TeamPosition) {
        const modal = await this.modalCtrl.create({
            component: StandingInfoComponent,
            componentProps: {
                'club': club,
            }
        });
        await modal.present();
    }

  getStanding(league: number) {
        this.standingService.getStanding(league).subscribe(rank => {
                // @ts-ignore
              this.standing = rank.standings[0].table;
              console.log(this.standing);
            },
            (error) => {
                console.log(error);
            });
    }
}

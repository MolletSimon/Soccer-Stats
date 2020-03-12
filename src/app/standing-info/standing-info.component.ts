import {Component, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {TeamPosition} from '../model/team-position';

@Component({
    selector: 'app-standing-info',
    templateUrl: './standing-info.component.html',
    styleUrls: ['./standing-info.component.scss'],
})
export class StandingInfoComponent implements OnInit {

    team: TeamPosition;

    constructor(private modalCtrl: ModalController, private navParams: NavParams) {
        this.team = navParams.get('club');
        console.log(this.team);
    }

    ngOnInit() {
    }

    closeModal() {
        this.modalCtrl.dismiss({
            dismissed: true,
        });
    }
}

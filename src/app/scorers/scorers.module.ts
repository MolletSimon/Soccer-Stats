import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScorersPage } from './scorers.page';
import {RouterModule} from '@angular/router';
import {RankingPage} from '../ranking/ranking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: ScorersPage }])
  ],
  declarations: [ScorersPage]
})
export class ScorersPageModule {}

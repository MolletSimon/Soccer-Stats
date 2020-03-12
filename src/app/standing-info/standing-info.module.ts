import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StandingInfoComponent} from './standing-info.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule
    ],
    declarations: [StandingInfoComponent],
    entryComponents: [StandingInfoComponent],
    exports: [StandingInfoComponent]
})
export class StandingInfoModule {}

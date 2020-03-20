import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScorerInfoComponent} from './scorer-info.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule
    ],
    declarations: [ScorerInfoComponent],
    entryComponents: [ScorerInfoComponent],
    exports: [ScorerInfoComponent]
})
export class ScorerInfoModule {}

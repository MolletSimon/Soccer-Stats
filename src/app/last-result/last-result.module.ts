import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LastResultComponent} from './last-result.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule
    ],
    declarations: [LastResultComponent],
    entryComponents: [LastResultComponent],
    exports: [LastResultComponent]
})
export class LastResultModule {}

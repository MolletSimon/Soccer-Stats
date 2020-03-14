import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'tab1',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../ranking/ranking.module').then(m => m.Tab1PageModule)
                    }
                ]
            },
            {
                path: 'matches',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../matches/matches.module').then(m => m.MatchesModule)
                    }
                ]
            },
            {
                path: 'scorers',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../scorers/scorers.module').then(m => m.ScorersPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/tab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule { }

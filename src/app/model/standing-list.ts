import {Competition} from './competition';
import {Season} from './season';
import {Standing} from './standing';

export interface StandingList {
    competition: Competition;
    season: Season;
    standings: Standing[];
}

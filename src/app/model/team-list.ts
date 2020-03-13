import {Competition} from './competition';
import {Season} from './season';
import {Team} from './team';

export interface TeamList {
    count: number;
    filters: {};
    competition: Competition;
    season: Season;
    teams: Team[];
}

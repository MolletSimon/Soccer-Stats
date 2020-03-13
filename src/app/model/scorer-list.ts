import {Competition} from './competition';
import {Season} from './season';
import {Scorer} from './scorer';

export interface ScorerList {
    count: number;
    filters: {
        limit: number
    };
    competition: Competition;
    season: Season;
    scorers: Scorer[];
}

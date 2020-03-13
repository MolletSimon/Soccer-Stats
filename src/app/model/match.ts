import {Competition} from './competition';
import {Season} from './season';
import {Score} from './score';
import {Team} from './team';

export interface Match {
    id: number;
    competition: Competition;
    season: Season;
    stage: string;
    group: string;
    score: Score;
    homeTeam: Team;
    awayTeam: Team;
}

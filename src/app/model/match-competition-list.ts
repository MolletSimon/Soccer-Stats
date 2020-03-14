import {Competition} from './competition';
import {Match} from './match';

export interface MatchCompetitionList {
    count: number;
    competition: Competition;
    matches: Match[];
}

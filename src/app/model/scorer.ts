import {Player} from './player';
import {Team} from './team';

export interface Scorer {
    player: Player;
    team: Team;
    numberOfGoals: number,
}

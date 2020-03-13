import {TeamPosition} from './team-position';

export interface Standing {
    stage: string;
    type: string;
    group: string;
    table: TeamPosition[];
}

import {Team} from './team';

export interface Score {
    winner: string;
    duration: string;
    fullTime: {
        homeTeam: number;
        awayTeam: number;
    };
    homeTeam: Team;
    awayTeam: Team;
}

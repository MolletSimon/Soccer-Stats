import {Area} from './area';

export interface Competition {
    id: number;
    area: Area;
    name: string;
    code: string;
    plan: string;
    lastUpdated: string;
}

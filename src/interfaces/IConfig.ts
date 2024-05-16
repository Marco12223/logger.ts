import {Levels} from "../enums/levels";

export interface IConfig {
    rootLevel: Levels;
    disabled?: boolean;
}
import {Levels} from "../enums/levels";

/*
*
* IPattern is an interface that defines the structure of the pattern object.
* Here, we define the level, sublog, date, and time properties.
* @returns {Levels} level - The level of the log message.
* @returns {string} sublog - The sublog of the log message. A sublog is something like [DATETIME] [SUBLOG] [LEVEL] MESSAGE.
* @returns {string} date - The date of the log message. The date is in the format YYYY-MM-DD.
* @returns {string} time - The time of the log message. The time is in the format HH:MM:SS.
*
* */
export interface IPattern {
    level?: Levels;
    sublog: string;
    date?: string;
    time?: string;
}
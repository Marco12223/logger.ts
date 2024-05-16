import {Colors} from "./enums/colors";
import {getConfig} from "../index";
import {Levels} from "./enums/levels";

export class Log {

    datetime: Date = new Date();
    datetimePrefix: string = this.datetime.getUTCDay() + "." + this.datetime.getUTCMonth() + "." + this.datetime.getUTCFullYear() + " " + this.datetime.getHours() + ":" + this.datetime.getMinutes() + ":" + this.datetime.getSeconds();

    public constructor() {}

    public error(message: string): void {
        console.error(Colors.black + "[" + Colors.yellow + this.datetimePrefix + Colors.black + "]" + Colors.black + "[" + Colors.red + "ERROR" + Colors.black + "]" + Colors.red + " " + message);
    }

    public warn(message: string): void {
        console.warn(Colors.black + "[" + Colors.yellow + this.datetimePrefix + Colors.black + "]" + Colors.black + "[" + Colors.yellow + "WARN" + Colors.black + "]" + Colors.reset + " " + message);
    }

    public info(message: string): void {
        console.info(Colors.black + "[" + Colors.yellow + this.datetimePrefix + Colors.black + "]" + Colors.black + "[" + Colors.green + "INFO" + Colors.black + "]" + Colors.reset + " " + message);
    }

    public debug(message: string): void {
        if(getConfig().rootLevel == Levels.debug) {
            console.debug(Colors.black + "[" + Colors.yellow + this.datetimePrefix + Colors.black + "]" + Colors.black + "[" + Colors.blue + "DEBUG" + Colors.black + "]" + Colors.reset + " " + message);
        }
    }

}
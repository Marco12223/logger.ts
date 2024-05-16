import {IConfig} from "./src/interfaces/IConfig";
import {Levels} from "./src/enums/levels";
import {Log} from "./src/log";

let loggerId: any = '';
let config: IConfig = {
    rootLevel: Levels.info,
    disabled: false
};

export class Logger {

    /*
    *
    * This is the constructor of the Logger class.
    * That's the point where we initialize the logger and generate a unique loggerId.
    * You can get the loggerId by calling the getLoggerId method.
    *
    * */
    public constructor() {
        this.setLoggerId(this.generateLoggerId());
    }

    /*
    *
    * This method sets the configuration of the logger.
    * You can set the rootLevel and the disabled properties.
    * @param {IConfig} configProperties - The configuration properties of the logger.
    *
    * */
    public setConfig(configProperties: IConfig): void {
        config = configProperties;
    }

    /*
    *
    * setLoggerId is a private method that sets the loggerId.
    * @param {any} id - The loggerId.
    *
    * */
    private setLoggerId(id: any): void {
        loggerId = id;
    }

    /*
    *
    * generateLoggerId is a private method that generates a unique loggerId.
    * @returns {string} - The loggerId.
    *
    * */
    private generateLoggerId(): string {
        return Math.random().toString(36).substring(2, 8);
    }

    /*
    *
    * This method returns a new instance of the Log class.
    * @returns {Log} - A new instance of the Log class.
    *
    * */
    public log(): Log {
        return new Log();
    }

}

/*
*
* getConfig is a function that returns the configuration of the logger.
*
* */
export function getConfig(): IConfig {
    return config;
}


/*
*
* getLoggerId is a function that returns the loggerId.
* It is used to get the loggerId from outside the Logger class.
* But it is currently not used in the code.
*
* */
export function getLoggerId(): string {
    return loggerId;
}
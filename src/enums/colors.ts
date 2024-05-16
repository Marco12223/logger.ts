
/*
*
* Here we define the colors of the logger in an enum.
* The colors are reset, bold, dim, italic, underline, blink, reverse, hidden, black, red, green, yellow, blue, magenta, cyan, and white.
* @returns {string} reset - The reset color of the logger.
* @returns {string} bold - The bold color of the logger.
* @returns {string} dim - The dim color of the logger.
* @returns {string} italic - The italic color of the logger.
* @returns {string} underline - The underline color of the logger.
* @returns {string} blink - The blink color of the logger.
* @returns {string} reverse - The reverse color of the logger.
* @returns {string} hidden - The hidden color of the logger.
* @returns {string} black - The black color of the logger.
* @returns {string} red - The red color of the logger.
* @returns {string} green - The green color of the logger.
* @returns {string} yellow - The yellow color of the logger.
* @returns {string} blue - The blue color of the logger.
* @returns {string} magenta - The magenta color of the logger.
* @returns {string} cyan - The cyan color of the logger.
* @returns {string} white - The white color of the logger.
*
* */
export enum Colors {
    reset = '\x1b[0m',
    bold = '\x1b[1m',
    dim = '\x1b[2m',
    italic = '\x1b[3m',
    underline = '\x1b[4m',
    blink = '\x1b[5m',
    reverse = '\x1b[7m',
    hidden = '\x1b[8m',
    black = '\x1b[30m',
    red = '\x1b[31m',
    green = '\x1b[32m',
    yellow = '\x1b[33m',
    blue = '\x1b[34m',
    magenta = '\x1b[35m',
    cyan = '\x1b[36m',
    white = '\x1b[37m',
}

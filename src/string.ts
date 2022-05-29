// Copyright 2022 Octomatize

/**
 * Returns a random string with or without special characters.
 * @param length Bytes quantity
 * @param specialCharacters Need Special Characters?
 * @returns string
 */
function randomString(length: number, specialCharacters?: boolean): string {
    let alphabet =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789';
    const specialChart = '!@#$%^&*()_-+={}[]:;<>?,./|`~';
    let finalString = '';

    if (specialCharacters) alphabet += specialChart;

    for (let i = 0; i < length; i++) {
        finalString += alphabet.charAt(
            Math.floor(Math.random() * alphabet.length),
        );
    }

    return finalString;
}

/**
 * Verify if the passed value is a string.
 * @param value String to be validated
 * @returns boolean
 */
function isString(value: unknown): boolean {
    return typeof value === 'string';
}

/**
 * Transform string into an array.
 * @param value Pending string
 * @param separator Separator to create an array
 * @returns string[]
 */
function stringToArray(value: string, separator: string): string[] {
    return value.split(separator);
}

/**
 * Remove spaces from passed string.
 * @param value String to be parsed
 * @param type Remove space type 1 - all spaces 2 - before and after spaces 3 - before and after spaces 4 - after spaces default to 1
 * @returns string
 */
function trim(value: string, type = 1): string {
    switch (type) {
        case 1:
            return value.replace(/\s/g, '');
        case 2:
            return value.replace(/(^\s)|(\s*$)/g, '');
        case 3:
            return value.replace(/(^\s)/g, '');
        case 4:
            return value.replace(/(\s$)/g, '');
        default:
            return value;
    }
}

/**
 * Verify if the passed value is a date.
 * @param value Value to be verified
 * @returns boolean
 */
function isDate(value: unknown): boolean {
    return value instanceof Date && !Number.isNaN(value);
}

export { randomString, isString, stringToArray, trim, isDate };

// Copyright 2022 Octomatize
function isArray(object: unknown): boolean {
    return Array.isArray(object);
}

/**
 * Returns a random string with or without special characters.
 * @param length number
 * @param specialCharacters boolean
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

export { isArray, randomString };

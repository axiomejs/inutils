// Copyright 2022 Octomatize

/**
 * Verify if the passed object is an array.
 * @param object Object to be verified.
 * @returns boolean
 */
function isArray(object: unknown): boolean {
    return Array.isArray(object);
}

/**
 * Transform an array into a string.
 * @param value Array to be joined.
 * @param separator Separator to get a new string.
 * @returns string
 */
function arrayToString(value: string[], separator?: string): string {
    return value.join(separator);
}

/**
 * Verify if desired item exists in passed array.
 * @param array Array to be verified.
 * @param item Item to verify.
 * @returns boolean
 */
function inArray(array: any[], item: unknown): boolean {
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] === item) return true;
    }

    return false;
}

/**
 * Return how much occurrences of passed value the passed array has.
 * @param arr Array to be verified.
 * @param value Item to verify.
 * @returns number
 */
function countOccurrences(arr: any[], value: unknown): number {
    return arr.reduce((acc, actual) => {
        return actual === value ? acc + 1 : acc + 0;
    }, 0);
}

export { isArray, arrayToString, inArray, countOccurrences };

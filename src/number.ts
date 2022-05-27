// Copyright 2022 Octomatize
/**
 * Generates a random integer between passed range.
 * @param min  Min number
 * @param range Last number
 * @returns number
 */
function randomInt(min: number, range: number): number {
    return Math.floor(Math.random() * (range + 1) + min);
}

/**
 * Verify if the passed value is greater than compared number.
 * @param value Number to be verified
 * @param comparator Comparator number
 * @returns boolean
 */
function isGreaterThan(value: number, comparator: number): boolean {
    return value > comparator;
}

/**
 * Verify if the passed value is greater or equal than compared number.
 * @param value Number to be verified
 * @param comparator Comparator number
 * @returns boolean
 */
function isGreaterOrEqualThan(value: number, comparator: number): boolean {
    return value >= comparator;
}

/**
 * Verify if the passed value is lower than compared number.
 * @param value Number to be verified
 * @param comparator Comparator number
 * @returns boolean
 */
function isLowerThan(value: number, comparator: number): boolean {
    return value < comparator;
}

/**
 * Verify if the passed value is lower or equal than compared number.
 * @param value Number to be verified
 * @param comparator Comparator number
 * @returns boolean
 */
function isLowerOrEqualThan(value: number, comparator: number): boolean {
    return value <= comparator;
}

/**
 * Verify if passed value is a number.
 * @param value Number to be verified
 * @returns boolean
 */
function isNumber(value: unknown): boolean {
    return !Number.isNaN(value) && typeof value === 'number';
}

export {
    randomInt,
    isLowerThan,
    isLowerOrEqualThan,
    isGreaterThan,
    isGreaterOrEqualThan,
    isNumber,
};

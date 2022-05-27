/**
 * Get a random number between min and range.
 * @param min number
 * @param range number
 * @returns number
 */
function randomInt(min: number, range: number): number {
    return Math.floor(Math.random() * (range + 1) + min);
}

export { randomInt }

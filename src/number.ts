// Copyright 2022 Octomatize
function randomInt(min: number, range: number): number {
    return Math.floor(Math.random() * (range + 1) + min);
}

export { randomInt };

// Copyright 2022 Octomatize
import { isArray, randomString } from '../string';

describe('string', () => {
    describe('isArray()', () => {
        it('should return true when pass an array', () => {
            expect.assertions(1);

            expect(isArray([])).toBe(true);
        });

        it('should return false when pass an string instead array', () => {
            expect.assertions(1);

            expect(isArray('')).toBe(false);
        });
    });

    describe('randomString()', () => {
        it('should return a string with 32 bytes without special characters', () => {
            expect.assertions(2);

            const testString = randomString(32, false);

            expect(testString.length).toBe(32);
            expect(/^\w+$/.test(testString)).toBe(true);
        });

        it('should return a string with 32 bytes with special characters', () => {
            expect.assertions(2);

            const testString = randomString(32, true);

            expect(testString.length).toBe(32);
            expect(/^\w+$/.test(testString)).toBe(false);
        });
    });
});

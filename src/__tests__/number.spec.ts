// Copyright 2022 Octomatize
import {
    isGreaterOrEqualThan,
    isGreaterThan,
    isLowerOrEqualThan,
    isLowerThan,
    isNumber,
    randomInt,
} from '../number';

describe('number', () => {
    describe('randomInt()', () => {
        it('should return an integer between 43 <> 128', () => {
            expect.assertions(1);

            const testInteger = randomInt(43, 85);

            expect(testInteger >= 43 && testInteger <= 128).toBe(true);
        });
    });

    describe('isGreaterThan()', () => {
        it('should return true since 2 is greater than 1', () => {
            expect.assertions(1);

            expect(isGreaterThan(2, 1)).toBe(true);
        });

        it('should return false since 1 is lower than 2', () => {
            expect.assertions(1);

            expect(isGreaterThan(1, 2)).toBe(false);
        });
    });

    describe('isGreaterOrEqualThan()', () => {
        it('should return true since 1 is equal 1', () => {
            expect.assertions(1);

            expect(isGreaterOrEqualThan(1, 1)).toBe(true);
        });

        it('should return true since 2 is greater than 1', () => {
            expect.assertions(1);

            expect(isGreaterThan(2, 1)).toBe(true);
        });

        it('should return false since 1 is lower than 2', () => {
            expect.assertions(1);

            expect(isGreaterOrEqualThan(1, 2)).toBe(false);
        });
    });

    describe('isLowerThan()', () => {
        it('should return false since 1 is lower than 2', () => {
            expect.assertions(1);

            expect(isLowerThan(2, 1)).toBe(false);
        });

        it('should return false since 1 is lower than 2', () => {
            expect.assertions(1);

            expect(isLowerThan(1, 2)).toBe(true);
        });
    });

    describe('isLowerOrEqualThan()', () => {
        it('should return false since 1 is equal 1', () => {
            expect.assertions(1);

            expect(isLowerOrEqualThan(1, 1)).toBe(true);
        });

        it('should return false since 1 is lower than 2', () => {
            expect.assertions(1);

            expect(isLowerOrEqualThan(2, 1)).toBe(false);
        });

        it('should return false since 1 is lower than 2', () => {
            expect.assertions(1);

            expect(isLowerOrEqualThan(1, 2)).toBe(true);
        });
    });

    describe('isNumber()', () => {
        it('should return true when pass number 1', () => {
            expect.assertions(1);

            expect(isNumber(1)).toBe(true);
        });

        it('should return true when pass true', () => {
            expect.assertions(1);

            expect(isNumber(true)).toBe(false);
        });

        it('should return true when pass a string', () => {
            expect.assertions(1);

            expect(isNumber('1')).toBe(false);
        });
    });
});

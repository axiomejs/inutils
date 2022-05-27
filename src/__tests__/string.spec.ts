// Copyright 2022 Octomatize
import { isString, randomString, stringToArray, trim } from '../string';

describe('string', () => {
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

    describe('isString()', () => {
        it('should return true when pass string', () => {
            expect.assertions(1);

            expect(isString('hello world!')).toBe(true);
        });

        it('should return false when pass a boolean', () => {
            expect.assertions(1);

            expect(isString(true)).toBe(false);
        });
    });

    describe('stringToArray()', () => {
        it('should return a new array when pass string', () => {
            expect.assertions(1);

            expect(stringToArray('hello world', ' ')).toStrictEqual([
                'hello',
                'world',
            ]);
        });
    });

    describe('trim()', () => {
        it('should return the same string', () => {
            expect.assertions(1);

            expect(trim('axiomejs the best js framework', 0)).toBe(
                'axiomejs the best js framework',
            );
        });

        it('should return a string without spaces', () => {
            expect.assertions(1);

            expect(trim('axiomejs the best js framework')).toBe(
                'axiomejsthebestjsframework',
            );
        });

        it('should return a string without spaces', () => {
            expect.assertions(1);

            expect(trim('axiomejs the best js framework', 1)).toBe(
                'axiomejsthebestjsframework',
            );
        });

        it('should return a string without before and after spaces', () => {
            expect.assertions(1);

            expect(trim(' axiomejs the best js framework ', 2)).toBe(
                'axiomejs the best js framework',
            );
        });

        it('should return a string without before spaces', () => {
            expect.assertions(1);

            expect(trim(' axiomejs the best js framework ', 3)).toBe(
                'axiomejs the best js framework ',
            );
        });

        it('should return a string without after spaces', () => {
            expect.assertions(1);

            expect(trim(' axiomejs the best js framework ', 4)).toBe(
                ' axiomejs the best js framework',
            );
        });
    });
});

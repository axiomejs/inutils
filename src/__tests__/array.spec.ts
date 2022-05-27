// Copyright 2022 Octomatize
import { arrayToString, countOccurrences, inArray, isArray } from '../array';

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

    describe('arrayToString()', () => {
        it('should return hello world when pass " " separator', () => {
            expect.assertions(1);

            expect(arrayToString(['hello', 'world'], ' ')).toStrictEqual(
                'hello world',
            );
        });

        it('should return hello,world when dont pass separator', () => {
            expect.assertions(1);

            expect(arrayToString(['hello', 'world'])).toStrictEqual(
                'hello,world',
            );
        });
    });

    describe('inArrayKey()', () => {
        it('should return true when value exists in array', () => {
            expect.assertions(1);

            expect(inArray(['hello', 'world'], 'world')).toBe(true);
        });

        it('should return true when value does not exists in array', () => {
            expect.assertions(1);

            expect(inArray(['hello', 'world'], 'testing')).toBe(false);
        });
    });

    describe('countOccurrences()', () => {
        it('should return the quantity of occurrences (2) that array has of passed item', () => {
            expect.assertions(1);

            expect(
                countOccurrences(
                    ['axiome', 'js', 'node', 'axiome', 'react'],
                    'axiome',
                ),
            ).toBe(2);
        });
    });
});

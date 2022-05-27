// Copyright 2022 Octomatize
import { randomInt } from '../number';

describe('number', () => {
    describe('randomInt()', () => {
        it('should return an integer between 43 <> 128', () => {
            expect.assertions(2);

            const testInteger = randomInt(43, 85);

            expect(testInteger >= 43 && testInteger <= 128).toBe(true);
        });
    });
});

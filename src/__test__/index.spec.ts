import { cleanUpDuplicateAsync } from '..';

const dirtyData = [
    '   Chukwuemeka Obiora Musa    ',
    'Nwabuzor    Obiora     Chukwuemeka',
    '   Chukwuemeka Obiora Nwabuzor    ',
    '   Chukwuemeka Obiora Musa    ',
    '    Nwabuzor Chukwuemeka Obiora     ',
    'Chukwuemeka null Nwabuzor',
    'undefined Chukwuemeka UNDEFINED Nwabuzor',
    'Nwabuzor    Chukwuemeka Obiora',
    'Chukwuemeka undefined Obiora Nwabuzor',
    '   Chukwuemeka James Nwabuzor   ',
];

describe('cleanUpDuplicateAsync', () => {
    it('should clean the array of strings and returns an array of 3 strings', async () => {
        const result: any = await cleanUpDuplicateAsync(dirtyData);

        expect(result).toEqual([
            'Chukwuemeka Obiora Musa',
            'Nwabuzor Obiora Chukwuemeka',
            'Chukwuemeka James Nwabuzor'
        ]);
    });

    it('should clean the array of strings and returns an array with 1 string', async () => {
        const result: any = await cleanUpDuplicateAsync([
            ' Chukwuemeka Obiora Nwabuzor',
            'Nwabuzor Obiora Chukwuemeka',
        ]);

        expect(result).toEqual(["Chukwuemeka Obiora Nwabuzor"]);
    });

    it('should clean the array of null', async () => {
        try {
            await cleanUpDuplicateAsync([null]);
        }
        catch (error) {
            expect(error.message).toEqual("The function argument must be an array of strings");
        }
    });
});

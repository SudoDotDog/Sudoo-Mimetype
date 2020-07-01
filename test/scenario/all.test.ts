/**
 * @author WMXPY
 * @namespace Mimetype
 * @description All
 * @override Scenario
 */

import { expect } from 'chai';
import * as Chance from "chance";
import { allMediaType } from '../../src';

describe('Given [All] scenario', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('scenario-mimetype-all');

    it('should be able to validate extensions - happy path', (): void => {

        const isJPEGValid: boolean = allMediaType.validateExtension('.jpg');

        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        expect(isJPEGValid).to.be.true;
    });

    it('should be able to validate extensions - sad path', (): void => {

        const isSomethingValid: boolean = allMediaType.validateExtension('.something');

        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        expect(isSomethingValid).to.be.false;
    });
});

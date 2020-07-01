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

    it('should be able to match first available mimeType - happy path', (): void => {

        const jpegMimeType: string | null = allMediaType.matchFirstAvailableMimeType('.jpg');

        expect(jpegMimeType).to.be.equal('image/jpeg');
    });

    it('should be able to match first available mimeType - sad path', (): void => {

        const somethingMimeType: string | null = allMediaType.matchFirstAvailableMimeType('.something');

        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        expect(somethingMimeType).to.be.null;
    });

    it('should be able to match first available extension - happy path', (): void => {

        const mp4Extension: string | null = allMediaType.matchFirstAvailableExtension('video/mp4');

        expect(mp4Extension).to.be.equal('mp4');
    });

    it('should be able to match first available extension - sad path', (): void => {

        const randomExtension: string | null = allMediaType.matchFirstAvailableExtension('random/random');

        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        expect(randomExtension).to.be.null;
    });
});

/**
 * @author WMXPY
 * @namespace Mimetype_Image
 * @description JPEG
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from "chance";
import { JPEGMimeType } from '../../../src';

describe('Given {JPEGMimetype} class', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('mimetype-image-jpeg');

    it('should be able to create', (): void => {

        const abacus: JPEGMimeType = JPEGMimeType.create();

        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        expect(abacus).to.be.exist;
        expect(abacus).to.be.instanceOf(Abacus);
    });
});

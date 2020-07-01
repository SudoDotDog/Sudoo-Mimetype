/**
 * @author WMXPY
 * @namespace Mimetype_Media
 * @description Image
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from "chance";
import { gifMediaType, jpegMediaType, MediaType, pngMediaType, webpMediaType } from '../../../src';

describe('Given [Image] classes', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('mimetype-image');

    it('should be able to verify instance', (): void => {

        expect(jpegMediaType).to.be.instanceOf(MediaType);
        expect(gifMediaType).to.be.instanceOf(MediaType);
        expect(webpMediaType).to.be.instanceOf(MediaType);
        expect(pngMediaType).to.be.instanceOf(MediaType);
    });
});

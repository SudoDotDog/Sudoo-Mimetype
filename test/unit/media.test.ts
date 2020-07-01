/**
 * @author WMXPY
 * @namespace Mimetype
 * @description Media
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from "chance";
import { MediaType, imageMediaType, videoMediaType } from '../../src';

describe('Given <Media> combined classes', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('mimetype-media');

    it('should be able to verify instance', (): void => {

        expect(imageMediaType).to.be.instanceOf(MediaType);
        expect(videoMediaType).to.be.instanceOf(MediaType);
    });
});

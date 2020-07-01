/**
 * @author WMXPY
 * @namespace Mimetype_Media
 * @description Video
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from "chance";
import { aviMediaType, MediaType, mp4MediaType, wmvMediaType } from '../../../src';

describe('Given <Video> classes', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('mimetype-video');

    it('should be able to verify instance', (): void => {

        expect(mp4MediaType).to.be.instanceOf(MediaType);
        expect(wmvMediaType).to.be.instanceOf(MediaType);
        expect(aviMediaType).to.be.instanceOf(MediaType);
    });
});

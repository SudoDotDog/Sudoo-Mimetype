/**
 * @author WMXPY
 * @namespace Mimetype
 * @description Image
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from "chance";
import { jpegMimetype, Mimetype } from '../../src';

describe('Given [Image] classes', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('mimetype-image');

    it('should be able to verify', (): void => {

        expect(jpegMimetype).to.be.instanceOf(Mimetype);
    });
});

/**
 * @author WMXPY
 * @namespace Mimetype_Media
 * @description Text
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from "chance";
import { csvMediaType, MediaType, plainMediaType } from '../../../src';

describe('Given <Text> classes', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('mimetype-text');

    it('should be able to verify instance', (): void => {

        expect(plainMediaType).to.be.instanceOf(MediaType);
        expect(csvMediaType).to.be.instanceOf(MediaType);
    });
});

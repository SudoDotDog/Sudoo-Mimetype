/**
 * @author WMXPY
 * @namespace Mimetype_Media
 * @description Multi
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from "chance";
import { MediaType, pdfMediaType, zipMediaType } from '../../../src';

describe('Given <Multi> classes', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('mimetype-multi');

    it('should be able to verify instance', (): void => {

        expect(pdfMediaType).to.be.instanceOf(MediaType);
        expect(zipMediaType).to.be.instanceOf(MediaType);
    });
});

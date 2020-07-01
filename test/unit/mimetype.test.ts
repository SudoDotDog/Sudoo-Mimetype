/**
 * @author WMXPY
 * @namespace Mimetype
 * @description MediaType
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from "chance";
import { MediaType } from '../../src';

describe('Given {Mimetype} class', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('mimetype-mimetype');

    it('should be able to create', (): void => {

        const mimetype: MediaType = MediaType.create();
        expect(mimetype).to.be.instanceOf(MediaType);
    });
});

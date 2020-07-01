/**
 * @author WMXPY
 * @namespace Mimetype
 * @description Mimetype
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from "chance";
import { Mimetype } from '../../src';

describe('Given {Mimetype} class', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('mimetype-mimetype');

    it('should be able to create', (): void => {

        const mimetype: Mimetype = Mimetype.create();

        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        expect(mimetype).to.be.exist;
        expect(mimetype).to.be.instanceOf(Mimetype);
    });
});

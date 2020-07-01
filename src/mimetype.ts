/**
 * @author WMXPY
 * @namespace Mimetype
 * @description Mimetype
 */

export class Mimetype {

    public static create(): Mimetype {

        return new Mimetype();
    }

    private readonly _children: Mimetype[];

    private constructor() {

        this._children = [];
    }
}

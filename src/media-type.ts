/**
 * @author WMXPY
 * @namespace Mimetype
 * @description MediaType
 */

export class MediaType {

    public static create(): MediaType {

        return new MediaType();
    }

    private readonly _children: MediaType[];

    private constructor() {

        this._children = [];
    }
}

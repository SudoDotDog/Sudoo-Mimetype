/**
 * @author WMXPY
 * @namespace Mimetype_Image
 * @description JPEG
 */

import { Mimetype } from "../mimetype";

export class JPEGMimeType extends Mimetype {

    public static create(): JPEGMimeType {

        return new JPEGMimeType();
    }

    private constructor() {
        super();
    }
}
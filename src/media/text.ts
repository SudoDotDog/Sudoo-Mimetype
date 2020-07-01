/**
 * @author WMXPY
 * @namespace Mimetype_Media
 * @description Text
 */

import { MediaType } from "../media-type";

export const plainMediaType: MediaType = MediaType.withOptions({

    mimeTypes: [
        'text/plain',
    ],
    extensions: [
        'txt',
    ],
});

export const csvMediaType: MediaType = MediaType.withOptions({

    mimeTypes: [
        'text/csv',
    ],
    extensions: [
        'csv',
    ],
});

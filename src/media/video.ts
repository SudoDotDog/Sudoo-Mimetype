/**
 * @author WMXPY
 * @namespace Mimetype_Media
 * @description Video
 */

import { MediaType } from "../media-type";

export const mp4MediaType: MediaType = MediaType.withOptions({

    mimeTypes: [
        'image/mp4',
    ],
    extensions: [
        'mp4',
    ],
});

export const wmvMediaType: MediaType = MediaType.withOptions({

    mimeTypes: [
        'image/wmv',
    ],
    extensions: [
        'wmv',
    ],
});

export const aviMediaType: MediaType = MediaType.withOptions({

    mimeTypes: [
        'image/avi',
    ],
    extensions: [
        'avi',
    ],
});

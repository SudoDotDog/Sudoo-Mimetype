/**
 * @author WMXPY
 * @namespace Mimetype_Media
 * @description Video
 */

import { MediaType } from "../media-type";

export const mp4MediaType: MediaType = MediaType.withOptions({

    mimeTypes: [
        'video/mp4',
    ],
    extensions: [
        'mp4',
    ],
});

export const wmvMediaType: MediaType = MediaType.withOptions({

    mimeTypes: [
        'video/wmv',
    ],
    extensions: [
        'wmv',
    ],
});

export const aviMediaType: MediaType = MediaType.withOptions({

    mimeTypes: [
        'video/avi',
    ],
    extensions: [
        'avi',
    ],
});

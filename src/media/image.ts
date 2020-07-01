/**
 * @author WMXPY
 * @namespace Mimetype_Media
 * @description Image
 */

import { MediaType } from "../media-type";

export const jpegMediaType: MediaType = MediaType.withOptions({

    mimeTypes: [
        'image/jpeg',
    ],
    extensions: [
        'jpeg',
        'jpg',
    ],
});

export const gifMediaType: MediaType = MediaType.withOptions({

    mimeTypes: [
        'image/gif',
    ],
    extensions: [
        'gif',
    ],
});

export const webpMediaType: MediaType = MediaType.withOptions({

    mimeTypes: [
        'image/webp',
    ],
    extensions: [
        'webp',
    ],
});

export const pngMediaType: MediaType = MediaType.withOptions({

    mimeTypes: [
        'image/png',
    ],
    extensions: [
        'png',
    ],
});

export const imageMediaType: MediaType = MediaType.withOptions({

    children: [
        jpegMediaType,
        gifMediaType,
        webpMediaType,
        pngMediaType
    ],
});

/**
 * @author WMXPY
 * @namespace Mimetype
 * @description Media
 */

import { MediaType } from "./media-type";
import { gifMediaType, jpegMediaType, pngMediaType, webpMediaType } from "./media/image";
import { csvMediaType, plainMediaType } from "./media/text";
import { aviMediaType, mp4MediaType, wmvMediaType } from "./media/video";

export const videoMediaType: MediaType = MediaType.withOptions({

    children: [
        mp4MediaType,
        wmvMediaType,
        aviMediaType,
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

export const textMediaType: MediaType = MediaType.withOptions({

    children: [
        plainMediaType,
        csvMediaType,
    ],
});

export const allMediaType: MediaType = MediaType.withOptions({

    children: [
        videoMediaType,
        imageMediaType,
        textMediaType,
    ],
});

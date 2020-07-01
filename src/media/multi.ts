/**
 * @author WMXPY
 * @namespace Mimetype_Media
 * @description Multi
 */

import { MediaType } from "../media-type";

export const pdfMediaType: MediaType = MediaType.withOptions({

    mimeTypes: [
        'application/pdf',
    ],
    extensions: [
        'pdf',
    ],
});

export const zipMediaType: MediaType = MediaType.withOptions({

    mimeTypes: [
        'application/zip',
        'application/x-zip-compressed',
    ],
    extensions: [
        'zip',
    ],
});

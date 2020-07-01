/**
 * @author WMXPY
 * @namespace Mimetype
 * @description Util
 */

export const fixExtension = (extension: string): string => {

    const trimmed: string = extension.trim();

    if (trimmed.charAt(0) === '.') {
        return trimmed.substring(1);
    }

    return trimmed;
};

export const fixMimeType = (mimeType: string): string => {

    return mimeType.trim();
};

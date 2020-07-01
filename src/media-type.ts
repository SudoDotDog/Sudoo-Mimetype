/**
 * @author WMXPY
 * @namespace Mimetype
 * @description MediaType
 */

import { fixExtension, fixMimeType } from "./util";

export type MediaTypeCreateOptions = {

    readonly mimeTypes?: string[];
    readonly extensions?: string[];
    readonly children?: MediaType[];
};

export class MediaType {

    public static create(): MediaType {

        return new MediaType();
    }

    public static withOptions(options: MediaTypeCreateOptions): MediaType {

        const mediaType: MediaType = new MediaType();

        if (Array.isArray(options.mimeTypes)) {
            mediaType.addMimeTypeList(options.mimeTypes);
        }
        if (Array.isArray(options.extensions)) {
            mediaType.addExtensionList(options.extensions);
        }
        if (Array.isArray(options.children)) {
            mediaType.addChildList(options.children);
        }

        return mediaType;
    }

    private readonly _mimeTypes: string[];
    private readonly _extensions: string[];

    private readonly _children: MediaType[];

    private constructor() {

        this._mimeTypes = [];
        this._extensions = [];

        this._children = [];
    }

    public addChild(child: MediaType): this {

        this._children.push(child);
        return this;
    }

    public addChildList(children: MediaType[]): this {

        this._children.push(...children);
        return this;
    }

    public addMimeType(mimeType: string): this {

        this._mimeTypes.push(mimeType);
        return this;
    }

    public addMimeTypeList(mimeTypes: string[]): this {

        this._mimeTypes.push(...mimeTypes);
        return this;
    }

    public addExtension(extension: string): this {

        this._extensions.push(extension);
        return this;
    }

    public addExtensionList(extensions: string[]): this {

        this._extensions.push(...extensions);
        return this;
    }

    public validateMimeType(mimeType: string): boolean {

        const fixedMimeType: string = fixMimeType(mimeType);
        for (const each of this._mimeTypes) {
            if (each === fixedMimeType) {
                return true;
            }
        }

        for (const each of this._children) {
            if (each.validateMimeType(mimeType)) {
                return true;
            }
        }

        return false;
    }

    public validateExtension(extension: string): boolean {

        const fixedExtension: string = fixExtension(extension);
        for (const each of this._extensions) {
            if (each === fixedExtension) {
                return true;
            }
        }

        for (const each of this._children) {
            if (each.validateExtension(extension)) {
                return true;
            }
        }

        return false;
    }

    public getFirstAvailableMimeType(): string | null {

        if (this._mimeTypes.length > 0) {
            return this._mimeTypes[0];
        }

        for (const each of this._children) {

            const mimeType: string | null = each.getFirstAvailableMimeType();
            if (mimeType) {
                return mimeType;
            }
        }

        return null;
    }

    public getFirstAvailableExtension(): string | null {

        if (this._extensions.length > 0) {
            return this._extensions[0];
        }

        for (const each of this._children) {

            const extension: string | null = each.getFirstAvailableExtension();
            if (extension) {
                return extension;
            }
        }

        return null;
    }
}

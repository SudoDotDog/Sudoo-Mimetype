/**
 * @author WMXPY
 * @namespace Mimetype
 * @description MediaType
 */

export type MediaTypeCreateOptions = {

    readonly mimeTypes: string[];
    readonly extensions: string[];

    readonly children?: MediaType[];
};

export class MediaType {

    public static create(): MediaType {

        return new MediaType();
    }

    public static withOptions(options: MediaTypeCreateOptions): MediaType {

        const mediaType: MediaType = new MediaType();
        mediaType.addMimeTypeList(options.mimeTypes);
        mediaType.addExtensionList(options.extensions);

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
}

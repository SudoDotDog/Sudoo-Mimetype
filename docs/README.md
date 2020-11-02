# Sudoo-Mimetype

[![Build Status](https://travis-ci.com/SudoDotDog/Sudoo-Mimetype.svg?branch=master)](https://travis-ci.com/SudoDotDog/Sudoo-Mimetype)
[![codecov](https://codecov.io/gh/SudoDotDog/Sudoo-Mimetype/branch/master/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/Sudoo-Mimetype)
[![npm version](https://badge.fury.io/js/%40sudoo%2Fmimetype.svg)](https://badge.fury.io/js/%40sudoo%2Fmimetype)
[![downloads](https://img.shields.io/npm/dm/@sudoo/mimetype.svg)](https://www.npmjs.com/package/@sudoo/mimetype)

:file_folder: Mimetype Handler

## Install

```sh
yarn add @sudoo/mimetype
# Or
npm install @sudoo/mimetype --save
```

## Usage

This package provide multiple mimetype collections.  
Match mimetype by extension name with the following code.

```ts
import { allMediaType } from "@sudoo/mimetype";
allMediaType.matchFirstAvailableMimeType('.jpg'); // image/jpeg
```

`videoMediaType`, `imageMediaType`, `textMediaType`,  `multiMediaType` are also provided from the package.

Create another Media type and other features are also easy, see source code for more details.

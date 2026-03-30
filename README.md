<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/prettier-config/refs/heads/main/media/prettier-config.png" alt="Icon of Prettier Config" width="256" height="256">
  <h1>Prettier Config</h1>
</div>

<blockquote align="center">  Single Quotes • No Semis • LF Endings • Zero-Config  </blockquote>

<h4 align="center">
  💅🏼 Prettier config for JS/TS projects. Single quotes, no semis, LF, trailing commas. 💄
</h4>

<br>

## Table of Contents

- ✨ [**Features**](#features)
- 🕵🏼 [**Usage**](#usage)
- ⚙️ [**Implementation**](#implementation)
- 🎯 [**Motivation**](#motivation)
- 📝 [**Changelog**](#changelog)
- 🪪 [**License**](#license)
- 💖 [**Support**](#support)
- 🧬 [**Related**](#related)
- 👨🏻‍💻 [**Author**](#author)

<br>

## Features

- ⚡ Zero-config setup - extend and go
- 🔤 Single quotes for JS/TS, double quotes for JSX
- 🚫 No semicolons, with trailing commas - cleaner diffs
- 📏 2-space indentation, LF line endings, 80-char print width
- 📦 Covers JS, TS, JSX, TSX, JSON, HTML, CSS, Vue and more
- 🎯 All valid Prettier options explicitly set - *no surprises*
- 🔲 Object wrap preserved - inline objects stay inline, expanded stay expanded
- 🔒 Experimental options locked in - no unintended behavior on upgrades

<br>

## Usage

Install it by executing any of the following, depending on the preferred package manager:
```bash
bun add -d @igorskyflyer/prettier-config
```

```bash
pnpm add -D @igorskyflyer/prettier-config
```

```bash
yarn add -D @igorskyflyer/prettier-config
```

```bash
npm i -D @igorskyflyer/prettier-config
```

<br>

Then, reference it in the **package.json**:

`package.json`
```json
{
  "prettier": "@igorskyflyer/prettier-config"
}
```

<br>

If overrides are needed, use a **prettier.config.mjs** instead:

`prettier.config.mjs`
```js
import config from '@igorskyflyer/prettier-config'

/** @type {import('prettier').Config} */
export default {
  ...config,
  // overrides
}
```

<br>

## Implementation

Every valid Prettier option is explicitly set - no implicit defaults, no silent behavior on upgrades. The config enforces single quotes, no semicolons, trailing commas, `LF` line endings and 2-space indentation across all supported file types. Object literals are preserved as-is. Experimental options are locked to their current defaults to prevent unintended formatting shifts when Prettier promotes them to stable.

<br>

## Motivation

Every project needs a Prettier config. Most end up with the same decisions after the same back-and-forth - quotes, semis, commas, line endings. This package makes those decisions once, documents them explicitly and ships them as a single dependency. Drop it in, extend it and move on.

<br>

## Changelog

Read about the latest changes in the [**CHANGELOG**](https://github.com/igorskyflyer/npm-prettier-config/blob/main/CHANGELOG.md).

<br>

## License

Licensed under the [**MIT license**](https://github.com/igorskyflyer/npm-prettier-config/blob/main/LICENSE).

<br>

## Support

<div align="center">
  Engineering and documenting open-source projects<br>
  involves a significant investment of time.
  <br><br>
  If this project or its implementation has provided value,<br>
  support is greatly appreciated.
  <br><br>
  <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="180" height="46"></a>
  <br><br>
  <em>Thank you for supporting these efforts!</em> 🙏😊
</div>

<br>

## Related

This package is part of the [**dotfiles**](https://github.com/igorskyflyer/dotfiles) DX config suite - a curated index of independently installable configuration packages for linting, formatting, editing, JS/TS, React, Vue and many more.

### Other related packages

[**@igorskyflyer/editorconfig**](https://www.npmjs.com/package/@igorskyflyer/editorconfig)

> _✍🏼 A CLI tool for adding an opinionated EditorConfig to any project. 🐭_

<br>

[**@igorskyflyer/biome-config**](https://www.npmjs.com/package/@igorskyflyer/biome-config)

> _👽 An opinionated Biome configuration for modern JavaScript and TypeScript projects. Strict linting, consistent formatting, and performance-minded rules, all in one shareable config. Code like igorskyflyer does! 🐺_

<br>

[**@igorskyflyer/zing**](https://www.npmjs.com/package/@igorskyflyer/zing)

> _🐌 Zing is a C# style String formatter for JavaScript that empowers Strings with positional arguments - composite formatting. 🚀_

<br>

[**@igorskyflyer/oxfmt-config**](https://www.npmjs.com/package/@igorskyflyer/oxfmt-config)

> _✨ Pixel-perfect code formatting opinions, oxfmt-powered and ready to extend. ⚓_

<br>

[**@igorskyflyer/zep**](https://www.npmjs.com/package/@igorskyflyer/zep)

> _🧠 Zep is a zero-dependency, efficient debounce module. ⏰_

<br>

## Author

Created by **Igor Dimitrijević ([_@igorskyflyer_](https://github.com/igorskyflyer/))**.

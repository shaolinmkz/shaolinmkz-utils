# Shaolinmkz Utils

[![CircleCI](https://circleci.com/gh/shaolinmkz/shaolinmkz-utils.svg?style=svg&circle-token=516f01628d30c969eebbe350373bed767e621e1f)](https://circleci.com/gh/shaolinmkz/shaolinmkz-utils) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![NPM](https://img.shields.io/npm/v/shaolinmkz-utils.svg)](https://www.npmjs.com/package/shaolinmkz-utils) [![Total Download](https://img.shields.io/npm/dt/shaolinmkz-utils.svg)](https://www.npmjs.com/package/shaolinmkz-utils)

Util functions for multiple use cases.

# Installation

```sh
npm install shaolinmkz-utils
```
#### OR

```sh
yarn add shaolinmkz-utils
```
#### OR

```html
<!-- Place script tag in root (CDN) -->
<script defer src="https://bundle.run/shaolinmkz-utils@1.0.1"></script>
```

# Usage

```js
import { cleanUpDuplicateAsync } from "shaolinmkz-utils";

const dirtyData = [
  "   Chukwuemeka Obiora Musa    ",
  "Nwabuzor    Obiora     Chukwuemeka",
  "   Chukwuemeka Obiora Nwabuzor    ",
  "   Chukwuemeka Obiora Musa    ",
  "    Nwabuzor Chukwuemeka Obiora     ",
  "Chukwuemeka null Nwabuzor",
  "undefined Chukwuemeka UNDEFINED Nwabuzor",
  "Nwabuzor    Chukwuemeka Obiora",
  "Chukwuemeka undefined Obiora Nwabuzor",
  "   Chukwuemeka James Nwabuzor   ",
];

const result1 = await cleanUpDuplicateAsync(dirtyData);
  console.log(result);
  // [
  //  'Nwabuzor Obiora Chukwuemeka',
  //  'Chukwuemeka James Nwabuzor',
  //  'Chukwuemeka Obiora Musa'
  // ]

try {
  await cleanUpDuplicateAsync([undefined]);
} catch (error) {
  console.log(error);
  //   {
  //     message: "The function argument must be an array of strings"
  //   }
}
```

# CDN USAGE

```js
window
.shaolinmkzUtils
.cleanUpDuplicateAsync(dirtyData).then((result) => {
	console.log(result);
	  // [
  //  'Nwabuzor Obiora Chukwuemeka',
  //  'Chukwuemeka James Nwabuzor',
  //  'Chukwuemeka Obiora Musa'
  // ]
});
```
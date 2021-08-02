# Shaolinmkz Utils

[![CircleCI](https://circleci.com/gh/shaolinmkz/shaolinmkz-utils.svg?style=svg&circle-token=516f01628d30c969eebbe350373bed767e621e1f)](https://circleci.com/gh/shaolinmkz/shaolinmkz-utils) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![NPM](https://img.shields.io/npm/v/shaolinmkz-utils.svg)](https://www.npmjs.com/package/shaolinmkz-utils) [![Total Download](https://img.shields.io/npm/dt/shaolinmkz-utils.svg)](https://www.npmjs.com/package/shaolinmkz-utils)

A simple function that validates and returns common Nigerian Telco numbers.

# Installation

```sh
npm install shaolinmkz-utils
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
//   'Chukwuemeka Obiora Musa',
//   'Nwabuzor Obiora Chukwuemeka',
//   'Chukwuemeka James Nwabuzor'
// ]

try {
	const result2: any = await cleanUpDuplicateAsync([undefined]);
} catch (error) {
	console.log(error);
	//   {
	//     message: "The function argument must be an array of strings"
	//   }
}
```

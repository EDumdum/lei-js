[![npm version](https://badge.fury.io/js/fast-lei.svg)](https://badge.fury.io/js/fast-lei)
[![Build Status](https://travis-ci.org/EDumdum/lei-js.svg?branch=master)](https://travis-ci.org/EDumdum/lei-js)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/Edumdum/lei-js/master/LICENSE)

# LEI 

Validation and control key generation for [Legal Entity Identifier (LEI)](https://en.wikipedia.org/wiki/Legal_Entity_Identifier).

## Usage

### In node.js

```js
var LEI = require('fast-lei');

LEI.isValid('969500T3MBS4SQAMHJ45'); // false
LEI.isValid('724500VKKSH9QOLTFR81'); // true

LEI.generate('969500KSV493XWY0PS'); // 969500KSV493XWY0PS33

LEI.getMod97('724500884QS64MG71N'); // 76
```

## API

### `isValid(value)` -> `Boolean`

Check requirements.  
Returns if the LEI check digits are valid.

*Required*
- Value must be not `Null`
- Value must be of type `String`
- Value must respect format `^[0-9A-Z]{20}$`

### `generate(value)` -> `String`

Check requirements.  
Returns the LEI check digit appended to the value.

*Required*
- Value must be not `Null`
- Value must be of type `String`
- Value must respect format `^[0-9A-Z]{18}$`

### `getMod97(value)` -> `Number`

Does **NOT** check requirements.  
Returns the module 97 remainder.

**Note:** `getMod97(value) === 1` is equivalent to `isValid(value)`. You may want to use this method instead of `isValid` if you ensure argument requirements on your side.

*Required*
- Value must be not `Null`
- Value must be of type `String`
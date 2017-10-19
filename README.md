# luhn

Javascript tool to validate or generate control key for Legal Entity Identifier

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

### isValid

Check input value, must be not null, not undefined and of type string.

The stringified value must respect LEI format (/^[0-9A-Z]{18}[0-9]{2}$/).

Check the value againt modulo 97 and must be equals to 1.

Returns boolean.

### generate

 Check input value, must be not null, not undefined and of type string.

The stringified value must respect LEI forma0 without ending control digits (/^[0-9A-Z]{18}$/).

Returns input value with check digits appended at the end.

### getMod97

Compute modulo 97 remainder.

Fast entry: you must ensure that given rawValue is not null or empty and respect format /^[0-9A-Z]{1,}$/.

Note: Remainder cannot be directly used as check digits. To generate check digits, please refer to method generate.

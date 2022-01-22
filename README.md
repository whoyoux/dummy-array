# Dummy Array

[![Node.js CI](https://github.com/whoyoux/dummy-array/actions/workflows/node.js.yml/badge.svg?branch=master&event=push)](https://github.com/whoyoux/dummy-array/actions/workflows/node.js.yml)

Very simple package for creating a dummy array

## Installation

With npm:

```bash
$ npm install dummy-array
```

With yarn:

```bash
$ yarn add dummy-array
```

## Usage

```js
import { createArray } from 'dummy-array'

// Basic usage, returns [0,1]
createArray({ to: 2 });

// With 'from' parameter, returns [2, 3]
createArray({ from: 2 to: 4 });

// With 'step' parameter, returns [0, 2, 4]
createArray({ step: 2, to: 5 })

// With `from ` and `step` parameter, returns [5, 7, 9]
createArray({ from: 5, step: 2, to: 10 })
```

### Options

`to`

| Type   | Default value | Required | Description                             |
| ------ | ------------- | -------- | --------------------------------------- |
| number | -             | true     | How many elements shoud be in the array |

`from`

| Type   | Default value | Required | Description                                  |
| ------ | ------------- | -------- | -------------------------------------------- |
| number | 0             | false    | From which element the function should start |

`step`

| Type   | Default value | Required | Description                                           |
| ------ | ------------- | -------- | ----------------------------------------------------- |
| number | 1             | false    | By how much should the function increase each element |

## Tests

```
$ npm install
$ npm run test
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

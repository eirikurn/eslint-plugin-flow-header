# eslint-plugin-flow-required

Force flow comment.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-flow-required`:

```
$ npm install eslint-plugin-flow-required --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-flow-required` globally.

## Usage

Add `flow-required` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "flow-required"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "flow-required/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here






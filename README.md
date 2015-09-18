# &lt;gaia-sub-header&gt; ![](https://travis-ci.org/gaia-components/gaia-sub-header.svg)  [![devDependency Status](https://david-dm.org/gaia-components/gaia-sub-header/dev-status.svg)](https://david-dm.org/gaia-components/gaia-sub-header#info=devDependencies)


## Installation

```bash
$ bower install gaia-components/gaia-sub-header

```

Then include folowing files in HTML

```html
<script src="bower_components/gaia-component/gaia-component.js"></script>
<script src="bower_components/gaia-sub-header/gaia-sub-header.js"></script>
```

## Examples

- [Example](http://gaia-components.github.io/gaia-sub-header/)

## Accessibility

Level attribute defines a level of a sub-header within a structure. It helps accessibility users
learn how deep the header is located within a document or an app.

```html
<gaia-sub-header level="3">Sub-Header 3 levels down</gaia-sub-header>
```

## Usage

```html
<gaia-sub-header level="1">Sub-Header</gaia-sub-header>
```

Header with link

```html
<gaia-sub-header level="2"><a href="#">Gaia Sub-Header Link</a></gaia-sub-header>
```

## Tests

1. Ensure Firefox Nightly is installed on your machine.
2. `$ npm install`
3. `$ npm run test-unit`

If you would like tests to run on file change use:

`$ npm run test-unit-dev`

If your would like run integration tests, use:

`$ export FIREFOX_NIGHTLY_BIN=/absolute/path/to/nightly/firefox-bin`
`$ npm run test-integration`

## Lint check

Run lint check with command:

`$ npm run test-lint`

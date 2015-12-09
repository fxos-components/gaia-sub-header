# &lt;fxos-sub-header&gt; ![](https://travis-ci.org/fxos-components/fxos-sub-header.svg)

## Installation

```bash
$ npm install fxos-sub-header

```

Then include folowing files in HTML

```html
<script src="node_modules/fxos-component/fxos-component.js"></script>
<script src="node_modules/fxos-sub-header/fxos-sub-header.js"></script>
```

## Examples

- [Example](http://fxos-components.github.io/fxos-sub-header/)

## Accessibility

Level attribute defines a level of a sub-header within a structure. It helps accessibility users
learn how deep the header is located within a document or an app.

```html
<fxos-sub-header level="3">Sub-Header 3 levels down</fxos-sub-header>
```

## Usage

```html
<fxos-sub-header level="1">Sub-Header</fxos-sub-header>
```

Header with link

```html
<fxos-sub-header level="2"><a href="#">Gaia Sub-Header Link</a></fxos-sub-header>
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

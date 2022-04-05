# @cloak-app/sandbox

A simplified Cloak app for demos and experiments.

- [View demo](https://cloak-sandbox.netlify.app)
- [Edit CodeSandbox](https://githubbox.com/BKWLD/cloak-sandbox)

## Usage

```vue
<cloak-sandbox />
```

## Install

1. Install with `yarn add @cloak-app/sandbox`
2. Add to `nuxt.config` with `buildModules: ['@cloak-app/sandbox/nuxt']`

### Project Dependencies

- `.max-w*` styles (included in Cloak via `whitespace.styl`)

### Module Options

- `cloak.sandbox:`
  - `maxWidthClass` - The default max-width class to use for the block.

## Components

### `cloak-sandbox-block`

Renders a Block to be used within a Tower.

- props:
  - `maxWidthClass` - A `max-w-*` class to apply to the block

## Contributing

Run `yarn dev` to open a Nuxt dev build of [the demo directory](./demo).

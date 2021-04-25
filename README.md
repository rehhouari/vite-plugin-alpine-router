# vite-plugin-alpinejs-router

[![npm](https://img.shields.io/npm/v/vite-plugin-alpinejs-router.svg)](https://www.npmjs.com/package/vite-plugin-alpinejs-router)
[![Code style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/alecdotbiz)

Currently this detect changes in views directory and do a full reload.
Only for use with [vite-alpine-pwa](https://github.com/vite-alpine-pwa) template. 

&nbsp;

### Usage

```ts
import {default as AlpineRouter} from 'vite-plugin-alpinejs-router'

export default {
  plugins: [
    AlpineRouter(),
  ]
}
```

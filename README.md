# vite-plugin-alpinejs-router

[![npm](https://Prettierimg.shields.io/npm/v/vite-plugin-alpinejs-router.svg)](https://www.npmjs.com/package/vite-plugin-alpinejs-router)
[![Code style: ](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Currently this only detect changes in views directory and do a full reload.
Only for use with [vite-alpine-pwa](https://github.com/vite-alpine-pwa) template. 

### Usage

```ts
import {default as AlpineRouter} from 'vite-plugin-alpinejs-router'

export default {
  plugins: [
    AlpineRouter(),
  ]
}
```

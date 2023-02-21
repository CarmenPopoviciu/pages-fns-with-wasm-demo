# Pages Functions with WebAssembly Demo

This is a demo application that exemplifies the use of Wasm | text | binary module imports inside ⚡️[Pages Functions](https://developers.cloudflare.com/pages/platform/functions/) code. Head over to our [announcement]()(Not Yet Available) blog post to read more about it, or play with the live demo [here](https://pages-with-wasm-demo.pages.dev/).

## Credits

Kudos to [Vasco Asturiano](https://github.com/vasturiano) and all other contributors for their fantastic work on [globe.gl](https://github.com/vasturiano/globe.gl). 

❤︎

## Prerequisites

This project makes use of Rust-generated WebAssembly code inside Pages Functions Javascript code. In order to generate the WebAssembly binaries from the Rust code, you will need to have [`wasm-pack`](https://rustwasm.github.io/wasm-pack/installer/) installed. We recommend following [these](https://rustwasm.github.io/wasm-pack/book/quickstart.html) instructions.

## Develop

Install dependencies

```sh
yarn
```

Start local server

```sh
yarn dev
```
and go to `http://127.0.0.1:8788/` in your browser.

## Resources

coming soon ✨
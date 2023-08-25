# Rust Ethereum Day

Basic WASM wallet demo using TypeScript and Rust for [Rust Ethereum Day 2023](https://twitter.com/gakonst/status/1678536408238112769).

s/o to [@jxom](https://github.com/jxom) for kicking off the Rust code.

## Dev

Install [wasm-pack](https://rustwasm.github.io/docs/wasm-pack)

```bash
cargo install wasm-pack
```

Install and build dependencies

```bash
pnpm install
```

Run dev server on [http://localhost:5173](http://localhost:5173)

```bash
pnpm dev
```

## Prerequisites

- [pnpm](https://pnpm.io)
- [rustup](https://rustup.rs)

## Scripts

| Command           | Description                     |
| ----------------- | ------------------------------- |
| `pnpm dev`        | Run dev server                  |
| `pnpm build`      | Build playground for production |
| `pnpm build:wasm` | Build wasm-wallet package       |
| `pnpm clean`      | Clean build outputs             |
| `pnpm format`     | Format code                     |
| `pnpm lint`       | Lint code                       |
| `pnpm lint:fix`    | Lint and fix code                |
| `pnpm preview`    | Preview production build        |
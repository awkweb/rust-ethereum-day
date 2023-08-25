# Rust Ethereum Day

Basic WASM wallet using TypeScript types and Rust runtime implementation.

## Setup

Install [wasm-pack](https://rustwasm.github.io/docs/wasm-pack):

```bash
cargo install wasm-pack
```

Install and build dependencies:

```bash
pnpm install
```

Run dev server on [http://localhost:5173](http://localhost:5173):

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
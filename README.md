# `tzf-node`: A Node.js binding for tzf-rs

[![CI](https://github.com/ringsaturn/tzf-node/actions/workflows/CI.yml/badge.svg)](https://github.com/ringsaturn/tzf-node/actions/workflows/CI.yml)

## Install

TODO

```bash
```

|                  | node14 | node16 | node18 |
| ---------------- | ------ | ------ | ------ |
| Windows x64      | ✓      | ✓      | ✓      |
| Windows x32      | ✓      | ✓      | ✓      |
| Windows arm64    | ✓      | ✓      | ✓      |
| macOS x64        | ✓      | ✓      | ✓      |
| macOS arm64      | ✓      | ✓      | ✓      |
| Linux x64 gnu    | ✓      | ✓      | ✓      |
| Linux x64 musl   | ✓      | ✓      | ✓      |
| Linux arm gnu    | ✓      | ✓      | ✓      |
| Linux arm64 gnu  | ✓      | ✓      | ✓      |
| Linux arm64 musl | ✓      | ✓      | ✓      |
| Android arm64    | ✓      | ✓      | ✓      |
| Android armv7    | ✓      | ✓      | ✓      |
| FreeBSD x64      | ✓      | ✓      | ✓      |

## Development

- Install the latest `Rust`
- Install `Node.js@10+` which fully supported `Node-API`
- Install `yarn@1.x`

### Test

- yarn
- yarn build
- yarn test

And you will see:

```console
  ✔ sync getTz (237ms)
  ✔ run all cities (201ms)
  ─

  2 tests passed
```

### Benchmark

tzf-node is powered by tzf-rs, a Rust library designed for server side high
performance use cases. Which means it's not optimized for browser use cases. But
the data size has been optimized, like 5MB~ and use about 40MB memory.

```console
> tzf@0.2.3 bench
> node -r @swc-node/register benchmark/bench.ts

Running "Random Cities" suite...
Progress: 100%

  Random getTz:
    604 255 ops/s, ±1.77%   | fastest

Finished 1 case!
```

### Release package

```bash
npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease [--preid=<prerelease-id>] | from-git]

git push
```

## LICENSE

[MIT](./LICENSE)

The binary timezone data behind is licensed
[ODbL-1.0 license](https://github.com/ringsaturn/tzf-rel/blob/main/LICENSE),
same as upsteam
[`timezone-boundary-builder/DATA_LICENSE`](https://github.com/evansiroky/timezone-boundary-builder/blob/master/DATA_LICENSE)

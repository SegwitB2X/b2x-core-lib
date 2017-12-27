b2x-core-lib Library
=======

A pure and powerful JavaScript Segwit2X library.

## Principles

Segwit2X is a powerful new peer-to-peer platform for the next generation of financial technology. The decentralized nature of the Segwit2X network allows for highly resilient Segwit2X infrastructure, and the developer community needs reliable, open-source tools to implement Segwit2X apps and services.

## Get Started

```
npm install b2x-core-lib
```

```
bower install b2x-core-lib
```

## Documentation

The complete docs are hosted here: [bitcore documentation](http://bitcore.io/guide/). There's also a [bitcore API reference](http://bitcore.io/api/) available generated from the JSDocs of the project, where you'll find low-level details on each bitcore utility.

- [Read the Developer Guide](http://bitcore.io/guide/)
- [Read the API Reference](http://bitcore.io/api/)

To get community assistance and ask for help with implementation questions, please use our [community forums](https://forum.bitcore.io/).

## Examples

* [Generate a random address](https://github.com/SegwitB2X/b2x-core-lib/blob/master/docs/examples.md#generate-a-random-address)
* [Generate a address from a SHA256 hash](https://github.com/SegwitB2X/b2x-core-lib/blob/master/docs/examples.md#generate-a-address-from-a-sha256-hash)
* [Import an address via WIF](https://github.com/SegwitB2X/b2x-core-lib/blob/master/docs/examples.md#import-an-address-via-wif)
* [Create a Transaction](https://github.com/SegwitB2X/b2x-core-lib/blob/master/docs/examples.md#create-a-transaction)
* [Sign a Segwit2X message](https://github.com/SegwitB2X/b2x-core-lib/blob/master/docs/examples.md#sign-a-segwit2x-message)
* [Verify a Segwit2X message](https://github.com/SegwitB2X/b2x-core-lib/blob/master/docs/examples.md#verify-a-segwit2x-message)
* [Create an OP RETURN transaction](https://github.com/SegwitB2X/b2x-core-lib/blob/master/docs/examples.md#create-an-op-return-transaction)
* [Create a 2-of-3 multisig P2SH address](https://github.com/SegwitB2X/b2x-core-lib/blob/master/docs/examples.md#create-a-2-of-3-multisig-p2sh-address)
* [Spend from a 2-of-2 multisig P2SH address](https://github.com/SegwitB2X/b2x-core-lib/blob/master/docs/examples.md#spend-from-a-2-of-2-multisig-p2sh-address)

## Development & Tests

```sh
git clone https://github.com/SegwitB2X/b2x-core-lib
cd b2x-core-lib
npm install
```

Run all the tests:

```sh
gulp test
```
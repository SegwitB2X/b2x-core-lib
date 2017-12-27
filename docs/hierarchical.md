# HDKeys
Create and derive extended public and private keys according to the BIP32 standard for Hierarchical Deterministic (HD) keys.

## Hierarchically Derived Keys
b2x-core-lib provides full support for BIP32;

## HDPrivateKey
An instance of a [PrivateKey](privatekey.md) that also contains information required to derive child keys.

Sample usage:

```javascript
var bitcore = require('bitcore');
var HDPrivateKey = bitcore.HDPrivateKey;

var hdPrivateKey = new HDPrivateKey();
var retrieved = new HDPrivateKey('xpriv...');
var derived = hdPrivateKey.derive("m/0'");
var derivedByNumber = hdPrivateKey.derive(1).derive(2, true);
var derivedByArgument = hdPrivateKey.derive("m/1/2'");
assert(derivedByNumber.xprivkey === derivedByArgument.xprivkey);

var address = derived.privateKey.toAddress();

// obtain HDPublicKey
var hdPublicKey = hdPrivateKey.hdPublicKey;
```

## HDPublicKey
An instance of a PublicKey that can be derived to build extended public keys. Note that hardened paths are not available when deriving an HDPublicKey.

```javascript
var hdPrivateKey = new HDPrivateKey();
var hdPublicKey = hdPrivateKey.hdPublicKey;
try {
  new HDPublicKey();
} catch(e) {
  console.log("Can't generate a public key without a private key");
}

var address = new Address(hdPublicKey.publicKey, Networks.livenet);
var derivedAddress = new Address(hdPublicKey.derive(100).publicKey, Networks.testnet);
```

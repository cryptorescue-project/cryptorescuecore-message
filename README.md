# CryptoRescue Message Verification and Signing for CryptoRescueCore




cryptorescuecore-message adds support for verifying and signing cryptorescue messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main cryptorescuecore repo](https://github.com/cryptorescue-project/cryptorescuecore) for more information.

## Getting Started

```sh
npm install cryptorescuecore-message
```

```sh
bower install cryptorescuecore-message
```

To sign a message:

```javascript
var cryptorescuecore = require('cryptorescuecore-lib');
var Message = require('cryptorescuecore-message');

var privateKey = cryptorescuecore.PrivateKey.fromWIF('5K2DxqJ9kLFL3hF3KEWDftAig3TyAXenDxpr27PaLBieuSFo5PQ');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'RGRsG7UQc3AmvdrhPDngpPjvTNhJQFeHYj';
var signature = 'G5cFMHRysjcxkBJ7mol8l3cjPbFQFQ68fNqTGehTO9/cLNUaflt3gQT//yAUp5fqWF0snDlZYkXJoooazBicRTg=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/cryptorescue-project/cryptorescuecore/blob/master/CONTRIBUTING.md) on the main cryptorescuecore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/cryptorescue-project/cryptorescuecore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.

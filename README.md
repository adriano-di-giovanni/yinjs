# Yin

> A javascript implementation of the [YIN algorithm](http://audition.ens.fr/adc/pdf/2002_JASA_YIN.pdf) for Node.js and the browser.

## Installation

```bash
npm install yinjs
```

## Usage

```javascript
var frequency = yin(data, sampleRate, threshold)
```

The `data` argument is a `Float32Array` representing time-domain data for a signal.

The `sampleRate` argument is a `Number`.

The `threshold` argument is a `Number`. It is optional. It defaults to `0.07`.

The function returns a `Number` value representing the fundamental frequency of the signal.

The `example/` folder contains a working example of the yin function analyzing data from live input.

## License

This project is [MIT-licensed](LICENSE)

// const yargs = require('yargs');
//
// const geocode = require('./geocode/geocode');
//
// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: 'address',
//       describe: 'Address to fetch weather for',
//       string: true
//     }
//   })
//   .help()
//   .alias('help', 'h')
//   .argv;
//
// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });

// 4a04d1c42fd9d32c97a2c291a32d5e2d

const request = require('request');

request({
  url: 'https://s3.amazonaws.com/amt.robertlo.test/amt_rob.json',
  json: true
}, (error, response, body) => {
  if (error) {
    console.log('Unable to connect to s3 server.');
  } else if (response.statusCode === 400) {
    console.log('Unable to fetch s3.');
  } else if (response.statusCode === 200) {
    console.log(body.content.LED);
  }
});

// const webpack = require('webpack');
// const dotenv = require('dotenv');

// module.exports = () => {
//   const env = dotenv.config().parsed; // returns an object with all of the env vars in .env

//   const envKeys = Object.keys(env).reduce((prev, next) => {
//     prev[`process.env.${next}`] = JSON.stringify(env[next]);
//     return prev;
//   }, {});

//   console.log(envKeys);

//   return {
//     plugins: [new webpack.DefinePlugin(envKeys)],
//   };
// };

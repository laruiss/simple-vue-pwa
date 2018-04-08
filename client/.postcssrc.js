'use strict';

const postcssImport = require('postcss-import');
const cssnano = require('cssnano');
const cssnext = require('postcss-cssnext');

module.exports = {
  plugins: [
      postcssImport(),
      cssnext({
        features: {
          autoprefixer: true,
        },
      }),
      cssnano({
          reduceIdents: {
              keyframes: false,
          },
          discardUnused: {
              keyframes: false,
          },
          autoprefixer: false,
      }),
  ],
};

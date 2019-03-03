const path = require('path');
const buble = require('rollup-plugin-buble');
const sizeSnapshot = require('rollup-plugin-size-snapshot').sizeSnapshot;
const terser = require('rollup-plugin-terser').terser;

const resolve = _path => path.resolve(__dirname, '../', _path)
const name = "SimpleUtilsTiny"
const input = resolve('src/index.js')

export default [
  {
    input,
    output: {
      file: resolve('dist/simple-utils-tiny.min.js'),
      format: 'umd',
      exports: 'named',
      name
    },
    plugins: [
      buble(),
      sizeSnapshot(),
      terser()
    ]
  },
  {
    input,
    output: {
      file: resolve('dist/simple-utils-tiny.js'),
      format: 'umd',
      exports: 'named',
      name
    },
    plugins: [
      buble(),
      sizeSnapshot()
    ]
  },
  {
    input,
    output: {
      file: resolve('dist/simple-utils-tiny.esm.js'),
      format: 'es',
      exports: 'named',
      name
    },
    plugins: [
      buble(),
      sizeSnapshot(),
      terser()
    ]
  }
]

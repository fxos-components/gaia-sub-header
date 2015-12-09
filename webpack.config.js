module.exports = {
  entry: './src/fxos-sub-header.js',
  output: {
    filename: 'fxos-sub-header.js',
    library: 'FXOSSubHeader',
    libraryTarget: 'umd'
  },

  externals: {
    "fxos-component": "fxosComponent"
  }
}

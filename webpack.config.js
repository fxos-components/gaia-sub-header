module.exports = {
  entry: './src/fxos-sub-header.js',
  output: {
    filename: 'fxos-sub-header.js',
    library: 'FXOSSubHeader',
    libraryTarget: 'umd'
  },

  externals: {
    "fxos-component": {
      root: "fxosComponent",
      commonjs: "fxos-component",
      commonjs2: "fxos-component",
      amd: "fxos-component"
    }
  }
}

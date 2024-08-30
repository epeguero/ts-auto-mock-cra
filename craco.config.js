const TsAutoMockTransformer = require('ts-auto-mock/transformer').default;

module.exports = {
  webpack: {
    configure: (webpack) => {
      webpack.module.rules.push({
        test: /\.ts(x)?$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: [{
          loader: 'ts-loader',
          options: {
            getCustomTransformers: (program, getProgram) => ({before: [ TsAutoMockTransformer(program, {features: ['random']}) ]})
          },
        }]
      })
      return webpack;
    }
  }
}
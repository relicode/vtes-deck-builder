module.exports = {
  modules: true,
  plugins: [
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default',
    }),
    require('css-mqpacker')(),
    require('postcss-nested')(),
    require('lost')(),
  ],
}

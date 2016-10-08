module.exports = {
    entry: { 
      main: './src/main.ts'
    },
    output: { filename: 'dist/app.js' },
    resolve: {
        extensions: ['', '.ts', '.vue', '.js'],
        alias: {vue: 'vue/dist/vue.js'}
    },
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.ts$/, loader: 'vue-ts' }
        ],
    },
    vue: {
      loaders: { js: 'vue-ts-loader', },
      esModule: true
    },
}

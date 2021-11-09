module.exports = {
    // https://cli.vuejs.org/config/#publicpath
    // publicPath: process.env.NODE_ENV === 'production' ? '/blog/' : '/',
    outputDir: 'docs',
    chainWebpack: (config) => {
        config
            .plugin('html')
            .tap((args) => {
                args[0].title = '76ms';
                return args;
            });
    }

};
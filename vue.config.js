module.exports = {
    // https://cli.vuejs.org/config/#publicpath
    publicPath: process.env.NODE_ENV === 'production' ? '/blog/' : '/',
    chainWebpack: (config) => {
        config
            .plugin('html')
            .tap((args) => {
                args[0].title = 'Corgux | Making stuff online';
                return args;
            });
    }

};
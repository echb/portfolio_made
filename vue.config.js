module.exports = {
    /* Deploy the URL in the production environment and the development environment: the current environment can be distinguished, baseUrl has been deprecated since Vue CLI 3.3, use publicPath */
    //  baseUrl: process.env.NODE_ENV === 'production' ? './' : '/' 
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    // publicPath: process.env.NODE_ENV === 'production' ? '/public/' : './',
    /* Output file directory: when npm run build, the directory name of the generated file */
    outputDir: 'dist',
    /* Place the generated static resources (js, css, img, fonts) (relative to outputDir) directory */
    assetsDir: "assets",
    /* Whether to generate the sourceMap file when constructing the production package, false will increase the construction speed */
    productionSourceMap: false,
    /* By default, the generated static resources include hash in their file names to better control the cache. You can turn off file name hashing by setting this option to false. (When false is to leave the original file name unchanged) */
    filenameHashing: false,
    /* Perform eslint detection when the code is saved */
    lintOnSave: true,
    /* webpack-dev-server related configuration */
    devServer: {
        /* Open the browser automatically */
        open: true,
        /* Set to 0.0.0.0, all addresses can be accessed */
        host: '0.0.0.0',
        port: 8066,
        https: false,
        hotOnly: false,
        /* Use proxy */
        proxy: {
            '/api': {
                /* Target proxy server address */
                target: 'http://47.100.47.3/',
                /* Allow cross-domain */
                changeOrigin: true,
            },
        },
    },
}

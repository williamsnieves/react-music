const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = (env) => {
    const plugins = [
        new ExtractTextPlugin("css/[name].css")
    ]

    if (env.NODE_ENV === 'production') {
        plugins.push(
            new CleanWebpackPlugin(['dist'], {root: __dirname})
        )
    }

    return {
        entry: {
            main: path.resolve(__dirname, 'src/index.js'),
        },
        resolve: {
            extensions: ['json', '.js', '.jsx']
        },
        output: {
            path: path.resolve(__dirname, '/dist'),
            filename: 'js/[name].js',
            publicPath: path.resolve(__dirname, '/dist')+"/",
            chunkFilename: 'js/[id].[chunkhash].js',
        },
        devServer: {
            port: 9000,
        },
        module: {
            rules: [
                {
                    // test: que tipo de archivo quiero reconocer,
                    // use: que loader se va a encargar del archivo
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env', 'react', 'stage-2'],
                        }
                    },
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                           loader: 'css-loader',
                           options: {
                              modules: true,
                              importLoaders: 1
                            }
                        },
                        'postcss-loader'
                    ]
                    })
                },
                {
                  test: /\.scss$/,
                  use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                  })
                },
                {
                    test: /\.(jpg|png|gif|svg)$/,
                    use: {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            fallback: 'file-loader',
                            name: 'images/[name].[hash].[ext]',
                        }
                    }
                },
            ]
        },
        plugins
    }
}
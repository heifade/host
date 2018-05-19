import * as webpack from "webpack";
import * as path from "path";
import getBabelConfig from "./babel.config";
import * as MiniCssExtractPlugin from "mini-css-extract-plugin";
import * as CleanWebpackPlugin from "clean-webpack-plugin";
import * as HtmlWebpackPlugin from "html-webpack-plugin";

export default function(env: any, argv: any) {
  let src = path.resolve(__dirname, "./src");
  let dist = path.resolve(__dirname, "./dist");
  let node_modules = /node_modules/;

  let babelConfig = getBabelConfig(false);

  let config: webpack.Configuration = {
    mode: "development",
    entry: {
      index: path.resolve(src, "./index/index.tsx")
    },
    output: {
      filename: "[chunkhash:8].[name].js",
      path: dist
    },
    target: "web",
    devtool: "source-map",
    resolve: {
      modules: ["node_modules", path.join(__dirname, "../node_modules")],
      extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: node_modules,
          use: [
            { loader: "babel-loader", options: babelConfig },
            { loader: "ts-loader" }
          ]
        },
        {
          test: /\.css$/,
          exclude: node_modules,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                modules: true
              }
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {}
            }
          ]
        },
        {
          test: /\.less$/,
          // exclude: node_modules,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                modules: true
              }
            },
            {
              loader: "less-loader"
            }
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf|png|svg|gif|jpe?g)$/,
          exclude: /node_modules/,
          loader: "url-loader",
          options: {
            name: "[chunkhash:8].[name].[ext]",
            outputPath: "imgs/",
            limit: 120
          }
        }
      ]
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            chunks: "initial",
            minChunks: 2,
            maxInitialRequests: 5,
            minSize: 0
          },
          vendor: {
            test: /node_modules/,
            chunks: "initial",
            name: "vendor",
            priority: 10,
            enforce: true
          }
        }
      },
      runtimeChunk: true
    },
    plugins: [
      new CleanWebpackPlugin(["dist", "dist", "build-temp"]),
      new HtmlWebpackPlugin({
        title: "host",
        template: "./public/index.html"
      }),
      new MiniCssExtractPlugin({
        filename: "[chunkhash:8].[name].css",
        chunkFilename: "[id].css"
      })
    ],
    devServer: {
      port: 9000,
      open: true,
      publicPath: "/"
    }
  };

  return config;
}

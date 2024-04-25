import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    // Есть смысл выносить лоадеры в отдельный объект, чтобы потом четко видеть порядок их применения в return
    const typescriptLoader: webpack.RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const cssLoader: webpack.RuleSetRule = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    // Включаем css-modules
                    modules: {
                        // Свойство, которое указывает для каких файлов делать генерацию css, как для css-modules
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        // Настраиваем название сгенерированного класса в css-modules
                        localIdentName: options.isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
                    },
                }
            },
            "sass-loader",
        ],
    };

    return [
        typescriptLoader,
        cssLoader
    ]
}
import HtmlWebpackPlugin from "html-webpack-plugin";
//Для вынесения css в отдельные файлы и их минификации
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from "webpack";
import {BuildOptions} from "./types/config";

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [new HtmlWebpackPlugin({template: paths.html}), new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css'
    })]
}
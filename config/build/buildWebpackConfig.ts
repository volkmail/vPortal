import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";
import {buildDevServer} from "./buildDevServer";

/**
 * Выносим процесс формирования конфига в отдельный метод, который принимает необходимый набор опций.
 * Их мы передаем из вне, чтобы внутри логика не была перегруженной и не пришлось хардкодить, например, пути.
 *
 * По такому же принципу вынесли buildLoaders, buildResolvers, buildPlugins
 */
export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {mode, paths, isDev} = options;
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true
        },
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: buildDevServer(options),
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
    }
}
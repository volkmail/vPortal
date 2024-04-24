import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";

/**
 * Выносим процесс формирования конфига в отдельный метод, который принимает необходимый набор опций.
 * Их мы передаем из вне, чтобы внутри логика не была перегруженной и не пришлось хардкодить, например, пути.
 *
 * По такому же принципу вынесли buildLoaders, buildResolvers, buildPlugins
 */
export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {mode, paths} = options;
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
    }
}
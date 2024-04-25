import WebpackDevServer from "webpack-dev-server";
import {BuildOptions} from "./types/config";

export function buildDevServer(options: BuildOptions): WebpackDevServer.Configuration {
    return options.isDev ? {
        port: options.port,
        open: true,
        historyApiFallback: true,
    } : undefined
}
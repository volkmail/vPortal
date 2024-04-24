import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
    // Есть смысл выносить лоадеры в отдельный объект, чтобы потом четко видеть порядок их применения в return
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        typescriptLoader
    ]
}
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    // Указываем, какой файл в модуле (папке) является корневым
    mainFiles: ['index'],
    // По-умолчанию alias должны начинаться с символа "@", но так как мы настроили свойства preferAbsolute и modules их можно опустить
    alias: {},
  };
}

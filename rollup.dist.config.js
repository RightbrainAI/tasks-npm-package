import { babel, getBabelOutputPlugin } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'

/**
 * @type {import("rollup").RollupOptions}
 */
export default [
  {
    input: 'lib/index.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'es',
        plugins: [getBabelOutputPlugin({ presets: ['@babel/preset-env'] })],
        sourcemap: true
      },
      {
        file: 'dist/index.cjs',
        format: 'cjs',
        plugins: [getBabelOutputPlugin({ presets: ['@babel/preset-env'] })],
        sourcemap: true
      }
    ]
  },
  {
    input: 'lib/index.js',
    output: {
      file: 'dist/index.iife.js',
      format: 'iife',
      name: 'index',
      sourcemap: true
    },
    plugins: [
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled'
      })
    ]
  }
]

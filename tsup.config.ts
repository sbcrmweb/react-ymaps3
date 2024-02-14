import { defineConfig } from 'tsup';

export default defineConfig({
  dts: true,
  bundle: false,
  treeshake: true,
  splitting: true,
  format: ['esm'],
  entry: ['src/index.ts', 'src/**/*.ts', 'src/**/*.tsx'],
  sourcemap: true,
  clean: false,
});

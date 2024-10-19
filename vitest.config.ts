import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['html', 'lcov', 'text'],
      include: ['**/*.{ts,tsx}'],
      exclude: ['**/*.d.ts', '**/index.ts', '**/start*.ts'],
      thresholds: {
        branches: 100,
        functions: 100,
        lines: 100,
        statements: 100,
      },
    },
    environment: 'node',
    include: ['**/*.test.{ts,tsx}'],
  },
});

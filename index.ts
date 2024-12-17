export * from './src/App';

export const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean';
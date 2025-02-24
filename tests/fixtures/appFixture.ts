import { mergeTests } from '@playwright/test';
import { baseFixture } from './baseFixture';
import { frontendFixture } from './frontendFixture';

// Extending the base test with all other fixtures
export const appFixture = mergeTests(
  baseFixture,
  frontendFixture
);
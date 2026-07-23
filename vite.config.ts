import { defineConfig } from 'vite';

// Deployed to https://alx094.github.io/exam-simulator/ , so assets must be
// served from that sub-path.
export default defineConfig({
  base: '/exam-simulator/',
});

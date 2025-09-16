import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vike from 'vike/plugin';

export default defineConfig({
  // The core plugins for Vike and React.
  // This is the only configuration needed for a minimal reproduction.
  plugins: [react(), vike()],
});

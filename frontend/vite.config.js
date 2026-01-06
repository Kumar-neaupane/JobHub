// vite.config.js
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
// If you are using a framework, also import its plugin, e.g.,
import react from '@vitejs/plugin-react'; 

export default defineConfig({
  plugins: [
    react(), // Add your framework plugin here
    tailwindcss(),
  ],
});

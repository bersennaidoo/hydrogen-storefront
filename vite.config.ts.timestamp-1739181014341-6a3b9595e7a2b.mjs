// vite.config.ts
import { defineConfig } from "file:///home/bersen/shopify-projects/hydrogen-storefront/node_modules/vite/dist/node/index.js";
import { hydrogen } from "file:///home/bersen/shopify-projects/hydrogen-storefront/node_modules/@shopify/hydrogen/dist/vite/plugin.js";
import { oxygen } from "file:///home/bersen/shopify-projects/hydrogen-storefront/node_modules/@shopify/mini-oxygen/dist/vite/plugin.js";
import { vitePlugin as remix } from "file:///home/bersen/shopify-projects/hydrogen-storefront/node_modules/@remix-run/dev/dist/index.js";
import tsconfigPaths from "file:///home/bersen/shopify-projects/hydrogen-storefront/node_modules/vite-tsconfig-paths/dist/index.mjs";
import tailwindcss from "file:///home/bersen/shopify-projects/hydrogen-storefront/node_modules/@tailwindcss/vite/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    tailwindcss(),
    hydrogen(),
    oxygen(),
    remix({
      presets: [hydrogen.preset()],
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_lazyRouteDiscovery: true
      }
    }),
    tsconfigPaths()
  ],
  build: {
    // Allow a strict Content-Security-Policy
    // withtout inlining assets as base64:
    assetsInlineLimit: 0
  },
  ssr: {
    optimizeDeps: {
      /**
       * Include dependencies here if they throw CJS<>ESM errors.
       * For example, for the following error:
       *
       * > ReferenceError: module is not defined
       * >   at /Users/.../node_modules/example-dep/index.js:1:1
       *
       * Include 'example-dep' in the array below.
       * @see https://vitejs.dev/config/dep-optimization-options
       */
      include: []
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9iZXJzZW4vc2hvcGlmeS1wcm9qZWN0cy9oeWRyb2dlbi1zdG9yZWZyb250XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9iZXJzZW4vc2hvcGlmeS1wcm9qZWN0cy9oeWRyb2dlbi1zdG9yZWZyb250L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2JlcnNlbi9zaG9waWZ5LXByb2plY3RzL2h5ZHJvZ2VuLXN0b3JlZnJvbnQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQge2RlZmluZUNvbmZpZ30gZnJvbSAndml0ZSc7XG5pbXBvcnQge2h5ZHJvZ2VufSBmcm9tICdAc2hvcGlmeS9oeWRyb2dlbi92aXRlJztcbmltcG9ydCB7b3h5Z2VufSBmcm9tICdAc2hvcGlmeS9taW5pLW94eWdlbi92aXRlJztcbmltcG9ydCB7dml0ZVBsdWdpbiBhcyByZW1peH0gZnJvbSAnQHJlbWl4LXJ1bi9kZXYnO1xuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSAndml0ZS10c2NvbmZpZy1wYXRocyc7XG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSAnQHRhaWx3aW5kY3NzL3ZpdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgdGFpbHdpbmRjc3MoKSxcbiAgICBoeWRyb2dlbigpLFxuICAgIG94eWdlbigpLFxuICAgIHJlbWl4KHtcbiAgICAgIHByZXNldHM6IFtoeWRyb2dlbi5wcmVzZXQoKV0sXG4gICAgICBmdXR1cmU6IHtcbiAgICAgICAgdjNfZmV0Y2hlclBlcnNpc3Q6IHRydWUsXG4gICAgICAgIHYzX3JlbGF0aXZlU3BsYXRQYXRoOiB0cnVlLFxuICAgICAgICB2M190aHJvd0Fib3J0UmVhc29uOiB0cnVlLFxuICAgICAgICB2M19sYXp5Um91dGVEaXNjb3Zlcnk6IHRydWUsXG4gICAgICB9LFxuICAgIH0pLFxuICAgIHRzY29uZmlnUGF0aHMoKSxcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICAvLyBBbGxvdyBhIHN0cmljdCBDb250ZW50LVNlY3VyaXR5LVBvbGljeVxuICAgIC8vIHdpdGh0b3V0IGlubGluaW5nIGFzc2V0cyBhcyBiYXNlNjQ6XG4gICAgYXNzZXRzSW5saW5lTGltaXQ6IDAsXG4gIH0sXG4gIHNzcjoge1xuICAgIG9wdGltaXplRGVwczoge1xuICAgICAgLyoqXG4gICAgICAgKiBJbmNsdWRlIGRlcGVuZGVuY2llcyBoZXJlIGlmIHRoZXkgdGhyb3cgQ0pTPD5FU00gZXJyb3JzLlxuICAgICAgICogRm9yIGV4YW1wbGUsIGZvciB0aGUgZm9sbG93aW5nIGVycm9yOlxuICAgICAgICpcbiAgICAgICAqID4gUmVmZXJlbmNlRXJyb3I6IG1vZHVsZSBpcyBub3QgZGVmaW5lZFxuICAgICAgICogPiAgIGF0IC9Vc2Vycy8uLi4vbm9kZV9tb2R1bGVzL2V4YW1wbGUtZGVwL2luZGV4LmpzOjE6MVxuICAgICAgICpcbiAgICAgICAqIEluY2x1ZGUgJ2V4YW1wbGUtZGVwJyBpbiB0aGUgYXJyYXkgYmVsb3cuXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvZGVwLW9wdGltaXphdGlvbi1vcHRpb25zXG4gICAgICAgKi9cbiAgICAgIGluY2x1ZGU6IFtdLFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcVUsU0FBUSxvQkFBbUI7QUFDaFcsU0FBUSxnQkFBZTtBQUN2QixTQUFRLGNBQWE7QUFDckIsU0FBUSxjQUFjLGFBQVk7QUFDbEMsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxpQkFBaUI7QUFFeEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsWUFBWTtBQUFBLElBQ1osU0FBUztBQUFBLElBQ1QsT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBLE1BQ0osU0FBUyxDQUFDLFNBQVMsT0FBTyxDQUFDO0FBQUEsTUFDM0IsUUFBUTtBQUFBLFFBQ04sbUJBQW1CO0FBQUEsUUFDbkIsc0JBQXNCO0FBQUEsUUFDdEIscUJBQXFCO0FBQUEsUUFDckIsdUJBQXVCO0FBQUEsTUFDekI7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELGNBQWM7QUFBQSxFQUNoQjtBQUFBLEVBQ0EsT0FBTztBQUFBO0FBQUE7QUFBQSxJQUdMLG1CQUFtQjtBQUFBLEVBQ3JCO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxjQUFjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVdaLFNBQVMsQ0FBQztBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

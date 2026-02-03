import { defineConfig } from "vite";

// Commands:
// "npm run build" to build the project
// "npm run dev" to run a local server
// "npm run deploy_gh" to deploy to GitHub Pages (make sure to set base to "/dalgarden_view/")
// "npm run deploy_netlify" to deploy to Netlify (make sure to set base to "/")

export default defineConfig({
  base: "/",  // "/dalgarden_view/" for GitHub Pages | "/" for Netlify
});

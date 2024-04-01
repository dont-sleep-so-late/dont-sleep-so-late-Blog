import { defineConfig } from "vitepress";
import nav from "./nav";
import sidebar from "./sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "你别睡这么晚！",
  description: "A study note blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png", // 表示docs/public/avartar.png
    nav,
    sidebar,
    socialLinks: [
      { icon: "github", link: "https://github.com/dont-sleep-so-late" },
    ],
  },
});

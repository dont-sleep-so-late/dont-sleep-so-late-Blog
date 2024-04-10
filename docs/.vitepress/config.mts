import { defineConfig } from "vitepress";
//引入PWA（Progressive Web App）是一种渐进式 Web 应用，它可以像原生应用一样提供类似的体验。PWA 可以在离线时工作，可以在主屏幕上添加图标，可以接收推送通知等。
import { withPwa } from "@vite-pwa/vitepress";

import nav from "./nav";
import sidebar from "./sidebar";

// https://vitepress.dev/reference/site-config

export default withPwa(
  defineConfig({
    title: "你别睡这么晚！",
    description: "A study note blog",
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      logo: "/logo.png", // 表示docs/public/avartar.png
      nav,
      sidebar,
      algolia: {
        appId: "K880G321DE",
        apiKey: "5c9b9d0f591eb08ace149bf3d24ed065",
        indexName: "myBlog2.0",
        placeholder: "快乐搜索吧",
        translations: {
          button: {
            buttonText: "搜索",
            buttonAriaLabel: "搜索",
          },
          modal: {
            searchBox: {
              resetButtonTitle: "清除查询条件",
              resetButtonAriaLabel: "清除查询条件",
              cancelButtonText: "取消",
              cancelButtonAriaLabel: "取消",
            },
            startScreen: {
              recentSearchesTitle: "搜索历史",
              noRecentSearchesText: "没有搜索历史",
              saveRecentSearchButtonTitle: "保存至搜索历史",
              removeRecentSearchButtonTitle: "从搜索历史中移除",
              favoriteSearchesTitle: "收藏",
              removeFavoriteSearchButtonTitle: "从收藏中移除",
            },
            errorScreen: {
              titleText: "无法获取结果",
              helpText: "你可能需要检查你的网络连接",
            },
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
              searchByText: "搜索提供者",
            },
            noResultsScreen: {
              noResultsText: "无法找到相关结果",
              suggestedQueryText: "你可以尝试查询",
              reportMissingResultsText: "你认为该查询应该有结果？",
              reportMissingResultsLinkText: "点击反馈",
            },
          },
        },
      },
      socialLinks: [
        { icon: "github", link: "https://github.com/dont-sleep-so-late" },
      ],
      darkModeSwitchLabel: "切换主题",
      lightModeSwitchTitle: "切换到白色主题",
      darkModeSwitchTitle: "切换到黑色主题",
      sidebarMenuLabel: "目录",
      returnToTopLabel: "返回顶部",
      langMenuLabel: "语言",
      externalLinkIcon: true,
      notFound: {
        quote: "看起来我们进入了错误的链接，这里什么都没有",
        linkText: "返回主页",
      },
    },
    pwa: {
      outDir: ".vitepress/dist", // 输出目录
      registerType: "autoUpdate", // 注册类型为自动更新
      includeManifestIcons: false, // 不包含清单图标
      manifest: {
        id: "/", // 清单 ID
        name: "你别睡这么晚的小册", // 应用名称
        short_name: "晚小册", // 应用的短名称
        description: "你别睡这么晚的个人博客", // 应用的描述
        theme_color: "#ffffff", // 主题颜色
        icons: [
          {
            src: "/logo.png", // 图标路径
            sizes: "120x120", // 图标尺寸
            type: "image/png", // 图标类型
          },
          {
            src: "/logo.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/logo.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{css,js,html,svg,png,ico,txt,woff2}"], // 匹配需要缓存的文件类型
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i, // 匹配需要缓存的 Google 字体
            handler: "CacheFirst", // 缓存优先策略
            options: {
              cacheName: "google-fonts-cache", // 缓存名称
              expiration: {
                maxEntries: 10, // 最大缓存条目数
                maxAgeSeconds: 60 * 60 * 24 * 365, // 缓存有效期，365天
              },
              cacheableResponse: {
                statuses: [0, 200], // 缓存的响应状态码
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i, // 匹配需要缓存的 Google 字体
            handler: "CacheFirst", // 缓存优先策略
            options: {
              cacheName: "gstatic-fonts-cache", // 缓存名称
              expiration: {
                maxEntries: 10, // 最大缓存条目数
                maxAgeSeconds: 60 * 60 * 24 * 365, // 缓存有效期，365天
              },
              cacheableResponse: {
                statuses: [0, 200], // 缓存的响应状态码
              },
            },
          },
          {
            urlPattern: /^https:\/\/cdn\.jsdelivr\.net\/.*/i, // 匹配需要缓存的 jsdelivr 图片
            handler: "NetworkFirst", // 网络优先策略
            options: {
              cacheName: "jsdelivr-images-cache", // 缓存名称
              expiration: {
                maxEntries: 10, // 最大缓存条目数
                maxAgeSeconds: 60 * 60 * 24 * 7, // 缓存有效期，7天
              },
              cacheableResponse: {
                statuses: [0, 200], // 缓存的响应状态码
              },
            },
          },
        ],
      },
    },
  })
);

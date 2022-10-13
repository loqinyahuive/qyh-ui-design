import { defineUserConfig, defaultTheme, viteBundler } from 'vuepress'
import { resolve } from "path";
import * as navbar from "./configs/navbar";
import * as sidebar from "./configs/sidebar";
// import  codeExample from 'vuepress-plugin-code-example'
import { codeBlockPlugin } from "@yanyu-fe/vuepress-plugin-code-block";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'UI组件库',
  description: '这是我的第一个 VuePress 站点',
  plugins: [
    codeBlockPlugin()
  ],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "ui-design",
    }
  },
  theme: defaultTheme({
    locales: {
      "/": {
        navbar: navbar.zh,
        sidebar: sidebar.zh,
      }
    }
  }),
  // "ui-design":resolve(__dirname,"../../packages/ui/src/index.ts"),
  bundler:viteBundler({
    viteOptions:{
        plugins:[ vueJsx()],
        resolve:{
            alias:{
                // "ui-design/style":resolve(__dirname,"../../packages/ui/src/style.ts"),
                "ui-repo":resolve(__dirname,"../../packages/components/title/index.js"),
            }
        },
        css:{
            preprocessorOptions:{
                less:{
                 modifyVars:{
                     "html-dark-selector": "~'html.dark'"
                 }
                }
            }
        }
    },
})
})


# CoT 的个人简历

这是一个使用 Nuxt 4 构建的响应式个人简历站点。页面内容通过环境变量注入，支持在浏览器中预览并打印为 PDF。

[![源码仓库](https://img.shields.io/badge/GitHub-kerntau%2Fcv-black?logo=github)](https://github.com/kerntau/cv)

## 技术栈

- Nuxt 4、Vue 3、Vue Router
- UnoCSS、SCSS
- Nuxt Icon、Iconify

## 项目结构

    assets/main.scss          # 全局样式
    components/               # InfoLi、InfoLink、InfoSection、Project 等组件
    utils/icon.ts             # 技术栈图标映射
    utils/link.ts             # 链接处理
    app.vue                   # 页面入口
    nuxt.config.js            # Nuxt 配置

## 本地开发

需要 Node.js 18+ 与 pnpm 10 或更高版本。

    pnpm install
    pnpm dev
    # 默认打开 http://localhost:3000

常用脚本：

    pnpm build
    pnpm generate
    pnpm preview

## 配置个人信息

在项目根目录创建未提交的 .env 文件：

    NAME="你的名字"
    PHONE="你的电话"

请先检查仓库中的运行时配置，按现有变量命名补充其他个人信息。敏感信息不要提交到 Git。

## 导出 PDF

运行开发或预览服务器后，在浏览器中打开简历页面，使用“打印 → 另存为 PDF”导出。

## 部署

pnpm generate 可生成静态站点，产物可发布到 Vercel、Netlify 或其他静态托管服务。仓库目前未固定线上简历网址，请以自己的部署地址为准。

## 许可

本项目使用 MIT License，详见 LICENSE。

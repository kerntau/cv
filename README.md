<div align="center">

# CoT 的个人简历 · CV

**使用 Nuxt 4 构建的响应式个人简历站点**<br>
*A responsive personal résumé site built with Nuxt 4*

[![Status](https://img.shields.io/badge/Status-Active-2ea44f?style=for-the-badge)](https://github.com/kerntau/cv)
[![Nuxt](https://img.shields.io/badge/Nuxt-4-00DC82?style=for-the-badge&logo=nuxt.js&logoColor=white)](https://github.com/kerntau/cv)
[![License](https://img.shields.io/badge/License-MIT- blue?style=for-the-badge)](LICENSE)

</div>

---

## 01. 项目定位 // POSITIONING

这是一个以打印友好为目标的个人简历前端。个人信息通过环境变量注入，页面使用 Nuxt 组件组织，适合生成静态站点并在浏览器中导出 PDF。

## 02. 功能与边界 // SCOPE

- 个人信息、技能、经历和项目的结构化展示。
- 响应式页面与打印样式，支持浏览器“打印 → 另存为 PDF”。
- Iconify / Nuxt Icon 技术栈图标映射。
- 个人资料由部署者自行配置；仓库不提供在线编辑、账号系统或数据后端。
- 当前仓库没有固定线上简历地址，请以自己的部署地址为准。

## 03. 技术矩阵 // TECHNICAL MATRIX

| 模块 | 技术 | 责任 |
| --- | --- | --- |
| 应用框架 | Nuxt 4、Vue 3、Vue Router | 页面和路由 |
| 样式 | UnoCSS、SCSS | 响应式与打印布局 |
| 图标 | Nuxt Icon、Iconify | 技术栈和社交图标 |
| 交付 | Nuxt build / generate | Node 服务或静态输出 |

## 04. 目录拓扑 // REPOSITORY TOPOLOGY

~~~text
.
├── assets/main.scss       # 全局样式
├── components/            # InfoLi、InfoLink、InfoSection、Project
├── utils/icon.ts          # 技术栈图标映射
├── utils/link.ts          # 链接处理
├── app.vue                # 页面入口
├── nuxt.config.js         # Nuxt 配置
└── package.json
~~~

## 05. 快速开始 // QUICK START

环境要求：Node.js 18+、pnpm 10+。

~~~bash
pnpm install
pnpm dev
# 默认打开 http://localhost:3000
~~~

## 06. 部署与验证 // DEPLOYMENT & VALIDATION

~~~bash
pnpm lint
pnpm build
pnpm generate
pnpm preview
~~~

generate 用于静态站点，build / preview 用于 Nuxt 生产服务。部署前在本地 .env 配置个人资料，并确认该文件不会被提交。

## 07. 资料与隐私契约 // DATA CONTRACT

在根目录创建未提交的 .env，并按仓库现有变量命名填写个人信息，例如 NAME 和 PHONE。不要提交电话、邮箱、住址或其他敏感资料；公开简历发布前请检查生成页面和 PDF 的内容。

## 08. 路线图 // ROADMAP

- [x] Nuxt 简历页面、响应式布局与图标系统
- [x] 静态生成和打印导出流程
- [ ] 持续完善不同纸张尺寸的打印样式
- [ ] 补充可选的中英文简历内容模型

## 09. 许可证 // LICENSE

本项目采用 [MIT License](LICENSE)。

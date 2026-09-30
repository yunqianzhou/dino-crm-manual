# Dino CRM 操作手册

在线地址：https://yunqianzhou.github.io/dino-crm-manual/

营销中心入口：https://yunqianzhou.github.io/dino-crm-manual/#M-00

营销中心业务手册包含 M-00 配置总览、M-01 操作前准备、M-02～M-08 具体操作；营销中心常见问题统一位于“随手查 → 常见问题”。支持中英文、正文搜索、章节直达、图片放大及打印。原有销售、用户、订单及系统管理章节保留。

## 维护和发布

源码位于 `source/`，营销文章集中在 `source/src/marketing.ts`，截图位于 `manual/marketing/`。

在 `source/` 安装依赖后执行 `npm run build`。生成的首页与内容哈希命名资源位于仓库根目录；无需服务端。静态文件提交到 `main`，由已有 GitHub Pages 流程发布。

更新时同步维护中英文文案及常见问题，核对构建结果和资源引用后发布。

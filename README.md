# Dino CRM 操作手册

在线地址：https://yunqianzhou.github.io/dino-crm-manual/

营销中心培训入口：https://yunqianzhou.github.io/dino-crm-manual/#M-00

2026-09-29 新增 M-00～M-09 中英文配置说明、7 张当前原型截图、培训演练、常见问题、全文搜索、章节直达和打印样式。原有销售、用户、订单及系统管理章节保留。

## 维护和发布

源码位于 `source/`，营销文章集中在 `source/src/marketing.ts`。静态资源与 `index.html` 提交到 `main`，由已有 GitHub Pages 流程发布。

在 `source/` 安装依赖后执行 `npm run build`。生成的首页与内容哈希命名的资源位于仓库根目录；无需服务端。旧 `_next` 文件保留以兼容已缓存页面。

新增截图存放在 `manual/marketing/`。构建后检查中文/英文、搜索、刷新章节链接、旧文章图片和移动端，再发布。

## 内容核对范围

营销内容依据 2026-09-29 当前公开原型 `https://yunqianzhou.github.io/dino-crm/marketing-center-demo.html` 的可见界面与操作编写。与旧 PRD 冲突时采用当前页面口径：支付页展示全部关联 SKU；没有审批、启停和上下架可见操作；每位用户上限可输入 0，但原型未定义其生产核销语义。

截图为原型样例。原型的本地保存和示例链接不能作为真实支付、广告回传或生产上线的验证。

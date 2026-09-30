export const marketingArticles = [
  {
    "id": "M-00",
    "module": "营销中心",
    "roles": "运营；管理员",
    "zh": {
      "title": "营销中心配置总览",
      "summary": "按业务目标选择配置路径：建立渠道，配置商品与优惠，再生成可外发的落地页链接。",
      "steps": [
        "先确定目标：收集客户线索用“线索搜集页”；展示商品并引导购买用“支付落地页”。两种页面都需要先建立渠道。",
        "确认账号权限和业务线（M-01）→ 新增或核对渠道（M-02）。渠道说明“谁在推广”，渠道码由系统生成。",
        "如需支付页：查询可用 SKU（M-03）→ 配置渠道 SKU 关联与各商品售价（M-04）→ 核对 Promo Code 和使用数量（M-05）。一个渠道只维护一套关联。",
        "创建线索搜集页（M-06）或支付落地页（M-07），选择页面样式；KOL 需填写本次帖子的标识或链接。LP ID 在创建落地页时生成，每页独立。",
        "生成预览链接 → 核对配置 → 确认创建 → 从列表复制正式链接（M-08）。预览链接不能作为正式投放链接。",
        "配置中遇到问题时，查看“随手查 → 常见问题”；外发前按 M-08 核对页面及正式链接。"
      ],
      "check": "能说明渠道码、SKU、Promo Code、LP ID 的用途，并按顺序找到四个配置页面。",
      "notes": [
        "渠道码标识推广渠道；SKU 对应售卖商品；Promo Code 用于应用关联中的优惠规则；LP ID 标识具体落地页。",
        "只收集线索时，无需先配置 SKU 和优惠码；需要展示商品并引导购买时，先配置渠道 SKU 关联。"
      ]
    },
    "en": {
      "title": "Marketing Center configuration overview",
      "summary": "Choose the workflow for your business goal: create a channel, configure products and promotions, then generate the landing-page link.",
      "steps": [
        "Choose the goal: a Lead Collection Page collects leads; a Payment Landing Page displays products for purchase. Both require a channel.",
        "Check access and business line (M-01), then create or verify the channel (M-02). A channel identifies the promoter; CRM generates its channel code.",
        "For payment pages, check SKUs (M-03), configure the channel’s SKU association and prices (M-04), and review Promo Code limits (M-05). Each channel has one association.",
        "Create a lead page (M-06) or payment page (M-07) and choose a skin. KOL pages require the post ID or URL. Each landing page receives its own LP ID.",
        "Generate a preview, verify the configuration, confirm creation, then copy the final link from the list (M-08). Do not distribute the preview link.",
        "Use Quick links → FAQ for common issues and M-08 to verify the page and final link before sharing."
      ],
      "check": "You can explain channel codes, SKUs, Promo Codes and LP IDs, and locate all four configuration pages.",
      "notes": [
        "A channel code identifies the promoter; a SKU identifies a product; a Promo Code applies the association’s pricing rules; an LP ID identifies a specific landing page.",
        "Lead collection does not require SKUs or a Promo Code. For a payment page, configure the channel SKU association first."
      ]
    }
  },
  {
    "id": "M-01",
    "module": "营销中心",
    "roles": "运营；管理员",
    "zh": {
      "title": "操作前准备：账号与配置资料",
      "summary": "开始配置前，核对账号权限、业务线、渠道信息和商品价格。",
      "steps": [
        "登录 CRM，展开“营销中心”，检查渠道管理、SKU 管理、渠道 SKU 关联、落地页管理四个入口。",
        "核对业务线是否包含本次负责的国家或市场。看不到目标业务线时，请管理员检查该账号的角色与业务线数据范围。",
        "确认本次所需的新建、编辑、预览和复制链接按钮可用。缺少入口或按钮时，联系管理员开通对应权限；SKU 管理仅用于查询。",
        "准备渠道资料：业务线、类型、渠道名称；销售准备邮箱 @ 前的前缀；KOL 准备名称/昵称及帖子标识；广告投放准备平台与投放渠道名称，广告账户可选填。",
        "支付页还需准备：商品编码、会员等级、支付模式、币种/原价、售卖规则、开始/结束日期、优惠码总数量及每位用户上限。日期应覆盖实际活动期间。",
        "准备易于识别的活动及页面名称。配置完成后记录渠道码、落地页名称、LP ID 和正式链接，便于后续查找和维护。"
      ],
      "check": "四个入口可进入，目标业务线可选，所需操作按钮可用，渠道及商品资料已备齐。",
      "notes": [
        "成为销售或 KOL 渠道主体，不等于拥有 CRM 后台权限。请使用自己的已授权账号操作。",
        "按钮不可见时，先核对角色和操作权限；列表无数据时，先重置筛选，再检查业务线范围。"
      ]
    },
    "en": {
      "title": "Before you start: account and configuration details",
      "summary": "Check account access, business line, channel details and product prices before configuring a campaign.",
      "steps": [
        "Sign in to CRM. Open Marketing Center and check Channel Management, SKU Catalog, Channel SKU Association and Landing Page Management.",
        "Check that your target business line is available. If not, ask an administrator to review your role and business-line data scope.",
        "Check that the required Create, Edit, Preview and Copy Link actions are available. Contact an administrator if an entry or action is missing. The SKU catalog is read-only.",
        "Prepare the business line, channel type and name. For Sales, use the email prefix before @. For KOL, prepare the name and post identifier. For ads, prepare the platform and campaign channel name; the ad account is optional.",
        "For payment pages, prepare product codes, membership levels, payment modes, currency/list prices, pricing rules, start/end dates, total Promo Code uses and the per-user limit. Dates should cover the actual campaign.",
        "Prepare recognizable campaign and page names. Retain the channel code, page name, LP ID and final URL for future lookup and maintenance."
      ],
      "check": "All four pages and required actions are available, the business line is correct, and channel/product details are ready.",
      "notes": [
        "Being a sales or KOL channel does not grant CRM access. Use your own account.",
        "For missing buttons, check action permissions. For empty lists, reset filters and check business-line scope."
      ]
    }
  },
  {
    "id": "M-02",
    "module": "营销中心",
    "roles": "运营；管理员",
    "zh": {
      "title": "如何新增和维护渠道",
      "summary": "先建立可复用的渠道，再为不同投放创建落地页。渠道码由系统生成，不需要手填。",
      "steps": [
        "入口：营销中心 → 渠道管理。先按渠道名称/渠道码、业务线、渠道类型或投放平台查询，避免重复建立同一渠道。",
        "点击“＋ 新增渠道”，选择“所属业务线”和“渠道类型”。如确需新类型，由有权限的管理员点击“＋ 新增类型”，填写并保存后再选择。",
        "销售渠道：名称填写销售邮箱 @ 前的前缀，例如 amy.zhang；KOL 渠道：填写 KOL 名称或昵称；广告投放：填写便于识别的投放渠道名称，例如“韩国 Meta 秋季投放”。",
        "广告投放渠道还需选择“投放平台”。当前下拉提供 Meta、Google、TikTok、Messenger、Line；按实际投放平台选择，广告账户为选填。销售和 KOL 不填写广告平台字段。",
        "核对业务线、类型和名称，点击“保存渠道”。回到列表查找新增渠道，检查系统生成的渠道码；可点击旁边的“复制”保存该码。",
        "修改名称等信息时，在列表点“编辑”并保存。点击“已创建落地页”的条数，可查看该渠道对应的落地页。"
      ],
      "check": "列表中能找到该渠道；业务线、类型和名称正确；渠道码已生成，且可复制。",
      "notes": [
        "渠道码不可手动修改。创建渠道不会自动创建落地页，LP ID 在创建落地页时生成。",
        "同一业务线内不要重复使用渠道名称。已被 SKU 关联或落地页使用的渠道不能更改业务线或类型；需要另一业务线或类型时，新增独立渠道。"
      ]
    },
    "en": {
      "title": "Create and maintain channels",
      "summary": "Create a reusable channel before creating campaign pages. CRM generates the channel code.",
      "steps": [
        "Open Marketing Center → Channel Management. Search by channel name/code and filter by business line, type or platform to avoid duplicates.",
        "Click New Channel and select the business line and channel type. If a new type is needed, an authorized administrator can add it with New Channel Type.",
        "For Sales, enter the email prefix before @, such as amy.zhang. For KOL, enter the creator name/nickname. For ads, enter a recognizable campaign channel name.",
        "Ad channels also require a platform. Current options are Meta, Google, TikTok, Messenger and Line. The ad account is optional. Sales and KOL channels do not use the ad-platform fields.",
        "Verify the business line, type and name, then Save. Find the new row and copy the generated channel code if needed.",
        "Use Edit to update the channel. Click the landing-page count to see pages associated with this channel."
      ],
      "check": "The channel appears with the correct line, type and name, and a copyable channel code.",
      "notes": [
        "The channel code cannot be manually changed. Creating a channel does not create a page; LP IDs are generated when pages are created.",
        "Avoid duplicate names within a business line. Once used by an association or page, a channel cannot change business line or type; create a separate channel instead."
      ]
    }
  },
  {
    "id": "M-03",
    "module": "营销中心",
    "roles": "运营；管理员",
    "zh": {
      "title": "如何查询并核对可售 SKU",
      "summary": "SKU 是商品包的销售配置。营销中心只查询已有商品，商品信息由商品系统维护。",
      "steps": [
        "入口：营销中心 → SKU 管理。按 Product Code（商品编码）或 Package Name（商品包名称）搜索。",
        "选择目标业务线；配置落地页时，将“适用端”筛为 Landing Page，并检查 SKU 状态为“上架”。",
        "逐项核对 Package Name、Member Level（会员等级）、Product Code、Payment Mode（支付模式）、原价与币种、有效期、适用端。名称相近的商品应以编码等字段区分。",
        "记录本次需要关联的商品。在“渠道 SKU 关联”中选择同一业务线的可用 SKU，避免把仅用于 In App 的商品作为落地页商品。",
        "查不到商品时先清空搜索和筛选；仍不存在、价格错误或未上架时，联系商品负责人维护源数据，再回到营销中心核对。"
      ],
      "check": "已核对本次商品的编码、会员等级、支付模式、币种、原价和适用端。",
      "notes": [
        "营销中心没有新增 SKU、修改商品原价或上下架 SKU 的操作。",
        "SKU 的“有效期”是商品权益信息；关联表单中的开始/结束日期是营销关联配置，两者不是同一含义。Best Value 是商品展示标识，不是优惠码。"
      ]
    },
    "en": {
      "title": "Find and verify sellable SKUs",
      "summary": "The SKU catalog is read-only. Product data is maintained in the product system.",
      "steps": [
        "Open Marketing Center → SKU Catalog and search by Product Code or Package Name.",
        "Select the business line. For landing pages, check Landing Page availability and the on-sale status.",
        "Verify Package Name, Member Level, Product Code, Payment Mode, list price/currency, validity and availability. Use codes and product attributes to distinguish similar names.",
        "Record the required products and select eligible SKUs from the same business line in Channel SKU Association. Do not select an In App-only product for a landing page.",
        "If a product is missing, clear filters first. If it is still missing, incorrectly priced or off sale, ask the product owner to update source data and recheck the catalog."
      ],
      "check": "Product codes, membership levels, payment modes, currency, list prices and availability have been verified.",
      "notes": [
        "Marketing Center cannot create SKUs, change list prices or change SKU sale status.",
        "SKU validity describes the product entitlement. Association start/end dates describe the marketing configuration. Best Value is a display label, not a Promo Code."
      ]
    }
  },
  {
    "id": "M-04",
    "module": "营销中心",
    "roles": "运营；管理员",
    "zh": {
      "title": "如何配置渠道 SKU 关联与售卖价格",
      "summary": "一个渠道只维护一套关联；先批量加入商品，再逐项设置原价、折扣或立减。",
      "steps": [
        "入口：营销中心 → 渠道 SKU 关联。按渠道名称、渠道码或 Promo Code 查询；已有记录点“编辑”，没有记录才点“＋ 新建关联”。",
        "选择业务线、渠道，按实际活动填写开始日期与结束日期；核对结束日期不早于开始日期。",
        "在“1. 关联 SKU”点击“＋ 选择 SKU”。按名称或编码搜索，勾选一个或多个商品，再点击“确认添加 N 个 SKU”。只勾选但未确认，不算完成添加。",
        "在“2. 折扣 / 售卖规则”逐项配置。原价售卖：无需优惠值；折扣：输入减价百分比；立减：输入该 SKU 币种的减免金额。核对右侧“规则价格”。",
        "计算示例（仅说明算法）：原价 100,000 KRW，折扣填 10，规则价格为 90,000 KRW；立减填 5,000，规则价格为 95,000 KRW。优惠最多 20%，最终价不得低于原价的 80%。",
        "如有折扣或立减，继续核对“3. Promo Code”及数量限制（M-05），然后点击“保存关联”（编辑时为“保存修改”）。全部原价时不生成优惠码。",
        "回到列表核对 SKU、售卖规则、应付金额和 Promo Code。超过三个 SKU 时点击“查看更多”，可在明细里搜索与翻页；“历史记录”用于核对变更。"
      ],
      "check": "同一渠道只有一条关联，商品不重复；每个商品的售卖规则和金额正确，保存后列表已更新。",
      "notes": [
        "“折扣 10”表示减价 10%（九折），不是一折；不填“90”来表达九折。",
        "再次修改同一渠道应编辑原关联。移除商品也会移除其售卖规则；修改前先查看已绑定落地页，保存后逐页复核。",
        "支付页会展示这套关联中的全部 SKU。若只想展示部分商品，应先重新确认渠道商品范围，不能在创建支付页时临时挑选单个 SKU。"
      ]
    },
    "en": {
      "title": "Configure channel SKUs and selling prices",
      "summary": "Each channel has one association. Add products in a batch, then configure their pricing rules.",
      "steps": [
        "Open Channel SKU Association. Search by channel name/code or Promo Code. Edit an existing association; use New Association only if none exists.",
        "Select the business line and channel, then enter the actual campaign start/end dates. Check that the end date is not before the start date.",
        "In section 1, click Select SKU, search by name/code, select one or more products, then Confirm Add N SKUs. Checking boxes alone does not add the products.",
        "In section 2, configure each product: List Price needs no discount value; Percentage Discount takes the percentage to subtract; Amount Off takes an amount in the SKU currency. Check Rule Price.",
        "Calculation example only: for a 100,000 KRW list price, a 10% discount gives 90,000 KRW; 5,000 KRW off gives 95,000 KRW. Savings cannot exceed 20%, and final price cannot fall below 80% of list price.",
        "If any product is discounted, configure Promo Code limits in section 3 (M-05), then Save Association. All-list-price associations generate no code.",
        "Check products, rules, payable amounts and the Promo Code in the list. For more than three SKUs, open View More to search and paginate. Use History to review changes."
      ],
      "check": "One association exists for the channel, with no duplicate SKUs, correct rules/prices and an updated list row.",
      "notes": [
        "A discount value of 10 means 10% off, so the buyer pays 90%. Do not enter 90 for 10% off.",
        "Edit the existing association for subsequent changes. Removing a SKU also removes its pricing rule. Review bound pages before changes and recheck them afterward.",
        "A payment page displays every SKU in its channel association. To display fewer products, first review the channel product scope; page creation has no individual SKU selection."
      ]
    }
  },
  {
    "id": "M-05",
    "module": "营销中心",
    "roles": "运营；管理员",
    "zh": {
      "title": "如何设置 Promo Code 及使用数量",
      "summary": "一套渠道 SKU 关联共用一个系统优惠码；优惠金额按每个 SKU 的规则计算。",
      "steps": [
        "在新建或编辑渠道 SKU 关联时，先给至少一个商品配置折扣或立减，再查看“3. Promo Code”。首次显示“保存后自动生成”；已有优惠码时会回显，可复制。",
        "填写“总数量”：表示该优惠码的总可使用次数，不是商品库存或优惠金额。可填写正整数；留空表示不限制总次数。",
        "填写必填项“每位用户上限”：表示单个用户可使用该优惠码的次数，默认 1。每人限用一次的活动填写 1；如允许多次使用，填写活动确认的次数，且不得超过已设置的总数量。",
        "例如本次优惠共允许使用 100 次、每人最多 1 次，填写总数量 100、每位用户上限 1。核对商品价格与数量后保存关联。",
        "在关联列表查看 Promo Code、剩余可使用数量 / 总数量、每位用户上限。总数量留空时显示为不限。",
        "创建支付落地页时再选择是否使用该码。有优惠时表单默认使用；改为“不使用优惠（全部按原价）”后，本页所有商品恢复原价展示。"
      ],
      "check": "优惠码已生成，数量符合活动要求；支付页上的优惠选择与预期应付金额一致。",
      "notes": [
        "优惠码不是每个 SKU 一个，也不需要手工编写。关联中原价售卖的商品，即使使用整套优惠码也仍按原价。",
        "每位用户的使用次数应按活动规则填写；特殊限制需求请先联系活动负责人确认配置方式。",
        "改为全部原价时不生成 Promo Code。修改价格、商品范围或优惠码后，复核已有落地页；不要假设历史链接会自动同步。"
      ]
    },
    "en": {
      "title": "Set Promo Code usage limits",
      "summary": "One system-generated code is shared by the association; discounts follow each SKU’s own rule.",
      "steps": [
        "Add a discount to at least one SKU, then check section 3, Promo Code. New codes show Generated on Save; existing codes can be copied.",
        "Total Quantity limits total code redemptions, not product inventory or discount amount. Enter a positive integer, or leave it empty for no total limit.",
        "Per-user Limit is required and defaults to 1. Enter 1 for a once-per-user campaign, or the approved number of uses for a repeat-use campaign. It must not exceed a specified total quantity.",
        "For 100 redemptions with one use per person, enter Total Quantity 100 and Per-user Limit 1. Verify prices and limits, then save.",
        "Check the code, remaining/total uses and per-user limit in the list. An empty total means unlimited total uses.",
        "Choose whether to apply the code when creating the payment page. A discount is selected by default when available. Choose No Discount to show all products at list price."
      ],
      "check": "The code and limits match the campaign, and the page’s promotion choice produces the intended prices.",
      "notes": [
        "A code belongs to the full association, not an individual SKU. List-price SKUs remain at list price even when the shared code is applied.",
        "Set the per-user limit according to the campaign rules. Confirm special usage restrictions with the campaign owner before configuring them.",
        "All-list-price associations generate no code. Recheck existing pages after changing prices, products or the code; do not assume historical links update automatically."
      ]
    }
  },
  {
    "id": "M-06",
    "module": "营销中心",
    "roles": "运营；管理员",
    "zh": {
      "title": "如何创建线索搜集页",
      "summary": "用于获客留资，只配置渠道与页面；不要求渠道已关联 SKU，也不使用 Promo Code。",
      "steps": [
        "入口：营销中心 → 落地页管理 →“＋ 新增落地页”。先选择业务线、渠道类型。",
        "在渠道搜索框输入渠道名称或渠道码，并从出现的匹配结果中点选渠道。只输入文字、不点选结果，不算选中渠道。",
        "“页面类型”选择“线索搜集页”，再选择页面样式。韩国按需要选择标准或活动样式；其他业务线使用页面提供的默认样式。",
        "如果是 KOL，填写本次“帖子标识或帖子链接”；每条对外内容单独配置，不重复使用同一 KOL 的同一帖子。销售和广告投放不需要该字段。",
        "核对系统生成的 LP ID，填写便于查找的落地页名称，例如“韩国_Meta_秋季活动_线索”。不填写名称时系统会生成默认名称。",
        "点击“生成预览链接”，核对渠道、页面类型、样式和帖子信息；再点击“确认创建”。如果修改了表单配置，重新生成预览后再确认。",
        "回到列表，查看新记录的“详情”，确认页面类型为线索搜集页、Promo Code 显示“—”；用“复制链接”取得正式链接。"
      ],
      "check": "已生成正确渠道的线索页；有独立 LP ID，未绑定支付 SKU 或优惠码；正式链接来自列表。",
      "notes": [
        "没有渠道 SKU 关联也能创建线索页。切换为线索页后，支付相关配置不参与本页创建。",
        "预览链接与正式链接不同。对外发送前，打开最终页面核对渠道、页面内容及留资入口。"
      ]
    },
    "en": {
      "title": "Create a lead collection page",
      "summary": "Lead pages need channel and page settings only. SKU associations and Promo Codes are not required.",
      "steps": [
        "Open Landing Page Management → New Landing Page. Select the business line and channel type.",
        "Search for a channel by name/code, then click a matching result. Typing text alone does not select a channel.",
        "Select Lead Collection Page and choose a skin. South Korea offers standard/campaign options; other lines use the provided default.",
        "For KOL, enter the post ID or URL. Use a separate page for each post, and do not reuse the same KOL/post pair. Sales and ad channels do not require this field.",
        "Verify the generated LP ID and enter a recognizable page name, such as KR_Meta_Autumn_Leads. Leaving the name blank uses a generated default.",
        "Generate Preview Link, review channel, page type, skin and post information, then Confirm Create. Generate a fresh preview after configuration changes.",
        "Open the new row’s Details. Confirm the lead-page type and a dash in the Promo Code column, then use Copy Link for the final URL."
      ],
      "check": "The lead page has the correct channel and its own LP ID, with no payment SKU or Promo Code; the final link was copied from the list.",
      "notes": [
        "A channel without a SKU association can still have a lead page. Switching to lead-page type excludes payment configuration.",
        "Preview and final links differ. Before sharing, open the final page and verify its channel, content and lead form."
      ]
    }
  },
  {
    "id": "M-07",
    "module": "营销中心",
    "roles": "运营；管理员",
    "zh": {
      "title": "如何创建支付落地页",
      "summary": "支付页展示该渠道关联的全部 SKU，并统一选择是否带入 Promo Code。",
      "steps": [
        "先完成 M-02～M-05。确认目标渠道已有一套 SKU 关联，各商品及售卖规则正确。",
        "进入“落地页管理 → ＋ 新增落地页”，选择业务线、渠道类型；搜索渠道名称或渠道码并点选匹配结果。",
        "页面类型选择“支付落地页”，选择页面样式。检查自动平铺展示的全部 SKU；当前不需要逐个选择商品。",
        "核对每个 SKU 的名称、原价与应付金额。“是否使用优惠”有优惠时默认使用；选择“不使用优惠（全部按原价）”则全页按原价。原价规则的商品始终不打折。",
        "KOL 渠道填写本次帖子标识或帖子链接；填写可识别的落地页名称，核对自动生成的 LP ID。",
        "点击“生成预览链接”。逐项确认渠道、商品范围、优惠选择、应付价格和页面样式，再点“确认创建”。修改配置后先重新预览。",
        "在列表打开“详情”，复核商品与优惠码；复制正式链接，在正式环境确认实际落地页展示与结算金额后再外发。"
      ],
      "check": "商品范围完整且正确；使用优惠时按各 SKU 规则显示价格，不使用时全部为原价；已取得正式链接与 LP ID。",
      "notes": [
        "提示“当前渠道暂无可用 SKU”时，先返回渠道 SKU 关联检查，不要随意换成其他渠道绕过。",
        "支付页中的优惠选择是整页设置；不是给每个商品重新建一个优惠码。切换渠道、业务线、页面类型后，重新核对商品和优惠选择。"
      ]
    },
    "en": {
      "title": "Create a payment landing page",
      "summary": "A payment page displays all associated channel SKUs with one page-level Promo Code choice.",
      "steps": [
        "Complete M-02–M-05. Verify the target channel’s association, products and pricing rules.",
        "Open Landing Page Management → New Landing Page. Select business line and channel type, then search and select the exact channel.",
        "Choose Payment Landing Page and a skin. Review all automatically displayed SKUs; no individual SKU selection is needed.",
        "Verify names, list prices and payable amounts. Available discounts are selected by default. No Discount restores list prices for all products. SKUs configured at list price remain undiscounted.",
        "For KOL, enter the post ID or URL. Enter a recognizable page name and verify the generated LP ID.",
        "Generate Preview Link. Review channel, product scope, promotion, payable prices and skin, then Confirm Create. Re-preview after changes.",
        "Open Details to recheck products and the code. Copy the final link and verify the real production page and checkout amount before distribution."
      ],
      "check": "The complete product scope and prices are correct, and you have the final link and LP ID.",
      "notes": [
        "If no SKU is available, review the channel association instead of selecting an unrelated channel.",
        "Promotion selection applies to the whole page, not a new code per product. Recheck products and promotions after changing the channel, business line or page type."
      ]
    }
  },
  {
    "id": "M-08",
    "module": "营销中心",
    "roles": "运营；管理员",
    "zh": {
      "title": "如何查找、编辑和核对正式链接",
      "summary": "通过名称、渠道码或 LP ID 找到页面，查看详情与历史，再复制正确的正式链接。",
      "steps": [
        "进入落地页管理，按名称、LP ID、渠道码或帖子关键词搜索；可结合业务线、渠道类型、渠道、页面类型、创建人筛选。找不到时先点“重置筛选”。",
        "需要缩小范围时，展开“更多筛选”，选择页面样式及更新开始/结束日期；点击“更新时间”切换排序。",
        "点击“详情”，检查渠道、LP ID、页面类型和样式；支付页重点核对商品和实际使用的 Promo Code。渠道关联的完整规则用于参考，最终还要核对本页的实际配置。",
        "点击“复制链接”获得完整正式 URL。复制 LP ID 只能取得标识，复制 Promo Code 只能取得优惠码，都不能替代正式页面链接。",
        "需要调整时点“编辑”，修改后重新“生成预览链接”，核对再“确认保存”；回到列表检查更新时间，并重新查看详情、复制链接。",
        "点击“历史记录”查看操作人、时间和变更内容。通过渠道或关联列表的已绑定落地页条数，也可定位关联页面。",
        "正式投放前核对：正确环境、业务线、渠道、页面类型/样式、商品/币种/价格、优惠选择、KOL 帖子、LP ID；用最终链接打开实际页面，确认不是带 preview=1 的预览链接。"
      ],
      "check": "能重新检索到目标页面，详情和历史符合本次配置，外发的是完整正式链接。",
      "notes": [
        "保留系统生成的完整链接，不手动删除或拼接渠道、页面、优惠等参数。",
        "编辑已有页面可能影响外发链接的用途或内容。改变投放渠道、帖子或活动用途时，优先创建新页面并记录新链接，避免混用历史归因。",
        "需要停止活动时，联系活动负责人处理投放和已外发链接，确认停止方式及生效结果。"
      ]
    },
    "en": {
      "title": "Find, edit and verify final links",
      "summary": "Find the correct page, inspect details and history, then copy its complete final URL.",
      "steps": [
        "Search Landing Page Management by name, LP ID, channel code or post keyword. Combine business line, channel type, channel, page type and creator filters. Reset filters if necessary.",
        "Open More Filters for skin and update-date range. Click Updated Time to change sorting.",
        "Open Details and verify channel, LP ID, type and skin. For payment pages, check products and the actual Promo Code. The full channel rules are reference information; verify the page’s actual settings.",
        "Use Copy Link for the complete final URL. Copying an LP ID or Promo Code does not copy a page link.",
        "To update a page, Edit, generate a fresh preview, verify and Confirm Save. Recheck the update time and details, then copy the link again.",
        "Open History for operator, timestamp and change details. Channel/association landing-page counts also help locate related pages.",
        "Before production distribution, check environment, business line, channel, type/skin, products/currency/prices, promotion, KOL post and LP ID. Open the real final URL and ensure it is not a preview=1 link."
      ],
      "check": "You can find the page again, its details/history match the configuration, and the shared URL is complete and final.",
      "notes": [
        "Keep the generated URL intact. Do not manually remove or assemble attribution and promotion parameters.",
        "Editing a page may change the purpose/content of an already distributed link. Prefer a new page for a different campaign, channel or post to avoid mixing attribution.",
        "To stop a campaign, coordinate its advertising and distributed links with the campaign owner, then confirm how and when the change takes effect."
      ]
    }
  }
];

export const marketingFAQ = {
  "zh": {
    "title": "营销中心常见问题",
    "summary": "按遇到的问题查找处理方法；仍无法完成时，向管理员或对应负责人提供渠道码、LP ID 和页面提示。",
    "items": [
      {
        "q": "看不到入口、按钮或业务线",
        "a": "先核对当前账号和业务线。缺少入口或按钮联系管理员检查权限；列表无数据先重置筛选。"
      },
      {
        "q": "渠道搜到了却无法继续",
        "a": "输入名称或渠道码后，还需要点击下拉匹配结果；仅输入文字不算选中渠道。"
      },
      {
        "q": "渠道无法再次新建关联",
        "a": "一个渠道只维护一套 SKU 关联，请返回列表编辑已有记录。"
      },
      {
        "q": "“保存关联”不可用",
        "a": "检查是否选择渠道、是否确认添加 SKU，以及是否还有未完成的批量选择。"
      },
      {
        "q": "支付页没有可用 SKU",
        "a": "核对该渠道是否已关联同业务线、适用于 Landing Page 的可用商品；商品缺失或信息有误时联系商品负责人。"
      },
      {
        "q": "折扣或立减报错",
        "a": "折扣填写减价百分比，最多 20%；立减金额不超过原价的 20%。例如折扣填 10 表示九折，不能填 90。"
      },
      {
        "q": "优惠数量报错",
        "a": "总数量填写正整数，或留空表示不限；每位用户上限不能留空，也不能大于已填写的总数量。每人限用一次的活动填 1。"
      },
      {
        "q": "优惠码未生成或页面没有优惠",
        "a": "全部商品按原价时不生成优惠码；已有优惠码时，检查支付页是否选择“使用优惠”，并核对各商品规则价格。"
      },
      {
        "q": "“确认创建/确认保存”不可点击",
        "a": "先完成必填项并生成预览；修改表单配置后需重新生成预览。"
      },
      {
        "q": "KOL 页面创建失败",
        "a": "检查帖子标识或链接是否为空，以及同一 KOL 的同一帖子是否已绑定页面。"
      },
      {
        "q": "复制后只有一串编号",
        "a": "可能复制了 LP ID、渠道码或 Promo Code；需要外发页面时，在落地页列表点击“复制链接”。"
      }
    ],
    "notes": [
      "仍无法处理时，提供业务线、渠道名称/渠道码、落地页名称/LP ID、操作时间及错误提示，便于定位。",
      "权限问题联系管理员；商品问题联系商品负责人；价格和优惠规则问题联系活动负责人。"
    ]
  },
  "en": {
    "title": "Marketing Center FAQ",
    "summary": "Find the fix for your issue. If it persists, provide the channel code, LP ID and message to the relevant owner.",
    "items": [
      {
        "q": "Missing entries, actions or business lines",
        "a": " verify the account and business line. Ask an administrator to check access; reset filters for an empty list."
      },
      {
        "q": "Channel search does not complete selection",
        "a": " click the matching dropdown result after entering a name or code."
      },
      {
        "q": "Cannot create another association",
        "a": " each channel has one SKU association. Edit the existing record."
      },
      {
        "q": "Save Association is unavailable",
        "a": " select a channel, confirm SKU additions and finish any pending batch selection."
      },
      {
        "q": "No SKU available for a payment page",
        "a": " check the channel association for eligible Landing Page products in the same business line. Ask the product owner about missing or incorrect products."
      },
      {
        "q": "Invalid discount",
        "a": " enter the percentage to subtract, up to 20%, or an amount no greater than 20% of list price. Enter 10 for 10% off, not 90."
      },
      {
        "q": "Invalid usage limits",
        "a": " enter a positive total quantity or leave it empty for no total limit. Per-user limit is required and cannot exceed the specified total. Use 1 for once-per-user campaigns."
      },
      {
        "q": "No code or page discount",
        "a": " an all-list-price association generates no code. If a code exists, check that Use Discount is selected and verify each SKU’s rule price."
      },
      {
        "q": "Confirm Create/Save is disabled",
        "a": " complete the required fields and generate a preview. Generate another preview after changing the configuration."
      },
      {
        "q": "KOL page creation fails",
        "a": " check for a missing post ID/URL or an existing page for the same KOL and post."
      },
      {
        "q": "Only an identifier was copied",
        "a": " you may have copied an LP ID, channel code or Promo Code. Use Copy Link in the landing-page list for the complete URL."
      }
    ],
    "notes": [
      "If the problem persists, provide the business line, channel name/code, page name/LP ID, action time and error message.",
      "Contact an administrator for access, the product owner for products, and the campaign owner for pricing or promotion rules."
    ]
  }
};

export const marketingImages: Record<string, {file:string; zh:string; en:string}[]> = {
  "M-02": [
    {
      "file": "channels.png",
      "zh": "渠道管理：查询、复制渠道码与编辑入口",
      "en": "Channel list: search, copy code and edit"
    },
    {
      "file": "channel-form.png",
      "zh": "新增渠道：业务线、类型、名称和投放平台",
      "en": "New channel: business line, type, name and platform"
    }
  ],
  "M-03": [
    {
      "file": "skus.png",
      "zh": "SKU 管理：核对商品属性、价格与适用端",
      "en": "SKU catalog: product attributes, prices and availability"
    }
  ],
  "M-04": [
    {
      "file": "association.png",
      "zh": "关联编辑：先选择商品，再逐项核对规则价格",
      "en": "Association editor: products and pricing rules"
    }
  ],
  "M-05": [
    {
      "file": "promo.png",
      "zh": "Promo Code：系统生成的码、总数量与每位用户上限",
      "en": "Promo Code: generated code, total and per-user limits"
    }
  ],
  "M-06": [
    {
      "file": "lead-page.png",
      "zh": "线索搜集页：不配置 SKU 和优惠码",
      "en": "Lead page: no SKU or promotion configuration"
    }
  ],
  "M-07": [
    {
      "file": "payment-page.png",
      "zh": "支付落地页：全部关联 SKU 与统一优惠选择",
      "en": "Payment page: all associated SKUs and page-level promotion"
    }
  ]
};

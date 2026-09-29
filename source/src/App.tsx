"use client";

import { useEffect, useMemo, useState } from "react";

import { marketingArticles, marketingImages } from "./marketing";

type Lang = "zh" | "en";
type Copy = { title: string; summary: string; steps: string[]; check: string; notes: string[] };
type Article = { id: string; module: string; roles: string; zh: Copy; en: Copy };

const articles: Article[] = [
  ["S-01","销售管理","销售专员；销售组长","如何领取一条新线索","线索通常由系统自动分配；需要从待领取列表手动领取时，按以下步骤操作。","入口：销售管理 → 销售中心 → 待领取注册用户。|按国家、手机号或用户ID查找客户。|点击“领取跟进”。|到“我的跟进”确认该客户已归属自己。","客户出现在“我的跟进”。","线索通常自动分配；仅在公海或待领取列表中需要手动领取。不要领取并非自己负责的客户。","How to claim a new lead","Leads are usually assigned automatically. Use these steps only when you need to claim one manually from the unclaimed list.","Go to Sales Management → Sales Center → Unclaimed registered users.|Find the customer by country, phone number, or user ID.|Click Claim follow-up.|Open My Follow-ups and confirm that the customer is assigned to you.","The customer appears in My Follow-ups.","Leads are usually assigned automatically; manual claiming is only needed from the public pool or unclaimed list. Do not claim a lead outside your responsibility."],
  ["S-03","销售管理","销售专员；销售组长","如何记录一次跟进","把客户反馈、下一步动作和回访时间留在CRM。","入口：销售管理 → 销售中心 → 我的跟进。|找到客户并点击“更新跟进”。|填写客户反馈、下一步动作、回访时间。|保存后检查时间轴。","最新备注和最后更新时间已刷新。","备注必须能让下一位同事看懂。","How to record a follow-up","Save customer feedback, the next action, and follow-up time in CRM.","Go to Sales Management → Sales Center → My Follow-ups.|Find the customer and click Update follow-up.|Enter feedback, next action, and follow-up time.|Save and check the timeline.","The latest note and update time are refreshed.","Write notes the next colleague can understand."],
  ["S-02","销售管理","销售专员；销售组长","如何外呼并留下通话小结","通过CRM拨打客户电话并保存通话结果。首次登录电话条的销售，请先完成下方的首次使用设置。","入口：销售管理 → 销售中心 → 我的跟进 → 外呼。|核对客户和号码后发起外呼。|通话结束后，补全通话小结和购买意向并保存。|到通话记录核对。","通话记录与客户时间轴中均能找到本次通话。","通话结果由系统自动记录；未保存小结不等于已完成记录。","How to make an outbound call and save a call summary","Call a customer from CRM and save the call outcome. If this is your first phone-bar login, complete the first-time setup below first.","Go to Sales Management → Sales Center → My Follow-ups → Call.|Verify the customer and phone number, then start the call.|After the call ends, complete the summary and purchase intent, then save.|Verify it in Call Records.","The call appears in Call Records and the customer timeline.","The call result is recorded automatically. A call without a saved summary is not a completed record."],
  ["S-04","销售管理","销售组长；超级管理员","如何转分配或退回公海","将线索交给其他同事，或归还公共线索池。","入口：销售管理 → 销售中心 → 我的跟进。|重新分配：选择新销售并确认。|退回公海：填写退回原因后确认。","时间轴中有交接或退回记录。","退回原因必须写清楚；销售通常没有重新分配权限。","How to reassign a lead or return it to the public pool","Hand a lead to another colleague or return it to the shared lead pool.","Go to Sales Management → Sales Center → My Follow-ups.|To reassign, select the new sales owner and confirm.|To return, enter a clear reason and confirm.","The timeline shows the handover or return.","Sales representatives normally cannot reassign leads."],
  ["S-05","销售管理","销售专员；销售组长","如何查看通话记录","按客户或通话结果回看已经保存的外呼记录。","入口：销售管理 → 销售中心 → 通话记录。|按手机号、用户ID、客户名或通话结果筛选。|核对时间、结果、时长、小结和坐席。","能找到目标通话并判断下一步。","普通销售通常仅可查看自己的通话记录。","How to view call records","Review saved call records by customer or call outcome.","Go to Sales Management → Sales Center → Call Records.|Filter by phone number, user ID, customer name, or call outcome.|Check time, result, duration, summary, and agent.","You can find the target call and identify the next action.","Sales representatives normally see only their own call records."],
  ["U-01","用户管理","销售专员；运营；管理员","如何找到一位用户","通过搜索和筛选找到用户并核对信息。","入口：用户管理 → 用户列表。|使用关键词、业务线、国家、用户类型或用户状态筛选。|打开用户ID核对信息。","已找到正确用户且信息无误。","只可查看权限范围内用户。","How to find a user","Find a user and verify their information with search and filters.","Go to User Management → User List.|Filter by keywords, business line, country, user type, or user status.|Open the user ID to verify details.","The correct user is found and verified.","You can only view users within your data scope."],
  ["U-02","用户管理","全员","如何查看手机号与保护客户信息","理解完整号码、脱敏号码和导出数据的规则。","拥有权限时可查看完整号码。|无权限时系统展示脱敏号码。|导出文件中的手机号始终脱敏。","知道当前账号能否查看完整号码。","不要通过其他渠道索取或传播客户信息。","How to view phone numbers and protect customer data","Understand full numbers, masked numbers, and export rules.","Users with permission can view full numbers.|Otherwise CRM shows masked numbers.|Phone numbers in exports are always masked.","You know whether your account can view full phone numbers.","Do not request or share customer data through other channels."],
  ["U-03","用户管理","管理员；运营（有权限）","如何添加会员有效期","为用户补充会员有效期的管理员操作。","入口：用户管理 → 用户列表 → 添加会员。|直接填写会员有效天数。|确认后检查修改记录。","修改记录已生成。","这是高风险操作，提交前必须二次核对。","How to add membership validity","Administrator workflow for adding membership validity to a user.","Go to User Management → User List → Add membership.|Enter the membership validity in days.|Confirm and review the change record.","A change record is generated.","This is a high-risk action. Double-check before submitting."],
  ["U-04","用户管理","管理员；运营（有权限）","如何导出用户列表","按当前筛选条件导出用户数据。","先完成筛选并确认数据范围。|点击“导出列表”。|确认导出全部符合筛选的记录，而非当前页。","导出文件范围与筛选条件一致。","导出文件含客户信息，仅用于工作目的。","How to export a user list","Export user data based on the current filter.","Finish filtering and confirm the scope.|Click Export list.|Exports include all matching records, not only the current page.","The export scope matches the selected filters.","Exports contain customer data and are for work purposes only."],
  ["U-05","用户管理","销售专员；销售组长；运营（按权限）","如何查看未付费体验用户的体验报告","找到已体验但未付费的用户，并从操作列查看其体验报告。","入口：用户管理 → 用户列表，或销售管理 → 销售中心。|使用“未付费”“已体验”等筛选条件找到目标用户。|核对用户姓名、手机号或用户ID。|在操作列点击体验报告入口。|根据报告安排后续跟进并记录结果。","已打开正确用户的体验报告。","体验报告用于判断跟进方向，不应对外传播用户信息。","How to view an unpaid trial user’s experience report","Find users who completed a trial but have not paid, then open their experience report from Actions.","Go to User Management → User List, or Sales Management → Sales Center.|Use filters such as Unpaid and Trial completed.|Verify the user name, phone number, or user ID.|Click Experience Report in Actions.|Plan follow-up and record the outcome.","The correct user’s experience report is open.","Use the report to plan follow-up; do not share user information externally."],
  ["O-01","订单管理","销售专员；运营；管理员","如何查询一笔订单","通过订单或用户相关信息找到并核对订单。","入口：订单管理 → 订单中心。|通过关键词、业务线、国家、用户类型、订单状态或支付方式筛选。","已找到正确订单。","只可查看权限范围内订单。","How to find an order","Find and verify an order using order or user details.","Go to Order Management → Order Center.|Filter by keywords, business line, country, user type, order status, or payment method.","The correct order is found.","You can only view orders within your data scope."],
  ["O-02","订单管理","管理员；运营（有权限）","如何导出订单列表","按当前筛选条件导出订单数据。","先完成筛选并确认数据范围。|点击“导出列表”。|确认导出范围为全部符合筛选的记录。","导出文件范围与筛选条件一致。","导出前确认范围，避免带出不必要的数据。","How to export an order list","Export order data based on the current filter.","Finish filtering and confirm the scope.|Click Export list.|Exports include all matching records.","The export scope matches the selected filters.","Confirm the scope before export to avoid unnecessary data."],
  ["A-01","系统管理","超级管理员；管理员","谁可以配置角色和权限","说明权限配置的可操作人和普通伙伴的求助方式。","入口：系统管理 → 系统配置 → 角色权限。|仅超级管理员或已授权系统管理员配置角色、成员和数据范围。|一线伙伴看不到入口时联系管理员。","已知道权限问题的正确联系人。","一线销售不需要理解权限设计。","Who can configure roles and permissions","Who can configure access and how regular users should get help.","Go to System Management → System Config → Roles and permissions.|Only super administrators or authorized system administrators configure roles, members, and data scope.|Contact an administrator when an entry is unavailable.","You know the correct contact for access issues.","Frontline sales do not need to design permissions."],
].map(([id,module,roles,zt,zs,zsteps,zcheck,znotes,et,es,esteps,echeck,enotes]) => ({id,module,roles,zh:{title:zt,summary:zs,steps:zsteps.split("|"),check:zcheck,notes:[znotes]},en:{title:et,summary:es,steps:esteps.split("|"),check:echeck,notes:[enotes]}}));

articles.push(...marketingArticles);

const articleOrder = ["S-01","S-02","S-03","S-04","S-05","U-01","U-02","U-03","U-04","U-05","O-01","O-02","A-01",...marketingArticles.map(a=>a.id)];
articles.sort((a,b)=>articleOrder.indexOf(a.id)-articleOrder.indexOf(b.id));

const moduleNames:Record<string,{zh:string;en:string}>={
 "营销中心":{zh:"营销中心",en:"Marketing Center"},
 "销售管理":{zh:"销售管理",en:"Sales Management"},"用户管理":{zh:"用户管理",en:"User Management"},
 "订单管理":{zh:"订单管理",en:"Order Management"},"系统管理":{zh:"系统管理",en:"System Management"}
};
const roleNames:Record<string,string>={"销售专员":"Sales Representative","销售组长":"Sales Lead","运营":"Operations","管理员":"Administrator","超级管理员":"Super Administrator","运营（有权限）":"Authorized Operations"};
const moduleText=(module:string,lang:Lang)=>moduleNames[module]?.[lang]??module;
const roleText=(roles:string,lang:Lang)=>lang==="zh"?roles:roles.split("；").map(role=>roleNames[role]??role).join("; ");

const faq = { zh:[
 {q:"为什么我看不到外呼按钮？",a:"通常是没有外呼权限、没有绑定坐席，或该客户没有可用手机号。"},
 {q:"为什么我找不到线索？",a:"它可能已被领取、超出你的数据范围，或不符合线索口径。"},
 {q:"为什么手机号显示为星号？",a:"当前账号没有查看完整手机号权限。"},
 {q:"为什么没有导出按钮？",a:"当前角色没有导出权限，或该模块不可见。"},
], en:[
 {q:"Why can’t I see the Call button?",a:"You may lack calling permission, an agent seat, or the customer may not have a usable number."},
 {q:"Why can’t I find a lead?",a:"It may be claimed, outside your data scope, or not meet the lead definition."},
 {q:"Why is a phone number masked?",a:"Your account does not have permission to view full phone numbers."},
 {q:"Why can’t I see Export?",a:"Your role may not have export permission, or the module is unavailable."},
] };

const screenshotCounts: Record<string, Record<Lang, number>> = {
 "S-01":{zh:4,en:5}, "S-02":{zh:5,en:5}, "S-03":{zh:3,en:3}, "S-04":{zh:3,en:3}, "S-05":{zh:2,en:2},
 "U-01":{zh:2,en:2}, "U-02":{zh:3,en:3}, "U-03":{zh:2,en:2}, "U-04":{zh:2,en:2}, "U-05":{zh:2,en:2},
 "O-01":{zh:2,en:2}, "O-02":{zh:2,en:2}, "A-01":{zh:4,en:4},
};

type ScreenshotGuide = { imageIndex: number; step: number; zh: string; en: string };

const screenshotGuides: Partial<Record<string, ScreenshotGuide[]>> = {
 "S-01": [
   { imageIndex: 3, step: 1, zh: "入口：销售管理 → 销售中心 → 待领取注册用户", en: "Entry: Sales Management → Sales Center → Unclaimed registered users" },
   { imageIndex: 2, step: 2, zh: "查找客户", en: "Find a customer" },
   { imageIndex: 1, step: 3, zh: "点击“领取跟进”", en: "Click Claim follow-up" },
   { imageIndex: 0, step: 4, zh: "查看归属给自己的客户", en: "Open My Follow-ups and confirm assignment" },
   { imageIndex: 4, step: 4, zh: "确认客户已进入我的跟进", en: "Confirm the customer appears in My Follow-ups" },
 ],
 "S-03": [
   { imageIndex: 2, step: 1, zh: "入口：销售管理 → 销售中心 → 我的跟进", en: "Entry: Sales Management → Sales Center → My Follow-ups" },
   { imageIndex: 1, step: 2, zh: "点击“更新跟进”", en: "Click Update follow-up" },
   { imageIndex: 0, step: 3, zh: "填写客户反馈、下一步动作和回访时间", en: "Enter customer feedback, next action, and follow-up time" },
 ],
 "S-02": [
   { imageIndex: 4, step: 1, zh: "入口：销售管理 → 销售中心 → 我的跟进 → 外呼", en: "Entry: Sales Management → Sales Center → My Follow-ups → Call" },
   { imageIndex: 3, step: 2, zh: "发起外呼", en: "Start an outbound call" },
   { imageIndex: 2, step: 2, zh: "通话进行中；可点击结束通话", en: "Call in progress; click to end the call" },
   { imageIndex: 1, step: 3, zh: "补全通话小结并保存", en: "Complete and save the call summary" },
   { imageIndex: 0, step: 4, zh: "核实通话记录", en: "Verify the call record" },
 ],
 "S-04": [
   { imageIndex: 0, step: 1, zh: "入口：销售管理 → 销售中心 → 我的跟进", en: "Entry: Sales Management → Sales Center → My Follow-ups" },
   { imageIndex: 2, step: 2, zh: "重新分配给其他销售", en: "Reassign to another sales representative" },
   { imageIndex: 1, step: 3, zh: "退回公海并填写原因", en: "Return to the public pool and enter a reason" },
 ],
 "S-05": [
   { imageIndex: 0, step: 1, zh: "入口：销售管理 → 销售中心 → 通话记录", en: "Entry: Sales Management → Sales Center → Call Records" },
   { imageIndex: 1, step: 3, zh: "核查通话记录详情", en: "Review call record details" },
 ],
 "U-01": [
   { imageIndex: 0, step: 1, zh: "入口：用户管理 → 用户列表", en: "Entry: User Management → User List" },
   { imageIndex: 1, step: 2, zh: "筛选并找到用户信息", en: "Filter and find user information" },
 ],
 "U-02": [
   { imageIndex: 1, step: 1, zh: "入口：用户管理 → 用户列表", en: "Entry: User Management → User List" },
   { imageIndex: 0, step: 1, zh: "已授权：可查看完整手机号", en: "With permission: view the full phone number" },
   { imageIndex: 2, step: 2, zh: "未授权：系统显示脱敏号码", en: "Without permission: CRM shows a masked number" },
 ],
 "U-03": [
   { imageIndex: 0, step: 1, zh: "入口：用户管理 → 用户列表", en: "Entry: User Management → User List" },
   { imageIndex: 1, step: 2, zh: "操作页：添加会员有效期", en: "Action page: add membership validity" },
 ],
 "U-04": [
   { imageIndex: 1, step: 1, zh: "入口：用户管理 → 用户列表", en: "Entry: User Management → User List" },
   { imageIndex: 0, step: 2, zh: "导出入口：点击“导出列表”", en: "Export entry: click Export list" },
 ],
 "U-05": [
   { imageIndex: 0, step: 1, zh: "入口：用户管理 → 用户列表，或销售管理 → 销售中心", en: "Entry: User Management → User List, or Sales Management → Sales Center" },
   { imageIndex: 1, step: 4, zh: "操作列：点击体验报告入口", en: "Actions: click the Experience Report entry" },
 ],
 "O-01": [
   { imageIndex: 0, step: 1, zh: "入口：订单管理 → 订单中心", en: "Entry: Order Management → Order Center" },
   { imageIndex: 1, step: 2, zh: "筛选项：按条件查找订单", en: "Filters: find orders by criteria" },
 ],
 "O-02": [
   { imageIndex: 1, step: 1, zh: "入口：订单管理 → 订单中心", en: "Entry: Order Management → Order Center" },
   { imageIndex: 0, step: 2, zh: "导出按钮入口：点击“导出列表”", en: "Export button: click Export list" },
 ],
 "A-01": [
   { imageIndex: 3, step: 1, zh: "入口：系统管理 → 系统配置", en: "Entry: System Management → System Config" },
   { imageIndex: 2, step: 2, zh: "角色权限配置页", en: "Roles and permissions configuration" },
   { imageIndex: 1, step: 2, zh: "成员账号页面", en: "Member account page" },
   { imageIndex: 0, step: 2, zh: "操作日志页：核查配置变更", en: "Operation log: review configuration changes" },
 ],
};

function screenshotPath(articleId:string, lang:Lang, index:number) {
 const suffix=index===0?"":`(${index})`;
 const assetId=articleId==="S-02"?"S-03":articleId==="S-03"?"S-02":articleId;
 return `./manual/${assetId}-${lang==="zh"?"zh-CN":"en"}${suffix}.png`;
}

export default function Home(){
 const [lang,setLang]=useState<Lang>("zh"),[active,setActive]=useState("home"),[query,setQuery]=useState(""),[preview,setPreview]=useState<{src:string;alt:string}|null>(null),[menuOpen,setMenuOpen]=useState(false);
 const t=(a:Article)=>a[lang]; const modules=["营销中心",...new Set(articles.filter(a=>a.module!=="营销中心").map(a=>a.module))];
 const hits=useMemo(()=>{const q=query.toLowerCase().trim();return q?articles.filter(a=>JSON.stringify(a).toLowerCase().includes(q)):[]},[query]);
 useEffect(()=>{const sync=()=>{const id=decodeURIComponent(location.hash.slice(1));setActive(articles.some(a=>a.id===id)||id==="faq"||(id.startsWith("module:")&&articles.some(a=>a.module===id.slice(7)))?id:"home");setQuery("");setMenuOpen(false);window.scrollTo({top:0})};sync();window.addEventListener("hashchange",sync);return()=>window.removeEventListener("hashchange",sync)},[]);
 useEffect(()=>{document.documentElement.lang=lang==="zh"?"zh-CN":"en"},[lang]);
 useEffect(()=>{const close=(e:KeyboardEvent)=>{if(e.key==="Escape"){setPreview(null);setMenuOpen(false)}};window.addEventListener("keydown",close);return()=>window.removeEventListener("keydown",close)},[]);
 const article=articles.find(a=>a.id===active);
 const label=lang==="zh"?{name:"Dino CRM 操作手册",home:"手册首页",search:"搜索操作、问题或模块…",modules:"按功能模块",flow:"销售核心链路",faq:"常见问题",log:"更新日志",maint:"维护说明",published:"已发布内容",updated:"最后更新：2026-09-29",read:"查看步骤",steps:"照着做",check:"完成后怎么确认",notes:"操作提醒",screenshots:"CRM 页面示意图",screenshotHint:"请按图核对入口、操作按钮和完成结果。",back:"返回首页",source:"营销中心章节已按 2026-09-29 在线原型核对；其他章节保留原有操作说明。",empty:"没有找到相关内容。"}:{name:"Dino CRM Manual",home:"Home",search:"Search actions, questions, or modules…",modules:"Browse by module",flow:"Core sales flow",faq:"FAQ",log:"Change log",maint:"Maintenance",published:"Published content",updated:"Last updated: 2026-09-29",read:"View steps",steps:"Follow these steps",check:"How to confirm",notes:"Notes",screenshots:"CRM screen guide",screenshotHint:"Use the images to verify the entry point, action, and result.",back:"Back to home",source:"Marketing chapters verified against the September 29, 2026 prototype. Other chapters retain their existing guidance.",empty:"No matching content found."};
 const go=(id:string)=>{window.location.hash=encodeURIComponent(id);setActive(id);setQuery("");setMenuOpen(false);window.scrollTo({top:0,behavior:"smooth"})};
 return <main className="shell"><aside className={`sidebar ${menuOpen?"open":""}`}><button className="mobileClose" aria-label="Close menu" onClick={()=>setMenuOpen(false)}>×</button><div className="brand"><span>D</span><div><b>Dino English</b><small>{label.name}</small></div></div><button className={active==="home"?"nav active":"nav"} onClick={()=>go("home")}>{label.home}</button><p>{label.modules}</p>{modules.map(m=><div key={m}><button className="module" onClick={()=>go(`module:${m}`)}>{moduleText(m,lang)}</button>{articles.filter(a=>a.module===m).map(a=><button key={a.id} onClick={()=>go(a.id)} className={active===a.id?"sub active":"sub"}>{a.id} {t(a).title}</button>)}</div>)}<p>{lang==="zh"?"随手查":"Quick links"}</p><button className="nav" onClick={()=>go("faq")}>{label.faq}</button><footer>{label.published}<br/>{label.updated}</footer></aside>{menuOpen&&<button className="menuMask" aria-label="Close menu" onClick={()=>setMenuOpen(false)}/>}<section className="workspace"><header><div className="crumb">{label.name} <b>/</b> {article?t(article).title:label.home}</div><div className="tools"><button className="toc" onClick={()=>setMenuOpen(true)}>{lang==="zh"?"☰ 目录":"☰ Menu"}</button><div className="search"><input aria-label={label.search} value={query} onChange={e=>setQuery(e.target.value)} placeholder={label.search}/>{query&&<div className="results">{hits.length?hits.map(a=><button key={a.id} onClick={()=>go(a.id)}><b>{a.id} · {t(a).title}</b><small>{moduleText(a.module,lang)}</small></button>):<p>{label.empty}</p>}</div>}</div><button className="lang" onClick={()=>setLang(lang==="zh"?"en":"zh")}>{lang==="zh"?"English":"中文"}</button></div></header>{active==="home"?<Landing label={label} lang={lang} onGo={go}/>:article?<Article article={article} copy={t(article)} lang={lang} label={label} onBack={()=>go("home")} onPreview={setPreview}/>:active==="faq"?<FAQ title={label.faq} items={[...faq[lang],...marketingArticles[9][lang].notes.map(n=>{const i=n.indexOf(lang==="zh"?"：":":");return {q:n.slice(0,i),a:n.slice(i+1)}})]} label={label}/>:<Module name={active.replace("module:","")} articles={articles.filter(a=>a.module===active.replace("module:",""))} copy={t} label={label} lang={lang} onGo={go}/>}</section>{preview&&<div className="lightbox" role="dialog" aria-modal="true" aria-label={preview.alt} onClick={()=>setPreview(null)}><div onClick={e=>e.stopPropagation()}><button aria-label="Close preview" onClick={()=>setPreview(null)}>×</button><img src={preview.src} alt={preview.alt}/></div></div>}</main>
}

function Landing({label,lang,onGo}:{label:any;lang:Lang;onGo:(x:string)=>void}){const sales=articles.filter(a=>a.module==="销售管理");return <div className="content"><section className="trainingBanner"><div><span>2026.09.30 · {lang==="zh"?"操作培训":"Operations training"}</span><h2>{lang==="zh"?"营销中心配置操作手册":"Marketing Center configuration manual"}</h2><p>{lang==="zh"?"渠道 → SKU 与价格 → 优惠码 → 落地页 → 正式链接":"Channels → SKUs & pricing → Promo Codes → Landing pages → Final links"}</p></div><button onClick={()=>onGo("M-00")}>{lang==="zh"?"开始培训":"Start training"} →</button></section><section className="hero"><div><span>— {lang==="zh"?"一线伙伴操作手册":"Frontline operations manual"}</span><h1>{lang==="zh"?<>需要操作时，<br/>马上找到答案。</>:<>Find the answer<br/>when you need it.</>}</h1><p>{lang==="zh"?"按任务、功能模块或问题搜索。你不需要理解系统设计，只需完成当前工作。":"Search by task, module, or question. You do not need to understand the system design—just complete today’s work."}</p><button onClick={()=>onGo("S-01")}>{lang==="zh"?"从领取线索开始":"Start with lead claiming"} →</button></div><div className="orb"/></section><section className="cards"><h2>{label.flow}</h2>{sales.map(a=><button key={a.id} onClick={()=>onGo(a.id)}><span>{a.id}</span><b>{a[lang].title}</b><p>{a[lang].summary}</p><em>{label.read} →</em></button>)}</section><section className="cards marketingCards"><h2>{lang==="zh"?"营销中心 · 按任务查阅":"Marketing Center · Browse tasks"}</h2>{marketingArticles.map(a=><button key={a.id} onClick={()=>onGo(a.id)}><span>{a.id}</span><b>{a[lang].title}</b><p>{a[lang].summary}</p><em>{label.read} →</em></button>)}</section><div className="source">{label.source}</div></div>}
function Article({article,copy,lang,label,onBack,onPreview}:{article:Article;copy:Copy;lang:Lang;label:any;onBack:()=>void;onPreview:(image:{src:string;alt:string})=>void}){const count=screenshotCounts[article.id]?.[lang]??0;const defined=screenshotGuides[article.id]??[];const guides=[...defined.filter(g=>g.imageIndex<count),...Array.from({length:count},(_,i)=>i).filter(i=>!defined.some(g=>g.imageIndex===i)).map((imageIndex,i)=>({imageIndex,step:Math.min(i+1,copy.steps.length),zh:`截图 ${imageIndex+1}`,en:`Image ${imageIndex+1}`}))];
  const firstSetup=article.id==="S-02"?(lang==="zh"?{title:"首次外呼前设置",intro:"仅首次登录电话条并发起外呼的销售需要完成一次；后续外呼无需重复设置。",items:["点击电话条“登录”，模式选择“网页”。","点击“请选择外显规则”，选择“动态外显号码方案匹配 → 按国家匹配”。"],images:[{src:"./manual/S-02-first-setup-mode.jpg",caption:"登录电话条后，模式选择“网页”。"},{src:"./manual/S-02-first-setup-required.jpg",caption:"出现提示时，点击电话条中的“请选择外显规则”。"},{src:"./manual/S-02-first-setup-rule.jpg",caption:"选择“动态外显号码方案匹配 → 按国家匹配”。"}]}:{title:"First-time outbound-call setup",intro:"Complete this once only if this is your first phone-bar login before making an outbound call. You do not need to repeat it later.",items:["Click Phone Bar Login and select Page mode.","Click Select external display rule, then choose Dynamic external number scheme matching → Match by country."],images:[{src:"./manual/S-02-first-setup-mode.jpg",caption:"After signing in to the Phone Bar, select Page mode."},{src:"./manual/S-02-first-setup-required.jpg",caption:"When prompted, click Select external display rule in the Phone Bar."},{src:"./manual/S-02-first-setup-rule.jpg",caption:"Select Dynamic external number scheme matching → Match by country."}] }):null;
  return <article className="article"><button className="back" onClick={onBack}>← {label.back}</button><span className="tag">{article.id} · {moduleText(article.module,lang)} · {roleText(article.roles,lang)}</span><h1>{copy.title}</h1><p className="lead">{copy.summary}</p>{article.id.startsWith("M-")&&<div className="marketingMeta"><span>{lang==="zh"?"2026-09-29 核对 · 原型配置培训":"Verified 2026-09-29 · Prototype training"}</span><button onClick={()=>window.print()}>{lang==="zh"?"打印本节":"Print chapter"}</button></div>}
        {firstSetup&&<section className="firstSetup"><header><b>{firstSetup.title}</b><span>{lang==="zh"?"仅首次":"First time only"}</span></header><p>{firstSetup.intro}</p><ol>{firstSetup.items.map(item=><li key={item}>{item}</li>)}</ol><div className="setupImages">{firstSetup.images.map(image=><button className="setupImage" key={image.src} onClick={()=>onPreview({src:image.src,alt:`${copy.title} · ${image.caption}`})}><img src={image.src} alt={image.caption}/><small>{image.caption}</small></button>)}</div></section>}
        <section className="steps"><header><b>{label.steps}</b><span>{copy.steps.length} {label.steps==="照着做"?"个步骤":"steps"}</span></header>{copy.steps.map((s,i)=><div key={s}><i>{String(i+1).padStart(2,"0")}</i><p>{s}</p></div>)}</section>{count>0&&<section className="screenshots"><header><div><b>{label.screenshots}</b><p>{label.screenshotHint}</p></div><span>{count} {lang==="zh"?"张":"images"}</span></header><div className="imageGrid">{guides.map(g=>{const src=screenshotPath(article.id,lang,g.imageIndex),caption=g[lang],alt=`${copy.title} · ${caption}`;return <button className="imageButton" key={g.imageIndex} onClick={()=>onPreview({src,alt})}><img src={src} alt={alt}/><small><b>{lang==="zh"?`对应步骤 ${String(g.step).padStart(2,"0")}`:`Step ${String(g.step).padStart(2,"0")}`}</b>{caption}</small></button>})}</div></section>}{marketingImages[article.id]&&<section className="screenshots marketingScreens"><header><div><b>{lang==="zh"?"配置页面示意":"Configuration screens"}</b><p>{lang==="zh"?"当前中文原型截图，点击放大查看。示例数据仅用于培训。":"Current Chinese prototype screenshots. Click to enlarge. Sample data for training only."}</p></div></header><div className="imageGrid">{marketingImages[article.id].map(img=><button className="imageButton" key={img.file} onClick={()=>onPreview({src:"./manual/marketing/"+img.file,alt:img[lang]})}><img loading="lazy" src={"./manual/marketing/"+img.file} alt={img[lang]}/><small>{img[lang]}</small></button>)}</div></section>}<section className="confirm"><b>✓</b><div><strong>{label.check}</strong><p>{copy.check}</p></div></section><section className="notes"><strong>{label.notes}</strong>{copy.notes.map(n=><p key={n}>• {n}</p>)}</section>{article.id.startsWith("M-")&&<nav className="chapterNav" aria-label={lang==="zh"?"培训章节":"Training chapters"}>{marketingArticles.map(a=><a key={a.id} aria-current={a.id===article.id?"page":undefined} href={"#"+a.id}>{a.id} · {a[lang].title}</a>)}</nav>}</article>}
function FAQ({title,items,label}:{title:string;items:{q:string;a:string}[];label:any}){return <div className="content simple faq"><h1>{title}</h1>{items.map((item,i)=><section key={item.q}><span>{String(i+1).padStart(2,"0")}</span><div><p><b>Q：</b>{item.q}</p><p><b>A：</b>{item.a}</p></div></section>)}<div className="source">{label.source}</div></div>}
function Module({name,articles,copy,label,lang,onGo}:{name:string;articles:Article[];copy:(a:Article)=>Copy;label:any;lang:Lang;onGo:(x:string)=>void}){return <div className="content"><h1 className="pageTitle">{moduleText(name,lang)}</h1><div className="list">{articles.map(a=><button onClick={()=>onGo(a.id)} key={a.id}><span>{a.id}</span><div><b>{copy(a).title}</b><p>{copy(a).summary}</p></div><em>{label.read} →</em></button>)}</div></div>}
function Simple({title,items,label}:{title:string;items:string[];label:any}){return <div className="content simple"><h1>{title}</h1>{items.map((x,i)=><section key={x}><span>{String(i+1).padStart(2,"0")}</span><p>{x}</p></section>)}<div className="source">{label.source}</div></div>}

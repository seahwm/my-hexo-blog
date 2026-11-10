/**
 * 投资免责声明标签插件 (Investment Disclaimer Tag Plugin)
 * 用法: 在 Markdown 文章中插入 {% investment_disclaimer %} 或 {% disclaimer %}
 */
const disclaimerHtml = `
<div style="background-color: #fff5f5; border: 1px solid #fed7d7; padding: 18px; margin: 25px 0; border-radius: 8px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
    <!-- 用 div 代替 h4，通过样式模拟标题效果，完美避开目录自动抓取 (TOC) -->
    <div style="margin: 0 0 10px 0; color: #c53030; font-size: 16px; font-weight: bold; display: flex; align-items: center;">
        <span style="margin-right: 6px;">📢</span> 读者须知与免责声明
    </div>
    <div style="font-size: 14px; color: #2d3748; line-height: 1.6;">
        <p style="margin: 0 0 8px 0;">
            本文仅为作者个人的学习笔记与观点分享，<strong>绝不构成任何投资建议</strong>。
        </p>
        <p style="margin: 0;">
            股市有风险，投资需谨慎。请务必进行独立研究或咨询大马证监会持牌顾问。因参考本文产生的任何盈亏，读者需<strong>自行承担全部风险</strong>。
        </p>
    </div>
</div>
`.trim();

hexo.extend.tag.register('investment_disclaimer', function() {
  return disclaimerHtml;
}, { ends: false });

// 别名注册，方便简写
hexo.extend.tag.register('disclaimer', function() {
  return disclaimerHtml;
}, { ends: false });

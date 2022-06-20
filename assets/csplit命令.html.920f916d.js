import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as e}from"./app.29f60bb5.js";const c={},o=e(`<h1 id="csplit\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#csplit\u547D\u4EE4" aria-hidden="true">#</a> csplit\u547D\u4EE4</h1><p><code>csplit</code>\u547D\u4EE4\u5C06\u7528<code>PATTERN</code>\u5206\u9694\u7684<code>FILE</code>\u6587\u4EF6\u8F93\u51FA\u5230\u6587\u4EF6<code>xx00</code>\u3001<code>xx01</code>\u3001<code>...</code>\uFF0C\u5E76\u5C06\u6BCF\u4E2A\u6587\u4EF6\u7684\u5B57\u8282\u6570\u8F93\u51FA\u5230\u6807\u51C6\u8F93\u51FA\u3002</p><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">csplit</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. FILE PATTERN<span class="token punctuation">..</span>.
</code></pre></div><h2 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h2><ul><li><code>-b, --suffix-format=FORMAT</code>: \u4F7F\u7528<code>sprintf FORMAT</code>\u683C\u5F0F\u800C\u4E0D\u662F<code>%02d</code>\u3002</li><li><code>-f, --prefix=PREFIX</code>: \u4F7F\u7528<code>PREFIX</code>\u4EE3\u66FF<code>xx</code>\u3002</li><li><code>-k, --keep-files</code>: \u51FA\u9519\u65F6\u4E0D\u8981\u5220\u9664\u8F93\u51FA\u6587\u4EF6\u3002</li><li><code>-m, --suppress-matched</code>: \u53D6\u6D88\u5339\u914D<code>PATTERN</code>\u7684\u884C\u3002</li><li><code>-n, --digits=DIGITS</code>: \u4F7F\u7528\u6307\u5B9A\u7684\u6570\u5B57\u4F4D\u6570\uFF0C\u800C\u4E0D\u662F<code>2</code>\u3002</li><li><code>-s, --quiet, --silent</code>: \u4E0D\u8981\u6253\u5370\u8F93\u51FA\u6587\u4EF6\u5927\u5C0F\u7684\u8BA1\u6570\u3002</li><li><code>-z, --elide-empty-files</code>: \u5220\u9664\u7A7A\u8F93\u51FA\u6587\u4EF6\u3002</li><li><code>--help</code>: \u8F93\u51FA\u5E2E\u52A9\u4FE1\u606F\u3002</li><li><code>--version</code>: \u8F93\u51FA\u7248\u672C\u4FE1\u606F\u3002</li></ul><h2 id="\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5F0F" aria-hidden="true">#</a> \u6A21\u5F0F</h2><p>\u5982\u679C\u6587\u4EF6\u88AB\u6307\u5B9A\u4E3A\u7834\u6298\u53F7<code>-</code>\uFF0C<code>csplit</code>\u5C06\u8BFB\u53D6\u6807\u51C6\u8F93\u5165\uFF0C\u6BCF\u79CD\u6A21\u5F0F\u53EF\u80FD\u662F\uFF1A</p><ul><li><code>INTEGER</code>: \u590D\u5236\u5230\u6307\u5B9A\u884C\u53F7\uFF0C\u4F46\u4E0D\u5305\u62EC\u6307\u5B9A\u884C\u53F7\u3002</li><li><code>/REGEXP/[OFFSET]</code>: \u590D\u5236\u5230\u4F46\u4E0D\u5305\u62EC\u5339\u914D\u884C\u3002</li><li><code>%REGEXP%[OFFSET]</code>: \u8DF3\u81F3\u4F46\u4E0D\u5305\u62EC\u5339\u914D\u884C\u3002</li><li><code>{INTEGER}</code>: \u91CD\u590D\u4E0A\u4E00\u4E2A\u6A21\u5F0F\u6307\u5B9A\u7684\u6B21\u6570\u3002</li><li><code>{*}</code>: \u5C3D\u53EF\u80FD\u591A\u6B21\u91CD\u590D\u524D\u9762\u7684\u6A21\u5F0F\u3002</li></ul><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><p><code>list.txt</code>\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>1. Apples
2. Bananas
3. Oranges
4. Pineapples
5. Guava
</code></pre></div><p>\u4F7F\u7528<code>csplit</code>\u547D\u4EE4\u5C06\u6B64\u6587\u4EF6\u5206\u4E3A\u4E24\u90E8\u5206\uFF0C\u7B2C\u4E8C\u90E8\u5206\u4ECE\u7B2C\u4E09\u884C\u5F00\u59CB\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">csplit</span> list.txt <span class="token number">3</span>
<span class="token comment"># 21</span>
<span class="token comment"># 34</span>

<span class="token function">cat</span> xx00
<span class="token comment"># 1. Apples</span>
<span class="token comment"># 2. Bananas</span>

<span class="token function">cat</span> xx01
<span class="token comment"># 3. Oranges</span>
<span class="token comment"># 4. Pineapples</span>
<span class="token comment"># 5. Guava</span>
</code></pre></div><p>\u4F7F\u7528<code>csplit</code>\u547D\u4EE4\u5C06\u6B64\u6587\u4EF6\u5206\u4E3A\u4E09\u90E8\u5206\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">csplit</span> list.txt <span class="token number">2</span> <span class="token number">3</span>
<span class="token comment"># 21</span>
<span class="token comment"># 34</span>

<span class="token function">cat</span> xx00
<span class="token comment"># 1. Apples</span>

<span class="token function">cat</span> xx01
<span class="token comment"># 2. Bananas</span>

<span class="token function">cat</span> xx02
<span class="token comment"># 3. Oranges</span>
<span class="token comment"># 4. Pineapples</span>
<span class="token comment"># 5. Guava</span>
</code></pre></div><p>\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684\u5206\u5272\u524D\u7F00<code>aa</code>\u4EE3\u66FF<code>xx</code>\u5206\u5272\u524D\u7F00\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">csplit</span> list.txt -f aa <span class="token number">3</span>
<span class="token comment"># 21</span>
<span class="token comment"># 34</span>

<span class="token function">ls</span>
<span class="token comment"># aa00  aa01 list.txt</span>
</code></pre></div><p>\u4F7F\u7528\u4E09\u4F4D\u6570\u5B57\u4EE3\u66FF\u9ED8\u8BA4\u7684\u4E24\u4F4D\u6570\u5B57\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">csplit</span> list.txt -n <span class="token number">3</span> <span class="token number">3</span>
<span class="token comment"># 21</span>
<span class="token comment"># 34</span>

<span class="token function">ls</span>
<span class="token comment"># list.txt  xx000  xx001</span>
</code></pre></div><p>\u4F7F\u7528\u6A21\u5F0F\u5B9A\u4E49\u5206\u5272\u89C4\u5219\uFF0C\u91CD\u590D\u4E0A\u4E00\u4E2A\u6A21\u5F0F\u6307\u5B9A\u7684\u6B21\u6570\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">csplit</span> list.txt <span class="token number">2</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span>
<span class="token comment"># 10</span>
<span class="token comment"># 22</span>
<span class="token comment"># 23</span>

<span class="token function">ls</span> xx*
<span class="token comment"># xx00  xx01  xx02</span>
</code></pre></div>`,22),t=[o];function p(l,d){return s(),a("div",null,t)}var m=n(c,[["render",p],["__file","csplit\u547D\u4EE4.html.vue"]]);export{m as default};

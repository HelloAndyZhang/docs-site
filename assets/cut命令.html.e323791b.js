import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as e}from"./app.29f60bb5.js";const c={},o=e(`<h1 id="cut\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#cut\u547D\u4EE4" aria-hidden="true">#</a> cut\u547D\u4EE4</h1><p><code>cut</code>\u547D\u4EE4\u7528\u6765\u663E\u793A\u884C\u4E2D\u7684\u6307\u5B9A\u90E8\u5206\uFF0C\u5176\u4ECE\u6587\u4EF6\u7684\u6BCF\u4E00\u884C\u526A\u5207\u5B57\u8282\u3001\u5B57\u7B26\u548C\u5B57\u6BB5\u5E76\u5C06\u8FD9\u4E9B\u5B57\u8282\u3001\u5B57\u7B26\u548C\u5B57\u6BB5\u5199\u81F3\u6807\u51C6\u8F93\u51FA\uFF0C\u5982\u679C\u4E0D\u6307\u5B9A<code>File</code>\u53C2\u6570\uFF0C<code>cut</code>\u547D\u4EE4\u5C06\u8BFB\u53D6\u6807\u51C6\u8F93\u5165\uFF0C\u8BE5\u547D\u4EE4\u5E38\u7528\u7684\u4E24\u9879\u529F\u80FD\uFF0C\u4E00\u662F\u7528\u6765\u663E\u793A\u6587\u4EF6\u7684\u5185\u5BB9\uFF0C\u5B83\u4F9D\u6B21\u8BFB\u53D6\u7531\u53C2\u6570<code>file</code>\u6240\u6307\u660E\u7684\u6587\u4EF6\uFF0C\u5C06\u5B83\u4EEC\u7684\u5185\u5BB9\u8F93\u51FA\u5230\u6807\u51C6\u8F93\u51FA\u4E0A\uFF0C\u5176\u4E8C\u662F\u8FDE\u63A5\u4E24\u4E2A\u6216\u591A\u4E2A\u6587\u4EF6\uFF0C\u5982<code>cut f1 f2 &gt; f3</code>\u5C06\u628A\u6587\u4EF6<code>f1</code>\u548C\u51E0\u7684\u5185\u5BB9\u5408\u5E76\u8D77\u6765\uFF0C\u7136\u540E\u901A\u8FC7\u8F93\u51FA\u91CD\u5B9A\u5411\u7B26<code>&gt;</code>\u7684\u4F5C\u7528\uFF0C\u5C06\u5B83\u4EEC\u653E\u5165\u6587\u4EF6<code>f3</code>\u4E2D\uFF0C\u5F53\u6587\u4EF6\u8F83\u5927\u65F6\uFF0C\u6587\u672C\u5728\u5C4F\u5E55\u4E0A\u8FC5\u901F\u95EA\u8FC7\uFF0C\u4E5F\u5C31\u662F\u6EDA\u5C4F\u73B0\u8C61\uFF0C\u4E3A\u4E86\u63A7\u5236\u6EDA\u5C4F\uFF0C\u53EF\u4EE5\u6267\u884C<code>Ctrl+S</code>\u6309\u952E\u505C\u6B62\u6EDA\u5C4F\uFF0C\u6309<code>Ctrl+Q</code>\u952E\u53EF\u4EE5\u6062\u590D\u6EDA\u5C4F\uFF0C\u6309<code>Ctrl+C</code>\u952E\u7EC8\u6B62\u8BE5\u547D\u4EE4\u7684\u6267\u884C\u7B49\u64CD\u4F5C\u3002</p><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">cut</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. <span class="token punctuation">[</span>FILE<span class="token punctuation">]</span><span class="token punctuation">..</span>.
</code></pre></div><h2 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h2><ul><li><code>-b</code>: \u4EC5\u663E\u793A\u884C\u4E2D\u6307\u5B9A\u76F4\u63A5\u8303\u56F4\u7684\u5185\u5BB9\u3002</li><li><code>-c</code>: \u4EC5\u663E\u793A\u884C\u4E2D\u6307\u5B9A\u8303\u56F4\u7684\u5B57\u7B26\u3002</li><li><code>-d</code>: \u6307\u5B9A\u5B57\u6BB5\u7684\u5206\u9694\u7B26\uFF0C\u9ED8\u8BA4\u7684\u5B57\u6BB5\u5206\u9694\u7B26\u4E3A<code>TAB</code>\u3002</li><li><code>-f</code>: \u663E\u793A\u6307\u5B9A\u5B57\u6BB5\u7684\u5185\u5BB9\u3002</li><li><code>-n</code>: \u4E0E<code>-b</code>\u9009\u9879\u8FDE\u7528\uFF0C\u4E0D\u5206\u5272\u591A\u5B57\u8282\u5B57\u7B26\u3002</li><li><code>--complement</code>: \u8865\u8DB3\u88AB\u9009\u62E9\u7684\u5B57\u8282\u3001\u5B57\u7B26\u6216\u5B57\u6BB5\u3002</li><li><code>--out-delimiter=&lt;delimiter&gt;</code>: \u6307\u5B9A\u8F93\u51FA\u5185\u5BB9\u662F\u7684\u5B57\u6BB5\u5206\u5272\u7B26\u3002</li><li><code>--help</code>: \u663E\u793A\u6307\u4EE4\u7684\u5E2E\u52A9\u4FE1\u606F\u3002</li><li><code>--version</code>: \u663E\u793A\u6307\u4EE4\u7684\u7248\u672C\u4FE1\u606F\u3002</li></ul><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><p>\u622A\u53D6<code>/tmp/file.txt</code>\u6587\u4EF6\u6BCF\u4E00\u884C\u7684\u7B2C<code>3</code>\u4E2A\u5B57\u7B26\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">cat</span> /tmp/file.txt <span class="token operator">|</span> <span class="token function">cut</span> -c <span class="token number">3</span>
<span class="token comment"># 3</span>
<span class="token comment"># 4</span>
<span class="token comment"># 5</span>
<span class="token comment"># 6</span>
<span class="token comment"># 7</span>
<span class="token comment"># 8</span>
<span class="token comment"># 9</span>
<span class="token comment"># 0</span>
<span class="token comment"># 1</span>
<span class="token comment"># 2</span>
</code></pre></div><p>\u622A\u53D6<code>/tmp/file.txt</code>\u6587\u4EF6\u6BCF\u4E00\u884C\u7684\u7B2C<code>3-6</code>\u4E2A\u5B57\u7B26\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">cat</span> /tmp/file.txt <span class="token operator">|</span> <span class="token function">cut</span> -c <span class="token number">3</span>-6
<span class="token comment"># 3456</span>
<span class="token comment"># 4567</span>
<span class="token comment"># 5678</span>
<span class="token comment"># 6789</span>
<span class="token comment"># 7890</span>
<span class="token comment"># 8901</span>
<span class="token comment"># 9012</span>
<span class="token comment"># 0123</span>
<span class="token comment"># 1234</span>
<span class="token comment"># 2345</span>
</code></pre></div><p>\u622A\u53D6<code>/tmp/file.txt</code>\u6587\u4EF6\u6BCF\u4E00\u884C\u7684\u7B2C<code>3</code>\u4E2A\u5B57\u7B26\u5230\u7ED3\u5C3E\u5B57\u7B26\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">cat</span> /tmp/file.txt <span class="token operator">|</span> <span class="token function">cut</span> -c <span class="token number">3</span>-
<span class="token comment"># 34567890</span>
<span class="token comment"># 45678901</span>
<span class="token comment"># 56789012</span>
<span class="token comment"># 67890123</span>
<span class="token comment"># 78901234</span>
<span class="token comment"># 89012345</span>
<span class="token comment"># 90123456</span>
<span class="token comment"># 01234567</span>
<span class="token comment"># 12345678</span>
<span class="token comment"># 23456789</span>
</code></pre></div>`,13),t=[o];function p(l,d){return s(),a("div",null,t)}var r=n(c,[["render",p],["__file","cut\u547D\u4EE4.html.vue"]]);export{r as default};

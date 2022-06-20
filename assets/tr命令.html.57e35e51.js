import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as n,a as s}from"./app.29f60bb5.js";const c={},o=s(`<h1 id="tr\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#tr\u547D\u4EE4" aria-hidden="true">#</a> tr\u547D\u4EE4</h1><p><code>tr</code>\u547D\u4EE4\u7528\u4E8E\u8F6C\u6362\u6216\u5220\u9664\u6587\u4EF6\u4E2D\u7684\u5B57\u7B26\uFF0C\u53EF\u4EE5\u8BFB\u6587\u4EF6\u4E5F\u53EF\u4EE5\u4ECE\u6807\u51C6\u8F93\u5165\u8BBE\u5907\u8BFB\u53D6\u6570\u636E\uFF0C\u7ECF\u8FC7\u5B57\u7B26\u4E32\u8F6C\u8BD1\u540E\uFF0C\u5C06\u7ED3\u679C\u8F93\u51FA\u5230\u6807\u51C6\u8F93\u51FA\u8BBE\u5907\u3002</p><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">tr</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. SET1 <span class="token punctuation">[</span>SET2<span class="token punctuation">]</span>
</code></pre></div><h2 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h2><ul><li><code>-c, -C, --complement</code>: \u4F7F\u7528<code>SET1</code>\u7684\u8865\u7801\u3002</li><li><code>-d, --delete</code>: \u5220\u9664<code>SET1</code>\u4E2D\u7684\u5B57\u7B26\uFF0C\u4E0D\u7FFB\u8BD1\u3002</li><li><code>-s, --squeeze-repeats</code>: \u7528\u4E00\u6B21\u51FA\u73B0\u7684\u5B57\u7B26\u66FF\u6362<code>SET1</code>\u4E2D\u5217\u51FA\u7684\u91CD\u590D\u5B57\u7B26\u7684\u6BCF\u4E2A\u8F93\u5165\u5E8F\u5217\u3002</li><li><code>-t, --truncate-set1</code>: \u9996\u5148\u5C06<code>SET1</code>\u622A\u65AD\u4E3A<code>SET2</code>\u7684\u957F\u5EA6\u3002</li><li><code>--help</code>: \u8F93\u51FA\u5E2E\u52A9\u4FE1\u606F\u3002</li><li><code>--version</code>: \u8F93\u51FA\u7248\u672C\u4FE1\u606F\u3002</li></ul><h2 id="\u89E3\u91CA\u5E8F\u5217" tabindex="-1"><a class="header-anchor" href="#\u89E3\u91CA\u5E8F\u5217" aria-hidden="true">#</a> \u89E3\u91CA\u5E8F\u5217</h2><ul><li><code>\\NNN</code>: \u516B\u8FDB\u5236\u503C\u4E3A<code>NNN</code>\u7684\u5B57\u7B26(<code>1</code>\u5230<code>3</code>\u4E2A\u516B\u8FDB\u5236\u6570\u5B57)\u3002</li><li><code>\\\\</code>: \u53CD\u659C\u6760\u3002</li><li><code>\\a</code>: \u53EF\u95FB\u7684<code>BEL</code>\u3002</li><li><code>\\b</code>: \u9000\u683C\u952E\u3002</li><li><code>\\f</code>: \u6362\u9875\u3002</li><li><code>\\n</code>: \u65B0\u884C\u3002</li><li><code>\\r</code>: \u8FD4\u56DE\u3002</li><li><code>\\t</code>: \u6C34\u5E73\u5236\u8868\u7B26\u3002</li><li><code>\\v</code>: \u5782\u76F4\u5236\u8868\u7B26\u3002</li><li><code>CHAR1-CHAR2</code>: \u4ECE<code>CHAR1</code>\u5230<code>CHAR2</code>\u7684\u6240\u6709\u5B57\u7B26\u6309\u5347\u5E8F\u6392\u5217\u3002</li><li><code>[CHAR*]</code>: \u5728<code>SET2</code>\u4E2D\uFF0C\u590D\u5236<code>CHAR</code>\u76F4\u5230<code>SET1</code>\u7684\u957F\u5EA6\u3002</li><li><code>[CHAR*REPEAT]</code>: \u91CD\u590D<code>CHAR</code>\u7684\u526F\u672C\uFF0C\u5982\u679C\u4EE5<code>0</code>\u5F00\u5934\uFF0C\u5219\u91CD\u590D\u516B\u8FDB\u5236\u3002</li><li><code>[:alnum:]</code>: \u6240\u6709\u5B57\u6BCD\u548C\u6570\u5B57\u3002</li><li><code>[:alpha:]</code>: \u6240\u6709\u5B57\u6BCD\u3002</li><li><code>[:blank:]</code>: \u6240\u6709\u6C34\u5E73\u7A7A\u767D\u3002</li><li><code>[:cntrl:]</code>: \u6240\u6709\u63A7\u5236\u5B57\u7B26\u3002</li><li><code>[:digit:]</code>: \u6240\u6709\u6570\u5B57\u3002</li><li><code>[:graph:]</code>: \u6240\u6709\u53EF\u6253\u5370\u5B57\u7B26\uFF0C\u4E0D\u5305\u62EC\u7A7A\u683C\u3002</li><li><code>[:lower:]</code>: \u6240\u6709\u5C0F\u5199\u5B57\u6BCD\u3002</li><li><code>[:print:]</code>: \u6240\u6709\u53EF\u6253\u5370\u5B57\u7B26\uFF0C\u5305\u62EC\u7A7A\u683C\u3002</li><li><code>[:punct:]</code>: \u6240\u6709\u6807\u70B9\u7B26\u53F7\u3002</li><li><code>[:space:]</code>: \u6240\u6709\u6C34\u5E73\u6216\u5782\u76F4\u7A7A\u767D\u3002</li><li><code>[:upper:]</code>: \u6240\u6709\u5927\u5199\u5B57\u6BCD\u3002</li><li><code>[:xdigit:]</code>: \u6240\u6709\u5341\u516D\u8FDB\u5236\u6570\u5B57\u3002</li><li><code>[=CHAR=]</code>: \u7B49\u540C\u4E8E<code>CHAR</code>\u7684\u6240\u6709\u5B57\u7B26\u3002</li></ul><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><p><code>file.txt</code>\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>Hello World
</code></pre></div><p>\u5C06\u6587\u4EF6\u4E2D\u7684\u5B57\u6BCD\u5168\u90E8\u8F6C\u6362\u4E3A\u5927\u5199\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">cat</span> file.txt <span class="token operator">|</span> <span class="token function">tr</span> <span class="token punctuation">[</span>a-z<span class="token punctuation">]</span> <span class="token punctuation">[</span>A-Z<span class="token punctuation">]</span>
<span class="token comment"># HELLO WORLD</span>
</code></pre></div><p>\u540C\u6837\u53EF\u4EE5\u4F7F\u7528<code>[:lower]</code>\u4E0E<code>[:upper]</code>\u53C2\u6570\u6765\u5B9E\u73B0\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">cat</span> file.txt <span class="token operator">|</span> <span class="token function">tr</span> <span class="token punctuation">[</span>:lower:<span class="token punctuation">]</span> <span class="token punctuation">[</span>:upper:<span class="token punctuation">]</span>
<span class="token comment"># HELLO WORLD</span>
</code></pre></div><p>\u5C06\u6C34\u5E73\u7A7A\u767D\u7B26\u8F6C\u6362\u4E3A<code>\\t</code>\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">cat</span> file.txt <span class="token operator">|</span> <span class="token function">tr</span> <span class="token punctuation">[</span>:space:<span class="token punctuation">]</span> <span class="token string">&quot;<span class="token entity" title="\\t">\\t</span>&quot;</span>
<span class="token comment"># Hello   World   </span>
</code></pre></div><p>\u5220\u9664\u6240\u6709<code>o</code>\u5B57\u7B26\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">cat</span> file.txt <span class="token operator">|</span> <span class="token function">tr</span> -d <span class="token string">&quot;o&quot;</span>
<span class="token comment"># Hell Wrld</span>
</code></pre></div><p>\u5220\u9664\u6240\u6709\u6570\u5B57\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;My ID is 73535&quot;</span> <span class="token operator">|</span> <span class="token function">tr</span> -d <span class="token punctuation">[</span>:digit:<span class="token punctuation">]</span>
<span class="token comment"># My ID is</span>
</code></pre></div><p>\u53D6\u51FA\u5B57\u7B26\u4E32\u4E2D\u7684\u6570\u5B57\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>echo &quot;My ID is 73535&quot; | tr -cd [:digit:]
# 73535
</code></pre></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2><div class="language-text ext-text"><pre class="language-text"><code>https://www.runoob.com/linux/linux-comm-tr.html
https://www.tutorialspoint.com/unix_commands/tr.htm
https://www.geeksforgeeks.org/tr-command-in-unix-linux-with-examples/
</code></pre></div>`,25),t=[o];function d(l,i){return a(),n("div",null,t)}var u=e(c,[["render",d],["__file","tr\u547D\u4EE4.html.vue"]]);export{u as default};

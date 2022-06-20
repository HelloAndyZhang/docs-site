import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as s,a}from"./app.29f60bb5.js";const o={},i=a(`<h1 id="sed\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#sed\u547D\u4EE4" aria-hidden="true">#</a> sed\u547D\u4EE4</h1><p><code>sed</code>\u547D\u4EE4\u662F\u5229\u7528\u811A\u672C\u6765\u5904\u7406\u6587\u672C\u6587\u4EF6\uFF0C\u53EF\u4F9D\u7167\u811A\u672C\u7684\u6307\u4EE4\u6765\u5904\u7406\u3001\u7F16\u8F91\u6587\u672C\u6587\u4EF6\uFF0C\u4E3B\u8981\u7528\u6765\u81EA\u52A8\u7F16\u8F91\u4E00\u4E2A\u6216\u591A\u4E2A\u6587\u4EF6\u3001\u7B80\u5316\u5BF9\u6587\u4EF6\u7684\u53CD\u590D\u64CD\u4F5C\u3001\u7F16\u5199\u8F6C\u6362\u7A0B\u5E8F\u7B49\u3002</p><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. <span class="token punctuation">{</span>script-only-if-no-other-script<span class="token punctuation">}</span> <span class="token punctuation">[</span>input-file<span class="token punctuation">]</span><span class="token punctuation">..</span>.
</code></pre></div><h2 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h2><ul><li><code>-n, --quiet, --silent</code>: \u7981\u6B62\u81EA\u52A8\u6253\u5370\u56FE\u6848\u7A7A\u95F4\u3002</li><li><code>-e script, --expression=script</code>: \u5C06\u811A\u672C\u6DFB\u52A0\u5230\u8981\u6267\u884C\u7684\u547D\u4EE4\u4E2D\u3002</li><li><code>-f script-file, --file=script-file</code>: \u5C06\u811A\u672C\u6587\u4EF6\u7684\u5185\u5BB9\u6DFB\u52A0\u5230\u8981\u6267\u884C\u7684\u547D\u4EE4\u4E2D\u3002</li><li><code>--follow-symlinks</code>: \u5C31\u5730\u5904\u7406\u65F6\u9075\u5FAA\u7B26\u53F7\u94FE\u63A5\u3002</li><li><code>-i[SUFFIX], --in-place[=SUFFIX]</code>:\u5C31\u5730\u7F16\u8F91\u6587\u4EF6\uFF0C\u5982\u679C\u63D0\u4F9B\u4E86\u540E\u7F00\uFF0C\u5219\u4F7F\u7528\u6587\u4EF6\u6269\u5C55\u540D\u540E\u7F00\u8FDB\u884C\u5907\u4EFD\u3002</li><li><code>-l N, --line-length=N</code>: \u4E3A<code>l</code>\u547D\u4EE4\u6307\u5B9A\u6240\u9700\u7684\u6362\u884C\u957F\u5EA6<code>N</code>\u3002</li><li><code>--POSIX</code>: \u7981\u7528\u6240\u6709<code>GNU</code>\u6269\u5C55\u3002</li><li><code>-r, --regexp-extended</code>: \u5728\u811A\u672C\u4E2D\u4F7F\u7528\u6269\u5C55\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u3002</li><li><code>-s, --separate</code>: \u5C06\u6587\u4EF6\u89C6\u4E3A\u5355\u72EC\u7684\u6587\u4EF6\uFF0C\u800C\u4E0D\u662F\u5355\u4E2A\u8FDE\u7EED\u7684\u957F\u6587\u4EF6\u6D41\u3002</li><li><code>-u, --unbuffered</code>: \u4ECE\u8F93\u5165\u6587\u4EF6\u4E2D\u52A0\u8F7D\u5C11\u91CF\u6570\u636E\uFF0C\u5E76\u66F4\u9891\u7E41\u5730\u5237\u65B0\u8F93\u51FA\u7F13\u51B2\u533A\u3002</li><li><code>--help</code>: \u8F93\u51FA\u5E2E\u52A9\u4FE1\u606F\u3002</li><li><code>--version</code>: \u8F93\u51FA\u7248\u672C\u4FE1\u606F\u3002</li></ul><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><p><code>file.txt</code>\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>unix is great os. unix is opensource. unix is free os.
learn operating system.
unix linux which one you choose.
unix is easy to learn.unix is a multiuser os.Learn unix .unix is a powerful.
</code></pre></div><p>\u5C06\u6587\u4EF6\u4E2D\u7684\u6BCF\u884C\u7684\u7B2C\u4E00\u4E2A\u5355\u8BCD<code>unix</code>\u66FF\u6362\u4E3A<code>linux</code>\uFF0C\u8981\u4FDD\u5B58\u7684\u8BDD\u9700\u8981\u4F7F\u7528\u8F93\u51FA\u91CD\u5B9A\u5411\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&quot;s/unix/linux/&quot;</span> file.txt

<span class="token comment"># linux is great os. unix is opensource. unix is free os.</span>
<span class="token comment"># learn operating system.</span>
<span class="token comment"># linux linux which one you choose.</span>
<span class="token comment"># linux is easy to learn.unix is a multiuser os.Learn unix .unix is a powerful.</span>

</code></pre></div><p>\u66FF\u6362\u884C\u4E2D\u6A21\u5F0F\u7684\u7B2C<code>2</code>\u4E2A\u5339\u914D\u9879\uFF0C\u5C06\u884C\u4E2D\u51FA\u73B0\u7684\u7B2C\u4E8C\u4E2A\u5355\u8BCD<code>unix</code>\u66FF\u6362\u4E3A<code>linux</code>\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&quot;s/unix/linux/2&quot;</span> file.txt

<span class="token comment"># unix is great os. linux is opensource. unix is free os.</span>
<span class="token comment"># learn operating system.</span>
<span class="token comment"># unix linux which one you choose.</span>
<span class="token comment"># unix is easy to learn.linux is a multiuser os.Learn unix .unix is a powerful.</span>
</code></pre></div><p>\u4F7F\u7528\u66FF\u6362\u6807\u5FD7<code>/g</code>\u5168\u5C40\u66FF\u6362\u6307\u5B9A<code>sed</code>\u547D\u4EE4\u6765\u66FF\u6362\u884C\u4E2D\u6240\u6709\u51FA\u73B0\u7684\u5B57\u7B26\u4E32\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&quot;s/unix/linux/g&quot;</span> file.txt

<span class="token comment"># linux is great os. linux is opensource. linux is free os.</span>
<span class="token comment"># learn operating system.</span>
<span class="token comment"># linux linux which one you choose.</span>
<span class="token comment"># linux is easy to learn.linux is a multiuser os.Learn linux .linux is a powerful.</span>
</code></pre></div><p>\u6307\u5B9A\u7B2C<code>2</code>\u4E2A\u4E4B\u540E\u7684\u5168\u90E8\u5339\u914D\u6A21\u5F0F\u7684\u5B57\u7B26\u8FDB\u884C\u66FF\u6362\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&quot;s/unix/linux/2g&quot;</span> file.txt

<span class="token comment"># unix is great os. linux is opensource. linux is free os.</span>
<span class="token comment"># learn operating system.</span>
<span class="token comment"># unix linux which one you choose.</span>
<span class="token comment"># unix is easy to learn.linux is a multiuser os.Learn linux .linux is a powerful</span>
</code></pre></div><p>\u7528\u62EC\u53F7\u62EC\u4F4F\u6BCF\u4E2A\u5355\u8BCD\u7684\u7B2C\u4E00\u4E2A\u5B57\u7B26\uFF0C\u5728\u62EC\u53F7\u4E2D\u6253\u5370\u6BCF\u4E2A\u5355\u8BCD\u7684\u7B2C\u4E00\u4E2A\u5B57\u7B26\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>echo &quot;Welcome To The World&quot; | sed &quot;s/\\(\\b[A-Z]\\)/\\(\\1\\)/g&quot;

# (W)elcome (T)o (T)he (W)orld
</code></pre></div><p>\u53EF\u4EE5\u9650\u5236<code>sed</code>\u547D\u4EE4\u66FF\u6362\u7279\u5B9A\u884C\u53F7\u4E0A\u7684\u5B57\u7B26\u4E32\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>sed &quot;3 s/unix/linux/g&quot; file.txt

# unix is great os. unix is opensource. unix is free os.
# learn operating system.
# linux linux which one you choose.
# unix is easy to learn.unix is a multiuser os.Learn unix .unix is a powerful.
</code></pre></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2><div class="language-text ext-text"><pre class="language-text"><code>https://www.computerhope.com/unix/used.htm
https://www.runoob.com/linux/linux-comm-sed.html
https://www.geeksforgeeks.org/sed-command-in-linux-unix-with-examples/
</code></pre></div>`,23),t=[i];function c(l,u){return n(),s("div",null,t)}var r=e(o,[["render",c],["__file","sed\u547D\u4EE4.html.vue"]]);export{r as default};

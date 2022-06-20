import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as s,a}from"./app.29f60bb5.js";const t={},o=a(`<h1 id="fmt\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#fmt\u547D\u4EE4" aria-hidden="true">#</a> fmt\u547D\u4EE4</h1><p><code>fmt</code>\u547D\u4EE4\u7528\u4E8E\u7F16\u6392\u6587\u672C\u6587\u4EF6\uFF0C\u5176\u4F1A\u4ECE\u6307\u5B9A\u7684\u6587\u4EF6\u91CC\u8BFB\u53D6\u5185\u5BB9\uFF0C\u5C06\u5176\u4F9D\u7167\u6307\u5B9A\u683C\u5F0F\u91CD\u65B0\u7F16\u6392\u540E\uFF0C\u8F93\u51FA\u5230\u6807\u51C6\u8F93\u51FA\u8BBE\u5907\uFF0C\u82E5\u6307\u5B9A\u7684\u6587\u4EF6\u540D\u4E3A<code>-</code>\uFF0C\u5219<code>fmt</code>\u6307\u4EE4\u4F1A\u4ECE\u6807\u51C6\u8F93\u5165\u8BBE\u5907\u8BFB\u53D6\u6570\u636E\u3002</p><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><div class="language-text ext-text"><pre class="language-text"><code>fmt [-WIDTH] [OPTION]... [FILE]...
</code></pre></div><h2 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h2><ul><li><code>-c, --crown-margin</code>: \u4FDD\u7559\u524D\u4E24\u884C\u7684\u7F29\u8FDB\u3002</li><li><code>-p, --prefix=STRING</code>: \u4EC5\u91CD\u65B0\u683C\u5F0F\u5316\u4EE5<code>STRING</code>\u5F00\u5934\u7684\u884C\uFF0C\u5E76\u5C06\u524D\u7F00\u91CD\u65B0\u9644\u52A0\u5230\u683C\u5F0F\u5316\u540E\u7684\u884C\u4E0A\u3002</li><li><code>-s, --split-only</code>: \u62C6\u5206\u957F\u884C\uFF0C\u4F46\u4E0D\u518D\u91CD\u65B0\u586B\u5145\u5B83\u4EEC\u3002</li><li><code>-t, --tagged-paragraph</code>: \u7B2C\u4E00\u884C\u7684\u7F29\u8FDB\u4E0D\u540C\u4E8E\u7B2C\u4E8C\u884C\u3002</li><li><code>-u, --uniform-spacing</code>: \u5355\u8BCD\u4E4B\u95F4\u4F7F\u7528\u4E00\u4E2A\u7A7A\u683C\uFF0C\u53E5\u5B50\u540E\u9762\u4F7F\u7528\u4E24\u4E2A\u7A7A\u683C\u3002</li><li><code>-w, --width=WIDTH</code>: \u6700\u5927\u884C\u5BBD(\u9ED8\u8BA4\u4E3A<code>75</code>\u5217)\u3002</li><li><code>-g, --goal=WIDTH</code>: \u76EE\u6807\u5BBD\u5EA6(\u9ED8\u8BA4\u4E3A\u5BBD\u5EA6\u7684<code>93\uFF05</code>)\u3002</li><li><code>--help</code>: \u8F93\u51FA\u5E2E\u52A9\u4FE1\u606F\u3002</li><li><code>--version</code>: \u8F93\u51FA\u7248\u672C\u4FE1\u606F\u3002</li></ul><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C<code>fmt</code>\u4E0D\u4F7F\u7528\u4EFB\u4F55\u9009\u9879\uFF0C\u5C06\u7ED9\u5B9A\u6587\u4EF6\u4E2D\u5B58\u5728\u7684\u6240\u6709\u5355\u8BCD\u683C\u5F0F\u5316\u4E3A\u4E00\u884C\uFF0C\u5F53\u7136\u9ED8\u8BA4\u5355\u884C\u6700\u5927\u5BBD\u5EA6<code>75</code>\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">cat</span> file.txt
<span class="token comment"># Hello</span>
<span class="token comment"># everyone.</span>
<span class="token comment"># Have</span>
<span class="token comment"># a</span>
<span class="token comment"># nice </span>
<span class="token comment"># day.</span>

<span class="token function">fmt</span> file.txt
<span class="token comment"># Hello everyone.  Have a nice day.</span>
</code></pre></div><p>\u683C\u5F0F\u5316\u6587\u4EF6\uFF0C\u5E76\u4F7F\u7528<code>-w</code>\u9009\u9879\u6307\u5B9A\u6587\u4EF6\u884C\u6700\u5927\u5BBD\u5EA6\uFF0C\u6DFB\u52A0\u5355\u8BCD\u8D85\u51FA\u957F\u5EA6\u5219\u5C06\u5355\u8BCD\u6362\u884C\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">cat</span> file.txt
<span class="token comment"># Hello</span>
<span class="token comment"># everyone.</span>
<span class="token comment"># Have</span>
<span class="token comment"># a</span>
<span class="token comment"># nice </span>
<span class="token comment"># day.</span>

<span class="token function">fmt</span> -w <span class="token number">10</span> file.txt
<span class="token comment"># Hello</span>
<span class="token comment"># everyone.</span>
<span class="token comment"># Have a</span>
<span class="token comment"># nice day.</span>
</code></pre></div><p><code>-s</code>\u9009\u9879\u5206\u5272\u4E86\u5F88\u957F\u7684\u884C\uFF0C\u4F46\u662F\u4E0D\u91CD\u65B0\u586B\u5145\u5B83\u4EEC\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>cat file.txt
# Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It is not rude, it is not self-seeking, it is not easily angered,  it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres. Love never fails.

fmt -s file.txt
# Love is patient, love is kind. It does not envy, it does not boast, it
# is not proud. It is not rude, it is not self-seeking, it is not easily
# angered,  it keeps no record of wrongs. Love does not delight in evil
# but rejoices with the truth. It always protects, always trusts, always
# hopes, always perseveres. Love never fails.

</code></pre></div>`,13),c=[o];function i(l,d){return n(),s("div",null,c)}var m=e(t,[["render",i],["__file","fmt\u547D\u4EE4.html.vue"]]);export{m as default};

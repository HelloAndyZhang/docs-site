import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as c,c as t,a as o}from"./app.29f60bb5.js";const d={},i=o(`<h1 id="patch\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#patch\u547D\u4EE4" aria-hidden="true">#</a> patch\u547D\u4EE4</h1><p><code>patch</code>\u6307\u4EE4\u8BA9\u7528\u6237\u5229\u7528\u8BBE\u7F6E\u4FEE\u8865\u6587\u4EF6\u7684\u65B9\u5F0F\u3001\u4FEE\u6539\u3001\u66F4\u65B0\u539F\u59CB\u6587\u4EF6\uFF0C\u5018\u82E5\u4E00\u6B21\u4EC5\u4FEE\u6539\u4E00\u4E2A\u6587\u4EF6\uFF0C\u53EF\u76F4\u63A5\u5728\u6307\u4EE4\u5217\u4E2D\u4E0B\u8FBE\u6307\u4EE4\u4F9D\u5E8F\u6267\u884C\uFF0C\u5982\u679C\u914D\u5408\u4FEE\u8865\u6587\u4EF6\u7684\u65B9\u5F0F\u5219\u80FD\u4E00\u6B21\u4FEE\u8865\u5927\u6279\u6587\u4EF6\uFF0C\u8FD9\u4E5F\u662F<code>Linux</code>\u7CFB\u7EDF\u6838\u5FC3\u7684\u5347\u7EA7\u65B9\u6CD5\u4E4B\u4E00\u3002</p><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><div class="language-bash ext-sh"><pre class="language-bash"><code>patch <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. <span class="token punctuation">[</span>ORIGFILE <span class="token punctuation">[</span>PATCHFILE<span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre></div><h2 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h2><ul><li><code>-b, --backup</code>: \u5907\u4EFD\u6BCF\u4E00\u4E2A\u539F\u59CB\u6587\u4EF6\u3002</li><li><code>-B&lt;pref&gt;, --prefix=&lt;pref&gt;</code>: \u8BBE\u7F6E\u6587\u4EF6\u5907\u4EFD\u65F6\uFF0C\u9644\u52A0\u5728\u6587\u4EF6\u540D\u79F0\u524D\u9762\u7684\u5B57\u9996\u5B57\u7B26\u4E32\uFF0C\u8BE5\u5B57\u7B26\u4E32\u53EF\u4EE5\u662F\u8DEF\u5F84\u540D\u79F0\u3002</li><li><code>-c, --context</code>: \u628A\u4FEE\u8865\u6570\u636E\u89E3\u8BD1\u6210\u5173\u8054\u6027\u7684\u5DEE\u5F02\u3002</li><li><code>-d&lt;dir&gt;, --directory=&lt;dir&gt;</code>: \u8BBE\u7F6E\u5DE5\u4F5C\u76EE\u5F55\u3002</li><li><code>-D&lt;define&gt;, --ifdef=&lt;define&gt;</code>: \u7528\u6307\u5B9A\u7684\u7B26\u53F7\u628A\u6539\u53D8\u7684\u5730\u65B9\u6807\u793A\u51FA\u6765\u3002</li><li><code>-e, --ed</code>: \u628A\u4FEE\u8865\u6570\u636E\u89E3\u8BD1\u6210ed\u6307\u4EE4\u53EF\u7528\u7684\u53D9\u8FF0\u6587\u4EF6\u3002</li><li><code>-E, --remove-empty-files</code>: \u82E5\u4FEE\u8865\u8FC7\u540E\u8F93\u51FA\u7684\u6587\u4EF6\u5176\u5185\u5BB9\u662F\u4E00\u7247\u7A7A\u767D\uFF0C\u5219\u79FB\u9664\u8BE5\u6587\u4EF6\u3002</li><li><code>-f, --force</code>: \u6B64\u53C2\u6570\u7684\u6548\u679C\u548C\u6307\u5B9A<code>-t</code>\u53C2\u6570\u7C7B\u4F3C\uFF0C\u4F46\u4F1A\u5047\u8BBE\u4FEE\u8865\u6570\u636E\u7684\u7248\u672C\u4E3A\u65B0\u7248\u672C\u3002</li><li><code>-F&lt;num &gt;, --fuzz&lt;num &gt;</code>: \u8BBE\u7F6E\u76D1\u522B\u5217\u6570\u7684\u6700\u5927\u503C\u3002</li><li><code>-g&lt;num&gt;, --get=&lt;num&gt;</code>: \u8BBE\u7F6E\u4EE5<code>RSC</code>\u6216<code>SCCS</code>\u63A7\u5236\u4FEE\u8865\u4F5C\u4E1A\u3002</li><li><code>-i&lt;patchfile&gt;, --input=&lt;patchfile&gt;</code>: \u8BFB\u53D6\u6307\u5B9A\u7684\u4FEE\u8865\u6587\u4EF6\u3002</li><li><code>-l, --ignore-whitespace</code>: \u5FFD\u7565\u4FEE\u8865\u6570\u636E\u4E0E\u8F93\u5165\u6570\u636E\u7684\u8DF3\u683C\uFF0C\u7A7A\u683C\u5B57\u7B26\u3002</li><li><code>-n, --normal</code>: \u628A\u4FEE\u8865\u6570\u636E\u89E3\u8BD1\u6210\u4E00\u822C\u6027\u7684\u5DEE\u5F02\u3002</li><li><code>-N, --forward</code>: \u5FFD\u7565\u4FEE\u8865\u7684\u6570\u636E\u8F83\u539F\u59CB\u6587\u4EF6\u7684\u7248\u672C\u66F4\u65E7\uFF0C\u6216\u8BE5\u7248\u672C\u7684\u4FEE\u8865\u6570\u636E\u5DF2\u4F7F\u3000\u7528\u8FC7\u3002</li><li><code>-o&lt;outfile&gt;, --output=&lt;outfile&gt;</code>: \u8BBE\u7F6E\u8F93\u51FA\u6587\u4EF6\u7684\u540D\u79F0\uFF0C\u4FEE\u8865\u8FC7\u7684\u6587\u4EF6\u4F1A\u4EE5\u8BE5\u540D\u79F0\u5B58\u653E\u3002</li><li><code>-p&lt;num&gt;, --strip=&lt;num&gt;</code>: \u8BBE\u7F6E\u6B32\u5265\u79BB\u51E0\u5C42\u8DEF\u5F84\u540D\u79F0\u3002</li><li><code>-f&lt;rejectfile&gt;, --reject-file=&lt;rejectfile&gt;</code>: \u8BBE\u7F6E\u4FDD\u5B58\u62D2\u7EDD\u4FEE\u8865\u76F8\u5173\u4FE1\u606F\u7684\u6587\u4EF6\u540D\u79F0\uFF0C\u9884\u8BBE\u7684\u6587\u4EF6\u540D\u79F0\u4E3A<code>.rej</code>\u3002</li><li><code>-R, --reverse</code>: \u5047\u8BBE\u4FEE\u8865\u6570\u636E\u662F\u7531\u65B0\u65E7\u6587\u4EF6\u4EA4\u6362\u4F4D\u7F6E\u800C\u4EA7\u751F\u3002</li><li><code>-s, --quiet\u6216--silent</code>: \u4E0D\u663E\u793A\u6307\u4EE4\u6267\u884C\u8FC7\u7A0B\uFF0C\u9664\u975E\u53D1\u751F\u9519\u8BEF\u3002</li><li><code>-t, --batch</code>: \u81EA\u52A8\u7565\u8FC7\u9519\u8BEF\uFF0C\u4E0D\u8BE2\u95EE\u4EFB\u4F55\u95EE\u9898\u3002</li><li><code>-T, --set-time</code>: \u6B64\u53C2\u6570\u7684\u6548\u679C\u548C\u6307\u5B9A<code>-Z</code>\u53C2\u6570\u7C7B\u4F3C\uFF0C\u4F46\u4EE5\u672C\u5730\u65F6\u95F4\u4E3A\u4E3B\u3002</li><li><code>-u, --unified</code>: \u628A\u4FEE\u8865\u6570\u636E\u89E3\u8BD1\u6210\u4E00\u81F4\u5316\u7684\u5DEE\u5F02\u3002</li><li><code>-v, --version</code>: \u663E\u793A\u7248\u672C\u4FE1\u606F\u3002</li><li><code>-V&lt;method&gt;, --version-control=&lt;method&gt;</code>: \u7528<code>-b</code>\u53C2\u6570\u5907\u4EFD\u76EE\u6807\u6587\u4EF6\u540E\uFF0C\u5907\u4EFD\u6587\u4EF6\u7684\u5B57\u5C3E\u4F1A\u88AB\u52A0\u4E0A\u4E00\u4E2A\u5907\u4EFD\u5B57\u7B26\u4E32\uFF0C\u8FD9\u4E2A\u5B57\u7B26\u4E32\u4E0D\u4EC5\u53EF\u7528<code>-z</code>\u53C2\u6570\u53D8\u66F4\uFF0C\u5F53\u4F7F\u7528<code>-V</code>\u53C2\u6570\u6307\u5B9A\u4E0D\u540C\u5907\u4EFD\u65B9\u5F0F\u65F6\uFF0C\u4E5F\u4F1A\u4EA7\u751F\u4E0D\u540C\u5B57\u5C3E\u7684\u5907\u4EFD\u5B57\u7B26\u4E32\u3002</li><li><code>-Y&lt;pref&gt;, --basename-prefix=--&lt;pref&gt;</code>: \u8BBE\u7F6E\u6587\u4EF6\u5907\u4EFD\u65F6\uFF0C\u9644\u52A0\u5728\u6587\u4EF6\u57FA\u672C\u540D\u79F0\u5F00\u5934\u7684\u5B57\u9996\u5B57\u7B26\u4E32\u3002</li><li><code>-z&lt;suffix&gt;, --suffix=&lt;suffix&gt;</code>: \u6B64\u53C2\u6570\u7684\u6548\u679C\u548C\u6307\u5B9A<code>-B</code>\u53C2\u6570\u7C7B\u4F3C\uFF0C\u5DEE\u522B\u5728\u4E8E\u4FEE\u8865\u4F5C\u4E1A\u4F7F\u7528\u7684\u8DEF\u5F84\u4E0E\u6587\u4EF6\u540D\u82E5\u4E3A<code>src/linux/fs/super.c</code>\uFF0C\u52A0\u4E0A<code>backup/</code>\u5B57\u7B26\u4E32\u540E\uFF0C\u6587\u4EF6<code>super.c</code>\u4F1A\u5907\u4EFD\u4E8E<code>/src/linux/fs/backup</code>\u76EE\u5F55\u91CC\u3002</li><li><code>-Z, --set-utc</code>: \u628A\u4FEE\u8865\u8FC7\u7684\u6587\u4EF6\u66F4\u6539\uFF0C\u5B58\u53D6\u65F6\u95F4\u8BBE\u4E3A<code>UTC</code>\u3002</li><li><code>--backup-if-mismatch</code>: \u5728\u4FEE\u8865\u6570\u636E\u4E0D\u5B8C\u5168\u543B\u5408\uFF0C\u4E14\u6CA1\u6709\u523B\u610F\u6307\u5B9A\u8981\u5907\u4EFD\u6587\u4EF6\u65F6\uFF0C\u624D\u5907\u4EFD\u6587\u4EF6\u3002</li><li><code>--binary</code>: \u4EE5\u4E8C\u8FDB\u5236\u6A21\u5F0F\u8BFB\u5199\u6570\u636E\uFF0C\u800C\u4E0D\u901A\u8FC7\u6807\u51C6\u8F93\u51FA\u8BBE\u5907\u3002</li><li><code>--help</code>: \u5728\u7EBF\u5E2E\u52A9\u3002</li><li><code>--nobackup-if-mismatch</code>: \u5728\u4FEE\u8865\u6570\u636E\u4E0D\u5B8C\u5168\u543B\u5408\uFF0C\u4E14\u6CA1\u6709\u523B\u610F\u6307\u5B9A\u8981\u5907\u4EFD\u6587\u4EF6\u65F6\uFF0C\u4E0D\u8981\u5907\u4EFD\u6587\u4EF6\u3002</li><li><code>--verbose</code>: \u8BE6\u7EC6\u663E\u793A\u6307\u4EE4\u7684\u6267\u884C\u8FC7\u7A0B\u3002</li></ul><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><p>\u4F7F\u7528\u8865\u4E01\u5305<code>/tmp/file.patch</code>\u4E3A\u6587\u4EF6<code>/tmp/file2.txt</code>\u5347\u7EA7\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># diff /tmp/file2.txt /tmp/file3.txt &gt; /tmp/file.patch # \u751F\u6210\u8865\u4E01\u6587\u4EF6</span>
patch /tmp/file2.txt /tmp/file.patch
</code></pre></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2><div class="language-text ext-text"><pre class="language-text"><code>https://man.linuxde.net/patch
https://www.runoob.com/linux/linux-comm-patch.html
https://www.tutorialspoint.com/unix_commands/patch.htm
</code></pre></div>`,11),l=[i];function a(n,s){return c(),t("div",null,l)}var h=e(d,[["render",a],["__file","patch\u547D\u4EE4.html.vue"]]);export{h as default};

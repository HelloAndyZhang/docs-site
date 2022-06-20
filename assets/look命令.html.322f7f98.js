import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as t,a as o}from"./app.29f60bb5.js";const d={},i=o(`<h1 id="look\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#look\u547D\u4EE4" aria-hidden="true">#</a> look\u547D\u4EE4</h1><p><code>look</code>\u547D\u4EE4\u7528\u4E8E\u67E5\u8BE2\u5355\u8BCD\uFF0C\u4EC5\u9700\u6307\u5B9A\u6B32\u67E5\u8BE2\u7684\u5B57\u9996\u5B57\u7B26\u4E32\uFF0C\u5B83\u4F1A\u663E\u793A\u6240\u6709\u5F00\u5934\u5B57\u7B26\u4E32\u7B26\u5408\u8BE5\u6761\u4EF6\u7684\u5355\u8BCD\u3002</p><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><div class="language-text ext-text"><pre class="language-text"><code>look [-bdf] [-t char] string [file ...]
</code></pre></div><h2 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h2><ul><li><code>-a, --alternative</code>: \u4F7F\u7528\u5907\u7528\u5B57\u5178\u6587\u4EF6\u3002</li><li><code>-d, --alphanum</code>: \u4F7F\u7528\u666E\u901A\u5B57\u5178\u5B57\u7B26\u96C6\u548C\u987A\u5E8F\uFF0C\u5373\u53EA\u6BD4\u8F83\u7A7A\u683C\u548C\u5B57\u6BCD\u6570\u5B57\u5B57\u7B26\u3002\u5982\u679C\u672A\u6307\u5B9A\u6587\u4EF6\uFF0C\u5219\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u6B64\u9009\u9879\u5904\u4E8E\u542F\u7528\u72B6\u6001\u3002</li><li><code>-f, --ignore-case</code>: \u5FFD\u7565\u5B57\u6BCD\u5B57\u7B26\u7684\u5927\u5C0F\u5199\uFF0C\u5982\u679C\u672A\u6307\u5B9A\u6587\u4EF6\uFF0C\u5219\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u6B64\u9009\u9879\u5904\u4E8E\u542F\u7528\u72B6\u6001\u3002</li><li><code>-t, --terminate character</code>: \u6307\u5B9A\u4E00\u4E2A\u5B57\u7B26\u4E32\u7EC8\u6B62\u5B57\u7B26\uFF0C\u5373\u4EC5\u6BD4\u8F83\u5B57\u7B26\u4E32\u4E2D\u76F4\u5230\u7B2C\u4E00\u4E2A\u51FA\u73B0\u7684\u5B57\u7B26\uFF0C\u5305\u62EC\u7B2C\u4E00\u4E2A\u51FA\u73B0\u7684\u5B57\u7B26\u3002</li><li><code>-V, --version</code>: \u8F93\u51FA\u7248\u672C\u4FE1\u606F\u3002</li><li><code>-h, --help</code>: \u8F93\u51FA\u5E2E\u52A9\u4FE1\u606F\u3002</li></ul><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><p>\u4F7F\u7528<code>look</code>\u67E5\u627E\u4EE5<code>ab</code>\u5F00\u5934\u7684\u5355\u8BCD\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>look ab
# Abbas
# Abbas&#39;s
# Abbasid
# Abbasid&#39;s
# Abbott
# Abbott&#39;s
# Abby
# ...
</code></pre></div><p>\u5728\u6587\u4EF6\u4E2D\u67E5\u627E\u4EE5<code>L</code>\u5F00\u5934\u7684\u5355\u8BCD\u5E76\u5217\u51FA\u5168\u53E5\u3002</p><div class="language-text ext-text"><pre class="language-text"><code># file.txt
HELLO LINUX!  
Linux is a free unix-type opterating system.  
This is a linux testfile!  
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>look L file.txt
Linux is a free unix-type opterating system.
</code></pre></div><p>\u5728\u4E0A\u8FF0\u793A\u4F8B\u4E2D\u4F7F\u7528<code>-t</code>\u6307\u5B9A\u5B57\u7B26\u4E32\u7EC8\u6B62\u5B57\u7B26\uFF0C\u5373\u4EC5\u6BD4\u8F83\u5B57\u7B26\u4E32\u4E2D\u7B2C\u4E00\u6B21\u51FA\u73B0\u4E4B\u524D(\u5305\u62EC\u7B2C\u4E00\u6B21\u51FA\u73B0)\u7684\u5B57\u7B26\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>look -t E HEO file.txt
# HELLO LINUX!
</code></pre></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2><div class="language-text ext-text"><pre class="language-text"><code>https://www.runoob.com/linux/linux-comm-look.html
https://www.tutorialspoint.com/unix_commands/look.htm
https://www.geeksforgeeks.org/look-command-in-linux-with-examples/
</code></pre></div>`,16),n=[i];function c(l,s){return a(),t("div",null,n)}var x=e(d,[["render",c],["__file","look\u547D\u4EE4.html.vue"]]);export{x as default};

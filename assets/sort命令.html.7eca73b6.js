import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as s,a}from"./app.29f60bb5.js";const o={},c=a(`<h1 id="sort\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#sort\u547D\u4EE4" aria-hidden="true">#</a> sort\u547D\u4EE4</h1><p><code>sort</code>\u547D\u4EE4\u7528\u4E8E\u5C06\u6587\u672C\u6587\u4EF6\u5185\u5BB9\u52A0\u4EE5\u6392\u5E8F\uFF0C\u53EF\u9488\u5BF9\u6587\u672C\u6587\u4EF6\u7684\u5185\u5BB9\uFF0C\u4EE5\u884C\u4E3A\u5355\u4F4D\u6765\u6392\u5E8F\u3002</p><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sort</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. <span class="token punctuation">[</span>FILE<span class="token punctuation">]</span><span class="token punctuation">..</span>.
<span class="token function">sort</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. --files0-from<span class="token operator">=</span>F
</code></pre></div><h2 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h2><ul><li><code>-b, --ignore-leading-blanks</code>: \u5FFD\u7565\u524D\u5BFC\u7A7A\u683C\u3002</li><li><code>-d, --dictionary-order</code>: \u53EA\u8003\u8651\u7A7A\u683C\u548C\u5B57\u6BCD\u6570\u5B57\u5B57\u7B26\u3002</li><li><code>-f, --ignore-case</code>: \u5C06\u5C0F\u5199\u5B57\u7B26\u8F6C\u4E3A\u5927\u5199\u5B57\u7B26\u3002</li><li><code>-g, --general-numeric-sort</code>: \u6309\u4E00\u822C\u6570\u503C\u8FDB\u884C\u6BD4\u8F83\u3002</li><li><code>-i, --ignore-nonprinting</code>: \u53EA\u8003\u8651\u53EF\u6253\u5370\u5B57\u7B26\u3002</li><li><code>-M, --month-sort</code>: \u6BD4\u8F83<code>JAN &lt; ... &lt; DEC</code>\u3002</li><li><code>-h, --human-numeric-sort</code>: \u6BD4\u8F83\u4EBA\u7C7B\u53EF\u8BFB\u7684\u6570\u5B57\uFF0C\u4F8B\u5982<code>2K</code>\u3001<code>1G</code>\u3002</li><li><code>-n, --numeric-sort</code>: \u6839\u636E\u5B57\u7B26\u4E32\u6570\u503C\u8FDB\u884C\u6BD4\u8F83\u3002</li><li><code>-R, --random-sort</code>: \u6309\u952E\u7684\u968F\u673A\u54C8\u5E0C\u6392\u5E8F\u3002</li><li><code>--random-source=FILE</code>: \u4ECE<code>FILE</code>\u4E2D\u83B7\u53D6\u968F\u673A\u5B57\u8282\u3002</li><li><code>-r, --reverse</code>: \u53CD\u8F6C\u6BD4\u8F83\u7ED3\u679C\u3002</li><li><code>--sort=WORD</code>: \u6839\u636E<code>WORD</code>\u6392\u5E8F\uFF1A\u4E00\u822C\u6570\u5B57<code>-g</code>\uFF0Cchan\u6570\u5B57<code>-h</code>\uFF0C\u6708\u4EFD<code>-M</code>\uFF0C\u6570\u5B57<code>-n</code>\uFF0C\u968F\u673A-<code>R</code>\uFF0C\u7248\u672C<code>-V</code>\u3002</li><li><code>--batch-size=NMERGE</code>: \u4E00\u6B21\u6700\u591A\u5408\u5E76<code>NMERGE</code>\u8F93\u5165\uFF0C\u5BF9\u4E8E\u66F4\u591A\u8F93\u5165\uFF0C\u8BF7\u4F7F\u7528\u4E34\u65F6\u6587\u4EF6\u3002</li><li><code>-c, --check, --check=diagnose-first</code>: \u68C0\u67E5\u5DF2\u6392\u5E8F\u7684\u8F93\u5165\uFF0C\u4E0D\u6392\u5E8F\u3002</li><li><code>-C, --check=quiet, --check=silent</code>: \u7C7B\u4F3C\u4E8E<code>-c</code>\u4F46\u4E0D\u62A5\u544A\u7B2C\u4E00\u884C\u9519\u8BEF\u3002</li><li><code>--compress-program=PROG</code>: \u7528<code>PROG</code>\u538B\u7F29\u4E34\u65F6\u6587\u4EF6\uFF0C\u7528<code>PROG-d</code>\u89E3\u538B\u4E34\u65F6\u6587\u4EF6\u3002</li><li><code>--debug</code>: \u6CE8\u91CA\u884C\u4E2D\u7528\u4E8E\u6392\u5E8F\u7684\u90E8\u5206\uFF0C\u5E76\u5411<code>stderr</code>\u8B66\u544A\u53EF\u7591\u7528\u6CD5\u3002</li><li><code>--files0-from=F</code>: \u4ECE\u6587\u4EF6<code>F</code>\u4E2D\u4EE5<code>NUL</code>\u7ED3\u5C3E\u7684\u540D\u79F0\u6307\u5B9A\u7684\u6587\u4EF6\u8BFB\u53D6\u8F93\u5165\uFF0C\u5982\u679C<code>F</code>\u662F<code>-</code>\uFF0C\u5219\u4ECE\u6807\u51C6\u8F93\u5165\u8BFB\u53D6\u540D\u79F0\u3002</li><li><code>-k, --key=POS1[,POS2]</code>: \u5728<code>POS1</code>\u5904\u5F00\u59CB\u952E(\u539F\u70B9<code>1</code>)\uFF0C\u5728<code>POS2</code>\u5904\u7ED3\u675F\u952E(\u9ED8\u8BA4\u884C\u7ED3\u675F)\u3002</li><li><code>-m, --merge</code>: \u5408\u5E76\u5DF2\u6392\u5E8F\u7684\u6587\u4EF6\uFF0C\u4E0D\u6392\u5E8F\u3002</li><li><code>-o, --output=FILE</code>: \u5C06\u7ED3\u679C\u5199\u5165<code>FILE</code>\u800C\u4E0D\u662F\u6807\u51C6\u8F93\u51FA\u3002</li><li><code>-s, --stable</code>: \u901A\u8FC7\u7981\u7528\u6700\u540E\u7684\u6BD4\u8F83\u6765\u7A33\u5B9A\u6392\u5E8F\u3002</li><li><code>-t, --field-separator=SEP</code>: \u4F7F\u7528<code>SEP</code>\u4EE3\u66FF\u975E\u7A7A\u5230\u7A7A\u7684\u8F6C\u6362\u3002</li><li><code>-T, --temporary-directory=DIR</code>: \u5C06<code>DIR</code>\u7528\u4E8E\u4E34\u65F6\u6587\u4EF6\uFF0C\u800C\u4E0D\u662F<code>$TMPDIR</code>\u6216<code>/tmp</code>\u591A\u4E2A\u9009\u9879\u6307\u5B9A\u591A\u4E2A\u76EE\u5F55\u3002</li><li><code>--parallel=N</code>: \u5C06\u540C\u65F6\u8FD0\u884C\u7684\u6392\u5E8F\u6570\u66F4\u6539\u4E3A<code>N</code>\u3002</li><li><code>-u, --unique</code>: \u5BF9\u4E8E<code>-c</code>\u68C0\u67E5\u4E25\u683C\u7684\u987A\u5E8F\uFF0C\u53EA\u8F93\u51FA\u76F8\u7B49\u8FD0\u884C\u7684\u7B2C\u4E00\u4E2A\u3002</li><li><code>-z, --zero-terminated</code>: \u4EE5<code>0</code>\u5B57\u8282\u7ED3\u675F\u884C\uFF0C\u800C\u4E0D\u662F\u6362\u884C\u3002</li><li><code>--help</code>: \u8F93\u51FA\u5E2E\u52A9\u4FE1\u606F\u3002</li><li><code>--version</code>: \u8F93\u51FA\u7248\u672C\u4FE1\u606F\u3002</li></ul><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><p><code>file.txt</code>\u3001<code>file1.txt</code>\u3001<code>file2.txt</code>\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B\u3002</p><div class="language-text ext-text"><pre class="language-text"><code># file.txt
abhishek
chitransh
satish
rajan
naveen
divyam
harsh

# file1.txt
50
39
15
89
200

# file2.txt
abc
apple
BALL
Abc
bat
bat
</code></pre></div><p>\u5BF9<code>file.txt</code>\u6587\u4EF6\u5185\u5BB9\u8FDB\u884C\u6392\u5E8F\uFF0C\u8981\u4FDD\u5B58\u7684\u8BDD\u9700\u8981\u4F7F\u7528\u8F93\u51FA\u91CD\u5B9A\u5411\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sort</span> file.txt
<span class="token comment"># abhishek</span>
<span class="token comment"># chitransh</span>
<span class="token comment"># divyam</span>
<span class="token comment"># harsh</span>
<span class="token comment"># naveen</span>
<span class="token comment"># rajan</span>
<span class="token comment"># satish</span>

<span class="token function">sort</span> file2.txt
<span class="token comment"># abc</span>
<span class="token comment"># Abc</span>
<span class="token comment"># apple</span>
<span class="token comment"># BALL</span>
<span class="token comment"># bat</span>
<span class="token comment"># bat</span>
</code></pre></div><p>\u53EF\u4EE5\u4F7F\u7528<code>-r</code>\u6807\u5FD7\u6267\u884C\u9006\u5E8F\u6392\u5E8F\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sort</span> -r file.txt
<span class="token comment"># satish</span>
<span class="token comment"># rajan</span>
<span class="token comment"># naveen</span>
<span class="token comment"># harsh</span>
<span class="token comment"># divyam</span>
<span class="token comment"># chitransh</span>
<span class="token comment"># abhishek</span>
</code></pre></div><p>\u4F7F\u7528<code>-n</code>\u5BF9\u6570\u5B57\u8FDB\u884C\u6392\u5E8F\uFF0C\u4E0D\u4F7F\u7528<code>-n</code>\u7684\u8BDD\u5219\u4F1A\u4F7F\u7528\u5B57\u5178\u5E8F\u6392\u5E8F\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sort</span> -n file1.txt
<span class="token comment"># 15</span>
<span class="token comment"># 39</span>
<span class="token comment"># 50</span>
<span class="token comment"># 89</span>
<span class="token comment"># 200</span>

<span class="token function">sort</span> file1.txt
<span class="token comment"># 15</span>
<span class="token comment"># 200</span>
<span class="token comment"># 39</span>
<span class="token comment"># 50</span>
<span class="token comment"># 89</span>
</code></pre></div><p>\u8981\u5BF9\u5E26\u6709\u53CD\u5411\u6570\u5B57\u6570\u636E\u7684\u6587\u4EF6\u8FDB\u884C\u6392\u5E8F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762<code>-nr</code>\u4E24\u4E2A\u9009\u9879\u7684\u7EC4\u5408\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sort</span> -nr file1.txt
<span class="token comment"># 200</span>
<span class="token comment"># 89</span>
<span class="token comment"># 50</span>
<span class="token comment"># 39</span>
<span class="token comment"># 15</span>
</code></pre></div><p>\u4F7F\u7528<code>-u</code>\u6392\u5E8F\u5E76\u5220\u9664\u91CD\u590D\u9879\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sort</span> -u file2.txt
<span class="token comment"># abc</span>
<span class="token comment"># Abc</span>
<span class="token comment"># apple</span>
<span class="token comment"># BALL</span>
<span class="token comment"># bat</span>
</code></pre></div><p>\u4F7F\u7528<code>-c</code>\u68C0\u67E5\u6587\u4EF6\u662F\u5426\u5DF2\u7ECF\u6309\u7167\u987A\u5E8F\u6392\u5E8F\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sort</span> -c file2.txt
<span class="token comment"># sort: file2.txt:4: disorder: Abc</span>
</code></pre></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2><div class="language-text ext-text"><pre class="language-text"><code>https://www.computerhope.com/unix/usort.htm
https://www.runoob.com/linux/linux-comm-sort.html
https://www.geeksforgeeks.org/sort-command-linuxunix-examples/
</code></pre></div>`,23),t=[c];function d(l,p){return n(),s("div",null,t)}var m=e(o,[["render",d],["__file","sort\u547D\u4EE4.html.vue"]]);export{m as default};

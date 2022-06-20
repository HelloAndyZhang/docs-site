import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as a,a as c}from"./app.29f60bb5.js";const o={},s=c(`<h1 id="join\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#join\u547D\u4EE4" aria-hidden="true">#</a> join\u547D\u4EE4</h1><p><code>join</code>\u547D\u4EE4\u7528\u4E8E\u5C06\u4E24\u4E2A\u6587\u4EF6\u4E2D\uFF0C\u6307\u5B9A\u680F\u4F4D\u5185\u5BB9\u76F8\u540C\u7684\u884C\u8FDE\u63A5\u8D77\u6765\u3002\u5176\u9996\u5148\u627E\u51FA\u4E24\u4E2A\u6587\u4EF6\u4E2D\u6307\u5B9A\u680F\u4F4D\u5185\u5BB9\u76F8\u540C\u7684\u884C\uFF0C\u5E76\u52A0\u4EE5\u5408\u5E76\uFF0C\u518D\u8F93\u51FA\u5230\u6807\u51C6\u8F93\u51FA\u8BBE\u5907\u3002</p><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">join</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. FILE1 FILE2
</code></pre></div><h2 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h2><ul><li><code>-a FILENUM</code>: \u4ECE<code>FILENUM</code>\u6253\u5370\u4E0D\u6210\u5BF9\u7684\u884C\uFF0C\u5176\u4E2D<code>FILENUM</code>\u662F<code>1</code>\u6216<code>2</code>\uFF0C\u5BF9\u5E94\u4E8E<code>FILE1</code>\u6216<code>FILE2</code>\u3002</li><li><code>-e EMPTY</code>: \u5C06\u7F3A\u5C11\u7684\u8F93\u5165\u5B57\u6BB5\u66FF\u6362\u4E3A\u7A7A\u3002</li><li><code>-i, --ignore-case</code>: \u6BD4\u8F83\u5B57\u6BB5\u65F6\u5FFD\u7565\u5927\u5C0F\u5199\u7684\u5DEE\u5F02\u3002</li><li><code>-j FIELD</code>: \u76F8\u5F53\u4E8E<code>-1 FIELD -2 FIELD</code>\u3002</li><li><code>-o FORMAT</code>: \u6784\u9020\u8F93\u51FA\u7EBF\u65F6\u9075\u5B88<code>FORMAT</code>\u3002</li><li><code>-t CHAR</code>: \u4F7F\u7528<code>CHAR</code>\u4F5C\u4E3A\u8F93\u5165\u548C\u8F93\u51FA\u5B57\u6BB5\u5206\u9694\u7B26\u3002</li><li><code>-v FILENUM</code>: \u7C7B\u4F3C\u4E8E<code>-a FILENUM</code>\uFF0C\u4F46\u4E0D\u8FDE\u63A5\u8F93\u51FA\u884C\u3002</li><li><code>-1 FIELD</code>: \u52A0\u5165\u6587\u4EF6<code>1</code>\u7684\u8FD9\u4E2A<code>FIELD</code>\u3002</li><li><code>-2 FIELD</code>: \u52A0\u5165\u6587\u4EF6<code>2</code>\u7684\u8FD9\u4E2A<code>FIELD</code>\u3002</li><li><code>--check-order</code>: \u68C0\u67E5\u8F93\u5165\u662F\u5426\u6B63\u786E\u6392\u5E8F\uFF0C\u5373\u4F7F\u6240\u6709\u8F93\u5165\u884C\u90FD\u53EF\u4EE5\u914D\u5BF9\u3002</li><li><code>--nocheck-order</code>: \u4E0D\u8981\u68C0\u67E5\u8F93\u5165\u662F\u5426\u6B63\u786E\u6392\u5E8F\u3002</li><li><code>--header</code>: \u5C06\u6BCF\u4E2A\u6587\u4EF6\u7684\u7B2C\u4E00\u884C\u89C6\u4E3A\u5B57\u6BB5\u6807\u9898\uFF0C\u65E0\u9700\u5C1D\u8BD5\u5C06\u5B83\u4EEC\u914D\u5BF9\u5373\u53EF\u6253\u5370\u5B83\u4EEC\u3002</li><li><code>--help</code>: \u663E\u793A\u5E2E\u52A9\u4FE1\u606F\u3002</li><li><code>--version</code>: \u663E\u793A\u7248\u672C\u4FE1\u606F\u3002</li></ul><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><p><code>file1.txt</code>\u4E0E<code>file2.txt</code>\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code># file1.txt
1 AAYUSH
2 APAAR
3 HEMANT
4 KARTIK
5 TIM

# file2.txt
1 101
2 102
3 103
4 104
</code></pre></div><p>\u4F7F\u7528<code>join</code>\u547D\u4EE4\u5408\u5E76\u6587\u4EF6\uFF0C\u4E3A\u4E86\u5408\u5E76\u4E24\u4E2A\u6587\u4EF6\uFF0C\u6587\u4EF6\u5FC5\u987B\u5177\u6709\u4E00\u4E9B\u516C\u5171\u5B57\u6BB5\uFF0C\u6B64\u65F6\u4E24\u4E2A\u6587\u4EF6\u4E2D\u7684\u516C\u5171\u5B57\u6BB5\u5747\u5E26\u6709\u7F16\u53F7<code>1\u30012...</code>\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">join</span> file1.txt file2.txt
<span class="token comment"># 1 AAYUSH 101</span>
<span class="token comment"># 2 APAAR 102</span>
<span class="token comment"># 3 HEMANT 103</span>
<span class="token comment"># 4 KARTIK 104</span>
</code></pre></div><p>\u4F7F\u7528<code>-a</code>\u9009\u9879\u6253\u5370<code>FILE1</code>\u4E2D\u5DF2\u6210\u5BF9\u7684\u884C\u5E76\u94FE\u63A5\u4EE5\u53CA\u4E0D\u6210\u5BF9\u7684\u884C\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">join</span> file1.txt file2.txt -a <span class="token number">1</span>
<span class="token comment"># 1 AAYUSH 101</span>
<span class="token comment"># 2 APAAR 102</span>
<span class="token comment"># 3 HEMANT 103</span>
<span class="token comment"># 4 KARTIK 104</span>
<span class="token comment"># 5 TIM</span>

</code></pre></div><p>\u4F7F\u7528<code>-v</code>\u9009\u9879\u6253\u5370<code>FILE1</code>\u4E2D\u4E0D\u6210\u5BF9\u7684\u884C\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">join</span> file1.txt file2.txt -v <span class="token number">1</span>
<span class="token comment"># 5 TIM</span>
</code></pre></div><p><code>join</code>\u4F1A\u5728\u7B2C\u4E00\u4E2A\u516C\u5171\u5B57\u6BB5\u4E0A\u7EC4\u5408\u6587\u4EF6\u884C\uFF0C\u8BE5\u5B57\u6BB5\u662F\u9ED8\u8BA4\u503C\u3002\u4F46\u662F\u8FD9\u4E24\u4E2A\u6587\u4EF6\u4E2D\u7684\u516C\u5171\u503C\u4E0D\u4E00\u5B9A\u603B\u662F\u7B2C\u4E00\u4E2A\u5217\uFF0C\u6240\u4EE5<code>join</code>\u53EF\u4EE5\u4F7F\u7528<code>-1, -2</code>\u6307\u5B9A\u516C\u5171\u503C\u4F4D\u7F6E\u3002<code>-1</code>\u548C<code>-2</code>\u8868\u793A\u7B2C\u4E00\u4E2A\u548C\u7B2C\u4E8C\u4E2A\u6587\u4EF6\uFF0C\u8FD9\u4E9B\u9009\u9879\u9700\u8981\u4E00\u4E2A\u6570\u5B57\u53C2\u6570\uFF0C\u8BE5\u53C2\u6570\u5F15\u7528\u76F8\u5E94\u6587\u4EF6\u7684\u8FDE\u63A5\u5B57\u6BB5\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>\`file1.txt\`\u4E0E\`file2.txt\`\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B\uFF1A
# file1.txt
AAYUSH 1 
APAAR 2
HEMANT 3
KARTIK 4
TIM 5

# file2.txt
101 1
102 2
103 3
104 4
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">join</span> -1 <span class="token number">2</span> -2 <span class="token number">2</span> file1.txt file2.txt
<span class="token comment"># 1 AAYUSH  101</span>
<span class="token comment"># 2 APAAR 102</span>
<span class="token comment"># 3 HEMANT 103</span>
<span class="token comment"># 4 KARTIK 104</span>
</code></pre></div><p>\u5BF9\u4E8E\u4E0A\u9762\u7684\u793A\u4F8B\uFF0C\u6211\u4EEC\u76F4\u63A5\u4F7F\u7528<code>-j</code>\u53C2\u6570\u4E5F\u53EF\u4EE5\u5B9E\u73B0\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">join</span> -j <span class="token number">2</span> file1.txt file2.txt
<span class="token comment"># 1 AAYUSH  101</span>
<span class="token comment"># 2 APAAR 102</span>
<span class="token comment"># 3 HEMANT 103</span>
<span class="token comment"># 4 KARTIK 104</span>
</code></pre></div>`,20),d=[s];function t(l,i){return n(),a("div",null,d)}var h=e(o,[["render",t],["__file","join\u547D\u4EE4.html.vue"]]);export{h as default};

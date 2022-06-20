import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o,c,a as d}from"./app.29f60bb5.js";const l={},a=d(`<h1 id="journalctl\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#journalctl\u547D\u4EE4" aria-hidden="true">#</a> journalctl\u547D\u4EE4</h1><p><code>journalctl</code>\u547D\u4EE4\u662F<code>Systemd</code>\u65E5\u5FD7\u7CFB\u7EDF\u7684\u4E00\u4E2A\u547D\u4EE4\uFF0C\u4E3B\u8981\u7528\u9014\u662F\u7528\u6765\u67E5\u770B\u901A\u8FC7<code>Systemd</code>\u65E5\u5FD7\u7CFB\u7EDF\u8BB0\u5F55\u7684\u65E5\u5FD7\uFF0C\u5728<code>Systemd</code>\u51FA\u73B0\u4E4B\u524D\uFF0C<code>Linux</code>\u7CFB\u7EDF\u53CA\u5404\u5E94\u7528\u7684\u65E5\u5FD7\u90FD\u662F\u5206\u522B\u7BA1\u7406\u7684\uFF0C<code>Systemd</code>\u53D6\u4EE3\u4E86<code>initd</code>\u4E4B\u540E\u4FBF\u5F00\u59CB\u7EDF\u4E00\u7BA1\u7406\u4E86\u6240\u6709<code>Unit</code>\u7684\u542F\u52A8\u65E5\u5FD7\uFF0C\u53EF\u4EE5\u53EA\u7528\u4E00\u4E2A<code>journalctl</code>\u547D\u4EE4\uFF0C\u67E5\u770B\u6240\u6709\u5185\u6838\u548C\u5E94\u7528\u7684\u65E5\u5FD7\u3002</p><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><div class="language-bash ext-sh"><pre class="language-bash"><code>journalctl <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">..</span>.<span class="token punctuation">]</span> <span class="token punctuation">[</span>MATCHES<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre></div><h2 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h2><ul><li><code>--no-full, --full, -l</code>: \u5F53\u5B57\u6BB5\u5339\u914D\u53EF\u7528\u5217\u65F6\u5C06\u5176\u7701\u7565\uFF0C\u9ED8\u8BA4\u8BBE\u7F6E\u662F\u663E\u793A\u5B8C\u6574\u5B57\u6BB5\uFF0C\u5141\u8BB8\u5B83\u4EEC\u6362\u884C\u6216\u88AB\u622A\u65AD\uFF0C\u65E7\u7684\u9009\u9879<code>-l/--full</code>\u4E0D\u518D\u6709\u7528\uFF0C\u9664\u4E86\u64A4\u9500<code>--no-full</code>\u3002</li><li><code>-a, --all</code>: \u5B8C\u6574\u663E\u793A\u6240\u6709\u5B57\u6BB5\uFF0C\u5373\u4F7F\u5B83\u4EEC\u5305\u542B\u4E0D\u53EF\u6253\u5370\u5B57\u7B26\u6216\u975E\u5E38\u957F\u3002</li><li><code>-f, --follow</code>: \u4EC5\u663E\u793A\u6700\u8FD1\u7684\u65E5\u5FD7\u6761\u76EE\uFF0C\u5E76\u5728\u65B0\u6761\u76EE\u9644\u52A0\u5230\u65E5\u5FD7\u65F6\u8FDE\u7EED\u6253\u5370\u3002</li><li><code>-e, --pager-end</code>: \u7ACB\u5373\u8DF3\u5230\u65E5\u5FD7\u7684\u7ED3\u5C3E\u5185\u9690\u542B\u7684\u5DE5\u5177\uFF0C\u8FD9\u610F\u5473\u7740<code>-n 1000</code>\u53EF\u4EE5\u4FDD\u8BC1\u5206\u9875\u5668\u4E0D\u4F1A\u7F13\u51B2\u5927\u5C0F\u4E0D\u53D7\u9650\u5236\u7684\u65E5\u5FD7\uFF0C\u53EF\u4EE5\u5728\u547D\u4EE4\u884C\u4E2D\u4F7F\u7528\u663E\u5F0F\u7684<code>-n</code>\u548C\u5176\u4ED6\u4E00\u4E9B\u6570\u503C\u6765\u8986\u76D6\u5B83\uFF0C\u6CE8\u610F\uFF0C\u8FD9\u4E2A\u9009\u9879\u53EA\u652F\u6301<code>less</code>\u9875\u3002</li><li><code>-n, --lines=</code>: \u663E\u793A\u6700\u8FD1\u7684\u65E5\u5FD7\u4E8B\u4EF6\u5E76\u9650\u5236\u663E\u793A\u7684\u4E8B\u4EF6\u6570\uFF0C\u5982\u679C\u4F7F\u7528<code>--follow</code>\uFF0C\u5219\u9690\u542B\u6B64\u9009\u9879\uFF0C\u53C2\u6570\u4E3A\u6B63\u6574\u6570\uFF0C\u662F\u53EF\u9009\u7684\uFF0C\u9ED8\u8BA4\u4E3A<code>10</code>\u3002</li><li><code>--no-tail</code>: \u663E\u793A\u6240\u6709\u5B58\u50A8\u7684\u8F93\u51FA\u884C\uFF0C\u5373\u4F7F\u5728<code>follow</code>\u6A21\u5F0F\u4E0B\u4E5F\u662F\u5982\u6B64\uFF0C\u64A4\u6D88<code>--line=</code>\u7684\u6548\u679C\u3002</li><li><code>-r, --reverse</code>: \u53CD\u8F6C\u8F93\u51FA\uFF0C\u4EE5\u4FBF\u9996\u5148\u663E\u793A\u6700\u65B0\u7684\u6761\u76EE\u3002</li><li><code>-o, --output=</code>: \u63A7\u5236\u6240\u663E\u793A\u7684\u65E5\u5FD7\u6761\u76EE\u7684\u683C\u5F0F\uFF0C\u91C7\u7528\u4EE5\u4E0B\u9009\u9879\u4E4B\u4E00\uFF1A <ul><li><code>short</code>: \u9ED8\u8BA4\u503C\uFF0C\u5E76\u751F\u6210\u4E0E\u7ECF\u5178<code>syslog</code>\u6587\u4EF6\u683C\u5F0F\u57FA\u672C\u76F8\u540C\u7684\u8F93\u51FA\uFF0C\u6BCF\u4E2A\u65E5\u5FD7\u6761\u76EE\u663E\u793A\u4E00\u884C\u3002</li><li><code>short-iso</code>: \u4E0E<code>short</code>\u975E\u5E38\u76F8\u4F3C\uFF0C\u4F46\u663E\u793A<code>ISO 8601 wallclock</code>\u65F6\u95F4\u6233\u3002</li><li><code>short-precise</code>: \u4E0E<code>short</code>\u975E\u5E38\u76F8\u4F3C\uFF0C\u4F46\u662F\u4EE5\u5FAE\u79D2\u7684\u7CBE\u5EA6\u663E\u793A\u65F6\u95F4\u6233\u3002</li><li><code>short-monotonic</code>: \u975E\u5E38\u76F8\u4F3C\uFF0C\u4F46\u662F\u663E\u793A\u7684\u662F<code>monotonic</code>\u7684\u65F6\u95F4\u6233\uFF0C\u800C\u4E0D\u662F<code>wallclock</code>\u7684\u65F6\u95F4\u6233\u3002</li><li><code>verbose</code>: \u663E\u793A\u5177\u6709\u6240\u6709\u5B57\u6BB5\u7684\u5B8C\u6574\u7ED3\u6784\u6761\u76EE\u3002</li><li><code>export</code>: \u5C06\u65E5\u5FD7\u5E8F\u5217\u5316\u6210\u9002\u5408\u5907\u4EFD\u548C\u7F51\u7EDC\u4F20\u8F93\u7684\u4E8C\u8FDB\u5236\u6D41\uFF0C\u4E3B\u8981\u662F\u57FA\u4E8E\u6587\u672C\u7684\u3002</li><li><code>json</code>: \u5C06\u6761\u76EE\u683C\u5F0F\u5316\u4E3A<code>JSON</code>\u6570\u636E\u7ED3\u6784\uFF0C\u6BCF\u884C\u4E00\u4E2A\u3002</li><li><code>json-pretty</code>: \u5C06\u6761\u76EE\u683C\u5F0F\u5316\u4E3AJSON\u6570\u636E\u7ED3\u6784\uFF0C\u4F46\u5C06\u5B83\u4EEC\u683C\u5F0F\u5316\u4E3A\u591A\u884C\uFF0C\u4EE5\u4F7F\u4EBA\u4EEC\u66F4\u5BB9\u6613\u9605\u8BFB\u3002</li><li><code>json-sse</code>: \u5C06\u6761\u76EE\u683C\u5F0F\u5316\u4E3A<code>JSON</code>\u6570\u636E\u7ED3\u6784\uFF0C\u4F46\u5C06\u5B83\u4EEC\u5305\u88C5\u4E3A\u9002\u5408\u670D\u52A1\u5668\u53D1\u9001\u7684<code>Eventsm</code>\u7684\u683C\u5F0F\u3002</li><li><code>cat</code>: \u751F\u6210\u4E00\u4E2A\u975E\u5E38\u7B80\u6D01\u7684\u8F93\u51FA\uFF0C\u53EA\u663E\u793A\u6BCF\u4E2A\u65E5\u5FD7\u6761\u76EE\u7684\u5B9E\u9645\u6D88\u606F\uFF0C\u6CA1\u6709\u5143\u6570\u636E\uFF0C\u751A\u81F3\u6CA1\u6709\u65F6\u95F4\u6233\u3002</li></ul></li><li><code>-x, --catalog</code>: \u7528\u6765\u81EA\u6D88\u606F\u76EE\u5F55\u7684\u89E3\u91CA\u6587\u672C\u6269\u5145\u65E5\u5FD7\u884C\uFF0C\u8FD9\u5C06\u5411\u8F93\u51FA\u4E2D\u53EF\u7528\u7684\u65E5\u5FD7\u6D88\u606F\u4E2D\u6DFB\u52A0\u89E3\u91CA\u6027\u5E2E\u52A9\u6587\u672C\uFF0C\u8FD9\u4E9B\u7B80\u77ED\u7684\u5E2E\u52A9\u6587\u672C\u5C06\u89E3\u91CA\u9519\u8BEF\u6216\u65E5\u5FD7\u4E8B\u4EF6\u7684\u4E0A\u4E0B\u6587\u3001\u53EF\u80FD\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u4EE5\u53CA\u6307\u5411\u652F\u6301\u8BBA\u575B\u3001\u5F00\u53D1\u4EBA\u5458\u6587\u6863\u548C\u4EFB\u4F55\u5176\u4ED6\u76F8\u5173\u624B\u518C\u7684\u6307\u9488\uFF0C\u6CE8\u610F\uFF0C\u5E2E\u52A9\u6587\u672C\u4E0D\u662F\u5BF9\u6240\u6709\u6D88\u606F\u90FD\u53EF\u7528\uFF0C\u800C\u662F\u4EC5\u5BF9\u9009\u5B9A\u7684\u6D88\u606F\u53EF\u7528\u3002\u6B64\u5916\uFF0C\u5C06<code>journalctl</code>\u8F93\u51FA\u9644\u52A0\u5230\u9519\u8BEF\u62A5\u544A\u65F6\uFF0C\u8BF7\u4E0D\u8981\u4F7F\u7528<code>-x</code>\u3002</li><li><code>-q, --quiet</code>: \u5F53\u4EE5\u666E\u901A\u7528\u6237\u8EAB\u4EFD\u8FD0\u884C\u65F6\uFF0C\u7981\u6B62\u663E\u793A\u6709\u5173\u4E0D\u53EF\u8BBF\u95EE\u7684\u7CFB\u7EDF\u65E5\u5FD7\u7684\u4EFB\u4F55\u8B66\u544A\u6D88\u606F\u3002</li><li><code>-m, --merge</code>: \u663E\u793A\u6240\u6709\u53EF\u7528\u7684\u65E5\u5FD7\uFF0C\u5305\u62EC\u8FDC\u7A0B\u65E5\u5FD7\u7684\u4EA4\u53C9\u6761\u76EE\u3002</li><li><code>-b [ID][\xB1offset], --boot=[ID][\xB1offset]</code>: \u663E\u793A\u6765\u81EA\u7279\u5B9A\u542F\u52A8\u7684\u6D88\u606F\uFF0C\u8FD9\u5C06\u4E3A<code>_BOOT_ID=</code>\u6DFB\u52A0\u5339\u914D\u9879\uFF0C\u53C2\u6570\u53EF\u80FD\u4E3A\u7A7A\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u5C06\u663E\u793A\u5F53\u524D\u5F15\u5BFC\u7684\u65E5\u5FD7\uFF0C\u5982\u679C\u7701\u7565\u5F15\u5BFC<code>ID</code>\uFF0C\u5219\u6B63\u504F\u79FB\u91CF\u5C06\u67E5\u627E\u4ECE\u65E5\u5FD7\u5F00\u59CB\u7684\u5F15\u5BFC\uFF0C\u800C\u7B49\u4E8E\u6216\u5C0F\u4E8E\u96F6\u7684\u504F\u79FB\u91CF\u5C06\u67E5\u627E\u4ECE\u65E5\u5FD7\u7ED3\u675F\u7684\u5F15\u5BFC\uFF0C\u56E0\u6B64\uFF0C<code>1</code>\u8868\u793A\u6309\u65F6\u95F4\u987A\u5E8F\u5728\u65E5\u5FD7\u4E2D\u627E\u5230\u7684\u7B2C\u4E00\u4E2A\u5F15\u5BFC\uFF0C<code>2</code>\u8868\u793A\u7B2C\u4E8C\u4E2A\u5F15\u5BFC\uFF0C\u4F9D\u6B64\u7C7B\u63A8\uFF0C\u800C<code>-0</code>\u8868\u793A\u6700\u540E\u4E00\u4E2A\u5F15\u5BFC\uFF0C<code>-1</code>\u8868\u793A\u6700\u540E\u4E00\u4E2A\u5F15\u5BFC\u4E4B\u524D\u7684\u5F15\u5BFC\uFF0C\u4F9D\u6B64\u7C7B\u63A8\uFF0C\u7A7A\u504F\u79FB\u91CF\u7B49\u540C\u4E8E\u6307\u5B9A<code>-0</code>\uFF0C\u9664\u975E\u5F53\u524D\u5F15\u5BFC\u4E0D\u662F\u6700\u540E\u4E00\u6B21\u5F15\u5BFC\uFF0C\u4F8B\u5982\u56E0\u4E3A\u6307\u5B9A<code>--directory</code>\u67E5\u770B\u6765\u81EA\u4E0D\u540C\u8BA1\u7B97\u673A\u7684\u65E5\u5FD7\u3002\u5982\u679C\u6307\u5B9A\u4E86<code>32</code>\u4E2A\u5B57\u7B26\u7684<code>ID</code>\uFF0C\u5219\u53EF\u4EE5\u9009\u62E9\u540E\u8DDF\u504F\u79FB\u91CF\uFF0C\u8BE5\u504F\u79FB\u91CF\u6807\u8BC6\u76F8\u5BF9\u4E8E<code>boot ID</code>\u7ED9\u5B9A\u7684\u5F15\u5BFC\uFF0C\u8D1F\u503C\u8868\u793A\u8F83\u65E9\u7684\u5F15\u5BFC\uFF0C\u6B63\u503C\u8868\u793A\u8F83\u665A\u7684\u5F15\u5BFC\uFF0C\u5982\u679C\u672A\u6307\u5B9A<code>offset</code>\uFF0C\u5219\u5047\u5B9A\u503C\u4E3A\u96F6\uFF0C\u5E76\u663E\u793A<code>ID</code>\u7ED9\u5B9A\u7684\u5F15\u5BFC\u65E5\u5FD7\u3002</li><li><code>--list-boots</code>: \u663E\u793A\u5F15\u5BFC\u7F16\u53F7(\u76F8\u5BF9\u4E8E\u5F53\u524D\u5F15\u5BFC)\u3001\u5B83\u4EEC\u7684<code>id</code>\u4EE5\u53CA\u4E0E\u5F15\u5BFC\u76F8\u5173\u7684\u7B2C\u4E00\u6761\u548C\u6700\u540E\u4E00\u6761\u6D88\u606F\u7684\u65F6\u95F4\u6233\u7684\u5217\u8868\u3002</li><li><code>-k, --dmesg</code>: \u53EA\u663E\u793A\u5185\u6838\u6D88\u606F\uFF0C\u8FD9\u610F\u5473\u7740<code>-b</code>\u5E76\u6DFB\u52A0\u5339\u914D<code>_TRANSPORT=kernel</code>\u3002</li><li><code>-u, --unit=UNIT|PATTERN</code>: \u663E\u793A\u6307\u5B9A\u7684<code>systemd</code>\u5355\u5143\u5355\u5143\u7684\u6D88\u606F\uFF0C\u6216\u4EFB\u4F55\u4E0E<code>PATTERN</code>\u5339\u914D\u7684\u5355\u5143\u7684\u6D88\u606F\uFF0C\u5982\u679C\u6307\u5B9A\u4E86\u6A21\u5F0F\uFF0C\u65E5\u5FD7\u4E2D\u627E\u5230\u7684\u5355\u5143\u540D\u79F0\u5217\u8868\u5C06\u4E0E\u6307\u5B9A\u7684\u6A21\u5F0F\u8FDB\u884C\u6BD4\u8F83\uFF0C\u5E76\u4F7F\u7528\u6240\u6709\u5339\u914D\u7684\u5185\u5BB9\uFF0C\u5BF9\u4E8E\u6BCF\u4E2A\u5355\u5143\u540D\uFF0C\u5C06\u4E3A\u6765\u81EA\u8BE5\u5355\u5143\u7684\u6D88\u606F\u6DFB\u52A0\u4E00\u4E2A\u5339\u914D<code>_SYSTEMD_UNIT= unit</code>\uFF0C\u4EE5\u53CA\u6765\u81EA<code>systemd</code>\u7684\u6D88\u606F\u548C\u5173\u4E8E\u6307\u5B9A\u5355\u5143\u7684<code>coredumps</code>\u7684\u6D88\u606F\u7684\u989D\u5916\u5339\u914D\uFF0C\u8BE5\u53C2\u6570\u53EF\u4EE5\u6307\u5B9A\u591A\u6B21\u3002</li><li><code>--user-unit=</code>: \u663E\u793A\u6307\u5B9A\u7528\u6237\u4F1A\u8BDD\u5355\u5143\u7684\u6D88\u606F\uFF0C\u8FD9\u5C06\u4E3A\u6765\u81EA\u5355\u5143\u7684\u6D88\u606F<code>_SYSTEMD_USER_UNIT=</code>\u548C<code>_UID=</code>\u6DFB\u52A0\u5339\u914D\uFF0C\u5E76\u4E3A\u6765\u81EA\u4F1A\u8BDD<code>systemd</code>\u7684\u6D88\u606F\u548C\u5173\u4E8E\u6307\u5B9A\u5355\u5143\u7684<code>coredumps</code>\u7684\u6D88\u606F\u6DFB\u52A0\u989D\u5916\u5339\u914D\uFF0C\u8BE5\u53C2\u6570\u53EF\u4EE5\u6307\u5B9A\u591A\u6B21\u3002</li><li><code>-p, --priority=</code>: \u6839\u636E\u6D88\u606F\u4F18\u5148\u7EA7\u6216\u4F18\u5148\u7EA7\u8303\u56F4\u7B5B\u9009\u8F93\u51FA\uFF0C\u63A5\u53D7\u5355\u4E2A\u6570\u5B57\u6216\u6587\u672C\u65E5\u5FD7\u7EA7\u522B(\u5373\u5728<code>0 emerg</code>\u548C<code>7 debug</code>\u4E4B\u95F4)\uFF0C\u6216\u4EE5<code>..</code>\u5F62\u5F0F\u8868\u793A\u7684<code>numeric/text</code>\u65E5\u5FD7\u7EA7\u522B\u8303\u56F4\uFF0C\u65E5\u5FD7\u7EA7\u522B\u662F<code>syslog</code>\u4E2D\u8BB0\u5F55\u7684\u901A\u5E38\u7684<code>syslog</code>\u65E5\u5FD7\u7EA7\u522B\uFF0C\u5373<code>emerg 0</code>\u3001<code>alert 1</code>\u3001<code>crit 2</code>\u3001<code>err 3</code>\u3001<code>warning 4</code>\u3001<code>notice 5</code>\u3001<code>info 6</code>\u3001<code>debug 7</code>\uFF0C\u5982\u679C\u6307\u5B9A\u4E00\u4E2A\u65E5\u5FD7\u7EA7\u522B\uFF0C\u5219\u663E\u793A\u8BE5\u7EA7\u522B\u6216\u66F4\u4F4E(\u503C\u66F4\u4F4E\u4F18\u5148\u7EA7\u66F4\u9AD8)\u65E5\u5FD7\u7EA7\u522B\u7684\u6240\u6709\u6D88\u606F\uFF0C\u5982\u679C\u6307\u5B9A\u4E86\u4E00\u4E2A\u8303\u56F4\uFF0C\u5219\u5C06\u663E\u793A\u8BE5\u8303\u56F4\u5185\u7684\u6240\u6709\u6D88\u606F\uFF0C\u5305\u62EC\u8BE5\u8303\u56F4\u7684\u5F00\u59CB\u503C\u548C\u7ED3\u675F\u503C\uFF0C\u8FD9\u5C06\u4E3A\u6307\u5B9A\u7684\u4F18\u5148\u7EA7\u6DFB\u52A0<code>PRIORITY=</code>\u5339\u914D\u9879\u3002</li><li><code>-c, --cursor=</code>: \u4ECE\u4F20\u9012\u7684\u6E38\u6807\u6307\u5B9A\u7684\u65E5\u5FD7\u4F4D\u7F6E\u5F00\u59CB\u663E\u793A\u6761\u76EE\u3002</li><li><code>--after-cursor=</code>: \u4ECE\u8BE5\u5149\u6807\u6307\u5B9A\u7684\u4F4D\u7F6E\u4E4B\u540E\u7684\u65E5\u5FD7\u4F4D\u7F6E\u5F00\u59CB\u663E\u793A\u6761\u76EE\uFF0C\u4F7F\u7528<code>--show-cursor</code>\u9009\u9879\u65F6\u5C06\u663E\u793A\u5149\u6807\u3002</li><li><code>--show-cursor</code>: \u5149\u6807\u663E\u793A\u5728\u6700\u540E\u4E00\u9879\u7684\u4E24\u4E2A\u7834\u6298\u53F7\u540E\uFF0C\u7C7B\u4F3C\u4E8E<code>-- cursor: s=0639...</code>\uFF0C\u5149\u6807\u7684\u683C\u5F0F\u662F\u79C1\u6709\u7684\uFF0C\u53EF\u80FD\u4F1A\u66F4\u6539\u3002</li><li><code>--since=, --until=</code>: \u5206\u522B\u5728\u6307\u5B9A\u65E5\u671F\u6216\u66F4\u65B0\u65E5\u671F\uFF0C\u6216\u5728\u6307\u5B9A\u65E5\u671F\u6216\u66F4\u65B0\u65E5\u671F\u5F00\u59CB\u663E\u793A\u6761\u76EE\uFF0C\u65E5\u671F\u89C4\u8303\u7684\u683C\u5F0F\u5E94\u8BE5\u662F<code>2012-10-30 18:17:16</code>\uFF0C\u5982\u679C\u7701\u7565\u4E86\u65F6\u95F4\u90E8\u5206\uFF0C\u5219\u5047\u5B9A\u4E3A<code>00:00:00</code>\uFF0C\u5982\u679C\u53EA\u7701\u7565\u4E86<code>seconds</code>\u7EC4\u4EF6\uFF0C\u5219\u5047\u5B9A\u4E3A<code>:00</code>\uFF0C\u5982\u679C\u7701\u7565\u4E86<code>date</code>\u90E8\u5206\uFF0C\u5219\u5047\u5B9A\u4E3A\u5F53\u524D\u65E5\u671F\uFF0C\u6216\u8005\u7406\u89E3\u5B57\u7B26\u4E32<code>yesterday</code>\u3001<code>today</code>\u3001<code>tomorrow</code>\uFF0C\u5206\u522B\u8868\u793A\u5F53\u524D\u65E5\u671F\u7684\u524D\u4E00\u5929<code>00:00:00</code>\u3001\u5F53\u524D\u65E5\u671F\u7684\u524D\u4E00\u5929<code>00:00:00</code>\u3001\u5F53\u524D\u65E5\u671F\u7684\u540E\u4E00\u5929\uFF0C<code>now</code>\u6307\u7684\u662F\u5F53\u524D\u65F6\u95F4\uFF0C\u6700\u540E\uFF0C\u53EF\u4EE5\u6307\u5B9A\u76F8\u5BF9\u6B21\u6570\uFF0C\u4EE5<code>-</code>\u6216<code>+</code>\u4F5C\u4E3A\u524D\u7F00\uFF0C\u5206\u522B\u8868\u793A\u5F53\u524D\u65F6\u95F4\u4E4B\u524D\u6216\u4E4B\u540E\u7684\u6B21\u6570\u3002</li><li><code>-F, --field=</code>: \u5728\u65E5\u5FD7\u7684\u6240\u6709\u6761\u76EE\u4E2D\u6253\u5370\u6307\u5B9A\u5B57\u6BB5\u53EF\u4EE5\u63A5\u53D7\u7684\u6240\u6709\u53EF\u80FD\u6570\u636E\u503C\u3002</li><li><code>--system, --user</code>: \u663E\u793A\u6765\u81EA\u7CFB\u7EDF\u670D\u52A1\u548C\u5185\u6838\u7684\u6D88\u606F(\u4F7F\u7528<code>--system</code>)\uFF0C\u663E\u793A\u6765\u81EA\u5F53\u524D\u7528\u6237\u670D\u52A1\u7684\u6D88\u606F(\u4F7F\u7528<code>--user</code>)\uFF0C\u5982\u679C\u4E24\u8005\u90FD\u672A\u6307\u5B9A\uFF0C\u5219\u663E\u793A\u7528\u6237\u53EF\u4EE5\u770B\u5230\u7684\u6240\u6709\u6D88\u606F\u3002</li><li><code>-M, --machine=</code>: \u663E\u793A\u6765\u81EA\u8FD0\u884C\u4E2D\u7684\u672C\u5730\u5BB9\u5668\u7684\u6D88\u606F\uFF0C\u6307\u5B9A\u8981\u8FDE\u63A5\u7684\u5BB9\u5668\u540D\u79F0\u3002</li><li><code>-D DIR, --directory=DIR</code>: \u4EE5\u76EE\u5F55\u8DEF\u5F84\u4F5C\u4E3A\u53C2\u6570\uFF0C\u5982\u679C\u6307\u5B9A\uFF0C<code>journalctl</code>\u5C06\u64CD\u4F5C\u6307\u5B9A\u7684\u65E5\u5FD7\u76EE\u5F55<code>DIR</code>\uFF0C\u800C\u4E0D\u662F\u9ED8\u8BA4\u7684\u8FD0\u884C\u65F6\u548C\u7CFB\u7EDF\u65E5\u5FD7\u8DEF\u5F84\u3002</li><li><code>--file=GLOB</code>: \u4EE5\u6587\u4EF6<code>glob</code>\u4F5C\u4E3A\u53C2\u6570\uFF0C\u5982\u679C\u6307\u5B9A\uFF0C<code>journalctl</code>\u5C06\u64CD\u4F5C\u4E0E<code>GLOB</code>\u5339\u914D\u7684\u6307\u5B9A\u65E5\u5FD7\u6587\u4EF6\uFF0C\u800C\u4E0D\u662F\u9ED8\u8BA4\u7684\u8FD0\u884C\u65F6\u548C\u7CFB\u7EDF\u65E5\u5FD7\u8DEF\u5F84\uFF0C\u53EF\u4EE5\u6307\u5B9A\u591A\u6B21\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\u6587\u4EF6\u5C06\u88AB\u9002\u5F53\u5730\u4EA4\u9519\u3002</li><li><code>--root=ROOT</code>: \u4EE5\u76EE\u5F55\u8DEF\u5F84\u4F5C\u4E3A\u53C2\u6570\uFF0C\u5982\u679C\u6307\u5B9A\uFF0C<code>journalctl</code>\u5C06\u5BF9\u6307\u5B9A\u76EE\u5F55\u4E0B\u7684\u76EE\u5F55\u6587\u4EF6\u5C42\u6B21\u7ED3\u6784\u800C\u4E0D\u662F\u6839\u76EE\u5F55\u8FDB\u884C\u64CD\u4F5C\uFF0C\u4F8B\u5982<code>--update catalog</code>\u5C06\u521B\u5EFA<code>root/var/lib/systemd/catalog/database</code>\u3002</li><li><code>--new-id128</code>: \u751F\u6210\u4E00\u4E2A\u65B0\u7684\u9002\u5408\u6807\u8BC6\u6D88\u606F\u7684<code>128</code>\u4F4D<code>ID</code>\uFF0C\u800C\u4E0D\u662F\u663E\u793A\u65E5\u5FD7\u5185\u5BB9\uFF0C\u8FD9\u662F\u4E3A\u90A3\u4E9B\u9700\u8981\u4E3A\u4ED6\u4EEC\u5F15\u5165\u7684\u65B0\u6D88\u606F\u4F7F\u7528\u65B0\u6807\u8BC6\u7B26\u5E76\u5E0C\u671B\u4F7F\u5176\u53EF\u8BC6\u522B\u7684\u5F00\u53D1\u4EBA\u5458\u51C6\u5907\u7684\uFF0C\u8FD9\u5C06\u4EE5\u4E09\u79CD\u4E0D\u540C\u7684\u683C\u5F0F\u6253\u5370\u65B0\u7684<code>ID</code>\uFF0C\u8FD9\u4E9B\u683C\u5F0F\u53EF\u4EE5\u590D\u5236\u5230\u6E90\u4EE3\u7801\u6216\u7C7B\u4F3C\u7684\u6587\u4EF6\u4E2D\u3002</li><li><code>--header</code>: \u4E0D\u662F\u663E\u793A\u65E5\u5FD7\u5185\u5BB9\uFF0C\u800C\u662F\u663E\u793A\u6240\u8BBF\u95EE\u65E5\u5FD7\u5B57\u6BB5\u7684\u5185\u90E8\u5934\u4FE1\u606F\u3002</li><li><code>--disk-usage</code>: \u663E\u793A\u6240\u6709\u65E5\u5FD7\u6587\u4EF6\u7684\u5F53\u524D\u78C1\u76D8\u4F7F\u7528\u60C5\u51B5\u3002</li><li><code>--list-catalog [128-bit-ID...]</code>: \u4EE5\u6D88\u606F<code>id</code>\u8868\u7684\u5F62\u5F0F\u5217\u51FA\u6D88\u606F\u76EE\u5F55\u7684\u5185\u5BB9\uFF0C\u4EE5\u53CA\u5B83\u4EEC\u7684\u7B80\u77ED\u63CF\u8FF0\u5B57\u7B26\u4E32\uFF0C\u5982\u679C\u6307\u5B9A\u4E86\u4EFB\u4F55<code>128</code>\u4F4D<code>id</code>\uFF0C\u5219\u53EA\u663E\u793A\u90A3\u4E9B\u6761\u76EE\u3002</li><li><code>--dump-catalog [128-bit-ID...]</code>: \u663E\u793A\u6D88\u606F\u76EE\u5F55\u7684\u5185\u5BB9\uFF0C\u6761\u76EE\u7531\u7531\u4E24\u4E2A\u7834\u6298\u53F7\u548C<code>ID</code>\u7EC4\u6210\u7684\u884C\u5206\u9694\uFF0C\u683C\u5F0F\u4E0E<code>.catalog</code>\u6587\u4EF6\u76F8\u540C\uFF0C\u5982\u679C\u6307\u5B9A\u4E86\u4EFB\u4F55<code>128</code>\u4F4D<code>id</code>\uFF0C\u5219\u53EA\u663E\u793A\u90A3\u4E9B\u6761\u76EE\u3002</li><li><code>--update-catalog</code>: \u66F4\u65B0\u6D88\u606F\u76EE\u5F55\u7D22\u5F15\uFF0C\u6BCF\u6B21\u5B89\u88C5\u3001\u5220\u9664\u6216\u66F4\u65B0\u65B0\u7684\u7F16\u76EE\u6587\u4EF6\u4EE5\u91CD\u65B0\u751F\u6210\u4E8C\u8FDB\u5236\u7F16\u76EE\u7D22\u5F15\u65F6\uFF0C\u90FD\u9700\u8981\u6267\u884C\u6B64\u547D\u4EE4\u3002</li><li><code>--setup-keys</code>: \u751F\u6210\u4E00\u4E2A\u7528\u4E8E\u524D\u5411\u5B89\u5168\u5BC6\u5C01<code>FSS</code>\u7684\u65B0\u5BC6\u94A5\u5BF9\uFF0C\u800C\u4E0D\u662F\u663E\u793A\u65E5\u5FD7\u5185\u5BB9\uFF0C\u8FD9\u5C06\u751F\u6210\u4E00\u4E2A\u5BC6\u5C01\u5BC6\u94A5\u548C\u4E00\u4E2A\u9A8C\u8BC1\u5BC6\u94A5\uFF0C\u5BC6\u5C01\u5BC6\u94A5\u5B58\u50A8\u5728\u65E5\u5FD7\u6570\u636E\u76EE\u5F55\u4E2D\uFF0C\u5E76\u4FDD\u7559\u5728\u4E3B\u673A\u4E0A\uFF0C\u9A8C\u8BC1\u952E\u5E94\u8BE5\u5B58\u50A8\u5728\u5916\u90E8\u3002</li><li><code>--force</code>: \u5F53\u4F20\u9012\u4E86<code>--setup keys</code>\u5E76\u4E14\u5DF2\u7ECF\u914D\u7F6E\u4E86\u524D\u5411\u5B89\u5168\u5BC6\u5C01<code>FSS</code>\u65F6\uFF0C\u91CD\u65B0\u521B\u5EFA<code>FSS keys</code>\u3002</li><li><code>--interval=</code>: \u6307\u5B9A\u4F7F\u7528<code>--setup-keys</code>\u751F\u6210<code>FSS</code>\u5BC6\u94A5\u5BF9\u65F6\u5BC6\u5C01\u5BC6\u94A5\u7684\u66F4\u6539\u95F4\u9694\uFF0C\u8F83\u77ED\u7684\u65F6\u95F4\u95F4\u9694\u4F1A\u589E\u52A0<code>CPU</code>\u6D88\u8017\uFF0C\u4F46\u4F1A\u7F29\u77ED\u65E0\u6CD5\u68C0\u6D4B\u5230\u7684\u65E5\u5FD7\u66F4\u6539\u7684\u65F6\u95F4\u8303\u56F4\uFF0C\u9ED8\u8BA4\u4E3A<code>15</code>\u5206\u949F\u3002</li><li><code>--verify</code>: \u68C0\u67E5\u65E5\u5FD7\u6587\u4EF6\u7684\u5185\u90E8\u4E00\u81F4\u6027\uFF0C\u5982\u679C\u6587\u4EF6\u662F\u5728\u542F\u7528<code>FSS</code>\u7684\u60C5\u51B5\u4E0B\u751F\u6210\u7684\uFF0C\u5E76\u4E14<code>FSS</code>\u9A8C\u8BC1\u5BC6\u94A5\u662F\u7528<code>--verify key=</code>\u6307\u5B9A\u7684\uFF0C\u5219\u4F1A\u9A8C\u8BC1\u65E5\u5FD7\u6587\u4EF6\u7684\u771F\u5B9E\u6027\u3002</li><li><code>--verify-key=</code>: \u6307\u5B9A\u7528\u4E8E<code>--verify</code>\u64CD\u4F5C\u7684<code>FSS</code>\u9A8C\u8BC1\u5BC6\u94A5\u3002</li><li><code>--no-pager</code>: \u4E0D\u5C06\u7A0B\u5E8F\u7684\u8F93\u51FA\u5185\u5BB9\u7BA1\u9053<code>pipe</code>\u7ED9\u5206\u9875\u7A0B\u5E8F\u3002</li><li><code>--vacuum-size=BYTES</code>: \u5C06\u78C1\u76D8\u4F7F\u7528\u51CF\u5C11\u5230\u6307\u5B9A\u5927\u5C0F\u4EE5\u4E0B\u3002</li><li><code>--vacuum-files=INT</code>: \u4EC5\u4FDD\u7559\u6307\u5B9A\u6570\u91CF\u7684\u65E5\u8BB0\u6587\u4EF6\u3002</li><li><code>--vacuum-time=TIME</code>: \u4EFB\u4F55\u65E9\u4E8E\u6307\u5B9A\u65F6\u95F4\u70B9\u7684\u6761\u76EE\u90FD\u5C06\u88AB\u5220\u9664\u3002</li><li><code>--rotate</code>: \u8981\u6C42\u65E5\u5FD7\u5B88\u62A4\u8FDB\u7A0B\u6EDA\u52A8\u65E5\u5FD7\u6587\u4EF6\uFF0C\u6B64\u547D\u4EE4\u4F1A\u4E00\u76F4\u963B\u585E\u5230\u6EDA\u52A8\u64CD\u4F5C\u5B8C\u6210\u4E4B\u540E\u624D\u4F1A\u8FD4\u56DE\uFF0C\u65E5\u5FD7\u6EDA\u52A8\u53EF\u4EE5\u786E\u4FDD\u6240\u6709\u6D3B\u52A8\u7684\u65E5\u5FD7\u6587\u4EF6\u90FD\u88AB\u5173\u95ED\u3001\u5E76\u88AB\u91CD\u547D\u540D\u4EE5\u5B8C\u6210\u5F52\u6863\uFF0C\u540C\u65F6\u65B0\u7684\u7A7A\u767D\u65E5\u5FD7\u6587\u4EF6\u5C06\u88AB\u521B\u5EFA\uFF0C\u5E76\u6210\u4E3A\u65B0\u7684\u6D3B\u52A8\u65E5\u5FD7\u6587\u4EF6\uFF0C\u901A\u5E38\u53EF\u4EE5\u4E0E<code>--vacuum-size=</code>\u3001<code>--vacuum-time=</code>\u3001<code>--vacuum-file=</code>\u4E00\u8D77\u4F7F\u7528\uFF0C \u4EE5\u63D0\u9AD8\u65E5\u5FD7\u6E05\u7406\u7684\u6548\u7387\u3002</li><li><code>-h, --help</code>: \u8F93\u51FA\u5E2E\u52A9\u4FE1\u606F\u3002</li><li><code>--version</code>: \u8F93\u51FA\u7248\u672C\u4FE1\u606F\u3002</li></ul><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><p>\u663E\u793A\u672C\u6B21\u542F\u52A8\u4EE5\u6765\u7684\u5168\u90E8\u65E5\u5FD7\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>journalctl
</code></pre></div><p>\u663E\u793A\u5185\u6838\u65E5\u5FD7\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>journalctl -k
</code></pre></div><p>\u4F7F\u7528<code>-n</code>\u53C2\u6570\u53EF\u4EE5\u663E\u793A\u6700\u540E<code>n</code>\u884C\u65E5\u5FD7\uFF0C\u5982\u679C\u4E0D\u6307\u5B9A\u884C\u6570\uFF0C\u9ED8\u8BA4\u663E\u793A<code>10</code>\u884C\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>journalctl -n <span class="token number">20</span>
</code></pre></div><p>\u67E5\u770B\u6307\u5B9A\u8FDB\u7A0B\u7684\u65E5\u5FD7\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>journalctl <span class="token assign-left variable">_PID</span><span class="token operator">=</span><span class="token number">1</span>
</code></pre></div><p>\u663E\u793A\u6700\u8FD1<code>30</code>\u5206\u949F\u7684\u65E5\u5FD7\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>journalctl --since<span class="token operator">=</span>-30m
</code></pre></div><p>\u663E\u793A<code>2021</code>\u5E74\u4EE5\u6765\u7684\u65E5\u5FD7\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>journalctl --since<span class="token operator">=</span><span class="token string">&quot;2021-01-01&quot;</span>
</code></pre></div><p>\u663E\u793A\u4ECA\u5929\u7684\u65E5\u5FD7\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>journalctl --since<span class="token operator">=</span>today
</code></pre></div><p>\u4F7F\u7528<code>-f</code>\u53C2\u6570\u53EF\u4EE5\u5B9E\u73B0\u7C7B\u578B<code>tail -f</code>\u7684\u529F\u80FD\uFF0C\u6301\u7EED\u76D1\u63A7\u6700\u65B0\u7684\u65E5\u5FD7\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>journalctl -f
</code></pre></div><p>\u67E5\u770B\u6307\u5B9A<code>Unit</code>\u7684\u65E5\u5FD7\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>journalctl -u nginx.service
</code></pre></div><p>\u67E5\u770B\u65E5\u5FD7\u5360\u7528\u7684\u78C1\u76D8\u7A7A\u95F4\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>journalctl --disk-usage
</code></pre></div><p>\u8981\u6C42\u65E5\u5FD7\u5B88\u62A4\u8FDB\u7A0B\u6EDA\u52A8\u65E5\u5FD7\u6587\u4EF6\uFF0C\u65E5\u5FD7\u6EDA\u52A8\u53EF\u4EE5\u786E\u4FDD\u6240\u6709\u6D3B\u52A8\u7684\u65E5\u5FD7\u6587\u4EF6\u90FD\u88AB\u5173\u95ED\u3001\u5E76\u88AB\u91CD\u547D\u540D\u4EE5\u5B8C\u6210\u5F52\u6863\uFF0C\u540C\u65F6\u65B0\u7684\u7A7A\u767D\u65E5\u5FD7\u6587\u4EF6\u5C06\u88AB\u521B\u5EFA\uFF0C\u5E76\u6210\u4E3A\u65B0\u7684\u6D3B\u52A8\u65E5\u5FD7\u6587\u4EF6\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>journalctl --rotate
</code></pre></div><p>\u6E05\u7406\u4E00\u4E2A\u5468\u524D\u7684\u65E5\u5FD7\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>journalctl --vacuum-time<span class="token operator">=</span>1week
</code></pre></div><p>\u5C06\u78C1\u76D8\u5360\u7528\u51CF\u5C11\u5230\u6307\u5B9A\u5927\u5C0F\u4EE5\u4E0B\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>journalctl --vacuum-size<span class="token operator">=</span>10M
</code></pre></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2><div class="language-text ext-text"><pre class="language-text"><code>http://www.jinbuguo.com/systemd/journalctl.html#
https://www.commandlinux.com/man-page/man1/journalctl.1.html
https://blog.orchidflower.cn/2020/04/20/linux-command-introduction-04-journalctl/
</code></pre></div>`,35),s=[a];function i(n,t){return o(),c("div",null,s)}var p=e(l,[["render",i],["__file","journalctl\u547D\u4EE4.html.vue"]]);export{p as default};

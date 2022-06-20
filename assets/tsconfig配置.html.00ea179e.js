import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as t}from"./app.29f60bb5.js";const o={},p=t(`<h4 id="tsconfig-json-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#tsconfig-json-\u914D\u7F6E" aria-hidden="true">#</a> tsconfig.json \u914D\u7F6E</h4><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**************\u57FA\u7840\u914D\u7F6E**************/</span>
        <span class="token doc-comment comment">/**************\u57FA\u7840\u914D\u7F6E**************/</span>
        <span class="token doc-comment comment">/**************\u57FA\u7840\u914D\u7F6E**************/</span>
        <span class="token comment">/* \u5F00\u542F\u589E\u91CF\u7F16\u8BD1\uFF1ATS \u7F16\u8BD1\u5668\u5728\u7B2C\u4E00\u6B21\u7F16\u8BD1\u7684\u65F6\u5019\uFF0C\u4F1A\u751F\u6210\u4E00\u4E2A\u5B58\u50A8\u7F16\u8BD1\u4FE1\u606F\u7684\u6587\u4EF6\uFF0C\u4E0B\u4E00\u6B21\u7F16\u8BD1\u7684\u65F6\u5019\uFF0C\u4F1A\u6839\u636E\u8FD9\u4E2A\u6587\u4EF6\u8FDB\u884C\u589E\u91CF\u7684\u7F16\u8BD1\uFF0C\u4EE5\u6B64\u63D0\u9AD8 TS \u7684\u7F16\u8BD1\u901F\u5EA6 */</span>
        <span class="token string-property property">&quot;incremental&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">/* \u6307\u5B9A\u5B58\u50A8\u589E\u91CF\u7F16\u8BD1\u4FE1\u606F\u7684\u6587\u4EF6\u4F4D\u7F6E */</span>
        <span class="token string-property property">&quot;tsBuildInfoFile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>

        <span class="token comment">/* \u6253\u5370\u8BCA\u65AD\u4FE1\u606F */</span>
        <span class="token string-property property">&quot;diagnostics&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">/* \u6253\u5370\u8F93\u51FA\u7684\u6587\u4EF6 */</span>
        <span class="token string-property property">&quot;listEmittedFiles&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">/* \u6253\u5370\u7F16\u8BD1\u7684\u6587\u4EF6\uFF08\u5305\u62EC\u5F15\u7528\u7684\u58F0\u660E\u6587\u4EF6\uFF09*/</span>
        <span class="token string-property property">&quot;listFiles&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">/* \u6307\u5B9A ECMAScript \u7684\u76EE\u6807\u7248\u672C: &#39;ES3&#39; (default), &#39;ES5&#39;, &#39;ES2015&#39;, &#39;ES2016&#39;, &#39;ES2017&#39;, &#39;ES2018&#39;, &#39;ES2019&#39; or &#39;ESNEXT&#39;. */</span>
        <span class="token string-property property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es5&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">/* \u6307\u5B9A\u6A21\u5757\u4EE3\u7801\u7684\u751F\u6210\u65B9\u5F0F: &#39;none&#39;, &#39;commonjs&#39;, &#39;amd&#39;, &#39;system&#39;, &#39;umd&#39;, &#39;es2015&#39;, or &#39;ESNext&#39;. */</span>
        <span class="token string-property property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;commonjs&quot;</span><span class="token punctuation">,</span>

        <span class="token comment">/* \u6307\u5B9A\u8981\u5305\u542B\u5728\u7F16\u8BD1\u4E2D\u7684\u5E93\u6587\u4EF6\u2014\u2014\u5F15\u7528\u7C7B\u5E93\u2014\u2014\u5373\u7533\u660E\u6587\u4EF6\uFF0C\u5982\u679C\u8F93\u51FA\u7684\u6A21\u5757\u65B9\u5F0F\u662F es5\uFF0C\u5C31\u4F1A\u9ED8\u8BA4\u5F15\u5165 &quot;dom&quot;,&quot;es5&quot;,&quot;scripthost&quot;  */</span>
        <span class="token comment">/* \u5982\u679C\u5728 TS \u4E2D\u60F3\u8981\u4F7F\u7528\u4E00\u4E9B ES6 \u4EE5\u4E0A\u7248\u672C\u7684\u8BED\u6CD5\uFF0C\u5C31\u9700\u8981\u5F15\u5165\u76F8\u5173\u7684\u7C7B\u5E93 */</span>
        <span class="token string-property property">&quot;lib&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token comment">/* \u5141\u8BB8\u7F16\u8BD1 JS \u6587\u4EF6 */</span>
        <span class="token string-property property">&quot;allowJs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">/* \u68C0\u67E5 JS \u6587\u4EF6*/</span>
        <span class="token string-property property">&quot;checkJs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">/* \u6307\u5B9A JSX \u4EE3\u7801\u751F\u6210\u7684\u6A21\u5F0F: &#39;preserve&#39;, &#39;react-native&#39;, or &#39;react&#39;. */</span>
        <span class="token comment">/* &#39;react&#39; \u6A21\u5F0F\u4E0B\uFF1ATS \u4F1A\u76F4\u63A5\u628A jsx \u7F16\u8BD1\u6210 js */</span>
        <span class="token comment">/* &#39;preserve&#39; \u6A21\u5F0F\u4E0B\uFF1ATS \u4E0D\u4F1A\u628A jsx \u7F16\u8BD1\u6210 js\uFF0C\u4F1A\u4FDD\u7559 jsx */</span>
        <span class="token string-property property">&quot;jsx&quot;</span><span class="token operator">:</span> <span class="token string">&quot;preserve&quot;</span><span class="token punctuation">,</span>


        <span class="token doc-comment comment">/**************\u58F0\u660E\u6587\u4EF6\u76F8\u5173\u914D\u7F6E**************/</span>
        <span class="token doc-comment comment">/**************\u58F0\u660E\u6587\u4EF6\u76F8\u5173\u914D\u7F6E**************/</span>
        <span class="token doc-comment comment">/**************\u58F0\u660E\u6587\u4EF6\u76F8\u5173\u914D\u7F6E**************/</span>

        <span class="token comment">/* \u751F\u6210\u76F8\u5E94\u7684\u7C7B\u578B\u58F0\u660E\u6587\u4EF6 \u2014\u2014 &#39;.d.ts&#39; */</span>
        <span class="token string-property property">&quot;declaration&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">/* \u58F0\u660E\u6587\u4EF6\u7684\u8F93\u51FA\u8DEF\u5F84 */</span>
        <span class="token string-property property">&quot;declarationDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./d&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">/* \u53EA\u751F\u6210\u58F0\u660E\u6587\u4EF6\uFF0C\u4E0D\u751F\u6210 JS */</span>
        <span class="token string-property property">&quot;emitDeclarationOnly&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">/* \u58F0\u660E\u6587\u4EF6\u76EE\u5F55\uFF0C\u9ED8\u8BA4 node_modules/@types */</span>
        <span class="token string-property property">&quot;typeRoots&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">/* \u8981\u5BFC\u5165\u7684\u58F0\u660E\u6587\u4EF6\u5305\uFF0C\u9ED8\u8BA4\u5BFC\u5165\u4E0A\u9762\u58F0\u660E\u6587\u4EF6\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u58F0\u660E\u6587\u4EF6 */</span>
        <span class="token string-property property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>


        <span class="token comment">/* \u5C06\u591A\u4E2A\u76F8\u4E92\u4F9D\u8D56\u7684\u6587\u4EF6\u5408\u5E76\u5E76\u4E14\u628A\u7F16\u8BD1\u540E\u7684\u5185\u5BB9\u8F93\u51FA\u5230\u4E00\u4E2A\u6587\u4EF6\u91CC
         * \u53EF\u4EE5\u7528\u5728\u4EA7\u51FA AMD \u6A21\u5757\u7684\u573A\u666F\u4E2D
         * &quot;module&quot;:&quot;amd&quot; \u65F6\uFF0C\u5F53\u4E00\u4E2A\u6A21\u5757\u5F15\u5165\u4E86\u53E6\u5916\u4E00\u4E2A\u6A21\u5757\uFF0C\u7F16\u8BD1\u7684\u65F6\u5019\u4F1A\u628A\u8FD9\u4E24\u4E2A\u6A21\u5757\u7684\u7F16\u8BD1\u7ED3\u679C\u5408\u5E76\u5230\u4E00\u4E2A\u6587\u4EF6\u4E2D
         */</span>
        <span class="token string-property property">&quot;outFile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">/* \u6307\u5B9A\u7F16\u8BD1\u6587\u4EF6\u7684\u8F93\u51FA\u76EE\u5F55 */</span>
        <span class="token comment">// &quot;outDir&quot;: &quot;./out&quot;,</span>
        <span class="token comment">/* \u6307\u5B9A\u8F93\u5165\u6587\u4EF6\u7684\u6839\u76EE\u5F55\uFF0C\u7528\u4E8E\u63A7\u5236\u8F93\u51FA\u76EE\u5F55\u7684\u7ED3\u6784 */</span>
        <span class="token string-property property">&quot;rootDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>

        <span class="token comment">/* \u542F\u7528\u9879\u76EE\u7F16\u8BD1 */</span>
        <span class="token string-property property">&quot;composite&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">/*  \u8F93\u51FA\u7684\u65F6\u5019\u79FB\u9664\u6CE8\u91CA */</span>
        <span class="token string-property property">&quot;removeComments&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">/* \u4E0D\u8F93\u51FA\u6587\u4EF6 */</span>
        <span class="token string-property property">&quot;noEmit&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">/* \u53D1\u751F\u9519\u8BEF\u65F6\u4E0D\u8F93\u51FA\u6587\u4EF6 */</span>
        <span class="token string-property property">&quot;noEmitOnError&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">/* \u4E0D\u751F\u6210 helper \u51FD\u6570\uFF0C\u4EE5\u524D\u7684\u8BDD\u8BBE\u7F6E\u4E3A true \u540E\uFF0C\u9700\u8981\u989D\u5916\u5B89\u88C5 ts-helpers */</span>
        <span class="token comment">/* \u7C7B\u4F3C\u4E8E babel \uFF0C\u4F1A\u7ED9\u6BCF\u4E2A\u6587\u4EF6\u90FD\u751F\u6210 helper \u51FD\u6570\uFF0C\u4F1A\u4F7F\u5F97\u6700\u7EC8\u7F16\u8BD1\u540E\u7684\u5305\u7684\u4F53\u79EF\u53D8\u5927 */</span>
        <span class="token string-property property">&quot;noEmitHelpers&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">/* \u73B0\u5728\u53EF\u4EE5\u901A\u8FC7 tslib\uFF08TS \u5185\u7F6E\u7684\u5E93\uFF09\u5F15\u5165 helper \u51FD\u6570\uFF0C\uFF01\uFF01\uFF01\u6587\u4EF6\u5FC5\u987B\u662F\u6A21\u5757 \uFF01\uFF01\uFF01 */</span>
        <span class="token comment">/* \u7F16\u8BD1\u540E\u81EA\u52A8\u5F15\u5165 var tslib_1 = require(&quot;tslib&quot;) */</span>
        <span class="token string-property property">&quot;importHelpers&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">/* \u5F53\u76EE\u6807\u662F ES5 \u6216 ES3 \u7684\u65F6\u5019\u63D0\u4F9B\u5BF9 for-of\u3001\u6269\u5C55\u8FD0\u7B97\u7B26\u548C\u89E3\u6784\u8D4B\u503C\u4E2D\u5BF9\u4E8E\u8FED\u4EE3\u5668\u7684\u5B8C\u6574\u652F\u6301 */</span>
        <span class="token string-property property">&quot;downlevelIteration&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">/* \u628A\u6BCF\u4E00\u4E2A\u6587\u4EF6\u8F6C\u8BD1\u6210\u4E00\u4E2A\u5355\u72EC\u7684\u6A21\u5757 */</span>
        <span class="token string-property property">&quot;isolatedModules&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>


        <span class="token doc-comment comment">/**************\u4E25\u683C\u68C0\u67E5\u914D\u7F6E**************/</span>
        <span class="token doc-comment comment">/**************\u4E25\u683C\u68C0\u67E5\u914D\u7F6E**************/</span>
        <span class="token doc-comment comment">/**************\u4E25\u683C\u68C0\u67E5\u914D\u7F6E**************/</span>

        <span class="token comment">/* \u5F00\u542F\u6240\u6709\u7684\u4E25\u683C\u68C0\u67E5\u914D\u7F6E */</span>
        <span class="token string-property property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">/* \u4E0D\u5141\u8BB8\u4F7F\u7528\u9690\u5F0F\u7684 any \u7C7B\u578B */</span>
        <span class="token string-property property">&quot;noImplicitAny&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">/* \u4E0D\u5141\u8BB8\u628A null\u3001undefined \u8D4B\u503C\u7ED9\u5176\u4ED6\u7C7B\u578B\u53D8\u91CF */</span>
        <span class="token string-property property">&quot;strictNullChecks&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">/* \u4E0D\u5141\u8BB8\u51FD\u6570\u53C2\u6570\u53CC\u5411\u534F\u53D8 */</span>
        <span class="token string-property property">&quot;strictFunctionTypes&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">/* \u4F7F\u7528 bind/call/apply \u65F6\uFF0C\u4E25\u683C\u68C0\u67E5\u51FD\u6570\u53C2\u6570\u7C7B\u578B */</span>
        <span class="token string-property property">&quot;strictBindCallApply&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">/* \u7C7B\u7684\u5B9E\u4F8B\u5C5E\u6027\u5FC5\u987B\u521D\u59CB\u5316 */</span>
        <span class="token string-property property">&quot;strictPropertyInitialization&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">/* \u4E0D\u5141\u8BB8 this \u6709\u9690\u5F0F\u7684 any \u7C7B\u578B\uFF0C\u5373 this \u5FC5\u987B\u6709\u660E\u786E\u7684\u6307\u5411*/</span>
        <span class="token string-property property">&quot;noImplicitThis&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">/* \u5728\u4E25\u683C\u6A21\u5F0F\u4E0B\u89E3\u6790\u5E76\u4E14\u5411\u6BCF\u4E2A\u6E90\u6587\u4EF6\u4E2D\u6CE8\u5165 &quot;use strict&quot; */</span>
        <span class="token string-property property">&quot;alwaysStrict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token doc-comment comment">/**************\u989D\u5916\u7684\u8BED\u6CD5\u68C0\u67E5\u914D\u7F6E\uFF0C\u8FD9\u79CD\u68C0\u67E5\u4EA4\u7ED9 eslint \u5C31\u884C\uFF0C\u6CA1\u5FC5\u8981\u914D\u7F6E**************/</span>
        <span class="token doc-comment comment">/**************\u989D\u5916\u7684\u8BED\u6CD5\u68C0\u67E5\u914D\u7F6E\uFF0C\u8FD9\u79CD\u68C0\u67E5\u4EA4\u7ED9 eslint \u5C31\u884C\uFF0C\u6CA1\u5FC5\u8981\u914D\u7F6E**************/</span>
        <span class="token doc-comment comment">/**************\u989D\u5916\u7684\u8BED\u6CD5\u68C0\u67E5\u914D\u7F6E\uFF0C\u8FD9\u79CD\u68C0\u67E5\u4EA4\u7ED9 eslint \u5C31\u884C\uFF0C\u6CA1\u5FC5\u8981\u914D\u7F6E**************/</span>

        <span class="token comment">/* \u6709\u672A\u4F7F\u7528\u5230\u7684\u672C\u5730\u53D8\u91CF\u65F6\u62A5\u9519 */</span>
        <span class="token string-property property">&quot;noUnusedLocals&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">/* \u6709\u672A\u4F7F\u7528\u5230\u7684\u51FD\u6570\u53C2\u6570\u65F6\u62A5\u9519 */</span>
        <span class="token string-property property">&quot;noUnusedParameters&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">/* \u6BCF\u4E2A\u5206\u652F\u90FD\u8981\u6709\u8FD4\u56DE\u503C */</span>
        <span class="token string-property property">&quot;noImplicitReturns&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">/* \u4E25\u683C\u6821\u9A8C switch-case \u8BED\u6CD5 */</span>
        <span class="token string-property property">&quot;noFallthroughCasesInSwitch&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token doc-comment comment">/**************\u6A21\u5757\u89E3\u6790\u914D\u7F6E**************/</span>
        <span class="token doc-comment comment">/**************\u6A21\u5757\u89E3\u6790\u914D\u7F6E**************/</span>
        <span class="token doc-comment comment">/**************\u6A21\u5757\u89E3\u6790\u914D\u7F6E**************/</span>

        <span class="token comment">/* \u6307\u5B9A\u6A21\u5757\u7684\u89E3\u6790\u7B56\u7565: &#39;node&#39; (Node.js) or &#39;classic&#39; (TypeScript pre-1.6)*/</span>
        <span class="token comment">/* \u82E5\u672A\u6307\u5B9A\uFF0C\u90A3\u4E48\u5728\u4F7F\u7528\u4E86 --module AMD | System | ES2015 \u65F6\u7684\u9ED8\u8BA4\u503C\u4E3A Classic\uFF0C\u5176\u5B83\u60C5\u51B5\u65F6\u5219\u4E3A Node */</span>
        <span class="token string-property property">&quot;moduleResolution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span>

        <span class="token comment">/* \u5728\u89E3\u6790\u975E\u7EDD\u5BF9\u8DEF\u5F84\u6A21\u5757\u540D\u7684\u65F6\u5019\u7684\u57FA\u51C6\u8DEF\u5F84 */</span>
        <span class="token string-property property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>

        <span class="token comment">/* \u57FA\u4E8E &#39;baseUrl&#39; \u7684\u8DEF\u5F84\u6620\u5C04\u96C6\u5408 */</span>
        <span class="token string-property property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token comment">/* \u5C06\u591A\u4E2A\u76EE\u5F55\u653E\u5728\u4E00\u4E2A\u865A\u62DF\u76EE\u5F55\u4E0B\uFF0C\u7528\u4E8E\u8FD0\u884C\u65F6 */</span>
        <span class="token comment">/* \u5F53\u81EA\u5DF1\u7F16\u5199\u7684\u5E93\u548C\u5F00\u53D1\u7684\u4EE3\u7801\u90FD\u8F93\u51FA\u5230\u4E00\u4E2A\u76EE\u5F55\u4E0B\u65F6\uFF0C\u5F00\u53D1\u4EE3\u7801\u548C\u5E93\u7684\u4F4D\u7F6E\u4E0D\u4E00\u6837\uFF0C\u5F00\u53D1\u4EE3\u7801\u5F15\u5165\u5E93\u7684\u8DEF\u5F84\u5C31\u4F1A\u4E0D\u5BF9 */</span>
        <span class="token string-property property">&quot;rootDirs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// &quot;rootDirs&quot;: [&quot;src&quot;,&quot;out&quot;],</span>

        <span class="token comment">/* \u5141\u8BB8 export = xxx \u5BFC\u51FA \uFF0C\u5E76\u4F7F\u7528 import xxx form &quot;module-name&quot; \u5BFC\u5165*/</span>
        <span class="token string-property property">&quot;esModuleInterop&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">/* \u5F53\u6A21\u5757\u6CA1\u6709\u9ED8\u8BA4\u5BFC\u51FA\u7684\u65F6\u5019\uFF0C\u5141\u8BB8\u88AB\u522B\u7684\u6A21\u5757\u9ED8\u8BA4\u5BFC\u5165\uFF0C\u8FD9\u4E2A\u5728\u4EE3\u7801\u6267\u884C\u7684\u65F6\u5019\u6CA1\u6709\u4F5C\u7528\uFF0C\u53EA\u662F\u5728\u7C7B\u578B\u68C0\u67E5\u7684\u65F6\u5019\u751F\u6548 */</span>
        <span class="token string-property property">&quot;allowSyntheticDefaultImports&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>


        <span class="token comment">/* \u4E0D\u8981 symlinks \u89E3\u6790\u7684\u771F\u6B63\u8DEF\u5F84 */</span>
        <span class="token string-property property">&quot;preserveSymlinks&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">/* \u5141\u8BB8\u5728\u6A21\u5757\u4E2D\u4EE5\u5168\u5C40\u53D8\u91CF\u7684\u65B9\u5F0F\u8BBF\u95EE UMD \u6A21\u5757\u5185\u5BB9 */</span>
        <span class="token string-property property">&quot;allowUmdGlobalAccess&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>


        <span class="token doc-comment comment">/************** Source Map \u914D\u7F6E**************/</span>
        <span class="token doc-comment comment">/************** Source Map \u914D\u7F6E**************/</span>
        <span class="token doc-comment comment">/************** Source Map \u914D\u7F6E**************/</span>

        <span class="token comment">/* \u6307\u5B9A ts \u6587\u4EF6\u4F4D\u7F6E */</span>
        <span class="token string-property property">&quot;sourceRoot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>

        <span class="token comment">/* \u6307\u5B9A map \u6587\u4EF6\u5B58\u653E\u7684\u4F4D\u7F6E */</span>
        <span class="token string-property property">&quot;mapRoot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>

        <span class="token comment">/* \u751F\u6210\u76EE\u6807\u6587\u4EF6\u7684 sourceMap */</span>
        <span class="token string-property property">&quot;sourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">/* \u5C06\u4EE3\u7801\u4E0Esourcemaps\u751F\u6210\u5230\u4E00\u4E2A\u6587\u4EF6\u4E2D\uFF0C\u8981\u6C42\u540C\u65F6\u8BBE\u7F6E\u4E86--inlineSourceMap \u6216--sourceMap \u5C5E\u6027*/</span>
        <span class="token string-property property">&quot;inlineSources&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">/* \u751F\u6210\u76EE\u6807\u6587\u4EF6\u7684 inline sourceMap \u2014\u2014 \u6E90\u6587\u4EF6\u548C sourcemap \u6587\u4EF6\u5728\u540C\u4E00\u6587\u4EF6\u4E2D\uFF0C\u800C\u4E0D\u662F\u628A map \u6587\u4EF6\u653E\u5728\u4E00\u4E2A\u5355\u72EC\u7684\u6587\u4EF6\u91CC*/</span>
        <span class="token string-property property">&quot;inlineSourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">/* \u751F\u6210\u58F0\u660E\u6587\u4EF6\u7684 sourceMap */</span>
        <span class="token string-property property">&quot;declarationMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token doc-comment comment">/************** \u5B9E\u9A8C\u6027\u7684\u914D\u7F6E**************/</span>
        <span class="token doc-comment comment">/************** \u5B9E\u9A8C\u6027\u7684\u914D\u7F6E**************/</span>
        <span class="token doc-comment comment">/************** \u5B9E\u9A8C\u6027\u7684\u914D\u7F6E**************/</span>

        <span class="token comment">/* \u542F\u7528\u88C5\u9970\u5668 */</span>
        <span class="token string-property property">&quot;experimentalDecorators&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token string-property property">&quot;emitDecoratorMetadata&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>         <span class="token comment">/* Enables experimental support for emitting type metadata for decorators. */</span>


        <span class="token doc-comment comment">/**************\u9AD8\u7EA7\u914D\u7F6E**************/</span>
        <span class="token doc-comment comment">/**************\u9AD8\u7EA7\u914D\u7F6E**************/</span>
        <span class="token doc-comment comment">/**************\u9AD8\u7EA7\u914D\u7F6E**************/</span>

        <span class="token comment">/* \u5F3A\u5236\u533A\u5206\u5927\u5C0F\u5199 */</span>
        <span class="token string-property property">&quot;forceConsistentCasingInFileNames&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>

<span class="token punctuation">}</span>

    <span class="token comment">/* \u6307\u5B9A\u9700\u8981\u7F16\u8BD1\u7684\u5355\u4E2A\u6587\u4EF6\u5217\u8868 */</span>
    <span class="token string-property property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">/* \u6307\u5B9A\u9700\u8981\u7F16\u8BD1\u7684\u6587\u4EF6/\u76EE\u5F55 */</span>
    <span class="token string-property property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//    // \u53EA\u5199\u4E00\u4E2A\u76EE\u5F55\u540D\u7B49\u4EF7\u4E8E &quot;./src/**/*&quot;</span>
       <span class="token string">&quot;src&quot;</span>
     <span class="token punctuation">]</span>

    <span class="token comment">/* \u9700\u8981\u6392\u9664\u7684\u6587\u4EF6\u6216\u76EE\u5F55 */</span>
    <span class="token string-property property">&quot;exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token comment">/* \u914D\u7F6E\u6587\u4EF6\u7EE7\u627F */</span>
    <span class="token string-property property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./tsconfig.base.json&quot;</span>

<span class="token punctuation">}</span>

</code></pre></div>`,2),e=[p];function c(r,l){return s(),a("div",null,e)}var m=n(o,[["render",c],["__file","tsconfig\u914D\u7F6E.html.vue"]]);export{m as default};

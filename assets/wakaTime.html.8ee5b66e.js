import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as t,b as e,e as s}from"./app.29f60bb5.js";const r={},_=e("h1",{id:"wakatime-\u914D\u7F6E",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#wakatime-\u914D\u7F6E","aria-hidden":"true"},"#"),s(" wakatime \u914D\u7F6E")],-1),o=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`
name: WakaTime

on:
  workflow_dispatch:
  push:
    branches:
      - main
  schedule:
    - cron: '0 0 * * *'

jobs:
  update-readme:
    runs-on: ubuntu-latest
    steps:
      - uses: athul/waka-readme@master
        with:
          WAKATIME_API_KEY: \${{ secrets.WAKATIME_API_KEY }}
          SHOW_TITLE: true
          SHOW_TOTAL: true
          # BLOCKS: \u28C0\u28C4\u28E4\u28E6\u28F6\u28F7\u28FF
          # BLOCKS: \u25CB\u25D4\u25D1\u25D5\u25CF \u25A1
          BLOCKS: \u25A2\u2680\u2681\u2682\u2683\u2684\u2685
          # TIME_RANGE: last_30_days
          TIME_RANGE: last_7_days
          COMMIT_MESSAGE: Updated the README
`)])],-1),c=[_,o];function d(i,l){return n(),t("div",null,c)}var h=a(r,[["render",d],["__file","wakaTime.html.vue"]]);export{h as default};

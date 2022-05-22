import { sidebar } from 'vuepress-theme-hope';
export const Sidebar = sidebar({
    '/Project/': [
        '/Project/README.md',
        '/Project/Workflow.v1.md',
    ],
    '/Web/': [
        {
            text: 'TypeScript',
            prefix: "/Web/TypeScript/",
            icon: 'typescript',
            children: [
                'tsconfig配置.md',
                '工具函数.md',
            ],
            collapsable: true,
        },
        {
            text: 'JavaScript',
            prefix: "/Web/JavaScript/",
            icon: 'javascript',
            children: [
                '常用函数.md',
                '数组技巧.md',
            ],
            collapsable: true,
        },
        {
            text: '框架',
            prefix: "/Web/Framework/",
            icon: 'frame',
            children: [
                'React.md',
                'Vue.md',
            ],
            collapsable: true,
        },
        {
            text: '工具',
            prefix: "/Web/Tools/",
            icon: "tool",
            children: [
                'Git.md',
                'NPM.md',
            ],
            collapsable: true,
        },
        {
            text: 'HTML',
            prefix: "/Web/HTML/",
            icon: 'html',
            children: [
                'meta模板.md',
            ],
            collapsable: true,
        },
        {
            text: 'CSS',
            prefix: "/Web/CSS/",
            icon: 'css',
            children: [
                '1px边框.md',
                '网站变灰.md',
                "文本溢出.md",
                "重置滚动条.md",
                '样式兼容.md',
                '常用样式.md',
            ],
            collapsable: true,
        },

        {
            text: 'Debug',
            prefix: "/Web/Debug/",
            icon: 'launch',
            children: [
                'chrome调试.md',
            ],
            collapsable: true,
        },
        {
            text: '移动端',
            prefix: "/Web/Mobile/",
            icon: 'mobile',
            children: [
                'MiniProgram.md',
                "Mobile.md",
            ],
            collapsable: true,
        },
        {
            text: 'CI/CD',
            prefix: "/Web/CI/",
            icon: 'ci',
            children: [
                'wakaTime.md',
            ],
            collapsable: true,
        },
    ],
    '/MacOS/': [
        {
            text: 'Terminal',
            prefix: "/MacOS/Terminal/",
            icon: 'shell',
            children: [
                "aspell命令.md",
                "awk命令.md",
                "cat命令.md",
                "chattr命令.md",
                "chmod命令.md",
                "chown命令.md",
                "cmp命令.md",
                "col命令.md",
                "colrm命令.md",
                "comm命令.md",
                "cp命令.md",
                "csplit命令.md",
                "curl命令.md",
                "cut命令.md",
                "diff命令.md",
                "diffstat命令.md",
                "ed命令.md",
                "egrep命令.md",
                "ex命令.md",
                "expr命令.md",
                "fgrep命令.md",
                "file命令.md",
                "find命令.md",
                "fmt命令.md",
                "fold命令.md",
                "grep命令.md",
                "ip命令.md",
                "join命令.md",
                "journalctl命令.md",
                "kill命令.md",
                "less命令.md",
                "ln命令.md",
                "locate命令.md",
                "look命令.md",
                "lsattr命令.md",
                "lsattr命令.md",
                "mc命令.md",
                "menu.md",
                "mktemp命令.md",
                "more命令.md",
                "mv命令.md",
                "netstat命令.md",
                "od命令.md",
                "paste命令.md",
                "patch命令.md",
                "pico命令.md",
                "ps命令.md",
                "rcp命令.md",
                "read命令.md",
                "rm命令.md",
                "route命令.md",
                "scp命令.md",
                "sed命令.md",
                "sort命令.md",
                "split命令.md",
                "systemctl命令.md",
                "tee命令.md",
                "tmpwatch命令.md",
                "top命令.md",
                "touch命令.md",
                "tr命令.md",
                "traceroute命令.md",
                "umask命令.md",
                "updatedb命令.md",
                "whereis命令.md",
                "which命令.md",
            ],
            collapsable: true,
        },
        'Shortcuts.md',
        "zshrc区别.md",
        // {
        //     text: '命令',
        //     icon: 'command',
        //     prefix: "/MacOS/",
        //     children: [

        //     ],
        // },
    ],
});
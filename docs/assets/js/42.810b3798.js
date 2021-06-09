(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{507:function(s,t,a){"use strict";a.r(t);var e=a(18),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("h3",{attrs:{id:"下载安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载安装"}},[s._v("#")]),s._v(" 下载安装")]),s._v(" "),a("p",[s._v("使用下载的方式安装，能更方便阅读源码，但是每次升级都需要重新下载并覆盖"),a("code",[s._v("lview-ui")]),s._v("文件夹。")]),s._v(" "),a("ul",[a("li",[s._v("在uni-app插件市场右上角选择"),a("code",[s._v("使用HBuilder X 导入插件")]),s._v("或者"),a("code",[s._v("下载插件ZIP")])]),s._v(" "),a("li",[s._v("如果您的项目是由HBuilder X创建的标准uni-app项目，将下载后的"),a("code",[s._v("lview-ui")]),s._v("文件夹，复制到项目根目录。")]),s._v(" "),a("li",[s._v("如果您的项目是由"),a("a",{attrs:{href:"https://uniapp.dcloud.io/quickstart?id=_2-%E9%80%9A%E8%BF%87vue-cli%E5%91%BD%E4%BB%A4%E8%A1%8C",target:"_blank",rel:"noopener noreferrer"}},[s._v("vue-cli"),a("OutboundLink")],1),s._v("模式创建的， 请将下载后的"),a("code",[s._v("lview-ui")]),s._v("文件夹放到项目的"),a("code",[s._v("src")]),s._v("文件夹中即可。")])]),s._v(" "),a("p",[a("strong",[s._v("注意：")]),s._v(" 此安装方式必须要按照下方的说明配置了才可用。")]),s._v(" "),a("p",[s._v("下载地址: 还没有写完，你别慌嘛")]),s._v(" "),a("h3",{attrs:{id:"配置步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置步骤"}},[s._v("#")]),s._v(" 配置步骤")]),s._v(" "),a("ol",[a("li",[a("h4",{attrs:{id:"引入lview的全局scss变量文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入lview的全局scss变量文件"}},[s._v("#")]),s._v(" 引入lView的全局SCSS变量文件")])])]),s._v(" "),a("p",[s._v("在项目根目录的"),a("code",[s._v("uni.scss")]),s._v("中引入此文件。")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* uni.scss */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lview-ui/style/variate.scss'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])]),s._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[a("h4",{attrs:{id:"引入lview基础样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入lview基础样式"}},[s._v("#")]),s._v(" 引入lView基础样式")])])]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("<style lang="),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scss"')]),s._v(">\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lview-ui/style/class.scss'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])]),s._v("\n</style>\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[a("h4",{attrs:{id:"配置easycom组件模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置easycom组件模式"}},[s._v("#")]),s._v(" 配置easycom组件模式")])])]),s._v(" "),a("p",[s._v("此配置需要在项目根目录的"),a("code",[s._v("pages.json")]),s._v("中进行。")]),s._v(" "),a("p",[s._v("温馨提示")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("uni-app为了调试性能的原因，修改"),a("code",[s._v("easycom")]),s._v("规则不会实时生效，配置完后，您需要重启HX或者重新编译项目才能正常使用uView的功能。")]),s._v(" "),a("p",[s._v("请确保您的"),a("code",[s._v("pages.json")]),s._v("中只有一个"),a("code",[s._v("easycom")]),s._v("字段，否则请自行合并多个引入规则。")])]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// pages.json")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"easycom"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"^l-(.*)"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lview-ui/components/l-$1/l-$1.vue"')]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 此为本身已有的内容")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"pages"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ......")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);
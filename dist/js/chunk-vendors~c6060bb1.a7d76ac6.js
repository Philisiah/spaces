(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~c6060bb1"],{e5cd:function(e,a,t){"use strict";var o=t("41b2"),n=t.n(o),c=t("4d91"),l=t("02ea");a["a"]={props:{componentName:c["a"].string.def("global"),defaultLocale:c["a"].oneOfType([c["a"].object,c["a"].func]),children:c["a"].func},inject:{localeData:{default:function(){return{}}}},methods:{getLocale:function(){var e=this.componentName,a=this.defaultLocale,t=a||l["a"][e||"global"],o=this.localeData.antLocale,c=e&&o?o[e]:{};return n()({},"function"===typeof t?t():t,c||{})},getLocaleCode:function(){var e=this.localeData.antLocale,a=e&&e.locale;return e&&e.exist&&!a?l["a"].locale:a}},render:function(){var e=this.$scopedSlots,a=this.children||e["default"];return a(this.getLocale(),this.getLocaleCode())}}}}]);
//# sourceMappingURL=chunk-vendors~c6060bb1.a7d76ac6.js.map
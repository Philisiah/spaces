(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~370f27c9"],{8891:function(t,e,n){"use strict";var a=n("92fa"),o=n.n(a),s=n("41b2"),i=n.n(s),r=n("6042"),f=n.n(r),d=n("7b05"),c=n("4d91"),b=n("b488");function u(){}e["a"]={name:"TabBarRootNode",mixins:[b["a"]],props:{saveRef:c["a"].func.def(u),getRef:c["a"].func.def(u),prefixCls:c["a"].string.def(""),tabBarPosition:c["a"].string.def("top"),extraContent:c["a"].any},methods:{onKeyDown:function(t){this.__emit("keydown",t)}},render:function(){var t=arguments[0],e=this.prefixCls,n=this.onKeyDown,a=this.tabBarPosition,s=this.extraContent,r=f()({},e+"-bar",!0),c="top"===a||"bottom"===a,b=c?{float:"right"}:{},u=this.$slots["default"],h=u;return s&&(h=[Object(d["a"])(s,{key:"extra",style:i()({},b)}),Object(d["a"])(u,{key:"content"})],h=c?h:h.reverse()),t("div",o()([{attrs:{role:"tablist",tabIndex:"0"},class:r,on:{keydown:n}},{directives:[{name:"ant-ref",value:this.saveRef("root")}]}]),[h])}}}}]);
//# sourceMappingURL=chunk-vendors~370f27c9.f9c660c2.js.map
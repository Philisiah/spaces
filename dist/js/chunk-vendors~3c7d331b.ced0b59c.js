(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~3c7d331b"],{c1b3:function(e,t,n){"use strict";var o=n("41b2"),a=n.n(o),i=n("45df"),r=n("452c"),s=n("4d91"),p=n("7b05"),d=n("daa3"),c=n("1d19"),u=n("0c63"),l=Object(c["a"])(),f={name:"ADropdown",props:a()({},l,{prefixCls:s["a"].string.def("ant-dropdown"),mouseEnterDelay:s["a"].number.def(.15),mouseLeaveDelay:s["a"].number.def(.1),placement:l.placement.def("bottomLeft")}),model:{prop:"visible",event:"visibleChange"},provide:function(){return{savePopupRef:this.savePopupRef}},inject:{configProvider:{default:function(){return{}}}},methods:{savePopupRef:function(e){this.popupRef=e},getTransitionName:function(){var e=this.$props,t=e.placement,n=void 0===t?"":t,o=e.transitionName;return void 0!==o?o:n.indexOf("top")>=0?"slide-down":"slide-up"}},render:function(){var e=arguments[0],t=this.$slots,n=this.$listeners,o=Object(d["k"])(this),r=o.prefixCls,s=o.trigger,c=o.disabled,l=o.getPopupContainer,f=this.configProvider.getPopupContainer,v=Object(p["a"])(t["default"],{class:r+"-trigger",disabled:c}),b=this.overlay||t.overlay&&t.overlay[0],m=b&&Object(d["l"])(b),g=m||{},h=g.selectable,w=void 0!==h&&h,P=g.focusable,O=void 0===P||P,y=e("span",{class:r+"-menu-submenu-arrow"},[e(u["a"],{attrs:{type:"right"},class:r+"-menu-submenu-arrow-icon"})]),j=b&&b.componentOptions?Object(p["a"])(b,{props:{mode:"vertical",selectable:w,focusable:O,expandIcon:y}}):b,x=c?[]:s,C=void 0;x&&-1!==x.indexOf("contextmenu")&&(C=!0);var k={props:a()({alignPoint:C},o,{getPopupContainer:l||f,transitionName:this.getTransitionName(),trigger:x}),on:n};return e(i["a"],k,[v,e("template",{slot:"overlay"},[j])])}};f.Button=r["a"],t["a"]=f}}]);
//# sourceMappingURL=chunk-vendors~3c7d331b.ced0b59c.js.map
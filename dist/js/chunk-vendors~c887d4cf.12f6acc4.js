(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~c887d4cf"],{"313c":function(e,t,s){"use strict";var n=s("41b2"),i=s.n(n),o=s("4d91"),c=s("6f54"),a=s("32e8"),r=s("1462"),l=s("b488"),p=s("daa3"),h=s("22a4"),d={name:"Menu",props:i()({},h["a"],{selectable:o["a"].bool.def(!0)}),mixins:[l["a"]],data:function(){var e=Object(p["k"])(this),t=e.defaultSelectedKeys,s=e.defaultOpenKeys;return"selectedKeys"in e&&(t=e.selectedKeys||[]),"openKeys"in e&&(s=e.openKeys||[]),this.store=Object(c["a"])({selectedKeys:t,openKeys:s,activeKey:{"0-menu-":Object(r["b"])(i()({},e,{children:this.$slots["default"]||[]}),e.activeKey)}}),{}},mounted:function(){this.updateMiniStore()},updated:function(){this.updateMiniStore()},methods:{onSelect:function(e){var t=this.$props;if(t.selectable){var s=this.store.getState().selectedKeys,n=e.key;s=t.multiple?s.concat([n]):[n],Object(p["b"])(this,"selectedKeys")||this.store.setState({selectedKeys:s}),this.__emit("select",i()({},e,{selectedKeys:s}))}},onClick:function(e){this.__emit("click",e)},onKeyDown:function(e,t){this.$refs.innerMenu.getWrappedInstance().onKeyDown(e,t)},onOpenChange:function(e){var t=this.store.getState().openKeys.concat(),s=!1,n=function(e){var n=!1;if(e.open)n=-1===t.indexOf(e.key),n&&t.push(e.key);else{var i=t.indexOf(e.key);n=-1!==i,n&&t.splice(i,1)}s=s||n};Array.isArray(e)?e.forEach(n):n(e),s&&(Object(p["b"])(this,"openKeys")||this.store.setState({openKeys:t}),this.__emit("openChange",t))},onDeselect:function(e){var t=this.$props;if(t.selectable){var s=this.store.getState().selectedKeys.concat(),n=e.key,o=s.indexOf(n);-1!==o&&s.splice(o,1),Object(p["b"])(this,"selectedKeys")||this.store.setState({selectedKeys:s}),this.__emit("deselect",i()({},e,{selectedKeys:s}))}},getOpenTransitionName:function(){var e=this.$props,t=e.openTransitionName,s=e.openAnimation;return t||"string"!==typeof s||(t=e.prefixCls+"-open-"+s),t},updateMiniStore:function(){var e=Object(p["k"])(this);"selectedKeys"in e&&this.store.setState({selectedKeys:e.selectedKeys||[]}),"openKeys"in e&&this.store.setState({openKeys:e.openKeys||[]})}},render:function(){var e=arguments[0],t=Object(p["k"])(this),s={props:i()({},t,{itemIcon:Object(p["h"])(this,"itemIcon",t),expandIcon:Object(p["h"])(this,"expandIcon",t),overflowedIndicator:Object(p["h"])(this,"overflowedIndicator",t)||e("span",["···"]),openTransitionName:this.getOpenTransitionName(),parentMenu:this,children:Object(p["c"])(this.$slots["default"]||[])}),class:t.prefixCls+"-root",on:i()({},this.$listeners,{click:this.onClick,openChange:this.onOpenChange,deselect:this.onDeselect,select:this.onSelect}),ref:"innerMenu"};return e(a["a"],{attrs:{store:this.store}},[e(r["a"],s)])}};t["a"]=d}}]);
//# sourceMappingURL=chunk-vendors~c887d4cf.12f6acc4.js.map
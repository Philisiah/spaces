(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~b1358937"],{f06c:function(t,e,n){"use strict";var o=n("41b2"),i=n.n(o),s=n("daa3"),c=n("7b05"),u=n("6a21"),a=n("b488"),h=n("7d54");e["a"]={name:"TouchFeedback",mixins:[a["a"]],props:Object(s["r"])(h["a"],{disabled:!1}),data:function(){return{active:!1}},mounted:function(){var t=this;this.$nextTick(function(){t.disabled&&t.active&&t.setState({active:!1})})},methods:{triggerEvent:function(t,e,n){this.$emit(t,n),e!==this.active&&this.setState({active:e})},onTouchStart:function(t){this.triggerEvent("touchstart",!0,t)},onTouchMove:function(t){this.triggerEvent("touchmove",!1,t)},onTouchEnd:function(t){this.triggerEvent("touchend",!1,t)},onTouchCancel:function(t){this.triggerEvent("touchcancel",!1,t)},onMouseDown:function(t){this.triggerEvent("mousedown",!0,t)},onMouseUp:function(t){this.triggerEvent("mouseup",!1,t)},onMouseLeave:function(t){this.triggerEvent("mouseleave",!1,t)}},render:function(){var t=this.$props,e=t.disabled,n=t.activeClassName,o=void 0===n?"":n,s=t.activeStyle,a=void 0===s?{}:s,h=this.$slots["default"];if(1!==h.length)return Object(u["a"])(!1,"m-feedback组件只能包含一个子元素"),null;var r={on:e?{}:{touchstart:this.onTouchStart,touchmove:this.onTouchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchCancel,mousedown:this.onMouseDown,mouseup:this.onMouseUp,mouseleave:this.onMouseLeave}};return!e&&this.active&&(r=i()({},r,{style:a,class:o})),Object(c["a"])(h,r)}}}}]);
//# sourceMappingURL=chunk-vendors~b1358937.f11c7334.js.map
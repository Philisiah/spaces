(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~04a4a3af"],{dfba:function(t,o,n){"use strict";var i=n("92fa"),e=n.n(i),a=n("4d91"),s=n("5efb"),u=n("b488"),c=n("b92b"),r=Object(c["a"])().type,d={type:r,actionFn:a["a"].func,closeModal:a["a"].func,autoFocus:a["a"].bool,buttonProps:a["a"].object};o["a"]={mixins:[u["a"]],props:d,data:function(){return{loading:!1}},mounted:function(){var t=this;this.autoFocus&&(this.timeoutId=setTimeout(function(){return t.$el.focus()}))},beforeDestroy:function(){clearTimeout(this.timeoutId)},methods:{onClick:function(){var t=this,o=this.actionFn,n=this.closeModal;if(o){var i=void 0;o.length?i=o(n):(i=o(),i||n()),i&&i.then&&(this.setState({loading:!0}),i.then(function(){n.apply(void 0,arguments)},function(){t.setState({loading:!1})}))}else n()}},render:function(){var t=arguments[0],o=this.type,n=this.$slots,i=this.loading,a=this.buttonProps;return t(s["a"],e()([{attrs:{type:o,loading:i},on:{click:this.onClick}},a]),[n["default"]])}}}}]);
//# sourceMappingURL=chunk-vendors~04a4a3af.9f3cd38f.js.map
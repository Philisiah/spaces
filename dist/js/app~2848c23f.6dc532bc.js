(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app~2848c23f"],{e064:function(t,e,n){"use strict";n("96cf");var s=n("3b8d"),o=n("b8fb"),r=n.n(o);e["a"]={name:"CandidateSider",data:function(){return{defaultlogo:r.a}},components:{},methods:{onCollapse:function(t){return t},onBreakpoint:function(t){return t},mounted:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}(),logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$router.push({name:"home"})},navigateTo:function(t){this.$router.push(t)}}}}}]);
//# sourceMappingURL=app~2848c23f.6dc532bc.js.map
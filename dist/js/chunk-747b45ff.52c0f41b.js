(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-747b45ff"],{"02f4":function(t,e,n){var i=n("4588"),a=n("be13");t.exports=function(t){return function(e,n){var r,o,s=String(a(e)),c=i(n),l=s.length;return c<0||c>=l?t?"":void 0:(r=s.charCodeAt(c),r<55296||r>56319||c+1===l||(o=s.charCodeAt(c+1))<56320||o>57343?t?s.charAt(c):r:t?s.slice(c,c+2):o-56320+(r-55296<<10)+65536)}}},"034b":function(t,e,n){},"0390":function(t,e,n){"use strict";var i=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?i(t,e).length:1)}},"0bfb":function(t,e,n){"use strict";var i=n("cb7c");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"12c2":function(t,e,n){},"214f":function(t,e,n){"use strict";n("b0c5");var i=n("2aba"),a=n("32e9"),r=n("79e5"),o=n("be13"),s=n("2b4c"),c=n("520a"),l=s("species"),u=!r(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),d=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var h=s(t),p=!r(function(){var e={};return e[h]=function(){return 7},7!=""[t](e)}),f=p?!r(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[l]=function(){return n}),n[h](""),!e}):void 0;if(!p||!f||"replace"===t&&!u||"split"===t&&!d){var g=/./[h],v=n(o,h,""[t],function(t,e,n,i,a){return e.exec===c?p&&!a?{done:!0,value:g.call(e,n,i)}:{done:!0,value:t.call(n,e,i)}:{done:!1}}),m=v[0],b=v[1];i(String.prototype,t,m),a(RegExp.prototype,h,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},2396:function(t,e,n){"use strict";var i=n("9a857"),a=n.n(i);a.a},"28a5":function(t,e,n){"use strict";var i=n("aae3"),a=n("cb7c"),r=n("ebd6"),o=n("0390"),s=n("9def"),c=n("5f1b"),l=n("520a"),u=n("79e5"),d=Math.min,h=[].push,p="split",f="length",g="lastIndex",v=4294967295,m=!u(function(){RegExp(v,"y")});n("214f")("split",2,function(t,e,n,u){var b;return b="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[f]||2!="ab"[p](/(?:ab)*/)[f]||4!="."[p](/(.?)(.?)/)[f]||"."[p](/()()/)[f]>1||""[p](/.?/)[f]?function(t,e){var a=String(this);if(void 0===t&&0===e)return[];if(!i(t))return n.call(a,t,e);var r,o,s,c=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,p=void 0===e?v:e>>>0,m=new RegExp(t.source,u+"g");while(r=l.call(m,a)){if(o=m[g],o>d&&(c.push(a.slice(d,r.index)),r[f]>1&&r.index<a[f]&&h.apply(c,r.slice(1)),s=r[0][f],d=o,c[f]>=p))break;m[g]===r.index&&m[g]++}return d===a[f]?!s&&m.test("")||c.push(""):c.push(a.slice(d)),c[f]>p?c.slice(0,p):c}:"0"[p](void 0,0)[f]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,i){var a=t(this),r=void 0==n?void 0:n[e];return void 0!==r?r.call(n,a,i):b.call(String(a),n,i)},function(t,e){var i=u(b,t,this,e,b!==n);if(i.done)return i.value;var l=a(t),h=String(this),p=r(l,RegExp),f=l.unicode,g=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(m?"y":"g"),y=new p(m?l:"^(?:"+l.source+")",g),x=void 0===e?v:e>>>0;if(0===x)return[];if(0===h.length)return null===c(y,h)?[h]:[];var k=0,S=0,w=[];while(S<h.length){y.lastIndex=m?S:0;var C,_=c(y,m?h:h.slice(S));if(null===_||(C=d(s(y.lastIndex+(m?0:S)),h.length))===k)S=o(h,S,f);else{if(w.push(h.slice(k,S)),w.length===x)return w;for(var E=1;E<=_.length-1;E++)if(w.push(_[E]),w.length===x)return w;S=k=C}}return w.push(h.slice(k)),w}]})},"2fdb":function(t,e,n){"use strict";var i=n("5ca1"),a=n("d2c8"),r="includes";i(i.P+i.F*n("5147")(r),"String",{includes:function(t){return!!~a(this,t,r).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},3846:function(t,e,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"386d":function(t,e,n){"use strict";var i=n("cb7c"),a=n("83a1"),r=n("5f1b");n("214f")("search",1,function(t,e,n,o){return[function(n){var i=t(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,i):new RegExp(n)[e](String(i))},function(t){var e=o(n,t,this);if(e.done)return e.value;var s=i(t),c=String(this),l=s.lastIndex;a(l,0)||(s.lastIndex=0);var u=r(s,c);return a(s.lastIndex,l)||(s.lastIndex=l),null===u?-1:u.index}]})},5147:function(t,e,n){var i=n("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[i]=!1,!"/./"[t](e)}catch(a){}}return!0}},"520a":function(t,e,n){"use strict";var i=n("0bfb"),a=RegExp.prototype.exec,r=String.prototype.replace,o=a,s="lastIndex",c=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t[s]||0!==e[s]}(),l=void 0!==/()??/.exec("")[1],u=c||l;u&&(o=function(t){var e,n,o,u,d=this;return l&&(n=new RegExp("^"+d.source+"$(?!\\s)",i.call(d))),c&&(e=d[s]),o=a.call(d,t),c&&o&&(d[s]=d.global?o.index+o[0].length:e),l&&o&&o.length>1&&r.call(o[0],n,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(o[u]=void 0)}),o}),t.exports=o},"5f1b":function(t,e,n){"use strict";var i=n("23c6"),a=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var r=n.call(t,e);if("object"!==typeof r)throw new TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==i(t))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},6762:function(t,e,n){"use strict";var i=n("5ca1"),a=n("c366")(!0);i(i.P,"Array",{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},"6b54":function(t,e,n){"use strict";n("3846");var i=n("cb7c"),a=n("0bfb"),r=n("9e1e"),o="toString",s=/./[o],c=function(t){n("2aba")(RegExp.prototype,o,t,!0)};n("79e5")(function(){return"/a/b"!=s.call({source:"a",flags:"b"})})?c(function(){var t=i(this);return"/".concat(t.source,"/","flags"in t?t.flags:!r&&t instanceof RegExp?a.call(t):void 0)}):s.name!=o&&c(function(){return s.call(this)})},"6f94":function(t,e,n){"use strict";var i=n("12c2"),a=n.n(i);a.a},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"96c7":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-layout-header",{style:{position:"fixed",zIndex:1,width:"100%",backgroundColor:"white",borderBottom:"1px solid #e8e8e8"},attrs:{id:"components-layout-demo-fixed"}},[i("div",{staticClass:"logo"},[i("router-link",{attrs:{to:"/"}},[i("img",{staticStyle:{width:"100%","margin-left":"40%"},attrs:{src:n("b8fb")}})])],1),i("div",{staticClass:"ant-menu-horizontal ",style:{lineHeight:"64px",float:"right",borderBottom:0}},[i("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/talent"}},[t._v("Talent")]),t.$store.state.isUserLoggedIn&&"recruiter"===t.$store.state.usertype?i("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/recruiter"}},[t._v("My account\n        ")]):t._e(),t.$store.state.isUserLoggedIn&&"developer"===t.$store.state.usertype?i("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/developer"}},[t._v("My account\n        ")]):t._e(),t.$store.state.isUserLoggedIn?t._e():i("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/login"}},[t._v("\n            Login\n        ")]),t.$store.state.isUserLoggedIn?t._e():i("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/register"}},[t._v("Sign up\n        ")]),i("a",[t.$store.state.isUserLoggedIn?i("a-button",{staticStyle:{"margin-bottom":"0",border:"0","-webkit-box-shadow":"0 0 0 rgba(255,255,255,0.01)",color:"#1890ff"},on:{click:t.logout}},[t._v("Logout\n            ")]):t._e()],1)],1)])},a=[],r={name:"Header",methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$router.push({name:"home"})}}},o=r,s=(n("2396"),n("2877")),c=Object(s["a"])(o,i,a,!1,null,"793839ce",null);e["a"]=c.exports},"9a857":function(t,e,n){},aae3:function(t,e,n){var i=n("d3f4"),a=n("2d95"),r=n("2b4c")("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==a(t))}},b0c5:function(t,e,n){"use strict";var i=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:i!==/./.exec},{exec:i})},b8fb:function(t,e,n){t.exports=n.p+"img/logobg.f302741d.svg"},ce04:function(t,e,n){(function(){var e={install:function(t){t.filter("truncate",function(t,e,n){if(n=n||"...",e=e||30,t.length<=e)return t;var i=t.slice(0,e-n.length),a=i.length-1;while(a>0&&" "!==i[a]&&i[a]!==n[0])a-=1;return a=a||e-n.length,i=i.slice(0,a),i+n})}};t.exports=e})()},d225:function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return i})},d2c8:function(t,e,n){var i=n("aae3"),a=n("be13");t.exports=function(t,e,n){if(i(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(t))}},e665:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-layout",{style:{background:"#fff"}},[n("pageheader"),n("a-layout-content",{style:{padding:"0 0px",marginTop:"1rem"}},[n("div",{staticStyle:{"margin-top":"3rem"}},[n("a-row",{staticStyle:{"background-color":"#004ec7",position:"fixed",width:"100%","z-index":"1"}},[n("a-col",{attrs:{span:"4"}},[n("h3",{staticStyle:{color:"white","font-size":"2rem","padding-left":"4rem","padding-top":"1rem"}},[t._v("Talent")])]),n("a-col",{attrs:{span:16}},[n("div",{staticClass:"center",staticStyle:{"padding-top":"2rem"}},[n("a-auto-complete",{staticStyle:{width:"80%","z-index":"0"},attrs:{dataSource:t.dataSource,placeholder:"Search skills like react,javascript,vue python",filterOption:t.filterOption},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[n("a-input",[n("a-icon",{staticClass:"certain-category-icon",attrs:{slot:"suffix",type:"search"},slot:"suffix"})],1)],1),n("span",[n("country-select",{staticClass:"ant-input",staticStyle:{width:"20%",color:"#007BFF"},attrs:{placeholder:"location"},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}})],1)],1)]),n("a-col",{attrs:{span:"4"}})],1),n("a-row",{attrs:{gutter:16}},[n("a-col",{staticStyle:{"margin-top":"6%"},attrs:{span:6}},[n("div",{staticStyle:{"padding-left":"3rem"}},[n("div",{staticStyle:{padding:"2rem",width:"12rem"}},[n("h3",{staticStyle:{color:"#0679fb"}},[n("a-icon",{attrs:{type:"filter",theme:"twoTone"}}),t._v("\n                                Filters\n\n                            ")],1),n("div",{style:{borderBottom:"1px solid #E9E9E9"}},[n("a-checkbox",{attrs:{indeterminate:t.indeterminate,checked:t.checkAll},on:{change:t.onCheckAllChange}},[t._v("\n                                    Availability\n                                ")])],1),n("br"),n("a-checkbox-group",{attrs:{options:t.plainOptions},on:{change:t.onChange},model:{value:t.checkedList,callback:function(e){t.checkedList=e},expression:"checkedList"}}),n("div",{style:{borderBottom:"1px solid #E9E9E9",marginTop:"1rem"}},[n("a-checkbox",{attrs:{indeterminate:t.indeterminate1,checked:t.checkAll1},on:{change:t.onCheckAllChange1}},[t._v("\n                                    Experience\n                                ")])],1),n("br"),n("a-checkbox-group",{attrs:{options:t.plainOptions1},on:{change:t.onChange1},model:{value:t.checkedList1,callback:function(e){t.checkedList1=e},expression:"checkedList1"}})],1)])]),n("a-col",{staticStyle:{"margin-top":"6%"},attrs:{span:14}},[t.loading?n("div",{staticClass:"loading",staticStyle:{"text-align":"center","margin-top":"20%"}},[n("a-spin",{attrs:{size:"large"}})],1):n("div",[n("a-list",{staticStyle:{"padding-bottom":"2rem"},attrs:{itemLayout:"vertical",size:"large",pagination:t.pagination,dataSource:t.filteredList},scopedSlots:t._u([{key:"renderItem",fn:function(e){return n("a-list-item",{key:"item.title"},[n("a-row",{staticStyle:{"box-shadow":"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",height:"9rem"}},[n("a-col",{staticStyle:{"background-color":"#0679FB",height:"100%"},attrs:{span:"4"}},[n("a-avatar",{staticClass:"poolavatar"},[t._v("\n                                            "+t._s(e.name)+"\n                                        ")])],1),n("a-col",{staticStyle:{padding:"2%"},attrs:{span:"15"}},[n("p",[t._v("Bio")]),n("p",[t._v(t._s(t._f("truncate")(e.about,100))),n("a",{on:{click:function(n){return t.navigateTo({name:"candidatetalentprofile",params:{candidateProfileID:e.id}})}}},[t._v("read\n                                            more")])]),n("p",[t._v("\n                                            Skills :\n                                            "),t._l(e.skills,function(e){return n("span",{key:e.id},[n("a-tag",{staticStyle:{color:"#007BFF"},attrs:{color:"#F0F6FD"}},[t._v(t._s(e))])],1)})],2)]),n("a-col",{attrs:{span:"5"}},[n("div",{staticStyle:{"padding-top":"1rem"}},[n("a-tag",{staticStyle:{color:"#007BFF"},attrs:{color:"#F0F6FD"}},[n("a-icon",{attrs:{type:"environment"}}),t._v("\n                                                "+t._s(e.location)+"\n                                            ")],1),n("a-tag",{staticStyle:{color:"#B82EA4"},attrs:{color:"#F7E7F5"}},[t._v(t._s(e.availabilty)+"\n                                            ")])],1),n("div",{staticStyle:{"margin-top":"2rem"}},[n("a-button",{attrs:{type:"primary",ghost:""},on:{click:function(n){return t.navigateTo({name:"candidatetalentprofile",params:{candidateProfileID:e.id}})}}},[t._v("\n                                                View Profile\n                                            ")])],1)])],1)],1)}}])})],1)])],1)],1)])],1)},a=[],r=(n("386d"),n("6b54"),n("6762"),n("2fdb"),n("28a5"),n("96cf"),n("3b8d")),o=n("d225"),s=(n("034b"),n("96c7")),c=n("290c"),l=n("da05"),u=n("bf80"),d=n("2b0e"),h=function t(e,n,i,a,r,s,c,l){Object(o["a"])(this,t),this.id=e,this.name=n,this.skills=i,this.about=a,this.location=r,this.availabilty=s,this.experience=c,this.portfolio=l},p=n("ce04");d["default"].use(p);var f=["Fulltime","Contract","Remote","Parttime"],g=["Fulltime","Contract","Remote","Parttime"],v=["1 year","2 years","3 years","4 years above"],m=["1 year","2 years","3 years","4 years above"],b={name:"talent",data:function(){return{visible:!1,devs:null,alldevs:null,search:"",profile:{},country:null,checkedList:g,indeterminate:!0,checkAll:!1,plainOptions:f,checkedList1:m,indeterminate1:!0,checkAll1:!1,mydevs:null,tags:[],loading:!0,dataSource:["Django","Javascript","Python","Php","Postgres","Sql","Html","Css","bootstrap","React","Java","React Native","Redux","Flask ","Go","Expressjs","Vuejs","Angular","Ios","flutter","Ionic","Rails","Meteor","AI","Cybersecurity","Blockchain","Arduino","Spring","Bitcoin","Kotlin","Scala","Nativescript ","Android","Website","Mobile"],plainOptions1:v,pStyle:{fontSize:"16px",color:"rgba(0,0,0,0.85)",lineHeight:"24px",display:"block",marginBottom:"16px"},pStyle2:{marginBottom:"24px"},listData:[],pagination:{onChange:function(t){return t},pageSize:3},actions:[{type:"star-o",text:"156"},{type:"like-o",text:"156"},{type:"message",text:"2"}]}},components:{ACol:l["b"],ARow:c["a"],Pageheader:s["a"]},mounted:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,n,i,a,r,o,s,c,l,d;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u["a"].devs();case 2:return this.devs=t.sent.data,t.next=5,u["a"].allusers();case 5:for(this.alldevs=t.sent.data,this.loading=!1,e=0;e<this.alldevs.length;e++)for(n=0;n<this.devs.length;n++)this.alldevs[e].id===this.devs[n].id&&(i=this.devs[n].skills.split(","),a=this.devs[n].id,r=this.alldevs[e].first_name[0].toUpperCase()+this.alldevs[e].last_name[0].toUpperCase(),o=i,s=this.devs[n].about,c=this.devs[n].country,l=this.devs[n].availabilty,d=new h(a,r,o,s,c,l),this.listData.push(d));case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{navigateTo:function(t){this.$router.push(t)},filterOption:function(t,e){return e.componentOptions.children[0].text.toLowerCase().indexOf(t.toLowerCase())>=0},onClose:function(){this.visible=!1},onChange:function(t){this.indeterminate=!!t.length&&t.length<f.length,this.checkAll=t.length===f.length},onCheckAllChange:function(t){Object.assign(this,{checkedList:t.target.checked?f:[],indeterminate:!1,checkAll:t.target.checked})},onChange1:function(t){this.indeterminate1=!!t.length&&t.length<v.length,this.checkAll1=t.length===v.length},onCheckAllChange1:function(t){Object.assign(this,{checkedList1:t.target.checked?v:[],indeterminate1:!1,checkAll1:t.target.checked})}},computed:{filteredList:function(){var t=this;return this.listData.filter(function(e){return e.skills.toString().toLowerCase().includes(t.search.toLowerCase())})}}},y=b,x=(n("6f94"),n("2877")),k=Object(x["a"])(y,i,a,!1,null,"a151409a",null);e["default"]=k.exports}}]);
//# sourceMappingURL=chunk-747b45ff.52c0f41b.js.map
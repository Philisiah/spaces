(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e53cb03"],{"02f4":function(t,e,n){var r=n("4588"),a=n("be13");t.exports=function(t){return function(e,n){var o,i,s=String(a(e)),c=r(n),l=s.length;return c<0||c>=l?t?"":void 0:(o=s.charCodeAt(c),o<55296||o>56319||c+1===l||(i=s.charCodeAt(c+1))<56320||i>57343?t?s.charAt(c):o:t?s.slice(c,c+2):i-56320+(o-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var r=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"0bfb":function(t,e,n){"use strict";var r=n("cb7c");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,n){"use strict";n("b0c5");var r=n("2aba"),a=n("32e9"),o=n("79e5"),i=n("be13"),s=n("2b4c"),c=n("520a"),l=s("species"),u=!o(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),p=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var d=s(t),f=!o(function(){var e={};return e[d]=function(){return 7},7!=""[t](e)}),m=f?!o(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[l]=function(){return n}),n[d](""),!e}):void 0;if(!f||!m||"replace"===t&&!u||"split"===t&&!p){var g=/./[d],b=n(i,d,""[t],function(t,e,n,r,a){return e.exec===c?f&&!a?{done:!0,value:g.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),h=b[0],v=b[1];r(String.prototype,t,h),a(RegExp.prototype,d,2==e?function(t,e){return v.call(t,this,e)}:function(t){return v.call(t,this)})}}},"23ef":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-layout",{staticStyle:{"min-height":"100vh","background-color":"#F8FAFB"},attrs:{id:"components-layout-demo-side"}},[n("pageheader"),n("a-layout",{style:{backgroundColor:"#F8FAFB",marginTop:"1rem"}},[n("a-layout-content",{staticStyle:{"margin-top":"5rem"}},[n("a-row",[n("a-col",{staticClass:"jobdetails",attrs:{xs:{span:20,offset:2},sm:{span:20,offset:2},md:{span:20,offset:2},lg:{span:14,offset:6},xl:{span:14,offset:6}}},[t.dataload?n("div",{staticStyle:{"text-align":"center"}},[n("a-spin")],1):n("div",[n("div",{staticStyle:{"border-bottom":"1px solid #e8e8e8","margin-bottom":"1%","padding-bottom":"3%"}},[n("span",[n("span",{staticStyle:{"font-weight":"700","font-size":"large"}},[t._v(t._s(t.job.title))]),"developer"===t.currentUserProfile.user_type&&!1===t.applied?n("span",{staticStyle:{float:"right"}},[n("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.ApplyJob(t.job.id,t.currentUserProfile.id)}}},[t._v("Apply")])],1):t._e(),"developer"===t.currentUserProfile.user_type&&!0===t.applied?n("span",{staticStyle:{float:"right"}},[n("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.navigateTo({name:"manageapplications"})}}},[t._v("Manage Job application")])],1):t._e()])]),n("div",["developer"===t.currentUserProfile.user_type&&t.applied?n("a-alert",{attrs:{message:"Job application successful",type:"success",closeText:"Close Now"}}):t._e(),n("p",[n("strong",[t._v("Company name:")]),t._v(" "+t._s(t.job.company)+"\n                                "),n("span",{staticStyle:{"margin-left":"5%"}},[t._v("\n                                Location : "+t._s(t.job.location)+"\n                            ")])]),n("p",[t._v("Monthly renumeration * : "+t._s(t.job.remuneration))]),n("p",[t._v("\n                                Skills looking for :\n                                "),t._l(t.skills,function(e){return n("span",{key:e},[n("a-tag",{staticStyle:{color:"#007BFF"},attrs:{color:"#F0F6FD"}},[t._v(t._s(e))])],1)})],2),n("p",[t._v("Application Deadline : "+t._s(t.deadline))])],1),n("div",[n("p",{staticStyle:{"font-weight":"700"}},[t._v("Job Details")]),n("p",[t._v(t._s(t.job.description))])])])])],1)],1)],1)],1)},a=[],o=(n("28a5"),n("96cf"),n("3b8d")),i=n("bf80"),s=n("96c7"),c=n("290c"),l=n("da05"),u=n("688c"),p=n("c1df"),d=n.n(p),f={name:"jobdetails",data:function(){return{job:{},skills:null,currentUserProfile:{},applied:!1,myjobs:[],dataload:!1,deadline:""}},components:{ACol:l["b"],ARow:c["a"],Pageheader:s["a"]},mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(d.a,e={headers:{Authorization:"JWT "+this.$store.state.token}},this.dataload=!0,!this.$store.state.user.pk){t.next=16;break}return t.next=6,i["a"].currentuser(this.$store.state.user.pk,e);case 6:return this.currentUserProfile=t.sent.data,t.next=9,u["a"].jobdetails(this.$route.params.jobId,e);case 9:return this.job=t.sent.data,this.skills=this.job.tech_stack.split(","),t.next=13,u["a"].candidatejobs(this.$store.state.user.pk,e);case 13:if(this.myjobs=t.sent.data,this.deadline=d()(this.job.deadline).format("YYYY-MM-DD HH:mm:ss"),this.myjobs.length>0)for(n=0;n<this.myjobs.length;n++)this.myjobs[n].job.id===this.$route.params.jobId&&(this.applied=!0);else this.applied=!1;case 16:this.dataload=!1;case 17:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{navigateTo:function(t){this.$router.push(t)},openNotification:function(){this.$notification.open({message:"Notification Title",description:"This is the content of the notification. This is the content of the notification. This is the content of the notification.",onClick:function(){console.log("Notification Clicked!")}})},ApplyJob:function(t,e){var n=this,r={headers:{Authorization:"JWT "+this.$store.state.token}};u["a"].applyjob({job:t,candidate:e,recruiter:this.job.posted_by,stage:"new",selected:!1},r).then(function(t){n.applied=!0}).catch(function(t){return t})}}},m=f,g=(n("31fc"),n("2877")),b=Object(g["a"])(m,r,a,!1,null,"7b37b544",null);e["default"]=b.exports},"28a5":function(t,e,n){"use strict";var r=n("aae3"),a=n("cb7c"),o=n("ebd6"),i=n("0390"),s=n("9def"),c=n("5f1b"),l=n("520a"),u=n("79e5"),p=Math.min,d=[].push,f="split",m="length",g="lastIndex",b=4294967295,h=!u(function(){RegExp(b,"y")});n("214f")("split",2,function(t,e,n,u){var v;return v="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[m]||2!="ab"[f](/(?:ab)*/)[m]||4!="."[f](/(.?)(.?)/)[m]||"."[f](/()()/)[m]>1||""[f](/.?/)[m]?function(t,e){var a=String(this);if(void 0===t&&0===e)return[];if(!r(t))return n.call(a,t,e);var o,i,s,c=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,f=void 0===e?b:e>>>0,h=new RegExp(t.source,u+"g");while(o=l.call(h,a)){if(i=h[g],i>p&&(c.push(a.slice(p,o.index)),o[m]>1&&o.index<a[m]&&d.apply(c,o.slice(1)),s=o[0][m],p=i,c[m]>=f))break;h[g]===o.index&&h[g]++}return p===a[m]?!s&&h.test("")||c.push(""):c.push(a.slice(p)),c[m]>f?c.slice(0,f):c}:"0"[f](void 0,0)[m]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,r){var a=t(this),o=void 0==n?void 0:n[e];return void 0!==o?o.call(n,a,r):v.call(String(a),n,r)},function(t,e){var r=u(v,t,this,e,v!==n);if(r.done)return r.value;var l=a(t),d=String(this),f=o(l,RegExp),m=l.unicode,g=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(h?"y":"g"),y=new f(h?l:"^(?:"+l.source+")",g),k=void 0===e?b:e>>>0;if(0===k)return[];if(0===d.length)return null===c(y,d)?[d]:[];var j=0,_=0,x=[];while(_<d.length){y.lastIndex=h?_:0;var $,w=c(y,h?d:d.slice(_));if(null===w||($=p(s(y.lastIndex+(h?0:_)),d.length))===j)_=i(d,_,m);else{if(x.push(d.slice(j,_)),x.length===k)return x;for(var U=1;U<=w.length-1;U++)if(x.push(w[U]),x.length===k)return x;_=j=$}}return x.push(d.slice(j)),x}]})},"31fc":function(t,e,n){"use strict";var r=n("bb6c"),a=n.n(r);a.a},"4c13":function(t,e,n){"use strict";var r=n("a7a3"),a=n.n(r);a.a},"520a":function(t,e,n){"use strict";var r=n("0bfb"),a=RegExp.prototype.exec,o=String.prototype.replace,i=a,s="lastIndex",c=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t[s]||0!==e[s]}(),l=void 0!==/()??/.exec("")[1],u=c||l;u&&(i=function(t){var e,n,i,u,p=this;return l&&(n=new RegExp("^"+p.source+"$(?!\\s)",r.call(p))),c&&(e=p[s]),i=a.call(p,t),c&&i&&(p[s]=p.global?i.index+i[0].length:e),l&&i&&i.length>1&&o.call(i[0],n,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(i[u]=void 0)}),i}),t.exports=i},"5f1b":function(t,e,n){"use strict";var r=n("23c6"),a=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var o=n.call(t,e);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"688c":function(t,e,n){"use strict";var r=n("3f4a");e["a"]={pickdeveloper:function(t,e){return Object(r["a"])().post("marketplace/pickdev ",t,e)},mydevelopers:function(t,e){return Object(r["a"])().get("marketplace/mydevs/".concat(t," "),e)},mydeveloperssimple:function(t,e){return Object(r["a"])().get("marketplace/mydevssimple/".concat(t," "),e)},allmyjobapplicants:function(t,e){return Object(r["a"])().get("marketplace/myapplicants/".concat(t," "),e)},alljobs:function(){return Object(r["a"])().get("marketplace/alljobs")},myjobs:function(t,e){return Object(r["a"])().get("marketplace/myjobs/".concat(t),e)},myjobssliced:function(t,e){return Object(r["a"])().get("marketplace/myjobssliced/".concat(t),e)},applicants:function(t,e){return Object(r["a"])().get("marketplace/jobapplicants/".concat(t),e)},applicantssliced:function(t,e){return Object(r["a"])().get("marketplace/jobapplicantssliced/".concat(t),e)},specificjob:function(t,e){return Object(r["a"])().get("marketplace/specificjob/".concat(t),e)},specificjobapplicants:function(t,e){return Object(r["a"])().get("marketplace/specificjobapplicants/".concat(t),e)},joboneapplicant:function(t,e,n){return Object(r["a"])().get("marketplace/myjobapplication/".concat(t,"/").concat(e),n)},jobdetails:function(t,e){return Object(r["a"])().get("marketplace/jobdetails/".concat(t),e)},candidatejobs:function(t,e){return Object(r["a"])().get("marketplace/candidatejobs/".concat(t),e)},updatejob:function(t,e,n){return Object(r["a"])().patch("marketplace/updatejob/".concat(t," "),e,n)},pickreject:function(t,e,n){return Object(r["a"])().patch("marketplace/pickreject/".concat(t," "),e,n)},retrieveapplication:function(t,e){return Object(r["a"])().get("marketplace/applicationprofile/".concat(t," "),e)},candidatemanager:function(t,e,n){return Object(r["a"])().patch("marketplace/candidateinfoupdater/".concat(t," "),e,n)},retrievecandidate:function(t,e){return Object(r["a"])().get("marketplace/candidateinfo/".concat(t," "),e)},unpublishjob:function(t,e,n){return Object(r["a"])().patch("marketplace/unpublishjob/".concat(t," "),e,n)},createjob:function(t,e){return Object(r["a"])().post("marketplace/createjob",t,e)},pickrecommended:function(t,e){return Object(r["a"])().post("marketplace/pickrecommended",t,e)},applyjob:function(t,e){return Object(r["a"])().post("marketplace/applyjob",t,e)},pickedapplications:function(t,e){return Object(r["a"])().get("marketplace/pickedapplications/".concat(t," "),e)},jobmanagerview:function(t,e){return Object(r["a"])().get("marketplace/jobmanagerview/".concat(t," "),e)},talentpickedmanagerview:function(t,e){return Object(r["a"])().get("marketplace/talentpickedmanagerview/".concat(t," "),e)}}},"96c7":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-layout-header",{style:{position:"fixed",zIndex:1,width:"100%",backgroundColor:"white",borderBottom:"1px solid #e8e8e8"},attrs:{id:"components-layout-demo-fixed"}},[r("div",{staticClass:"logo"},[r("router-link",{attrs:{to:"/"}},[r("img",{staticStyle:{width:"100%","margin-left":"1.5rem"},attrs:{src:n("b8fb")}})])],1),r("hide-at",{attrs:{breakpoint:"mediumAndBelow"}},[r("div",{staticClass:"ant-menu-horizontal ",style:{lineHeight:"64px",float:"right",borderBottom:0}},[r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/talent"}},[t._v("Talent")]),t.$store.state.isUserLoggedIn&&"recruiter"===t.$store.state.usertype&&"complete"===t.currentUserProfile.stage?r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/recruiter"}},[t._v("My account\n            ")]):t._e(),t.$store.state.isUserLoggedIn&&"recruiter"===t.$store.state.usertype&&"complete"!==t.currentUserProfile.stage?r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/register"}},[t._v("My account\n            ")]):t._e(),t.$store.state.isUserLoggedIn&&"developer"===t.$store.state.usertype&&"complete"!==t.currentUserProfile.stage?r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/register"}},[t._v("My account\n            ")]):t._e(),t.$store.state.isUserLoggedIn&&"developer"===t.$store.state.usertype&&"complete"===t.currentUserProfile.stage?r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/developer"}},[t._v("My account\n            ")]):t._e(),t.$store.state.isUserLoggedIn?t._e():r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/login"}},[t._v("\n                Login\n            ")]),t.$store.state.isUserLoggedIn?t._e():r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/register"}},[t._v("Sign up\n            ")]),r("a",[t.$store.state.isUserLoggedIn?r("a-button",{staticStyle:{"margin-bottom":"0",border:"0","-webkit-box-shadow":"0 0 0 rgba(255,255,255,0.01)",color:"#1890ff"},on:{click:t.logout}},[t._v("Logout\n                ")]):t._e()],1)],1)]),r("show-at",{attrs:{breakpoint:"mediumAndBelow"}},[r("div",{staticStyle:{float:"right"}},[r("Menusider")],1)])],1)},a=[],o=(n("96cf"),n("3b8d")),i=n("8808"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-dropdown",{attrs:{trigger:["click"],placement:"bottomCenter"}},[n("a",{staticClass:"ant-dropdown-link",attrs:{href:"#"}},[n("a-icon",{attrs:{type:"menu-fold"}})],1),n("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[n("a-menu-item",{key:"0"},[n("router-link",{attrs:{to:"/talent"}},[n("span",[t._v("Talent")])])],1),t.$store.state.isUserLoggedIn&&"recruiter"===t.$store.state.usertype&&"complete"===t.currentUserProfile.stage?n("a-menu-item",{key:"1"},[n("router-link",{attrs:{to:"/recruiter"}},[n("span",[t._v("My account")])])],1):t._e(),t.$store.state.isUserLoggedIn&&"recruiter"===t.$store.state.usertype&&"complete"!==t.currentUserProfile.stage?n("a-menu-item",{key:"6"},[n("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/register"}},[t._v("My account\n              ")])],1):t._e(),t.$store.state.isUserLoggedIn&&"developer"===t.$store.state.usertype?n("a-menu-item",{key:"2"},[n("router-link",{attrs:{to:"/developer"}},[n("span",[t._v("My account")])])],1):t._e(),t.$store.state.isUserLoggedIn&&"developer"===t.$store.state.usertype&&"complete"!==t.currentUserProfile.stage?n("a-menu-item",{key:"7"},[n("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/register"}},[t._v("My account\n              ")])],1):t._e(),t.$store.state.isUserLoggedIn?t._e():n("a-menu-item",{key:"3"},[n("router-link",{attrs:{to:"/login"}},[n("span",[t._v("Login")])])],1),t.$store.state.isUserLoggedIn?t._e():n("a-menu-item",{key:"4"},[n("router-link",{attrs:{to:"/register"}},[n("span",[t._v("Register")])])],1),t.$store.state.isUserLoggedIn?n("a-menu-item",{key:"5"},[n("a",{on:{click:t.logout}},[t._v("Logout")])]):t._e()],1)],1)},c=[],l={name:"Menusider",methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$store.dispatch("setNext",null),this.$router.push({name:"home"})}}},u=l,p=n("2877"),d=Object(p["a"])(u,s,c,!1,null,"c62dddba",null),f=d.exports,m=n("bf80"),g={name:"Header",components:{hideAt:i["hideAt"],showAt:i["showAt"],Menusider:f},data:function(){return{currentUserProfile:{}}},mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e={headers:{Authorization:"JWT "+this.$store.state.token}},!this.$store.state.user){t.next=5;break}return t.next=4,m["a"].currentuser(this.$store.state.user.pk,e);case 4:this.currentUserProfile=t.sent.data;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$store.dispatch("setNext",null),this.$router.push({name:"home"})}}},b=g,h=(n("4c13"),Object(p["a"])(b,r,a,!1,null,"c4d30e3a",null));e["a"]=h.exports},a7a3:function(t,e,n){},aae3:function(t,e,n){var r=n("d3f4"),a=n("2d95"),o=n("2b4c")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==a(t))}},b0c5:function(t,e,n){"use strict";var r=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},bb6c:function(t,e,n){}}]);
//# sourceMappingURL=chunk-7e53cb03.f9dbbe50.js.map
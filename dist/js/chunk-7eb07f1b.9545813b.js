(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7eb07f1b"],{3648:function(t,a,s){t.exports=s.p+"img/board.6ee87c46.svg"},b67e:function(t,a,s){},c1bd:function(t,a,s){"use strict";var e=s("b67e"),n=s.n(e);n.a},c8ae:function(t,a,s){t.exports=s.p+"img/resume.7b961d30.svg"},f107:function(t,a,s){t.exports=s.p+"img/check1.53501821.svg"},f47d:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-layout",{staticStyle:{"min-height":"100vh"},attrs:{id:"components-layout-demo-side"}},[e("CandidateSider"),e("a-layout",[e("a-layout-content",{staticStyle:{"background-color":"white"}},[e("DevHeader"),e("div",{style:{padding:"5px",background:"#fff",marginTop:"0"}},[e("a-row",{staticStyle:{"margin-bottom":"2%"}},[e("a-col",{attrs:{xs:{span:24,offset:1},sm:{span:24,offset:2},md:{span:24,offset:2},lg:{span:20,offset:0},xl:{span:20,offset:0}}},[e("h3",{staticStyle:{"margin-left":"1rem",color:"#1976D2","font-weight":"bold"}},[t._v("\n                            What would you like to do today?\n                        ")])]),e("a-col",{attrs:{xs:{span:24,offset:1},sm:{span:24,offset:2},md:{span:24,offset:2},lg:{span:4,offset:0},xl:{span:4,offset:0}}},[e("a-switch",{attrs:{defaultChecked:""},on:{change:t.Available},model:{value:t.currentUserProfile.available,callback:function(a){t.$set(t.currentUserProfile,"available",a)},expression:"currentUserProfile.available"}}),e("a-tooltip",[e("template",{slot:"title"},[t._v("\n                                Your profile will be published on the talent pool\n                            ")]),t._v("\n                            Make profile public\n                        ")],2)],1)],1),e("a-row",{staticStyle:{"padding-right":"2rem","padding-left":"1.5rem","padding-bottom":"1.5rem"},attrs:{gutter:16}},[e("router-link",{attrs:{to:"/assessment"}},[e("a-col",{staticClass:"boxes",attrs:{xs:{span:24,offset:1},sm:{span:10,offset:2},md:{span:10,offset:2},lg:{span:10,offset:1},xl:{span:6,offset:0}}},[e("a-row",{staticClass:"ant-card actioncards"},[e("a-col",{attrs:{span:"24"}},[e("div",{staticStyle:{"text-align":"center"}},[e("img",{staticClass:"poolavatar",attrs:{src:s("f107")}})])]),e("a-col",{staticStyle:{"text-align":"center"},attrs:{span:"24"}},[e("p",{staticClass:"ant-card-head-title ",staticStyle:{"font-weight":"bold"}},[t._v("Get Verified")]),e("p",{staticStyle:{margin:"0"}},[t._v("Put your skills to the test")])])],1)],1)],1),e("router-link",{attrs:{to:"/manageapplications"}},[e("a-col",{staticClass:"boxes",attrs:{xs:{span:24,offset:1},sm:{span:10,offset:2},md:{span:10,offset:2},lg:{span:10,offset:1},xl:{span:6,offset:0}}},[e("a-row",{staticClass:"ant-card actioncards"},[e("a-col",{attrs:{span:"24"}},[e("div",{staticStyle:{"text-align":"center"}},[e("img",{staticClass:"poolavatar",attrs:{src:s("c8ae")}})])]),e("a-col",{staticStyle:{"text-align":"center"},attrs:{span:"24"}},[e("p",{staticClass:"ant-card-head-title",staticStyle:{"font-weight":"bold"}},[t._v("Manage applications")]),e("p",{staticStyle:{margin:"0"}},[t._v("View and manage current jobs")])])],1)],1)],1),e("router-link",{attrs:{to:"/jobs"}},[e("a-col",{staticClass:"boxes",attrs:{xs:{span:24,offset:1},sm:{span:10,offset:2},md:{span:10,offset:2},lg:{span:10,offset:1},xl:{span:6,offset:0}}},[e("a-row",{staticClass:"ant-card actioncards"},[e("a-col",{attrs:{span:"24"}},[e("div",{staticStyle:{"text-align":"center"}},[e("img",{staticClass:"poolavatar",attrs:{src:s("3648")}})])]),e("a-col",{staticStyle:{"text-align":"center"},attrs:{span:"24"}},[e("p",{staticClass:"ant-card-head-title",staticStyle:{"font-weight":"bold"}},[t._v("Job board")]),e("p",{staticStyle:{margin:"0"}},[t._v("View and apply for jobs")])])],1)],1)],1),e("router-link",{attrs:{to:"/portfolio"}},[e("a-col",{staticClass:"boxes",attrs:{xs:{span:24,offset:1},sm:{span:10,offset:2},md:{span:10,offset:2},lg:{span:10,offset:1},xl:{span:6,offset:0}}},[e("a-row",{staticClass:"ant-card actioncards"},[e("a-col",{attrs:{span:"24"}},[e("div",{staticStyle:{"text-align":"center"}},[e("img",{staticClass:"poolavatar",attrs:{src:s("f64c")}})])]),e("a-col",{staticStyle:{"text-align":"center"},attrs:{span:"24"}},[e("p",{staticClass:"ant-card-head-title",staticStyle:{"font-weight":"bold"}},[t._v("My portfolio")]),e("p",{staticStyle:{margin:"0"}},[t._v("Make your profile more appealing")])])],1)],1)],1)],1)],1),e("br")],1)],1)],1)},n=[],o=(s("96cf"),s("3b8d")),r=s("bf80"),i=s("688c"),c=s("da05"),l=s("290c"),f=s("e63b"),p=s("bc0c"),d={name:"DevDashboard",data:function(){return{currentUserProfile:{},myjobs:[]}},components:{ARow:l["a"],ACol:c["b"],DevHeader:p["a"],CandidateSider:f["a"]},mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(a={headers:{Authorization:"JWT "+this.$store.state.token}},!this.$store.state.user.pk){t.next=8;break}return t.next=4,r["a"].currentuser(this.$store.state.user.pk,a);case 4:return this.currentUserProfile=t.sent.data,t.next=7,i["a"].candidatejobs(this.$store.state.user.pk,a);case 7:this.myjobs=t.sent.data;case 8:case"end":return t.stop()}},t,this)}));function a(){return t.apply(this,arguments)}return a}(),methods:{navigateTo:function(t){this.$router.push(t)},Available:function(){var t={headers:{Authorization:"JWT "+this.$store.state.token}};r["a"].updatepatch(this.$store.state.user.pk,{available:this.currentUserProfile.available},t).then(function(t){return t}).catch(function(t){return t})}}},u=d,g=(s("c1bd"),s("2877")),m=Object(g["a"])(u,e,n,!1,null,"0f1969e4",null);a["default"]=m.exports},f64c:function(t,a,s){t.exports=s.p+"img/curriculum.4a00b0c6.svg"}}]);
//# sourceMappingURL=chunk-7eb07f1b.9545813b.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-230ef86a"],{1226:function(t,e,n){"use strict";var r=n("3f4a");e["a"]={projects:function(t,e){return Object(r["a"])().get("projects/projects/".concat(t),e)},recommendedprojects:function(t,e){return Object(r["a"])().get("projects/recommendedprojects/".concat(t),e)},allprojects:function(t){return Object(r["a"])().get("projects/allprojects",t)},projectdetails:function(t,e){return Object(r["a"])().get("projects/projectdetails/".concat(t),e)},recentprojects:function(t,e){return Object(r["a"])().get("projects/recentprojects/".concat(t),e)},myrecentprojects:function(t,e){return Object(r["a"])().get("projects/myrecentprojects/".concat(t),e)},developerprojects:function(t,e){return Object(r["a"])().get("projects/developerprojects/".concat(t),e)},developerprojectreport:function(t,e,n){return Object(r["a"])().get("projects/developerprojectreport/".concat(t,"/").concat(e,"/"),n)},getverified:function(t){return Object(r["a"])().get("projects/frameworks",t)},selfverifyproject:function(t,e,n){return Object(r["a"])().get("projects/selfverifyproject/".concat(t,"/").concat(e),n)},selfassessprojectcreate:function(t,e){return Object(r["a"])().post("createassess",t,e)},myprojects:function(t,e){return Object(r["a"])().get("myprojects/".concat(t),e)},testcenters:function(t,e){return Object(r["a"])().get("mytestcenters/".concat(t),e)},myprojectdetails:function(t,e){return Object(r["a"])().get("myprojectdetails/".concat(t),e)},myprojectdetailspatch:function(t,e,n){return Object(r["a"])().patch("myprojectdetailsupdater/".concat(t),e,n)},developerselectproject:function(t,e){return Object(r["a"])().post("projects/developerprojects/".concat(t),e)}}},"1af6":function(t,e,n){var r=n("63b6");r(r.S,"Array",{isArray:n("9003")})},3575:function(t,e,n){"use strict";var r=n("c8f3c"),s=n.n(r);s.a},"75fc":function(t,e,n){"use strict";var r=n("a745"),s=n.n(r);function c(t){if(s()(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var a=n("774e"),i=n.n(a),o=n("c8bb"),u=n.n(o);function p(t){if(u()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return i()(t)}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function f(t){return c(t)||p(t)||l()}n.d(e,"a",function(){return f})},"774e":function(t,e,n){t.exports=n("d2d5")},a745:function(t,e,n){t.exports=n("f410")},c8bb:function(t,e,n){t.exports=n("54a1")},c8f3c:function(t,e,n){},f410:function(t,e,n){n("1af6"),t.exports=n("584a").Array.isArray},f8e8:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-layout",{staticStyle:{"min-height":"100vh"},attrs:{id:"components-layout-demo-side"}},[n("CandidateSider"),n("a-layout",[n("a-layout-content",{staticStyle:{"background-color":"white"}},[n("DevHeader"),n("div",{style:{padding:"0 2%",background:"#fff"}},[n("a-row",{staticStyle:{"margin-top":"1rem","margin-bottom":"2%"}},[n("a-col",{attrs:{xs:{span:18,offset:2},sm:{span:24,offset:1},md:{span:24,offset:1},lg:{span:24,offset:0},xl:{span:24,offset:0}}})],1),t.dataload?n("div",[n("div",{staticStyle:{"text-align":"center"}},[n("a-spin")],1)]):n("div",[null===t.info?n("div",{style:{boxShadow:"0 .125rem .25rem rgba(0,0,0,.075)!important",padding:"3%"}},[n("a-steps",{attrs:{current:t.current}},t._l(t.steps,function(t){return n("a-step",{key:t.title,attrs:{title:t.title}})}),1),n("div",{staticClass:"steps-content"},[0===t.current?n("div",[n("a-row",{staticStyle:{"padding-right":"2rem","padding-bottom":"1.5rem"},attrs:{gutter:16}},[t.centererror?n("p",{staticStyle:{color:"red"}},[t._v(t._s(t.centererror))]):t._e(),n("div",[t.testcenters.length>0?n("div",t._l(t.testcenters,function(e){return n("a-col",{key:e,staticClass:"boxes",attrs:{xs:{span:16,offset:2},sm:{span:12,offset:0},md:{span:10,offset:0},lg:{span:8,offset:0},xl:{span:8,offset:0}}},[n("a",{on:{click:function(n){return t.pick(e.id)}}},[n("a-card",{staticClass:"actioncards",attrs:{hoverable:""}},[n("p",{staticStyle:{"font-weight":"bold"}},[t._v("\n                                                        "+t._s(e.country))]),n("p",{staticStyle:{margin:"0"}},[t._v("from:\n                                                        "+t._s(e.start_time)+" "),n("br"),t._v("to: "+t._s(e.end_time)+" ")]),n("p",{staticStyle:{margin:"0"}},[t._v("Venue: "+t._s(e.venue))])])],1)])}),1):t._e()])])],1):1===t.current?n("div",[n("div",[n("p",[t._v("Be modest please pick the set of you can achieve within the time limit of the\n                                    test center")]),t._l(t.recommendationtags,function(e){return[n("a-checkable-tag",{key:e,staticStyle:{"border-color":"blue","font-size":"14px","margin-bottom":"1rem"},attrs:{checked:t.selectedTags.indexOf(e)>-1},on:{change:function(n){return t.handleChange(e,n)}}},[t._v("\n                                        "+t._s(e)+"\n                                    ")])]})],2)]):t._e()]),!1===t.loading?n("div",{staticClass:"steps-action"},[t.current<t.steps.length-1?n("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.next(t.current)}}},[t._v("\n                            Next\n                        ")]):t._e(),t.current==t.steps.length-1?n("a-button",{attrs:{type:"primary"},on:{click:t.SelectCenter}},[t._v("\n                            Done\n                        ")]):t._e(),t.current>0?n("a-button",{staticStyle:{"margin-left":"8px"},on:{click:t.prev}},[t._v("\n                            Previous\n                        ")]):t._e()],1):n("div",[n("div",{staticStyle:{"text-align":"center"}},[n("a-spin")],1)])],1):n("div",[n("p",{staticClass:"info"},[t._v(t._s(t.info))]),n("a-card",{staticClass:"actioncards",attrs:{hoverable:""}},[n("p",{staticStyle:{"font-weight":"bold"}},[t._v("\n                            "+t._s(t.appointment.test_center.country))]),n("p",{staticStyle:{margin:"0"}},[t._v("from:\n                            "+t._s(t.appointment.test_center.start_time)+" "),n("br"),t._v("to: "+t._s(t.appointment.test_center.end_time)+"\n                        ")]),n("p",{staticStyle:{margin:"0"}},[t._v("Venue: "+t._s(t.appointment.test_center.venue))])])],1)])],1)],1)],1)],1)},s=[],c=n("75fc"),a=(n("96cf"),n("3b8d")),i=n("bf80"),o=n("e63b"),u=n("bc0c"),p=n("da05"),l=n("290c"),f=n("3f4a"),d={schedulejob:function(t,e){return Object(f["a"])().post("schedulejob/",t,e)},testcenters:function(t){return Object(f["a"])().get("servermanagement/test_centers",t)},selectcenter:function(t,e){return Object(f["a"])().post("servermanagement/manual_test/",t,e)}},h=n("1226"),g=n("688c"),m={name:"TestCenters",data:function(){return{loading:!1,dataload:!1,currentUserProfile:{},testcenters:[],selected_center:"",current:0,steps:[{title:"Select test center"},{title:"Pick framework"}],pickedcenter:{center:"",tags:""},recommendationtags:["Django","Postgres","Sql","bootstrap","React","Java","React Native","Redux","Flask ","Go","Expressjs","Vuejs","Angular","Ios","flutter","Ionic","Rails","Meteor","Arduino","Spring","Nativescript ","Android"],selectedTags:[],centererror:"",info:null,appointment:null}},components:{DevHeader:u["a"],CandidateSider:o["a"],ACol:p["b"],ARow:l["a"]},mounted:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e={headers:{Authorization:"JWT "+this.$store.state.token}},this.dataload=!0,!this.$store.state.user.pk){t.next=14;break}return t.next=5,i["a"].currentuser(this.$store.state.user.pk,e);case 5:return this.currentUserProfile=t.sent.data,t.next=8,d.testcenters(e);case 8:return this.testcenters=t.sent.data,t.next=11,h["a"].testcenters(this.$store.state.user.pk,e);case 11:if(this.projectlist=t.sent.data,this.projectlist)for(n=0;n<this.projectlist.length;n++)this.projectlist[n].test_center&&(this.info="you already have an existing appointment",this.appointment=this.projectlist[n]);this.dataload=!1;case 14:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{navigateTo:function(t){this.$router.push(t)},pick:function(t){this.current++,this.pickedcenter.center=t,this.centererror=""},SelectCenter:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e={headers:{Authorization:"JWT "+this.$store.state.token}},this.loading=!0,d.selectcenter({candidate:this.$store.state.user.pk,test_center:this.pickedcenter.center,frameworktested:this.pickedcenter.tags,test_choice:"on_site_test"},e).then(function(t){h["a"].testcenters(n.$store.state.user.pk,e).then(function(t){if(n.projectlist=t.data,n.projectlist)for(var e=0;e<n.projectlist.length;e++)n.projectlist[e].test_center&&(n.info="You have successfully booked an appointment. Check your mail for more details.",n.appointment=n.projectlist[e],n.loading=!1)}),g["a"].newonsite(t.data.id,e).then().catch()});case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),next:function(t){0===t&&(""===this.pickedcenter.center?this.centererror="please pick center":this.current++)},prev:function(){this.current--},handleClose:function(t){var e=this.tags.filter(function(e){return e!==t});this.tags=e;var n=this.tags.join(", ");this.pickedcenter.tags=n},showInput:function(){this.inputVisible=!0,this.$nextTick(function(){this.$refs.input.focus()})},handleInputChange:function(t){this.inputValue=t.target.value},handleInputConfirm:function(){var t=this.inputValue,e=this.tags;t&&-1===e.indexOf(t)&&(e=[].concat(Object(c["a"])(e),[t]));var n=e.join(", ");this.pickedcenter.tags=n,Object.assign(this,{tags:e,inputVisible:!1,inputValue:""})},handleChange:function(t,e){var n=this.selectedTags,r=e?[].concat(Object(c["a"])(n),[t]):n.filter(function(e){return e!==t});this.selectedTags=r;var s=this.selectedTags.join(", ");this.pickedcenter.tags=s}}},j=m,v=(n("3575"),n("2877")),b=Object(v["a"])(j,r,s,!1,null,"289f4bfe",null);e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-230ef86a.fbca5c0c.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fd6ad27e"],{1226:function(t,e,r){"use strict";var a=r("3f4a");e["a"]={projects:function(t,e){return Object(a["a"])().get("projects/projects/".concat(t),e)},recommendedprojects:function(t,e){return Object(a["a"])().get("projects/recommendedprojects/".concat(t),e)},allprojects:function(t){return Object(a["a"])().get("projects/allprojects",t)},projectdetails:function(t,e){return Object(a["a"])().get("projects/projectdetails/".concat(t),e)},recentprojects:function(t,e){return Object(a["a"])().get("projects/recentprojects/".concat(t),e)},myrecentprojects:function(t,e){return Object(a["a"])().get("projects/myrecentprojects/".concat(t),e)},developerprojects:function(t,e){return Object(a["a"])().get("projects/developerprojects/".concat(t),e)},developerprojectreport:function(t,e,r){return Object(a["a"])().get("projects/developerprojectreport/".concat(t,"/").concat(e,"/"),r)},getverified:function(t){return Object(a["a"])().get("projects/frameworks",t)},selfverifyproject:function(t,e,r){return Object(a["a"])().get("projects/selfverifyproject/".concat(t,"/").concat(e),r)},selfassessprojectcreate:function(t,e){return Object(a["a"])().post("createassess",t,e)},myprojects:function(t,e){return Object(a["a"])().get("myprojects/".concat(t),e)},testcenters:function(t,e){return Object(a["a"])().get("mytestcenters/".concat(t),e)},myprojectdetails:function(t,e){return Object(a["a"])().get("myprojectdetails/".concat(t),e)},myprojectdetailspatch:function(t,e,r){return Object(a["a"])().patch("myprojectdetailsupdater/".concat(t),e,r)},developerselectproject:function(t,e){return Object(a["a"])().post("projects/developerprojects/".concat(t),e)}}},"82a8":function(t,e,r){"use strict";var a=r("c574"),i=r.n(a);i.a},c574:function(t,e,r){},fe1d:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-layout",{staticStyle:{"min-height":"100vh"},attrs:{id:"components-layout-demo-side"}},[r("CandidateSider"),r("a-layout",[r("a-layout-content",{staticStyle:{"background-color":"white"}},[r("DevHeader"),r("div",{style:{padding:"6px 20px",background:"#fff",minHeight:"75vh",marginTop:"0%",marginLeft:"1%",marginRight:"1%"}},[r("a-row",{attrs:{gutter:"8"}},[r("a-col",{staticStyle:{"margin-bottom":"1rem"},attrs:{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:24,offset:0},lg:{span:14,offset:0},xl:{span:14,offset:0}}},[r("show-at",{attrs:{breakpoint:"mediumAndBelow"}},[!1===t.application.project.hasvideo?r("div",[t.application.project.projectimage1?r("div",[r("img",{staticStyle:{width:"100%"},attrs:{src:t.application.project.projectimage1}})]):t._e()]):t._e(),t.application.project.hasvideo?r("div",[r("youtube",{attrs:{"video-id":t.videoid,width:270,"player-vars":t.playerVars},on:{playing:t.playing}})],1):t._e()]),r("hide-at",{attrs:{breakpoint:"mediumAndBelow"}},[!1===t.application.project.hasvideo?r("div",[t.application.project.projectimage1?r("div",[r("img",{staticStyle:{width:"100%"},attrs:{src:t.application.project.projectimage1}})]):t._e(),t.application.project.hasvideo?r("div",[r("youtube",{attrs:{"video-id":t.videoid,width:"600","player-vars":t.playerVars},on:{playing:t.playing}})],1):t._e()]):t._e()]),r("div",{staticStyle:{border:"1px solid #e8e8e8",padding:"2%","margin-top":"2%"}},[r("h4",[r("strong",[t._v("Project name:")]),t._v(" "+t._s(t.application.project.name))]),r("p",[t._v(t._s(t.application.project.description))])])],1),r("a-col",{staticStyle:{padding:"0 1%"},attrs:{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:24,offset:0},lg:{span:10,offset:0},xl:{span:10,offset:0}}},[r("div",{staticStyle:{border:"1px solid #e8e8e8",padding:"2%"}},["invite_accepted"===t.application.stage?r("div",{staticStyle:{"margin-bottom":"2%"}},[r("p",[t._v("Pick Date and time of choice to take the project")]),r("a-date-picker",{staticStyle:{"margin-bottom":"1rem"},attrs:{format:"YYYY-MM-DD HH:mm:ss",disabledDate:t.disabledDate,showTime:{defaultValue:t.moment("00:00","HH:mm")}},model:{value:t.projectstarttime,callback:function(e){t.projectstarttime=e},expression:"projectstarttime"}}),r("a-button",{staticStyle:{"margin-left":"2%"},attrs:{type:"primary"},on:{click:function(e){return t.Settime(t.application.id)}}},[t._v("\n                                    Submit\n                                ")]),r("br"),t.timeseterror?r("span",[r("span",{staticStyle:{color:"red"}},[t._v("* Please pick a time to continue")])]):t._e()],1):t._e(),"time_set"===t.application.stage?r("div",{staticStyle:{"margin-bottom":"2%"}},[r("p",[t._v("IDE link")]),r("a",{attrs:{target:"_blank",href:t.server_url}},[t._v(t._s(t.server_url))]),r("br"),r("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.Finish(t.application.id)}}},[t._v("Close/Finish project\n                                ")])],1):t._e(),"project_completed"===t.application.stage?r("div",{staticStyle:{"margin-bottom":"2%"}},[r("p",[t._v("Project analysis")]),r("span",[t._v("We are currently analysing the project and a report will be generated")])]):t._e(),r("div",[r("p",[r("strong",[t._v("Requirements")])]),r("ol",[t.application.project.requirement1?r("li",[t._v("\n                                        "+t._s(t.application.project.requirement1)+"\n                                    ")]):t._e(),t.application.project.requirement2?r("li",[t._v("\n                                        "+t._s(t.application.project.requirement2)+"\n                                    ")]):t._e(),t.application.project.requirement3?r("li",[t._v("\n                                        "+t._s(t.application.project.requirement3)+"\n                                    ")]):t._e(),t.application.project.requirement4?r("li",[t._v("\n                                        "+t._s(t.application.project.requirement4)+"\n                                    ")]):t._e(),t.application.project.requirement5?r("li",[t._v("\n                                        "+t._s(t.application.project.requirement5)+"\n                                    ")]):t._e(),t.application.project.requirement6?r("li",[t._v("\n                                        "+t._s(t.application.project.requirement6)+"\n                                    ")]):t._e(),t.application.project.requirement7?r("li",[t._v("\n                                        "+t._s(t.application.project.requirement7)+"\n                                    ")]):t._e(),t.application.project.requirement8?r("li",[t._v("\n                                        "+t._s(t.application.project.requirement8)+"\n                                    ")]):t._e(),t.application.project.requirement9?r("li",[t._v("\n                                        "+t._s(t.application.project.requirement9)+"\n                                    ")]):t._e(),t.application.project.requirement10?r("li",[t._v("\n                                        "+t._s(t.application.project.requirement10)+"\n                                    ")]):t._e()])])])])],1)],1)],1)],1)],1)},i=[],n=(r("96cf"),r("3b8d")),o=r("1226"),c=r("e63b"),p=r("bc0c"),s=r("c1df"),l=r.n(s),u=r("8808"),d={name:"SelfverifyProject",data:function(){return{application:{},projectstarttime:null,timeseterror:!1,server_url:"will be sent to you",videoid:""}},components:{DevHeader:p["a"],CandidateSider:c["a"],showAt:u["showAt"],hideAt:u["hideAt"]},mounted:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e,r=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e={headers:{Authorization:"JWT "+this.$store.state.token}},o["a"].myprojectdetails(this.$store.state.route.params.applicationId,e).then(function(t){r.application=t.data,r.videoid=r.application.project.projectimage2}).catch();case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{moment:l.a,range:function(t,e){for(var r=[],a=t;a<e;a++)r.push(a);return r},disabledDate:function(t){return t&&t<l()().endOf("day")},Settime:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:r={headers:{Authorization:"JWT "+this.$store.state.token}},null!==this.projectstarttime?(this.application.stage="time_set",o["a"].myprojectdetailspatch(e,{stage:"time_set",projectstarttime:this.projectstarttime},r)):this.timeseterror=!0;case 2:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),Finish:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:r={headers:{Authorization:"JWT "+this.$store.state.token}},this.application.stage="project_completed",o["a"].myprojectdetailspatch(e,{stage:"project_completed"},r);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}},m=d,j=(r("82a8"),r("2877")),f=Object(j["a"])(m,a,i,!1,null,"9830fa94",null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-fd6ad27e.f6cd33ca.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67e0a3d2"],{"0aff":function(t,e,r){"use strict";var s=r("d27a"),n=r.n(s);n.a},1226:function(t,e,r){"use strict";var s=r("3f4a");e["a"]={projects:function(t,e){return Object(s["a"])().get("projects/projects/".concat(t),e)},recommendedprojects:function(t,e){return Object(s["a"])().get("projects/recommendedprojects/".concat(t),e)},allprojects:function(t){return Object(s["a"])().get("projects/allprojects",t)},projectdetails:function(t,e){return Object(s["a"])().get("projects/projectdetails/".concat(t),e)},recentprojects:function(t,e){return Object(s["a"])().get("projects/recentprojects/".concat(t),e)},myrecentprojects:function(t,e){return Object(s["a"])().get("projects/myrecentprojects/".concat(t),e)},developerprojects:function(t,e){return Object(s["a"])().get("projects/developerprojects/".concat(t),e)},developerprojectreport:function(t,e,r){return Object(s["a"])().get("projects/developerprojectreport/".concat(t,"/").concat(e,"/"),r)},getverified:function(t){return Object(s["a"])().get("projects/frameworks",t)},selfverifyproject:function(t,e,r){return Object(s["a"])().get("projects/selfverifyproject/".concat(t,"/").concat(e),r)},selfassessprojectcreate:function(t,e){return Object(s["a"])().post("createassess",t,e)},myprojects:function(t,e){return Object(s["a"])().get("myprojects/".concat(t),e)},testcenters:function(t,e){return Object(s["a"])().get("mytestcenters/".concat(t),e)},myprojectdetails:function(t,e){return Object(s["a"])().get("myprojectdetails/".concat(t),e)},myprojectdetailspatch:function(t,e,r){return Object(s["a"])().patch("myprojectdetailsupdater/".concat(t),e,r)},developerselectproject:function(t,e){return Object(s["a"])().post("projects/developerprojects/".concat(t),e)},newselfverify:function(t,e){return Object(s["a"])().post("newselfverify/".concat(t),e)}}},3625:function(t,e,r){"use strict";var s=r("990c"),n=r.n(s);n.a},"990c":function(t,e,r){},a1ea:function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("a-affix",{attrs:{offsetTop:"this.top"}},[r("a-layout-header",{style:{width:"100%",backgroundColor:"#004ec7",height:"100px",padding:"1px 30px 0",borderBottom:"1px solid #e8e8e8"}},[r("a-row",[r("a-col",{attrs:{span:22}},[r("span",[r("a",{staticStyle:{color:"white","line-height":"13px","font-size":"17px","font-weight":"bold","margin-top":"15%"}},[t._v("\n                            "+t._s(t.job.title))]),t.currentUserProfile.user.is_staff?r("span",{staticStyle:{float:"right"}},[t.job.published?r("span",{staticStyle:{float:"right"},attrs:{id:"unpublishbutton"}},[r("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.unpublishjob(t.job.id)}}},[t._v("Unpublish Job")])],1):r("span",[r("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.publishjob(t.job.id)}}},[t._v("Publish Job")])],1)]):r("span",[t.job.published?r("span",{staticStyle:{float:"right"}},[r("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.unpublishjob(t.job.id)}}},[t._v("Unpublish Job")])],1):t._e()]),r("br")])]),r("a-button",{attrs:{type:"primary"},on:{click:t.showDrawer}},[r("a-icon",{attrs:{type:"calendar"}}),t._v("\n                    Calendar\n                ")],1),r("a-button-group",{staticStyle:{"margin-left":"1%"}},[r("a-button",{attrs:{type:"primary",icon:"share-alt"}},[t._v("Share Job")]),r("social-sharing",{attrs:{url:t.joburl,title:t.job.title,description:t.job.description,quote:"Apply for this job at the link below.",hashtags:t.job.tech_stack},inlineTemplate:{render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("network",{attrs:{network:"facebook"}},[r("a-button",{attrs:{type:"primary",icon:"facebook"}})],1)},staticRenderFns:[]}}),r("social-sharing",{attrs:{url:t.joburl,title:t.job.title,description:t.job.description,hashtags:t.job.tech_stack},inlineTemplate:{render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("network",{attrs:{network:"twitter"}},[r("a-button",{attrs:{type:"primary",icon:"twitter"}})],1)},staticRenderFns:[]}})],1)],1)],1)],1),r("a-drawer",{attrs:{placement:"right",closable:!1,visible:t.visible,width:400},on:{close:t.onClose}},[r("vue-cal",{ref:"vuecal",staticClass:"vuecal--blue-theme",attrs:{xsmall:"",events:t.events,"default-view":"day","disable-views":["years","year","month","week"]}})],1)],1)},n=[],a=(r("96cf"),r("3b8d")),i=r("d225"),o=r("688c"),c=r("da05"),l=r("7fa7"),u=r.n(l),p=(r("e640"),r("c1df")),d=r.n(p),h=r("bf80"),j=function t(e,r,s,n,a){Object(i["a"])(this,t),this.key=e,this.title=r,this.start=s,this.end=n,this.class=a},b={name:"Jobheader",data:function(){return{top:0,job:{},visible:!1,appointments:[],calendar_settings:{style:"material_design",view_type:"Day",split_value:20,cell_height:20,scrollToNow:!0,current_day:new Date},bgColor:"#1372cc",joburl:"",events:[],currentUserProfile:{}}},components:{ACol:c["b"],"vue-cal":u.a},mounted:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e,r,s,n,a,i,c,l,u,p,b,m,f,v,y;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return d.a,e={headers:{Authorization:"JWT "+this.$store.state.token}},t.next=4,h["a"].currentuser(this.$store.state.user.pk,e);case 4:return this.currentUserProfile=t.sent.data,t.next=7,o["a"].specificjob(this.$route.params.jobId,e);case 7:return this.job=t.sent.data,this.joburl="https://www.codeln.com/jobdetails/".concat(this.job.id),t.next=11,o["a"].allmyjobapplicants(this.$store.state.user.pk,e);case 11:return this.allevents=t.sent.data,t.next=14,o["a"].mydevelopers(this.$store.state.user.pk,e);case 14:for(this.alldevrequests=t.sent.data,r=0;r<this.allevents.length;r++)null!==this.allevents[r].interviewstatus&&(s=this.allevents[r].id,n=this.allevents[r].candidate.user.first_name,a=d()(this.allevents[r].interviewstarttime).format("YYYY-MM-DD HH:mm:ss"),i=d()(this.allevents[r].interviewendtime).format("YYYY-MM-DD HH:mm:ss"),c=this.allevents[r].eventcolor,l=new j(s,n,a,i,c),this.events.push(l));for(u=0;u<this.alldevrequests.length;u++)null!==this.alldevrequests[u].interviewstatus&&(p=this.alldevrequests[u].id,b=this.alldevrequests[u].developer.user.first_name,m=d()(this.alldevrequests[u].interviewstarttime).format("YYYY-MM-DD HH:mm:ss"),f=d()(this.alldevrequests[u].interviewendtime).format("YYYY-MM-DD HH:mm:ss"),v=this.alldevrequests[u].eventcolor,y=new j(p,b,m,f,v),this.events.push(y));case 17:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{unpublishjob:function(t){var e=this,r=document.getElementById("unpublishbutton");"none"===r.style.display?r.style.display="block":r.style.display="none";var s={headers:{Authorization:"JWT "+this.$store.state.token}};o["a"].unpublishjob(t,{published:!1},s).then(function(t){e.job.published=!1})},publishjob:function(t){var e=this,r={headers:{Authorization:"JWT "+this.$store.state.token}};o["a"].unpublishjob(t,{published:!0,verified:!0},r).then(function(r){e.job.published=!0,o["a"].publishedemails(t)})},logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$store.dispatch("setNext",null),this.$router.push({name:"home"})},navigateTo:function(t){this.$router.push(t)},showDrawer:function(){this.visible=!0},onClose:function(){this.visible=!1}}},m=b,f=(r("3625"),r("2877")),v=Object(f["a"])(m,s,n,!1,null,"67ae7d94",null);e["a"]=v.exports},d27a:function(t,e,r){},def3:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-layout",{staticStyle:{"min-height":"100vh","background-color":"#F8FAFB"},attrs:{id:"components-layout-demo-side"}},[r("RecruiterSider"),r("a-layout",{style:{backgroundColor:"#f8fafb"}},[r("a-layout-content",[r("Jobheader"),r("div",{style:{padding:"6px 20px",background:"#fff",minHeight:"75vh",maxWidth:"72rem",marginTop:"2%",marginLeft:"1%",marginRight:"1%"}},[r("a-row",{attrs:{gutter:"8"}},[r("a-col",{attrs:{span:"14"}},[!1===t.project.hasvideo?r("div",[t.project.projectimage1?r("div",[r("img",{staticStyle:{width:"100%"},attrs:{src:t.project.projectimage1}})]):t._e()]):t._e(),t.project.hasvideo?r("div",[r("youtube",{attrs:{"video-id":t.project.projectimage2,"player-vars":t.playerVars}})],1):t._e(),r("div",{staticStyle:{border:"1px solid #e8e8e8",padding:"2%","margin-top":"2%"}},[r("h4",[r("strong",[t._v("Project name:")]),t._v(" "+t._s(t.project.name))]),r("p",[t._v(t._s(t.project.description))])])]),r("a-col",{staticStyle:{padding:"0 1%"},attrs:{span:"10"}},[r("div",{staticStyle:{border:"1px solid #e8e8e8",padding:"3%"}},[r("p",{staticStyle:{"margin-left":"5%"}},[r("strong",[t._v("Requirements")])]),r("ol",[t.project.requirement1?r("li",[t._v(t._s(t.project.requirement1))]):t._e(),t.project.requirement2?r("li",[t._v(t._s(t.project.requirement2))]):t._e(),t.project.requirement3?r("li",[t._v(t._s(t.project.requirement3))]):t._e(),t.project.requirement4?r("li",[t._v(t._s(t.project.requirement4))]):t._e(),t.project.requirement5?r("li",[t._v(t._s(t.project.requirement5))]):t._e(),t.project.requirement6?r("li",[t._v(t._s(t.project.requirement6))]):t._e(),t.project.requirement7?r("li",[t._v(t._s(t.project.requirement7))]):t._e(),t.project.requirement8?r("li",[t._v(t._s(t.project.requirement8))]):t._e(),t.project.requirement9?r("li",[t._v(t._s(t.project.requirement9))]):t._e(),t.project.requirement10?r("li",[t._v(t._s(t.project.requirement10))]):t._e()]),null===t.application.project?r("div",{staticStyle:{"margin-left":"5%"}},[r("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.AssignProject(t.ApplicationId,t.project.id,t.job.id)}}},[t._v("\n                                    Assign\n                                    project to "+t._s(t.candidate.username)+"\n                                ")])],1):t._e()])])],1)],1)],1)],1)],1)},n=[],a=(r("96cf"),r("3b8d")),i=r("113c"),o=r("1226"),c=r("688c"),l=r("da05"),u=r("a1ea"),p=r("bf80"),d={name:"projectdetails",data:function(){return{project:null,job:{},playerVars:{autoplay:1},candidate:{},ApplicationId:null,application:{},project_id:null}},components:{ACol:l["b"],Jobheader:u["a"],RecruiterSider:i["a"]},mounted:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e,r,s,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e={headers:{Authorization:"JWT "+this.$store.state.token}},r=this.$store.state.route.params.jobId,s=this.$store.state.route.params.candidateId,this.ApplicationId=this.$store.state.route.params.applicationId,this.project_id=this.$store.state.route.params.projectId,t.next=7,c["a"].retrieveapplication(this.ApplicationId,e);case 7:return this.application=t.sent.data,t.next=10,c["a"].specificjob(r,e);case 10:return this.job=t.sent.data,t.next=13,p["a"].retrieveuser(s,e);case 13:if(this.candidate=t.sent.data,!this.project_id){t.next=20;break}return t.next=17,o["a"].projectdetails(this.project_id,e);case 17:this.project=t.sent.data,t.next=21;break;case 20:o["a"].projects(r,e).then(function(t){n.project=t.data[0]}).catch(function(t){return n.$router.push({name:"projectlist",params:{jobId:n.job.id,applicationId:n.ApplicationId}}),t});case 21:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{AssignProject:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(e,r,s){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:n={headers:{Authorization:"JWT "+this.$store.state.token}},c["a"].pickreject(e,{test_stage:"invite_sent",project:r},n).then(this.$router.push({name:"job",params:{jobId:s}})).catch();case 2:case"end":return t.stop()}},t,this)}));function e(e,r,s){return t.apply(this,arguments)}return e}()}},h=d,j=(r("0aff"),r("2877")),b=Object(j["a"])(h,s,n,!1,null,"65e3683f",null);e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-67e0a3d2.4ab1971e.js.map
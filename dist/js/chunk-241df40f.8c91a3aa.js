(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-241df40f"],{"0712":function(t,e,r){},"0bfb":function(t,e,r){"use strict";var o=r("cb7c");t.exports=function(){var t=o(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},1226:function(t,e,r){"use strict";var o=r("3f4a");e["a"]={projects:function(t,e){return Object(o["a"])().get("projects/projects/".concat(t),e)},recommendedprojects:function(t,e){return Object(o["a"])().get("projects/recommendedprojects/".concat(t),e)},allprojects:function(t){return Object(o["a"])().get("projects/allprojects",t)},projectdetails:function(t,e){return Object(o["a"])().get("projects/projectdetails/".concat(t),e)},recentprojects:function(t,e){return Object(o["a"])().get("projects/recentprojects/".concat(t),e)},myrecentprojects:function(t,e){return Object(o["a"])().get("projects/myrecentprojects/".concat(t),e)},developerprojects:function(t,e){return Object(o["a"])().get("projects/developerprojects/".concat(t),e)},developerprojectreport:function(t,e,r){return Object(o["a"])().get("projects/developerprojectreport/".concat(t,"/").concat(e,"/"),r)},getverified:function(t){return Object(o["a"])().get("projects/frameworks",t)},selfverifyproject:function(t,e,r){return Object(o["a"])().get("projects/selfverifyproject/".concat(t,"/").concat(e),r)},basicproject:function(t,e,r){return Object(o["a"])().get("projects/basicproject/".concat(t,"/").concat(e),r)},selfassessprojectcreate:function(t,e){return Object(o["a"])().post("createassess",t,e)},myprojects:function(t,e){return Object(o["a"])().get("myprojects/".concat(t),e)},myprojectdetails:function(t,e){return Object(o["a"])().get("myprojectdetails/".concat(t),e)},myprojectdetailspatch:function(t,e,r){return Object(o["a"])().patch("myprojectdetailsupdater/".concat(t),e,r)},newselfverify:function(t,e){return Object(o["a"])().post("newselfverify/".concat(t),e)}}},2262:function(t,e,r){"use strict";var o=r("0712"),a=r.n(o);a.a},"2ab5":function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-layout-sider",{staticStyle:{"box-shadow":"2px 0 6px rgba(0,21,41,.35)","background-color":"white"},attrs:{breakpoint:"lg",collapsedWidth:"0"},on:{collapse:t.onCollapse,breakpoint:t.onBreakpoint}},[r("hide-at",{attrs:{breakpoints:{small:425,medium:768},breakpoint:"mediumAndBelow"}},[r("router-link",{attrs:{to:"/"}},[r("img",{staticStyle:{width:"9rem",height:"2rem","margin-top":"1rem","margin-bottom":"1rem","margin-left":"1rem"},attrs:{src:t.defaultlogo}})])],1),r("a-menu",{staticStyle:{"min-height":"85vh"},attrs:{defaultSelectedKeys:["1"],mode:"inline"}},[r("a-menu-item",{key:"1"},[r("router-link",{attrs:{to:"/developer"}},[r("a-icon",{attrs:{type:"dashboard"}}),r("span",[t._v("Dashboard")])],1)],1),r("a-menu-item",{key:"11"},[r("router-link",{attrs:{to:"/assessment"}},[r("a-icon",{attrs:{type:"code"}}),r("span",[t._v("Get verified")])],1)],1),r("a-menu-item",{key:"10"},[r("router-link",{attrs:{to:"/manageapplications"}},[r("a-icon",{attrs:{type:"folder-open"}}),r("span",[t._v("Manage Applications")])],1)],1),r("a-menu-item",{key:"4"},[r("router-link",{attrs:{to:"/jobs"}},[r("a-icon",{attrs:{type:"solution"}}),r("span",[t._v("Job board")])],1)],1),r("a-menu-item",{key:"9"},[r("router-link",{attrs:{to:"/portfolio"}},[r("a-icon",{attrs:{type:"file-done"}}),r("span",[t._v("My portfolio")])],1)],1),r("a-menu-item",{key:"8"},[r("router-link",{attrs:{to:"/devcalendar"}},[r("a-icon",{attrs:{type:"calendar"}}),r("span",[t._v("Calendar")])],1)],1),r("a-menu-item",{key:"6"},[r("router-link",{attrs:{to:"/developerprofile"}},[r("a-icon",{attrs:{type:"user"}}),r("span",[t._v("Edit profile")])],1)],1),r("a-menu-item",{key:"13"},[r("router-link",{attrs:{to:"/community"}},[r("a-icon",{attrs:{type:"message"}}),r("span",[t._v("Community chat")])],1)],1),r("a-menu-item",{key:"7"},[r("a",{on:{click:t.logout}},[r("a-icon",{attrs:{type:"export"}}),r("span",[t._v("  Logout")])],1)])],1)],1)},a=[],s=(r("96cf"),r("3b8d")),i=r("b8fb"),c=r.n(i),n=r("8808"),p={name:"CandidateSider",data:function(){return{defaultlogo:c.a}},components:{hideAt:n["hideAt"]},methods:{onCollapse:function(t){return t},onBreakpoint:function(t){return t},mounted:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$store.dispatch("setNext",null),this.$store.dispatch("setCart",null),this.$store.dispatch("setPicked",null),this.$store.dispatch("setLanguage",null),this.$store.dispatch("setCountry",null),this.$store.dispatch("setManaged",!1),this.$store.dispatch("setRecommend",null),this.$store.dispatch("setlazyloader",null),this.$store.dispatch("setuser_object",null),this.$router.push({name:"home"})},navigateTo:function(t){this.$router.push(t)}}},l=p,u=r("2877"),d=Object(u["a"])(l,o,a,!1,null,"45328092",null);e["a"]=d.exports},3846:function(t,e,r){r("9e1e")&&"g"!=/./g.flags&&r("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:r("0bfb")})},"6b54":function(t,e,r){"use strict";r("3846");var o=r("cb7c"),a=r("0bfb"),s=r("9e1e"),i="toString",c=/./[i],n=function(t){r("2aba")(RegExp.prototype,i,t,!0)};r("79e5")((function(){return"/a/b"!=c.call({source:"a",flags:"b"})}))?n((function(){var t=o(this);return"/".concat(t.source,"/","flags"in t?t.flags:!s&&t instanceof RegExp?a.call(t):void 0)})):c.name!=i&&n((function(){return c.call(this)}))},7895:function(t,e,r){},"8f76":function(t,e,r){t.exports=r.p+"img/art.5d0edd73.svg"},b895:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a-layout",{staticStyle:{"min-height":"100vh"},attrs:{id:"components-layout-demo-side"}},[o("CandidateSider"),o("a-layout-content",{staticStyle:{"background-color":"white"}},[o("DevHeader"),o("div",{style:{padding:"0 2%",background:"#fff",marginTop:"1rem"}},[o("a-row",{staticStyle:{"margin-bottom":"2%"}},[o("a-col",{attrs:{xs:{span:18,offset:2},sm:{span:24,offset:1},md:{span:24,offset:1},lg:{span:24,offset:0},xl:{span:24,offset:0}}},[o("h3",{staticStyle:{color:"#1976D2","font-weight":"bold"}},[t._v("\n                        Start a new project or complete the existing ones.\n                    ")])])],1),o("a-row",{staticStyle:{"padding-right":"2rem","padding-bottom":"1.5rem"},attrs:{gutter:"16"}},[o("a-col",{staticClass:"tracker",attrs:{xs:{span:16,offset:2},sm:{span:12,offset:0},md:{span:10,offset:0},lg:{span:8,offset:0},xl:{span:8,offset:0}}},[o("a-row",{staticClass:"ant-card actioncards"},[o("a",{staticStyle:{"text-decoration":"none",color:"black"},on:{click:t.showModal}},[o("a-col",{attrs:{span:"24"}},[o("div",{staticStyle:{"text-align":"center"}},[o("img",{staticClass:"poolavatar",attrs:{src:r("8f76")}})])]),o("a-col",{staticStyle:{"text-align":"center"},attrs:{span:"24"}},[o("p",{staticClass:"ant-card-head-title",staticStyle:{"font-weight":"bold"}},[t._v("new project")]),o("p",{staticStyle:{margin:"0"}},[t._v(" Pick framework you want to self test")])])],1)])],1),t.loading?o("div",[o("a-col",{attrs:{xs:{span:24,offset:2},sm:{span:12,offset:0},md:{span:10,offset:0},lg:{span:8,offset:0},xl:{span:8,offset:0}}},[o("a-spin")],1)],1):o("div",[t.projectlist.length>0?o("div",t._l(t.projectlist,(function(e){return o("a-col",{key:e,staticClass:"tracker",attrs:{xs:{span:24,offset:2},sm:{span:12,offset:0},md:{span:10,offset:0},lg:{span:8,offset:0},xl:{span:8,offset:0}}},[o("a-row",{staticClass:"ant-card actioncards1"},[o("a",{staticStyle:{"text-decoration":"none",color:"black"},on:{click:function(r){return t.navigateTo({name:"selfverifyproject",params:{applicationId:e.id}})}}},[o("a-col",{attrs:{span:"24"}},[o("div",{staticStyle:{"text-align":"center"}},[o("img",{staticStyle:{width:"100%",height:"126px"},attrs:{src:e.project.projectimage1}})])]),o("a-col",{staticStyle:{"text-align":"center"},attrs:{span:"24"}},[o("p",{staticClass:"ant-card-head-title",staticStyle:{"font-weight":"bold"}},[t._v("\n                                            "+t._s(e.project.name))])])],1)])],1)})),1):t._e()])],1)],1),o("a-modal",{attrs:{title:"Frameworks(Pick one)",footer:null},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[o("a-row",{attrs:{gutter:16}},t._l(t.frameworkchoices,(function(e){return o("a-col",{key:e,attrs:{xs:{span:12,offset:0},sm:{span:8,offset:0},md:{span:6,offset:0},lg:{span:6,offset:0},xl:{span:6,offset:0}}},[o("a",{on:{click:function(r){return t.SelfverifyProject(e.name)}}},[o("a-row",{staticClass:"ant-card actioncards2"},[o("a",{staticStyle:{"text-decoration":"none",color:"black"}},[o("a-col",{staticStyle:{height:"75%"},attrs:{span:"24"}},[o("div",{staticStyle:{"text-align":"center"}},[o("img",{staticStyle:{width:"75%"},attrs:{src:e.image}})])]),o("a-col",{staticStyle:{float:"bottom"},attrs:{span:"24"}},[o("div",{staticStyle:{"text-align":"center"}},[o("p",[t._v(t._s(e.name))])])])],1)])],1)])})),1)],1),o("a-modal",{staticStyle:{top:"10px"},attrs:{title:"Project",footer:null,width:"1000px"},model:{value:t.projectchoice,callback:function(e){t.projectchoice=e},expression:"projectchoice"}},[o("div",[null===t.project?o("div",[o("a-spin")],1):o("div",[null!==t.project?o("a-row",{attrs:{gutter:"8"}},[o("a-col",{staticStyle:{"margin-bottom":"1rem"},attrs:{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:24,offset:0},lg:{span:14,offset:0},xl:{span:14,offset:0}}},[o("show-at",{attrs:{breakpoint:"mediumAndBelow"}},[o("div",[!1===t.project.hasvideo?o("a-carousel",{staticStyle:{border:"1px solid #e8e8e8"},attrs:{autoplay:""}},[t.project.projectimage1?o("div",[o("img",{staticStyle:{width:"100%"},attrs:{src:t.project.projectimage1}})]):t._e(),t.project.projectimage2?o("div",[o("img",{staticStyle:{width:"100%"},attrs:{src:t.project.projectimage2}})]):t._e(),t.project.projectimage3?o("div",[o("img",{staticStyle:{width:"100%"},attrs:{src:t.project.projectimage3}})]):t._e(),t.project.projectimage4?o("div",[o("img",{attrs:{src:t.project.projectimage4}})]):t._e(),t.project.projectimage5?o("div",[o("img",{attrs:{src:t.project.projectimage5}})]):t._e(),t.project.projectimage6?o("div",[o("img",{attrs:{src:t.project.projectimage6}})]):t._e(),t.project.projectimage7?o("div",[o("img",{attrs:{src:t.project.projectimage7}})]):t._e(),t.project.projectimage8?o("div",[o("img",{attrs:{src:t.project.projectimage8}})]):t._e(),t.project.projectimage9?o("div",[o("img",{attrs:{src:t.project.projectimage9}})]):t._e(),t.project.projectimage10?o("div",[o("img",{attrs:{src:t.project.projectimage10}})]):t._e()]):t._e(),t.project.hasvideo?o("div",[o("youtube",{attrs:{"video-id":t.project.projectimage2,width:250,"player-vars":t.playerVars}})],1):t._e()],1)]),o("hide-at",{attrs:{breakpoint:"mediumAndBelow"}},[o("div",[!1===t.project.hasvideo?o("a-carousel",{staticStyle:{border:"1px solid #e8e8e8"},attrs:{autoplay:""}},[t.project.projectimage1?o("div",[o("img",{staticStyle:{width:"100%"},attrs:{src:t.project.projectimage1}})]):t._e(),t.project.projectimage2?o("div",[o("img",{staticStyle:{width:"100%"},attrs:{src:t.project.projectimage2}})]):t._e(),t.project.projectimage3?o("div",[o("img",{staticStyle:{width:"100%"},attrs:{src:t.project.projectimage3}})]):t._e(),t.project.projectimage4?o("div",[o("img",{attrs:{src:t.project.projectimage4}})]):t._e(),t.project.projectimage5?o("div",[o("img",{attrs:{src:t.project.projectimage5}})]):t._e(),t.project.projectimage6?o("div",[o("img",{attrs:{src:t.project.projectimage6}})]):t._e(),t.project.projectimage7?o("div",[o("img",{attrs:{src:t.project.projectimage7}})]):t._e(),t.project.projectimage8?o("div",[o("img",{attrs:{src:t.project.projectimage8}})]):t._e(),t.project.projectimage9?o("div",[o("img",{attrs:{src:t.project.projectimage9}})]):t._e(),t.project.projectimage10?o("div",[o("img",{attrs:{src:t.project.projectimage10}})]):t._e()]):t._e(),t.project.hasvideo?o("div",[o("youtube",{attrs:{"video-id":t.project.projectimage2,width:"550","player-vars":t.playerVars}})],1):t._e()],1)]),o("div",{staticStyle:{border:"1px solid #e8e8e8",padding:"2%","margin-top":"2%"}},[o("h4",[o("strong",[t._v("Project name:")]),t._v(" "+t._s(t.project.name))]),o("p",[t._v(t._s(t.project.description))])])],1),o("a-col",{staticStyle:{padding:"0 1%"},attrs:{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:24,offset:0},lg:{span:10,offset:0},xl:{span:10,offset:0}}},[o("div",{staticStyle:{border:"1px solid #e8e8e8",padding:"2%"}},[o("div",{staticStyle:{"margin-left":"5%","margin-bottom":"2%"}},[o("p",[t._v("Accept Project (This will allow you to set time and get access to our\n                                        IDE")]),t.acceptload?o("div",[o("a-spin")],1):o("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.Accept(t.project.id,t.project,t.pickedframework)}}},[t._v("\n                                        Accept\n                                    ")]),o("a-button",{staticStyle:{"margin-left":"1%"},attrs:{type:"primary",ghost:""},on:{click:function(e){return t.SelfverifyProject(t.pickedframework)}}},[o("a-icon",{attrs:{type:"redo"}}),t._v("\n                                        Get another\n                                    ")],1)],1),o("div",[o("p",{staticStyle:{"margin-left":"5%"}},[o("strong",[t._v("Requirements")])]),o("ol",[t.project.requirement1?o("li",[t._v(t._s(t.project.requirement1))]):t._e(),t.project.requirement2?o("li",[t._v(t._s(t.project.requirement2))]):t._e(),t.project.requirement3?o("li",[t._v(t._s(t.project.requirement3))]):t._e(),t.project.requirement4?o("li",[t._v(t._s(t.project.requirement4))]):t._e(),t.project.requirement5?o("li",[t._v(t._s(t.project.requirement5))]):t._e(),t.project.requirement6?o("li",[t._v(t._s(t.project.requirement6))]):t._e(),t.project.requirement7?o("li",[t._v(t._s(t.project.requirement7))]):t._e(),t.project.requirement8?o("li",[t._v(t._s(t.project.requirement8))]):t._e(),t.project.requirement9?o("li",[t._v(t._s(t.project.requirement9))]):t._e(),t.project.requirement10?o("li",[t._v(t._s(t.project.requirement10))]):t._e()])])])])],1):o("div",{staticStyle:{"text-align":"center"}},[t._v("\n                        No projects at the moment for you.More will be added soon.\n                    ")])],1)])])],1)],1)},a=[],s=(r("96cf"),r("3b8d")),i=r("ce5a"),c=(r("bf80"),r("1226")),n=r("2ab5"),p=r("da05"),l=r("8808"),u={name:"DeveloperProjects",data:function(){return{currentUserProfile:{},projectlist:[],frameworkchoices:null,visible:!1,projectchoice:!1,project:null,pickedframework:"",waiting:!0,loading:!1,acceptload:!1}},components:{ACol:p["b"],DevHeader:i["a"],CandidateSider:n["a"],showAt:l["showAt"],hideAt:l["hideAt"]},mounted:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e={headers:{Authorization:"JWT "+this.$store.state.token}},this.loading=!0,!this.$store.state.user.pk){t.next=11;break}return this.currentUserProfile=this.$store.state.user_object,t.next=6,c["a"].getverified(e);case 6:return this.frameworkchoices=t.sent.data,t.next=9,c["a"].myprojects(this.$store.state.user.pk,e);case 9:this.projectlist=t.sent.data,this.loading=!1;case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{navigateTo:function(t){this.$router.push(t)},showModal:function(){this.visible=!0},SelfverifyProject:function(t){var e=this,r={headers:{Authorization:"JWT "+this.$store.state.token}};this.waiting=!0,this.visible=!1,this.projectchoice=!0,this.pickedframework=t,c["a"].selfverifyproject(this.$store.state.user.pk,t,r).then((function(t){e.project=t.data[0]})).catch(this.project=null),this.waiting=!1},Accept:function(t,e,r){var o=this,a={headers:{Authorization:"JWT "+this.$store.state.token}};this.acceptload=!0,c["a"].selfassessprojectcreate({stage:"invite_accepted",candidate:this.$store.state.user.pk,project:t,frameworktested:r},a).then((function(t){o.projectlist.push(e),o.acceptload=!1,o.$router.push({name:"selfverifyproject",params:{applicationId:t.data.id}})})).catch((function(t){return console.log(t)}))}}},d=u,m=(r("2262"),r("2877")),f=Object(m["a"])(d,o,a,!1,null,"3a501a6e",null);e["default"]=f.exports},ce5a:function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("show-at",{attrs:{breakpoint:"mediumAndBelow"}},[r("a-layout-header",{style:{width:"100%",backgroundColor:"#ffffff",height:"5rem",padding:"1px 30px 0",borderBottom:"1px solid #e8e8e8"}},[r("router-link",{attrs:{to:"/"}},[r("img",{staticStyle:{width:"120px",height:"31px","margin-top":"1rem","margin-bottom":"6%","margin-left":"9%"},attrs:{src:t.defaultlogo}})])],1)],1),r("hide-at",{attrs:{breakpoint:"mediumAndBelow"}},[r("a-layout-header",{style:{width:"100%",backgroundColor:"#004ec7",height:"6rem",padding:"1px 30px 0",borderBottom:"1px solid #e8e8e8"}},[r("a-row",[r("a-col",{attrs:{xs:24,sm:12,md:6,lg:6,xl:6}},[r("span",{staticStyle:{color:"white","font-size":"1rem","font-weight":"bold"}},[t._v("\n                "+t._s(t.greeting)+" "+t._s(t._f("capitalize")(this.$store.state.user.first_name))+"  ")])])],1)],1)],1)],1)},a=[],s=(r("6b54"),r("96cf"),r("3b8d")),i=r("c1df"),c=r.n(i),n=r("8808"),p=r("b8fb"),l=r.n(p),u={name:"DevHeader",components:{hideAt:n["hideAt"],showAt:n["showAt"]},data:function(){return{currentUserProfile:null,greeting:null,defaultlogo:l.a}},mounted:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:c.a,e=new Date,r=e.getHours(),this.greeting=r<12?"Good Morning":r<18?"Good Afternoon":"Good Evening",this.currentUserProfile=this.$store.state.user_object;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),filters:{capitalize:function(t){return t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""}},methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$store.dispatch("setNext",null),this.$store.dispatch("setCart",null),this.$store.dispatch("setPicked",null),this.$store.dispatch("setLanguage",null),this.$store.dispatch("setCountry",null),this.$store.dispatch("setManaged",!1),this.$store.dispatch("setRecommend",null),this.$store.dispatch("setlazyloader",null),this.$store.dispatch("setuser_object",null),this.$router.push({name:"home"})},navigateTo:function(t){this.$router.push(t)}}},d=u,m=(r("ebb0"),r("2877")),f=Object(m["a"])(d,o,a,!1,null,"284a2f0c",null);e["a"]=f.exports},ebb0:function(t,e,r){"use strict";var o=r("7895"),a=r.n(o);a.a}}]);
//# sourceMappingURL=chunk-241df40f.8c91a3aa.js.map
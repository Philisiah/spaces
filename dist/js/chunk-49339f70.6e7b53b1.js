(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49339f70"],{"688c":function(e,t,a){"use strict";var n=a("3f4a");t["a"]={pickdeveloper:function(e,t){return Object(n["a"])().post("marketplace/pickdev ",e,t)},mydevelopers:function(e,t){return Object(n["a"])().get("marketplace/mydevs/".concat(e," "),t)},mydeveloperssimple:function(e,t){return Object(n["a"])().get("marketplace/mydevssimple/".concat(e," "),t)},allmyjobapplicants:function(e,t){return Object(n["a"])().get("marketplace/myapplicants/".concat(e," "),t)},alljobs:function(){return Object(n["a"])().get("marketplace/alljobs")},myjobs:function(e,t){return Object(n["a"])().get("marketplace/myjobs/".concat(e),t)},myjobssliced:function(e,t){return Object(n["a"])().get("marketplace/myjobssliced/".concat(e),t)},applicants:function(e,t){return Object(n["a"])().get("marketplace/jobapplicants/".concat(e),t)},applicantssliced:function(e,t){return Object(n["a"])().get("marketplace/jobapplicantssliced/".concat(e),t)},specificjob:function(e,t){return Object(n["a"])().get("marketplace/specificjob/".concat(e),t)},specificjobapplicants:function(e,t){return Object(n["a"])().get("marketplace/specificjobapplicants/".concat(e),t)},joboneapplicant:function(e,t,a){return Object(n["a"])().get("marketplace/myjobapplication/".concat(e,"/").concat(t),a)},jobdetails:function(e,t){return Object(n["a"])().get("marketplace/jobdetails/".concat(e),t)},candidatejobs:function(e,t){return Object(n["a"])().get("marketplace/candidatejobs/".concat(e),t)},updatejob:function(e,t,a){return Object(n["a"])().patch("marketplace/updatejob/".concat(e," "),t,a)},pickreject:function(e,t,a){return Object(n["a"])().patch("marketplace/pickreject/".concat(e," "),t,a)},deletejobapplication:function(e,t){return Object(n["a"])().delete("marketplace/pickreject/".concat(e," "),t)},retrieveapplication:function(e,t){return Object(n["a"])().get("marketplace/applicationprofile/".concat(e," "),t)},candidatemanager:function(e,t,a){return Object(n["a"])().patch("marketplace/candidateinfoupdater/".concat(e," "),t,a)},retrievecandidate:function(e,t){return Object(n["a"])().get("marketplace/candidateinfo/".concat(e," "),t)},unpublishjob:function(e,t,a){return Object(n["a"])().patch("marketplace/unpublishjob/".concat(e," "),t,a)},createjob:function(e,t){return Object(n["a"])().post("marketplace/createjob",e,t)},pickrecommended:function(e,t){return Object(n["a"])().post("marketplace/pickrecommended",e,t)},applyjob:function(e,t){return Object(n["a"])().post("marketplace/applyjob",e,t)},pickedapplications:function(e,t){return Object(n["a"])().get("marketplace/pickedapplications/".concat(e," "),t)},jobmanagerview:function(e,t){return Object(n["a"])().get("marketplace/jobmanagerview/".concat(e," "),t)},talentpickedmanagerview:function(e,t){return Object(n["a"])().get("marketplace/talentpickedmanagerview/".concat(e," "),t)},newjobemail:function(e,t){return Object(n["a"])().get("marketplace/newjobemail/".concat(e," "),t)},newapplicationemail:function(e,t){return Object(n["a"])().get("marketplace/newjobapplication/".concat(e," "),t)},newonsite:function(e,t){return Object(n["a"])().get("marketplace/newonsite/".concat(e," "),t)},candidatemanagerdelete:function(e,t){return Object(n["a"])().delete("marketplace/candidateinfoupdater/".concat(e," "),t)}}},"8e91":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout",{staticStyle:{"min-height":"100vh"},attrs:{id:"components-layout-demo-side"}},[a("CandidateSider"),a("a-layout",[a("a-layout-content",{staticStyle:{"background-color":"white"}},[a("vue-cal",{staticClass:"vuecal--blue-theme",staticStyle:{height:"100vh"},attrs:{"hide-weekends":"","disable-views":["years","year"],events:e.events,"events-on-month-view":"short","on-event-click":e.onEventClick}}),a("a-modal",{attrs:{footer:null},model:{value:e.showDialog,callback:function(t){e.showDialog=t},expression:"showDialog"}},[a("p",[e._v(e._s(e.selectedEvent.title))]),a("p",[e._v("Start time: "+e._s(e.selectedEvent.start))]),a("p",[e._v("End time: "+e._s(e.selectedEvent.end))])])],1),a("banner")],1)],1)},r=[],c=(a("96cf"),a("3b8d")),i=a("d225"),o=a("e63b"),s=a("7fa7"),l=a.n(s),u=(a("e640"),a("688c")),p=a("c1df"),m=a.n(p),d=function e(t,a,n,r,c){Object(i["a"])(this,e),this.key=t,this.title=a,this.start=n,this.end=r,this.class=c},b={name:"DevCalendar",components:{CandidateSider:o["a"],"vue-cal":l.a},data:function(){return{selectedEvent:{},showDialog:!1,createEvent:!1,bgColor:"#1372cc",size:"large",alldevrequests:[],templist:[],allusers:[],events:[]}},mounted:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t,a,n,r,c,i,o,s,l,p,b,h,f,v,k;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return m.a,t={headers:{Authorization:"JWT "+this.$store.state.token}},e.next=4,u["a"].candidatejobs(this.$store.state.user.pk,t);case 4:return this.allevents=e.sent.data,e.next=7,u["a"].pickedapplications(this.$store.state.user.pk,t);case 7:for(this.alldevrequests=e.sent.data,a=0;a<this.allevents.length;a++)null!==this.allevents[a].interviewstatus&&(n=this.allevents[a].id,r=this.allevents[a].job.company,c=m()(this.allevents[a].interviewstarttime).format("YYYY-MM-DD HH:mm:ss"),i=m()(this.allevents[a].interviewendtime).format("YYYY-MM-DD HH:mm:ss"),o=this.allevents[a].eventcolor,s=new d(n,r,c,i,o),this.events.push(s));for(l=0;l<this.alldevrequests.length;l++)null!==this.alldevrequests[l].interviewstatus&&(p=this.alldevrequests[l].id,b=this.alldevrequests[l].owner.company,h=m()(this.alldevrequests[l].interviewstarttime).format("YYYY-MM-DD HH:mm:ss"),f=m()(this.alldevrequests[l].interviewendtime).format("YYYY-MM-DD HH:mm:ss"),v=this.alldevrequests[l].eventcolor,k=new d(p,b,h,f,v),this.events.push(k));case 10:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},h=b,f=a("2877"),v=Object(f["a"])(h,n,r,!1,null,"9e5578f6",null);t["default"]=v.exports},e63b:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout-sider",{staticStyle:{"box-shadow":"2px 0 6px rgba(0,21,41,.35)","background-color":"white"},attrs:{breakpoint:"lg",collapsedWidth:"0"},on:{collapse:e.onCollapse,breakpoint:e.onBreakpoint}},[a("hide-at",{attrs:{breakpoints:{small:425,medium:768},breakpoint:"mediumAndBelow"}},[a("router-link",{attrs:{to:"/"}},[a("img",{staticStyle:{width:"9rem",height:"2rem","margin-top":"1rem","margin-bottom":"1rem","margin-left":"1rem"},style:e.logo,attrs:{src:e.defaultlogo}})])],1),a("a-menu",{staticStyle:{"min-height":"85vh"},attrs:{defaultSelectedKeys:["1"],mode:"inline"}},[a("a-menu-item",{key:"1"},[a("router-link",{attrs:{to:"/developer"}},[a("a-icon",{attrs:{type:"dashboard"}}),a("span",[e._v("Dashboard")])],1)],1),a("a-menu-item",{key:"11"},[a("router-link",{attrs:{to:"/assessment"}},[a("a-icon",{attrs:{type:"code"}}),a("span",[e._v("Get verified")])],1)],1),a("a-menu-item",{key:"10"},[a("router-link",{attrs:{to:"/manageapplications"}},[a("a-icon",{attrs:{type:"folder-open"}}),a("span",[e._v("Manage Applications")])],1)],1),a("a-menu-item",{key:"4"},[a("router-link",{attrs:{to:"/jobs"}},[a("a-icon",{attrs:{type:"solution"}}),a("span",[e._v("Job board")])],1)],1),a("a-menu-item",{key:"9"},[a("router-link",{attrs:{to:"/portfolio"}},[a("a-icon",{attrs:{type:"file-done"}}),a("span",[e._v("My portfolio")])],1)],1),a("a-menu-item",{key:"8"},[a("router-link",{attrs:{to:"/devcalendar"}},[a("a-icon",{attrs:{type:"calendar"}}),a("span",[e._v("Calendar")])],1)],1),a("a-menu-item",{key:"6"},[a("router-link",{attrs:{to:"/developerprofile"}},[a("a-icon",{attrs:{type:"user"}}),a("span",[e._v("My profile")])],1)],1),a("a-menu-item",{key:"13"},[a("router-link",{attrs:{to:"/community"}},[a("a-icon",{attrs:{type:"message"}}),a("span",[e._v("Community chat")])],1)],1),a("a-menu-item",{key:"7"},[a("a",{on:{click:e.logout}},[a("a-icon",{attrs:{type:"export"}}),a("span",[e._v("  Logout")])],1)])],1)],1)},r=[],c=(a("96cf"),a("3b8d")),i=a("b8fb"),o=a.n(i),s=a("8808"),l={name:"CandidateSider",data:function(){return{defaultlogo:o.a}},components:{hideAt:s["hideAt"]},methods:{onCollapse:function(e){return e},onBreakpoint:function(e){return e},mounted:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}(),logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$store.dispatch("setNext",null),this.$router.push({name:"home"})},navigateTo:function(e){this.$router.push(e)}}},u=l,p=a("2877"),m=Object(p["a"])(u,n,r,!1,null,"1cb83405",null);t["a"]=m.exports}}]);
//# sourceMappingURL=chunk-49339f70.6e7b53b1.js.map
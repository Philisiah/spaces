(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1aebefc2"],{"1c35":function(t,e,i){"use strict";var n=i("264f"),a=i.n(n);a.a},"264f":function(t,e,i){},"2f80":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-layout",{staticStyle:{"min-height":"100vh"},attrs:{id:"components-layout-demo-side"}},[i("CandidateSider"),i("a-layout",[i("a-layout-content",{staticStyle:{"background-color":"white"}},[i("DevHeader"),i("div",{style:{padding:"5px",background:"#fff",marginTop:"0rem"}},[i("a-row",{staticStyle:{"margin-top":"1%"}},[i("a-col",{attrs:{xs:{span:24,offset:1},sm:{span:24,offset:1},md:{span:24,offset:1},lg:{span:24,offset:0},xl:{span:24,offset:0}}},[i("h3",{staticStyle:{color:"#1976D2","font-weight":"bold","margin-left":"1rem"}},[t._v("\n                            Track your applications through the stages\n                        ")])])],1),i("a-row",{staticStyle:{padding:"2%"},attrs:{gutter:16}},[i("a-col",{staticClass:"tracker",attrs:{xs:{span:24,offset:0},sm:{span:12,offset:0},md:{span:12,offset:0},lg:{span:6,offset:0},xl:{span:6,offset:0}}},[i("a-row",{staticClass:"managecard"},[i("a-col",{attrs:{span:"24"}},[i("div",{staticStyle:{"text-align":"center",padding:"5%"}},[i("p",{staticStyle:{color:"#1976D2","font-weight":"bold","text-align":"center","font-size":"1rem"}},[t._v("Applications")])]),i("a-progress",{attrs:{percent:100,strokeColor:"#4DB3D3",showInfo:!1}})],1),i("a-col",{attrs:{span:"24"}},[i("div",{staticStyle:{padding:"5%"}},[t.waiting?i("div",[i("div",{staticStyle:{"text-align":"center"}},[i("a-spin")],1)]):i("div",[t.active.length>0?i("a-timeline",t._l(t.active,function(e){return i("a-timeline-item",{key:e},[i("a",[i("strong",[t._v(t._s(e.title))])]),i("br"),i("div",{staticStyle:{color:"black"}},[t._v("\n                                            Company : "+t._s(e.company)+"\n\n                                            "),i("br"),i("span",[t._v("\n                                            Stage:\n                                        "),i("a-tag",{staticStyle:{"text-align":"center",width:"4rem"},attrs:{color:"#9C27B0"}},[t._v("\n                                            "+t._s(e.stage)+"\n                                        ")]),i("p",[i("a",{on:{click:function(i){return t.Withdrawapplication(e.key,e.type)}}},[t._v("\n                                            withdraw\n                                        ")])])],1)])])}),1):t._e()],1)])])],1)],1),i("a-col",{staticClass:"tracker",attrs:{xs:{span:24,offset:0},sm:{span:12,offset:0},md:{span:12,offset:0},lg:{span:6,offset:0},xl:{span:6,offset:0}}},[i("a-row",{staticClass:"managecard"},[i("a-col",{attrs:{span:"24"}},[i("div",{staticStyle:{"text-align":"center",padding:"5%"}},[i("p",{staticStyle:{color:"#1976D2","font-weight":"bold","text-align":"center","font-size":"1rem"}},[t._v("Testing")])]),i("a-progress",{attrs:{percent:100,strokeColor:"#4DB3D3",showInfo:!1}})],1),i("a-col",{attrs:{span:"24"}},[i("div",{staticStyle:{padding:"5%"}},[t.waiting?i("div",[i("div",{staticStyle:{"text-align":"center"}},[i("a-spin")],1)]):i("div",[t.testing.length>0?i("a-timeline",t._l(t.testing,function(e){return i("a-timeline-item",{key:e},[i("a",[i("strong",[t._v(t._s(e.title))])]),i("br"),i("div",{staticStyle:{color:"black"}},[t._v("\n                                        Company : "+t._s(e.company)+"\n\n                                        "),i("br"),e.project?i("div",[t._v("\n\n                                            Project assigned: "),i("span"),i("a",{on:{click:function(i){return t.navigateTo({name:"assignedproject",params:{projectId:e.project.id,applicationId:e.key,type:e.type}})}}},[t._v("\n                                                "+t._s(e.project.name)+"\n                                            ")])]):i("div",[t._v("\n                                            Project assignment pending\n\n\n                                        ")]),i("a",{on:{click:function(i){return t.Withdrawapplicationtest(e.key,e.type)}}},[t._v("\n                                            withdraw\n                                        ")])])])}),1):t._e()],1)])])],1)],1),i("a-col",{staticClass:"tracker",attrs:{xs:{span:24,offset:0},sm:{span:12,offset:0},md:{span:12,offset:0},lg:{span:6,offset:0},xl:{span:6,offset:0}}},[i("a-row",{staticClass:"managecard"},[i("a-col",{attrs:{span:"24"}},[i("div",{staticStyle:{"text-align":"center",padding:"5%"}},[i("p",{staticStyle:{color:"#1976D2","font-weight":"bold","text-align":"center","font-size":"1rem"}},[t._v("Interview")])]),i("a-progress",{attrs:{percent:100,strokeColor:"#0868AC",showInfo:!1}})],1),i("a-col",{attrs:{span:"24"}},[i("div",{staticStyle:{padding:"5%"}},[t.waiting?i("div",[i("div",{staticStyle:{"text-align":"center"}},[i("a-spin")],1)]):i("div",[t.interview.length>0?i("a-timeline",t._l(t.interview,function(e){return i("a-timeline-item",{key:e},[i("a",[i("strong",[t._v(t._s(e.title))])]),i("br"),i("div",{staticStyle:{color:"black"}},[t._v("\n                                        Company : "+t._s(e.company)+"\n\n                                        "),i("br"),"Invalid date"!==e.start?i("div",[t._v("\n                                            Interview: "),i("span",[i("a",{staticStyle:{"margin-left":"2%"},attrs:{type:"primary",size:"small"},on:{click:function(i){return t.showEvent(e.key,e)}}},[i("a-icon",{attrs:{type:"calendar"}}),t._v("View")],1)])]):i("div",[t._v("\n                                            Interview time not yet set\n\n\n                                        ")])])])}),1):t._e()],1)])])],1)],1),i("a-col",{staticClass:"tracker",attrs:{xs:{span:24,offset:0},sm:{span:12,offset:0},md:{span:12,offset:0},lg:{span:6,offset:0},xl:{span:6,offset:0}}},[i("a-row",{staticClass:"managecard"},[i("a-col",{attrs:{span:"24"}},[i("div",{staticStyle:{"text-align":"center",padding:"5%"}},[i("p",{staticStyle:{color:"#1976D2","font-weight":"bold","text-align":"center","font-size":"1rem"}},[t._v("Offers")])]),i("a-progress",{attrs:{percent:100,strokeColor:"#084081",showInfo:!1}})],1),i("a-col",{attrs:{span:"24"}},[i("div",{staticStyle:{padding:"5%"}},[t.waiting?i("div",[i("div",{staticStyle:{"text-align":"center"}},[i("a-spin")],1)]):i("div",[t.offers.length>0?i("a-timeline",t._l(t.offers,function(e){return i("a-timeline-item",{key:e},[i("a",[i("strong",[t._v(t._s(e.title))])]),i("br"),i("div",{staticStyle:{color:"black"}},[t._v("\n                                        Company : "+t._s(e.company)+"\n\n                                        "),i("br"),t._v("\n                                        Stage:\n                                        "),i("a-tag",{staticStyle:{"text-align":"center",width:"4rem"},attrs:{color:"#9C27B0"}},[t._v("\n                                            "+t._s(e.stage)+"\n                                        ")])],1),i("a-button",{attrs:{type:"primary",size:"small"},on:{click:function(i){return t.Withdrawapplicationoffer(e.key,e.type)}}},[t._v("\n                                        withdraw\n                                    ")])],1)}),1):t._e()],1)])])],1)],1)],1),i("a-modal",{attrs:{title:t.currentinterview.company},on:{ok:t.handleOk},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[i("p",[t._v("Interview starttime : "+t._s(t.currentinterview.start))]),i("p",[t._v("Interview endtime "+t._s(t.currentinterview.end))]),i("template",{slot:"footer"},[i("a-button",{key:"submit",attrs:{type:"danger",ghost:"",loading:t.loading},on:{click:function(e){return t.Withdrawapplicationinterview(t.currentinterview.key,t.currentinterview.type)}}},[t._v("\n                            reject invite\n                        ")]),i("a-button",{attrs:{type:"primary","html-type":"submit"},on:{click:function(e){return t.saveEvent(t.interviewerapplicationid,t.interviewstart,t.interviewend)}}},[t._v("\n                            Accept\n                        ")])],1)],2)],1)],1)],1)],1)},a=[],s=(i("96cf"),i("3b8d")),r=i("d225"),o=i("e63b"),l=i("bc0c"),c=i("290c"),p=i("da05"),d=i("688c"),f=i("c1df"),v=i.n(f),h=function t(e,i,n,a,s,o,l,c,p){Object(r["a"])(this,t),this.key=e,this.title=i,this.company=n,this.stage=a,this.type=s,this.start=o,this.end=l,this.color=c,this.project=p},u={name:"ManageApplications",data:function(){return{applications:[],active:[],testing:[],interview:[],offers:[],visible:!1,currentinterview:{},waiting:!1}},components:{ACol:p["b"],ARow:c["a"],DevHeader:l["a"],CandidateSider:o["a"]},mounted:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,i,n,a,s,r,o,l,c,p,f,u,g,w,m,y,k,b,j,_,x,S,C,D;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e={headers:{Authorization:"JWT "+this.$store.state.token}},this.waiting=!0,t.next=4,d["a"].candidatejobs(this.$store.state.user.pk,e);case 4:return this.alldevjobs=t.sent.data,t.next=7,d["a"].pickedapplications(this.$store.state.user.pk,e);case 7:for(this.alldevjobpicked=t.sent.data,i=0;i<this.alldevjobs.length;i++)n=this.alldevjobs[i].id,a=this.alldevjobs[i].job.title,s=this.alldevjobs[i].job.company,r=this.alldevjobs[i].stage,o="job",l=this.alldevjobs[i].project,c=v()(this.alldevjobs[i].interviewstarttime).format("YYYY-MM-DD HH:mm:ss"),p=v()(this.alldevjobs[i].interviewendtime).format("YYYY-MM-DD HH:mm:ss"),f=this.alldevjobs[i].eventcolor,u=new h(n,a,s,r,o,c,p,f,l),this.applications.push(u);for(g=0;g<this.alldevjobpicked.length;g++)w=this.alldevjobpicked[g].id,m="Talent pool pick",y=this.alldevjobpicked[g].owner.company,k=this.alldevjobpicked[g].stage,b="talent",j=this.alldevjobpicked[g].project,_=v()(this.alldevjobpicked[g].interviewstarttime).format("YYYY-MM-DD HH:mm:ss"),x=v()(this.alldevjobpicked[g].interviewendtime).format("YYYY-MM-DD HH:mm:ss"),S=this.alldevjobpicked[g].eventcolor,C=new h(w,m,y,k,b,_,x,S,j),this.applications.push(C);for(D=0;D<this.applications.length;D++)"active"===this.applications[D].stage||"new"===this.applications[D].stage?this.active.push(this.applications[D]):"test"===this.applications[D].stage?this.testing.push(this.applications[D]):"interview"===this.applications[D].stage?this.interview.push(this.applications[D]):"offer"===this.applications[D].stage&&this.offers.push(this.applications[D]);this.waiting=!1;case 12:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{navigateTo:function(t){this.$router.push(t)},showEvent:function(t,e){this.visible=!0,this.currentinterview=e},Withdrawapplication:function(t,e){var i=this,n={headers:{Authorization:"JWT "+this.$store.state.token}};"job"===e?d["a"].pickreject(t,{stage:"rejected",selected:!1},n).then(function(e){for(var n=0;n<i.active.length;n++)if(i.active[n].key===t){i.active[n].stage="withdrawn";var a=i.active.indexOf(i.active[n]);i.active.splice(a,1)}return e}).catch():d["a"].candidatemanager(t,{stage:"rejected",interviewstarttime:null,interviewendtime:null,test_stage:null,project:null,report:null,interviewstatus:null,projectstarttime:null,offerstatus:null,offerletter:null,demolink:null},n).then(function(e){for(var n=0;n<i.active.length;n++)if(i.active[n].key===t){i.active[n].stage="withdrawn";var a=i.active.indexOf(i.active[n]);i.active.splice(a,1)}return e}).catch()},Withdrawapplicationtest:function(t,e){var i=this,n={headers:{Authorization:"JWT "+this.$store.state.token}};"job"===e?d["a"].pickreject(t,{stage:"rejected",selected:!1},n).then(function(e){for(var n=0;n<i.testing.length;n++)if(i.testing[n].key===t){i.testing[n].stage="withdrawn";var a=i.testing.indexOf(i.testing[n]);i.testing.splice(a,1)}return e}).catch():d["a"].candidatemanager(t,{stage:"rejected",interviewstarttime:null,interviewendtime:null,test_stage:null,project:null,report:null,interviewstatus:null,projectstarttime:null,offerstatus:null,offerletter:null,demolink:null},n).then(function(e){for(var n=0;n<i.testing.length;n++)if(i.testing[n].key===t){i.testing[n].stage="withdrawn";var a=i.testing.indexOf(i.testing[n]);i.testing.splice(a,1)}return e}).catch()},Withdrawapplicationinterview:function(t,e){var i=this,n={headers:{Authorization:"JWT "+this.$store.state.token}};"job"===e?d["a"].pickreject(t,{stage:"rejected",selected:!1},n).then(function(e){for(var n=0;n<i.interview.length;n++)if(i.interview[n].key===t){i.interview[n].stage="withdrawn";var a=i.interview.indexOf(i.interview[n]);i.interview.splice(a,1)}return e}).catch():d["a"].candidatemanager(t,{stage:"rejected",interviewstarttime:null,interviewendtime:null,test_stage:null,project:null,report:null,interviewstatus:null,projectstarttime:null,offerstatus:null,offerletter:null,demolink:null},n).then(function(e){for(var n=0;n<i.interview.length;n++)if(i.interview[n].key===t){i.interview[n].stage="withdrawn";var a=i.interview.indexOf(i.interview[n]);i.interview.splice(a,1)}return e}).catch()},Withdrawapplicationoffer:function(t,e){var i=this,n={headers:{Authorization:"JWT "+this.$store.state.token}};"job"===e?d["a"].pickreject(t,{stage:"rejected",selected:!1},n).then(function(e){for(var n=0;n<i.offers.length;n++)if(i.offers[n].key===t){i.offers[n].stage="withdrawn";var a=i.offers.indexOf(i.offers[n]);i.offers.splice(a,1)}return e}).catch():d["a"].candidatemanager(t,{stage:"rejected",interviewstarttime:null,interviewendtime:null,test_stage:null,project:null,report:null,interviewstatus:null,projectstarttime:null,offerstatus:null,offerletter:null,demolink:null},n).then(function(e){for(var n=0;n<i.offers.length;n++)if(i.offers[n].key===t){i.offers[n].stage="withdrawn";var a=i.offers.indexOf(i.offers[n]);i.offers.splice(a,1)}return e}).catch()}}},g=u,w=(i("1c35"),i("2877")),m=Object(w["a"])(g,n,a,!1,null,"74641960",null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-1aebefc2.73400017.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42178cb3"],{"0bfb":function(t,e,a){"use strict";var n=a("cb7c");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},2356:function(t,e,a){t.exports=a.p+"img/statistics.ffd3fcfd.svg"},"291a":function(t,e,a){"use strict";var n=a("5c2f"),s=a.n(n);s.a},3846:function(t,e,a){a("9e1e")&&"g"!=/./g.flags&&a("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:a("0bfb")})},5942:function(t,e,a){"use strict";var n=a("ee6e"),s=a.n(n);s.a},"5c2f":function(t,e,a){},"66e3":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("show-at",{attrs:{breakpoint:"mediumAndBelow"}},[a("a-layout-header",{style:{width:"100%",backgroundColor:"#ffffff",height:"5rem",padding:"1px 30px 0",borderBottom:"1px solid #e8e8e8"}},[a("router-link",{attrs:{to:"/"}},[a("img",{staticStyle:{width:"120px",height:"31px","margin-top":"1rem","margin-bottom":"6%","margin-left":"9%"},style:t.logo,attrs:{src:t.defaultlogo}})])],1)],1),a("hide-at",{attrs:{breakpoint:"mediumAndBelow"}},[a("a-layout-header",{style:{width:"100%",backgroundColor:"#004ec7",height:"6rem",padding:"1px 30px 0",borderBottom:"1px solid #e8e8e8"}},[a("a-row",[a("a-col",{attrs:{xs:24,sm:12,md:12,lg:6,xl:6}},[a("span",{staticStyle:{color:"white","font-size":"1rem","font-weight":"bold"}},[t._v(t._s(t.greeting)+"\n                "+t._s(t._f("capitalize")(this.$store.state.user.first_name)))]),a("p",{staticStyle:{color:"white","font-size":"0.9rem","font-weight":"bold","line-height":"3px"}},[t._v(t._s(t.events.length)+"\n                        interview(s)\n                        Today")])]),a("a-col",{attrs:{xs:12,sm:12,md:12,lg:18,xl:18}},[a("a-row",t._l(t.events,function(e){return a("a-col",{key:e,attrs:{span:6}},[a("a-card",{staticClass:"events"},[a("p",{staticStyle:{"line-height":"0"}},[t._v(t._s(e.start)+" - "+t._s(e.end))]),a("p",[t._v(t._s(t._f("capitalize")(e.title)))])])],1)}),1)],1)],1)],1)],1)],1)},s=[],o=(a("6b54"),a("96cf"),a("3b8d")),r=a("d225"),i=a("da05"),l=a("8808"),c=a("b8fb"),p=a.n(c),d=a("bf80"),u=a("688c"),f=a("c1df"),m=a.n(f),v=function t(e,a,n,s,o){Object(r["a"])(this,t),this.key=e,this.title=a,this.start=n,this.end=s,this.class=o},b={name:"Pageheader",components:{ACol:i["b"],hideAt:l["hideAt"],showAt:l["showAt"]},data:function(){return{currentUserProfile:null,greeting:null,events:[],defaultlogo:p.a}},mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,a,n,s,o,r,i,l,c,p,f,b,h,g,_,y,j,x;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return m.a,e=new Date,a=e.getHours(),this.greeting=a<12?"Good Morning":a<18?"Good Afternoon":"Good Evening",n={headers:{Authorization:"JWT "+this.$store.state.token}},t.next=7,d["a"].currentuser(this.$store.state.user.pk,n);case 7:return this.currentUserProfile=t.sent.data,t.next=10,u["a"].allmyjobapplicants(this.$store.state.user.pk,n);case 10:return this.allevents=t.sent.data,t.next=13,u["a"].mydevelopers(this.$store.state.user.pk,n);case 13:for(this.alldevrequests=t.sent.data,s=m()().format("YYYY-MM-DD"),o=0;o<this.allevents.length;o++)null!==this.allevents[o].interviewstatus&&m()(this.allevents[o].interviewstarttime).format("YYYY-MM-DD")===s&&(r=this.allevents[o].id,i=this.allevents[o].candidate.user.first_name,l=m()(this.allevents[o].interviewstarttime).format("HH:mm"),c=m()(this.allevents[o].interviewendtime).format("HH:mm"),p=this.allevents[o].eventcolor,f=new v(r,i,l,c,p),this.events.push(f));for(b=0;b<this.alldevrequests.length;b++)null!==this.alldevrequests[b].interviewstatus&&m()(this.alldevrequests[b].interviewstarttime).format("YYYY-MM-DD")===s&&(h=this.alldevrequests[b].id,g=this.alldevrequests[b].candidate.user.first_name,_=m()(this.alldevrequests[b].interviewstarttime).format("HH:mm"),y=m()(this.alldevrequests[b].interviewendtime).format("HH:mm"),j=this.alldevrequests[b].eventcolor,x=new v(h,g,_,y,j),this.events.push(x));case 17:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),filters:{capitalize:function(t){return t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""}},methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$router.push({name:"home"})},navigateTo:function(t){this.$router.push(t)}}},h=b,g=(a("291a"),a("2877")),_=Object(g["a"])(h,n,s,!1,null,"dac25bf8",null);e["a"]=_.exports},"6b54":function(t,e,a){"use strict";a("3846");var n=a("cb7c"),s=a("0bfb"),o=a("9e1e"),r="toString",i=/./[r],l=function(t){a("2aba")(RegExp.prototype,r,t,!0)};a("79e5")(function(){return"/a/b"!=i.call({source:"a",flags:"b"})})?l(function(){var t=n(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?s.call(t):void 0)}):i.name!=r&&l(function(){return i.call(this)})},"99fc":function(t,e,a){},aa19:function(t,e,a){t.exports=a.p+"img/cv.78718028.svg"},aaff:function(t,e,a){t.exports=a.p+"img/edit-tools.2bff877e.svg"},ab4c:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-layout",{staticStyle:{"min-height":"100vh"},attrs:{id:"components-layout-demo-side"}},[n("RecruiterSider"),n("a-layout",{style:{backgroundColor:"#ffffff"}},[n("a-layout-content",[n("Pageheader"),n("div",{style:{padding:"5px",background:"#fff",marginTop:"1rem"}},[n("a-row",{staticStyle:{"margin-bottom":"1rem"}},[n("a-col",{attrs:{xs:{span:24,offset:1},sm:{span:24,offset:2},md:{span:24,offset:2},lg:{span:24,offset:0},xl:{span:24,offset:0}}},[n("h3",{staticStyle:{color:"#1976D2","font-weight":"bold","margin-left":"1rem"}},[t._v("What would you like to\n                            do today?")])])],1),n("a-row",{staticStyle:{"padding-left":"1rem"}},[n("show-at",{attrs:{breakpoint:"mediumAndBelow"}},[n("a",{on:{click:t.showJobmodal}},[n("a-col",{staticClass:"boxes",attrs:{xs:{span:24,offset:2},sm:{span:10,offset:2},md:{span:10,offset:2},lg:{span:10,offset:1},xl:{span:6,offset:0}}},[n("a-row",{staticClass:"ant-card actioncards"},[n("a-col",{attrs:{span:"24"}},[n("div",{staticStyle:{"text-align":"center"}},[n("img",{staticClass:"poolavatar",attrs:{src:a("aaff")}})])]),n("a-col",{staticStyle:{"text-align":"center"},attrs:{span:"24"}},[n("p",[t._v("Post a Job")]),n("p",{staticStyle:{margin:"0"}},[t._v("Get devs for your vacancy")])])],1)],1)],1)]),n("hide-at",{attrs:{breakpoint:"mediumAndBelow"}},[n("a",{on:{click:t.showDrawer}},[n("a-col",{staticClass:"boxes",attrs:{xs:{span:24,offset:2},sm:{span:10,offset:2},md:{span:10,offset:2},lg:{span:10,offset:1},xl:{span:6,offset:0}}},[n("a-row",{staticClass:"ant-card actioncards"},[n("a-col",{attrs:{span:"24"}},[n("div",{staticStyle:{"text-align":"center"}},[n("img",{staticClass:"poolavatar",attrs:{src:a("aaff")}})])]),n("a-col",{staticStyle:{"text-align":"center"},attrs:{span:"24"}},[n("p",[t._v("Post a Job")]),n("p",{staticStyle:{margin:"0"}},[t._v("Get devs for your vacancy")])])],1)],1)],1)]),t.jobs.length>0?n("router-link",{attrs:{to:"managejobs"}},[n("a-col",{staticClass:"boxes",attrs:{xs:{span:24,offset:2},sm:{span:10,offset:2},md:{span:10,offset:2},lg:{span:10,offset:1},xl:{span:6,offset:0}}},[n("a-row",{staticClass:"ant-card actioncards"},[n("a-col",{attrs:{span:"24"}},[n("div",{staticStyle:{"text-align":"center"}},[n("img",{staticClass:"poolavatar",attrs:{src:a("aa19")}})])]),n("a-col",{staticStyle:{"text-align":"center"},attrs:{span:"24"}},[n("p",[t._v("Manage Jobs")]),n("p",{staticStyle:{margin:"0"}},[t._v("Manage job applications")])])],1)],1)],1):t._e(),t.mycandidates.length>0?n("router-link",{attrs:{to:"mycandidates"}},[n("a-col",{staticClass:"boxes",attrs:{xs:{span:24,offset:2},sm:{span:10,offset:2},md:{span:10,offset:2},lg:{span:10,offset:1},xl:{span:6,offset:0}}},[n("a-row",{staticClass:"ant-card actioncards"},[n("a-col",{attrs:{span:"24"}},[n("div",{staticStyle:{"text-align":"center"}},[n("img",{staticClass:"poolavatar",attrs:{src:a("2356")}})])]),n("a-col",{staticStyle:{"text-align":"center"},attrs:{span:"24"}},[n("p",[t._v("Manage Candidates")]),n("p",{staticStyle:{margin:"0"}},[t._v("Manage picked from talent")])])],1)],1)],1):t._e(),n("router-link",{attrs:{to:"talent"}},[n("a-col",{staticClass:"boxes",attrs:{xs:{span:24,offset:2},sm:{span:10,offset:2},md:{span:10,offset:2},lg:{span:10,offset:1},xl:{span:6,offset:0}}},[n("a-row",{staticClass:"ant-card actioncards"},[n("a-col",{attrs:{span:"24"}},[n("div",{staticStyle:{"text-align":"center"}},[n("img",{staticClass:"poolavatar",attrs:{src:a("dbfd")}})])]),n("a-col",{staticStyle:{"text-align":"center"},attrs:{span:"24"}},[n("p",[t._v("Browse the Talent Pool")]),n("p",{staticStyle:{margin:"0"}},[t._v("View more devs from pool")])])],1)],1)],1)],1)],1),n("a-drawer",{attrs:{title:"Create a new job",width:720,visible:t.visible,wrapStyle:{height:"calc(100% - 108px)",overflow:"auto",paddingBottom:"108px"}},on:{close:t.onClose}},[n("a-steps",{attrs:{current:t.current}},t._l(t.steps,function(t){return n("a-step",{key:t.title,attrs:{title:t.title}})}),1),n("a-form",{attrs:{form:t.form}},[n("div",{staticClass:"steps-content"},[0===t.current?n("div",[n("a-row",{attrs:{gutter:32}},[n("a-col",{staticStyle:{"padding-right":"1%"},attrs:{xs:{span:6,offset:0},sm:{span:6,offset:0},md:{span:8,offset:0},lg:{span:8,offset:0},xl:{span:8,offset:0}}},[n("a-form-item",{attrs:{label:"Job Title"}},[n("a-input",{model:{value:t.job.title,callback:function(e){t.$set(t.job,"title",e)},expression:"job.title"}}),t._l(t.errorlist,function(e){return n("span",{key:e},["title"===e?n("span",{staticStyle:{color:"red"}},[t._v("\n                                                * required field\n                                            ")]):t._e()])})],2)],1),n("a-col",{staticStyle:{"padding-right":"1%"},attrs:{xs:{span:6,offset:0},sm:{span:6,offset:0},md:{span:8,offset:0},lg:{span:8,offset:0},xl:{span:8,offset:0}}},[n("a-form-item",{attrs:{label:"Job role"}},[n("a-select",{attrs:{placeholder:"Select a option"},model:{value:t.job.job_role,callback:function(e){t.$set(t.job,"job_role",e)},expression:"job.job_role"}},[n("a-select-option",{attrs:{value:"Full Stack Developer"}},[t._v("\n                                                Full Stack Developer\n                                            ")]),n("a-select-option",{attrs:{value:"Frontend Developer"}},[t._v("\n                                                Frontend Developer\n                                            ")]),n("a-select-option",{attrs:{value:"Backend  Developer"}},[t._v("\n                                                Backend Developer\n                                            ")]),n("a-select-option",{attrs:{value:"Android  Developer"}},[t._v("\n                                                Android Developer\n                                            ")]),n("a-select-option",{attrs:{value:"Graphic Designer"}},[t._v("\n                                                Graphic Designer\n                                            ")]),n("a-select-option",{attrs:{value:"IOS Developer"}},[t._v("\n                                                IOS Developer\n                                            ")]),n("a-select-option",{attrs:{value:"Data Scientist"}},[t._v("\n                                                Data Scientist\n                                            ")])],1),t._l(t.errorlist,function(e){return n("span",{key:e},["role"===e?n("span",{staticStyle:{color:"red"}},[t._v("\n                                                * required field\n                                            ")]):t._e()])})],2)],1),n("a-col",{staticStyle:{"padding-right":"1%"},attrs:{xs:{span:6,offset:0},sm:{span:6,offset:0},md:{span:8,offset:0},lg:{span:8,offset:0},xl:{span:8,offset:0}}},[n("a-form-item",{attrs:{label:"Developer Experience"}},[n("a-select",{attrs:{placeholder:"Select a option"},model:{value:t.job.dev_experience,callback:function(e){t.$set(t.job,"dev_experience",e)},expression:"job.dev_experience"}},[n("a-select-option",{attrs:{value:"Entry"}},[t._v("\n                                                Entry\n                                            ")]),n("a-select-option",{attrs:{value:"Junior"}},[t._v("\n                                                Junior\n                                            ")]),n("a-select-option",{attrs:{value:"Mid-Level"}},[t._v("\n                                                Mid-Level\n                                            ")]),n("a-select-option",{attrs:{value:"Senior"}},[t._v("\n                                                Senior\n                                            ")])],1),t._l(t.errorlist,function(e){return n("span",{key:e},["experience"===e?n("span",{staticStyle:{color:"red"}},[t._v("\n                                                * required field\n                                            ")]):t._e()])})],2)],1)],1),n("a-row",[n("a-col",{staticStyle:{"padding-right":"1%"},attrs:{span:8}},[n("a-form-item",{attrs:{label:"Contract type"}},[n("a-select",{attrs:{placeholder:"Select a option"},model:{value:t.job.engagement_type,callback:function(e){t.$set(t.job,"engagement_type",e)},expression:"job.engagement_type"}},[n("a-select-option",{attrs:{value:"Full-time"}},[t._v("\n                                                Full-time\n                                            ")]),n("a-select-option",{attrs:{value:"Part-time"}},[t._v("\n                                                Part-time\n                                            ")]),n("a-select-option",{attrs:{value:"Contract"}},[t._v("\n                                                Contract\n                                            ")]),n("a-select-option",{attrs:{value:"Remote"}},[t._v("\n                                                Remote\n                                            ")]),n("a-select-option",{attrs:{value:"Freelance"}},[t._v("\n                                                Freelance\n                                            ")])],1),t._l(t.errorlist,function(e){return n("span",{key:e},["engagement"===e?n("span",{staticStyle:{color:"red"}},[t._v("\n                                                * required field\n                                            ")]):t._e()])})],2)],1),n("a-col",{staticStyle:{"padding-right":"1%"},attrs:{span:8}},[n("a-form-item",{attrs:{label:"Location"}},[n("country-select",{staticClass:"ant-input",model:{value:t.job.location,callback:function(e){t.$set(t.job,"location",e)},expression:"job.location"}}),t._l(t.errorlist,function(e){return n("span",{key:e},["location"===e?n("span",{staticStyle:{color:"red"}},[t._v("\n                                                * required field\n                                            ")]):t._e()])})],2)],1),n("a-col",{staticStyle:{"padding-right":"1%"},attrs:{span:8}},[n("a-form-item",{attrs:{label:"City of operation  "}},[n("a-input",{attrs:{placeholder:"lagos,accra,nairobi...etc"},model:{value:t.job.city,callback:function(e){t.$set(t.job,"city",e)},expression:"job.city"}})],1)],1)],1),n("a-row",[n("a-col",{staticStyle:{"padding-right":"1%"},attrs:{span:8}},[n("a-form-item",{attrs:{label:"Salary range per month "}},[n("a-input",{attrs:{placeholder:"1000-1500$"},model:{value:t.job.remuneration,callback:function(e){t.$set(t.job,"remuneration",e)},expression:"job.remuneration"}}),t._l(t.errorlist,function(e){return n("span",{key:e},["remuneration"===e?n("span",{staticStyle:{color:"red"}},[t._v("\n                                                * required field\n                                            ")]):t._e()])})],2)],1),n("a-col",{staticStyle:{"padding-right":"1%"},attrs:{span:8}},[n("a-form-item",{attrs:{label:"Deadline "}},[n("a-date-picker",{attrs:{placeholder:"Applications deadline",format:"YYYY-MM-DD HH:mm:ss",disabledDate:t.disabledDate,disabledTime:t.disabledDateTime,showTime:{defaultValue:t.moment("00:00:00","HH:mm:ss")}},model:{value:t.job.deadline,callback:function(e){t.$set(t.job,"deadline",e)},expression:"job.deadline"}}),t._l(t.errorlist,function(e){return n("span",{key:e},["deadline"===e?n("span",{staticStyle:{color:"red"}},[t._v("\n                                                * required field\n                                            ")]):t._e()])})],2)],1),n("a-col",{staticStyle:{"padding-right":"1%"},attrs:{span:8}},[n("a-form-item",{attrs:{label:"Developers needed "}},[n("a-input-number",{attrs:{min:1},model:{value:t.job.num_devs_wanted,callback:function(e){t.$set(t.job,"num_devs_wanted",e)},expression:"job.num_devs_wanted"}}),t._l(t.errorlist,function(e){return n("span",{key:e},["num_devs_wanted"===e?n("span",{staticStyle:{color:"red"}},[t._v("\n                                                * required field\n                                            ")]):t._e()])})],2)],1)],1)],1):t._e(),1===t.current?n("div",[n("a-row",{attrs:{gutter:16}},[n("a-col",{attrs:{span:24}},[n("a-form-item",[n("p",{staticStyle:{"margin-bottom":"0"}},[t._v("Pick skills you are looking for")]),n("div",[t._l(t.recommendationtags,function(e){return[n("a-checkable-tag",{key:e,staticStyle:{"border-color":"blue","font-size":"12px"},attrs:{checked:t.selectedTags.indexOf(e)>-1},on:{change:function(a){return t.handleChange(e,a)}}},[t._v("\n                                                    "+t._s(e)+"\n                                                ")])]}),t._l(t.errorlist1,function(e){return n("span",{key:e},["tech_stack"===e?n("span",{staticStyle:{color:"red"}},[t._v("\n                                                * please pick atleast 1\n                                            ")]):t._e()])})],2)])],1),n("a-col",{attrs:{span:24}},[n("a-form-item",{attrs:{label:"Job description ","label-col":{span:24},"wrapper-col":{span:24}}},[n("vue-simplemde",{ref:"markdownEditor",model:{value:t.job.description,callback:function(e){t.$set(t.job,"description",e)},expression:"job.description"}}),t._l(t.errorlist1,function(e){return n("span",{key:e},["description"===e?n("span",{staticStyle:{color:"red"}},[t._v("\n                                                * required field\n                                            ")]):t._e()])})],2)],1)],1)],1):t._e(),2===t.current?n("div",[n("p",[t._v("Preview of how job will appear on job board")]),n("a-alert",{attrs:{message:"Your job is under review. It will be updated soon if it matches our specification.\n                                     Else, we will contact you directly for edits.",type:"info"}}),n("div",{staticClass:"jobdetails"},[n("div",{staticStyle:{"border-bottom":"1px solid #e8e8e8","margin-bottom":"1%","padding-bottom":"3%"}},[n("span",[n("span",{staticStyle:{"font-weight":"700","font-size":"large"}},[t._v(t._s(t.job.title))])])]),n("div",[n("p",[n("strong",[t._v("Company name:")]),t._v(" "+t._s(t.job.company)+"\n                                        "),n("span",{staticStyle:{"margin-left":"5%"}},[t._v("\n                                Location : "+t._s(t.job.location)+"\n                            ")])]),n("p",[t._v("Monthly renumeration * : "+t._s(t.job.remuneration))]),n("p",[t._v("\n                                        Skills looking for :\n                                        "),t._l(t.selectedTags,function(e){return n("span",{key:e},[n("a-tag",{staticStyle:{color:"#007BFF"},attrs:{color:"#F0F6FD"}},[t._v(t._s(e))])],1)})],2),n("p",[t._v("Application Deadline : "+t._s(t.job.deadline))])]),n("div",[n("p",{staticStyle:{"font-weight":"700"}},[t._v("Job Details")]),n("markdown",[t._v(t._s(t.job.description))])],1)])],1):t._e()]),n("div",{staticClass:"steps-action"},[t.current<t.steps.length-1?n("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.next(t.current)}}},[t._v("\n                            Next\n                        ")]):t._e(),t.current==t.steps.length-1?n("a-button",{attrs:{type:"primary"},on:{click:t.done}},[t._v("\n                            Done\n                        ")]):t._e(),t.current>0?n("a-button",{staticStyle:{"margin-left":"8px"},on:{click:t.prev}},[t._v("\n                            Previous\n                        ")]):t._e()],1)])],1),n("a-modal",{staticStyle:{top:"20px"},attrs:{title:"Create a new job",footer:null},model:{value:t.jobmobile,callback:function(e){t.jobmobile=e},expression:"jobmobile"}},[n("a-steps",{attrs:{current:t.current}},t._l(t.steps,function(t){return n("a-step",{key:t.title,attrs:{title:t.title}})}),1),n("a-form",{attrs:{form:t.form}},[n("div",{staticClass:"steps-content"},[0===t.current?n("div",[n("a-row",{attrs:{gutter:32}},[n("a-col",{staticStyle:{"padding-right":"1%"},attrs:{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:12,offset:0},lg:{span:8,offset:0},xl:{span:8,offset:0}}},[n("a-form-item",{attrs:{label:"Job Title"}},[n("a-input",{model:{value:t.job.title,callback:function(e){t.$set(t.job,"title",e)},expression:"job.title"}}),t._l(t.errorlist,function(e){return n("span",{key:e},["title"===e?n("span",{staticStyle:{color:"red"}},[t._v("\n                                                * required field\n                                            ")]):t._e()])})],2)],1),n("a-col",{staticStyle:{"padding-right":"1%"},attrs:{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:12,offset:0},lg:{span:8,offset:0},xl:{span:8,offset:0}}},[n("a-form-item",{attrs:{label:"Job role"}},[n("a-select",{attrs:{placeholder:"Select a option"},model:{value:t.job.job_role,callback:function(e){t.$set(t.job,"job_role",e)},expression:"job.job_role"}},[n("a-select-option",{attrs:{value:"Full Stack Developer"}},[t._v("\n                                                Full Stack Developer\n                                            ")]),n("a-select-option",{attrs:{value:"Frontend Developer"}},[t._v("\n                                                Frontend Developer\n                                            ")]),n("a-select-option",{attrs:{value:"Backend  Developer"}},[t._v("\n                                                Backend Developer\n                                            ")]),n("a-select-option",{attrs:{value:"Android  Developer"}},[t._v("\n                                                Android Developer\n                                            ")]),n("a-select-option",{attrs:{value:"Graphic Designer"}},[t._v("\n                                                Graphic Designer\n                                            ")]),n("a-select-option",{attrs:{value:"IOS Developer"}},[t._v("\n                                                IOS Developer\n                                            ")]),n("a-select-option",{attrs:{value:"Data Scientist"}},[t._v("\n                                                Data Scientist\n                                            ")])],1),t._l(t.errorlist,function(e){return n("span",{key:e},["role"===e?n("span",{staticStyle:{color:"red"}},[t._v("\n                                                * required field\n                                            ")]):t._e()])})],2)],1),n("a-col",{staticStyle:{"padding-right":"1%"},attrs:{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:12,offset:0},lg:{span:8,offset:0},xl:{span:8,offset:0}}},[n("a-form-item",{attrs:{label:"Developer Experience"}},[n("a-select",{attrs:{placeholder:"Select a option"},model:{value:t.job.dev_experience,callback:function(e){t.$set(t.job,"dev_experience",e)},expression:"job.dev_experience"}},[n("a-select-option",{attrs:{value:"Entry"}},[t._v("\n                                                Entry\n                                            ")]),n("a-select-option",{attrs:{value:"Junior"}},[t._v("\n                                                Junior\n                                            ")]),n("a-select-option",{attrs:{value:"Mid-Level"}},[t._v("\n                                                Mid-Level\n                                            ")]),n("a-select-option",{attrs:{value:"Senior"}},[t._v("\n                                                Senior\n                                            ")])],1),t._l(t.errorlist,function(e){return n("span",{key:e},["experience"===e?n("span",{staticStyle:{color:"red"}},[t._v("\n                                                * required field\n                                            ")]):t._e()])})],2)],1)],1),n("a-row",[n("a-col",{staticStyle:{"padding-right":"1%"},attrs:{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:12,offset:0},lg:{span:8,offset:0},xl:{span:8,offset:0}}},[n("a-form-item",{attrs:{label:"Contract type"}},[n("a-select",{attrs:{placeholder:"Select a option"},model:{value:t.job.engagement_type,callback:function(e){t.$set(t.job,"engagement_type",e)},expression:"job.engagement_type"}},[n("a-select-option",{attrs:{value:"Full-time"}},[t._v("\n                                                Full-time\n                                            ")]),n("a-select-option",{attrs:{value:"Part-time"}},[t._v("\n                                                Part-time\n                                            ")]),n("a-select-option",{attrs:{value:"Contract"}},[t._v("\n                                                Contract\n                                            ")]),n("a-select-option",{attrs:{value:"Remote"}},[t._v("\n                                                Remote\n                                            ")]),n("a-select-option",{attrs:{value:"Freelance"}},[t._v("\n                                                Freelance\n                                            ")])],1),t._l(t.errorlist,function(e){return n("span",{key:e},["engagement"===e?n("span",{staticStyle:{color:"red"}},[t._v("\n                                                * required field\n                                            ")]):t._e()])})],2)],1),n("a-col",{staticStyle:{"padding-right":"1%"},attrs:{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:12,offset:0},lg:{span:8,offset:0},xl:{span:8,offset:0}}},[n("a-form-item",{attrs:{label:"Location"}},[n("country-select",{staticClass:"ant-input",model:{value:t.job.location,callback:function(e){t.$set(t.job,"location",e)},expression:"job.location"}}),t._l(t.errorlist,function(e){return n("span",{key:e},["location"===e?n("span",{staticStyle:{color:"red"}},[t._v("\n                                                * required field\n                                            ")]):t._e()])})],2)],1),n("a-col",{staticStyle:{"padding-right":"1%"},attrs:{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:12,offset:0},lg:{span:8,offset:0},xl:{span:8,offset:0}}},[n("a-form-item",{attrs:{label:"Salary range per month "}},[n("a-input",{attrs:{placeholder:"1000-1500$"},model:{value:t.job.remuneration,callback:function(e){t.$set(t.job,"remuneration",e)},expression:"job.remuneration"}}),t._l(t.errorlist,function(e){return n("span",{key:e},["remuneration"===e?n("span",{staticStyle:{color:"red"}},[t._v("\n                                                * required field\n                                            ")]):t._e()])})],2)],1)],1),n("a-row",[n("a-col",{staticStyle:{"padding-right":"1%"},attrs:{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:12,offset:0},lg:{span:8,offset:0},xl:{span:8,offset:0}}},[n("a-form-item",{attrs:{label:"Deadline "}},[n("a-date-picker",{attrs:{placeholder:"Applications deadline",format:"YYYY-MM-DD HH:mm:ss",disabledDate:t.disabledDate,disabledTime:t.disabledDateTime,showTime:{defaultValue:t.moment("00:00:00","HH:mm:ss")}},model:{value:t.job.deadline,callback:function(e){t.$set(t.job,"deadline",e)},expression:"job.deadline"}}),t._l(t.errorlist,function(e){return n("span",{key:e},["deadline"===e?n("span",{staticStyle:{color:"red"}},[t._v("\n                                                * required field\n                                            ")]):t._e()])})],2)],1),n("a-col",{staticStyle:{"padding-right":"1%"},attrs:{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:12,offset:0},lg:{span:8,offset:0},xl:{span:8,offset:0}}},[n("a-form-item",{attrs:{label:"Developers needed "}},[n("a-input-number",{attrs:{min:1},model:{value:t.job.num_devs_wanted,callback:function(e){t.$set(t.job,"num_devs_wanted",e)},expression:"job.num_devs_wanted"}}),t._l(t.errorlist,function(e){return n("span",{key:e},["num_devs_wanted"===e?n("span",{staticStyle:{color:"red"}},[t._v("\n                                                * required field\n                                            ")]):t._e()])})],2)],1)],1)],1):t._e(),1===t.current?n("div",[n("a-row",{attrs:{gutter:16}},[n("a-col",{attrs:{span:24}},[n("a-form-item",[n("p",{staticStyle:{"margin-bottom":"0"}},[t._v("Pick skills you are looking for")]),n("div",[t._l(t.recommendationtags,function(e){return[n("a-checkable-tag",{key:e,staticStyle:{"border-color":"blue","font-size":"12px"},attrs:{checked:t.selectedTags.indexOf(e)>-1},on:{change:function(a){return t.handleChange(e,a)}}},[t._v("\n                                                    "+t._s(e)+"\n                                                ")])]}),t._l(t.errorlist1,function(e){return n("span",{key:e},["tech_stack"===e?n("span",{staticStyle:{color:"red"}},[t._v("\n                                                * please pick atleast 1\n                                            ")]):t._e()])})],2)])],1),n("a-col",{attrs:{span:24}},[n("a-form-item",{attrs:{label:"Job description ","label-col":{span:24},"wrapper-col":{span:24}}},[n("vue-simplemde",{ref:"markdownEditor",model:{value:t.job.description,callback:function(e){t.$set(t.job,"description",e)},expression:"job.description"}}),t._l(t.errorlist1,function(e){return n("span",{key:e},["description"===e?n("span",{staticStyle:{color:"red"}},[t._v("\n                                                * required field\n                                            ")]):t._e()])})],2)],1)],1)],1):t._e(),2===t.current?n("div",[n("p",[t._v("Preview of how job will appear on job board")]),n("a-alert",{attrs:{message:"Your job is under review. It will be updated soon if it matches our specification.\n                                    Else, we will contact you directly for edits.",type:"info"}}),n("div",{staticClass:"jobdetails"},[n("div",{staticStyle:{"border-bottom":"1px solid #e8e8e8","margin-bottom":"1%","padding-bottom":"3%"}},[n("span",[n("span",{staticStyle:{"font-weight":"700","font-size":"large"}},[t._v(t._s(t.job.title))])])]),n("div",[n("p",[n("strong",[t._v("Company name:")]),t._v(" "+t._s(t.job.company)+"\n                                        "),n("span",{staticStyle:{"margin-left":"5%"}},[t._v("\n                                Location : "+t._s(t.job.location)+"\n                            ")])]),n("p",[t._v("Monthly renumeration * : "+t._s(t.job.remuneration))]),n("p",[t._v("\n                                        Skills looking for :\n                                        "),t._l(t.selectedTags,function(e){return n("span",{key:e},[n("a-tag",{staticStyle:{color:"#007BFF"},attrs:{color:"#F0F6FD"}},[t._v(t._s(e))])],1)})],2),n("p",[t._v("Application Deadline : "+t._s(t.job.deadline))])]),n("div",[n("p",{staticStyle:{"font-weight":"700"}},[t._v("Job Details")]),n("markdown",[t._v(t._s(t.job.description))])],1)])],1):t._e()]),n("div",{staticClass:"steps-action"},[t.current<t.steps.length-1?n("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.next(t.current)}}},[t._v("\n                            Next\n                        ")]):t._e(),t.current==t.steps.length-1?n("a-button",{attrs:{type:"primary"},on:{click:t.done}},[t._v("\n                            Done\n                        ")]):t._e(),t.current>0?n("a-button",{staticStyle:{"margin-left":"8px"},on:{click:t.prev}},[t._v("\n                            Previous\n                        ")]):t._e()],1)])],1)],1)],1)],1)},s=[],o=a("768b"),r=(a("ac6a"),a("ffc1"),a("75fc")),i=(a("96cf"),a("3b8d")),l=(a("99fc"),a("b911"),a("bf80")),c=a("688c"),p=a("da05"),d=a("290c"),u=a("66e3"),f=a("113c"),m=a("c1df"),v=a.n(m),b=(a("da93"),a("8808")),h=a("ebfb"),g=a.n(h),_=a("623c"),y=(a("b116"),a("9ce6")),j=a.n(y),x={name:"index",data:function(){return{currentUserProfile:null,jobs:null,mycandidates:[],visible:!1,job:{title:null,job_role:null,dev_experience:null,engagement_type:null,location:null,remuneration:null,deadline:null,num_devs_wanted:null,tech_stack:null,description:null},inputVisible:!1,currentUser:{},inputValue:"",recommendationtags:["Django","Javascript","Python","Php","Postgres","Sql","Html","Css","bootstrap","React","Java","React Native","Redux","Flask ","Go","Expressjs","Vuejs","Angular","Ios","flutter","Ionic","C#","C","Swift","Nodejs","Typescript","Firebase","Xamarin","Spark",".Net","Redis","Sqlite","Rails","Meteor","AI","Cybersecurity","Blockchain","Arduino","Spring","Bitcoin","Kotlin","Scala","Nativescript ","Android","Website","Mobile"],selectedTags:[],loading:!0,errorlist:[],errorlist1:[],current:0,steps:[{title:"Job details"},{title:"Skills of interest"},{title:"Job Review"}],jobmobile:!1,content:""}},components:{ARow:d["a"],ACol:p["b"],Pageheader:u["a"],RecruiterSider:f["a"],showAt:b["showAt"],hideAt:b["hideAt"],mde:g.a,VueSimplemde:_["a"],markdown:j.a},created:function(){this.$route.params.post&&this.showDrawer()},mounted:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e={headers:{Authorization:"JWT "+this.$store.state.token}},!this.$store.state.user.pk){t.next=12;break}return t.next=4,l["a"].currentuser(this.$store.state.user.pk,e);case 4:return this.currentUserProfile=t.sent.data,t.next=7,c["a"].myjobssliced(this.$store.state.user.pk,e);case 7:return this.jobs=t.sent.data,t.next=10,c["a"].mydeveloperssimple(this.$store.state.user.pk,e);case 10:this.mycandidates=t.sent.data,this.loading=!1;case 12:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{moment:v.a,disabledDate:function(t){return t&&t<v()().endOf("day")},onCollapse:function(t){return t},onBreakpoint:function(t){return t},logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$router.push({name:"home"})},navigateTo:function(t){this.$router.push(t)},showDrawer:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.job.posted_by=this.currentUserProfile.id,this.job.company=this.currentUserProfile.company,this.visible=!0;case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),showJobmodal:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.job.posted_by=this.currentUserProfile.id,this.job.company=this.currentUserProfile.company,this.jobmobile=!0;case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),onClose:function(){this.visible=!1},showInput:function(){this.inputVisible=!0,this.$nextTick(function(){this.$refs.input.focus()})},handleInputChange:function(t){this.inputValue=t.target.value},handleInputConfirm:function(){var t=this.inputValue,e=this.tags;t&&-1===e.indexOf(t)&&(e=[].concat(Object(r["a"])(e),[t]));var a=e.join(", ");this.job.tech_stack=a,Object.assign(this,{tags:e,inputVisible:!1,inputValue:""})},handleChange:function(t,e){var a=this.selectedTags,n=e?[].concat(Object(r["a"])(a),[t]):a.filter(function(e){return e!==t});this.selectedTags=n;var s=this.selectedTags.join(", ");this.job.tech_stack=s},next:function(t){if(0===t){this.errorlist=[];for(var e={title:this.job.title,role:this.job.job_role,experience:this.job.dev_experience,engagement:this.job.engagement_type,location:this.job.location,renumeration:this.job.remuneration,deadline:this.job.deadline,num_devs_wanted:this.job.num_devs_wanted},a=0,n=Object.entries(e);a<n.length;a++){var s=Object(o["a"])(n[a],2),r=s[0],i=s[1];null!==i&&void 0!==i||this.errorlist.push(r)}0===this.errorlist.length&&this.current++}else if(1===t){this.errorlist1=[];for(var l={tech_stack:this.job.tech_stack,description:this.job.description},c=0,p=Object.entries(l);c<p.length;c++){var d=Object(o["a"])(p[c],2);r=d[0],i=d[1];null!==i&&void 0!==i||this.errorlist1.push(r)}0===this.errorlist1.length&&this.current++}},prev:function(){this.current--},done:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,a=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e={headers:{Authorization:"JWT "+this.$store.state.token}},c["a"].createjob(this.job,e).then(function(t){a.visible=!1,a.$router.push({name:"managejobs"}),c["a"].newjobemail(t.data.id,e).then().catch()}).catch(function(t){a.visible=!1,a.$router.push({name:"recruiter"})});case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},k=x,w=(a("5942"),a("2877")),S=Object(w["a"])(k,n,s,!1,null,"4c871319",null);e["default"]=S.exports},b911:function(t,e,a){},d225:function(t,e,a){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}a.d(e,"a",function(){return n})},dbfd:function(t,e,a){t.exports=a.p+"img/star.deae59b5.svg"},ee6e:function(t,e,a){}}]);
//# sourceMappingURL=chunk-42178cb3.ab17face.js.map
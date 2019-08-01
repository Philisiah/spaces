(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app~c60401bb"],{"78fa":function(e,t,a){"use strict";a.d(t,"a",function(){return o}),a.d(t,"b",function(){return n});var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout-sider",{staticStyle:{"box-shadow":"2px 0 6px rgba(0,21,41,.35)","background-color":"white",position:"fixed"},style:{overflow:"auto",height:"100vh",position:"fixed",left:0},attrs:{breakpoint:"lg",collapsedWidth:"0"},on:{collapse:e.onCollapse,breakpoint:e.onBreakpoint}},[a("router-link",{attrs:{to:"/"}},[a("img",{staticStyle:{width:"120px",height:"31px","margin-top":"7%","margin-bottom":"6%","margin-left":"9%"},style:e.logo,attrs:{src:e.defaultlogo}})]),a("a-menu",{staticStyle:{"min-height":"85vh"},attrs:{defaultSelectedKeys:["1"],mode:"inline"}},[a("a-menu-item",{key:"1"},[a("router-link",{attrs:{to:"/recruiter"}},[a("a-icon",{attrs:{type:"dashboard"}}),a("span",[e._v("Dashboard")])],1)],1),a("a-menu-item",{key:"5"},[a("a",{on:{click:e.showDrawer}},[a("a-icon",{attrs:{type:"edit"}}),a("span",[e._v("Post a job")])],1)]),a("a-menu-item",{key:"2"},[a("router-link",{attrs:{to:"/managejobs"}},[a("a-icon",{attrs:{type:"project"}}),a("span",[e._v("My jobs")])],1)],1),a("a-menu-item",{key:"3"},[a("router-link",{attrs:{to:"/mycandidates"}},[a("a-icon",{attrs:{type:"team"}}),a("span",[e._v("My Candidates")])],1)],1),a("a-menu-item",{key:"4"},[a("router-link",{attrs:{to:"/talent"}},[a("a-icon",{attrs:{type:"star"}}),a("span",[e._v("Talent Pool")])],1)],1),a("a-menu-item",{key:"8"},[a("router-link",{attrs:{to:"/calendar"}},[a("a-icon",{attrs:{type:"calendar"}}),a("span",[e._v("Calendar")])],1)],1),a("a-menu-item",{key:"6"},[a("router-link",{attrs:{to:"/myprofile"}},[a("a-icon",{attrs:{type:"user"}}),a("span",[e._v("My profile")])],1)],1),a("a-menu-item",{key:"7"},[a("a",{on:{click:e.logout}},[a("a-icon",{attrs:{type:"export"}}),a("span",[e._v("  Logout")])],1)])],1),a("a-drawer",{attrs:{title:"Create a new job",width:720,visible:e.visible,wrapStyle:{height:"calc(100% - 108px)",overflow:"auto",paddingBottom:"108px"}},on:{close:e.onClose}},[a("form-wizard",{attrs:{shape:"tab",color:"#007BFF",title:"",subtitle:""},on:{"on-complete":e.onComplete}},[a("tab-content",{attrs:{title:"Job details",icon:"ti-user"}},[a("a-form",{attrs:{form:e.form}},[a("a-row",{attrs:{gutter:32}},[a("a-col",{staticStyle:{"padding-right":"1%"},attrs:{span:8}},[a("a-form-item",{attrs:{label:"Title"}},[a("a-input",{model:{value:e.job.title,callback:function(t){e.$set(e.job,"title",t)},expression:"job.title"}})],1)],1),a("a-col",{staticStyle:{"padding-right":"1%"},attrs:{span:8}},[a("a-form-item",{attrs:{label:"Job role"}},[a("a-select",{attrs:{placeholder:"Select a option"},model:{value:e.job.job_role,callback:function(t){e.$set(e.job,"job_role",t)},expression:"job.job_role"}},[a("a-select-option",{attrs:{value:"Full Stack Developer"}},[e._v("\n                                        Full Stack Developer\n                                    ")]),a("a-select-option",{attrs:{value:"Frontend Developer"}},[e._v("\n                                        Frontend Developer\n                                    ")]),a("a-select-option",{attrs:{value:"Backend  Developer"}},[e._v("\n                                        Backend Developer\n                                    ")]),a("a-select-option",{attrs:{value:"Android  Developer"}},[e._v("\n                                        Android Developer\n                                    ")]),a("a-select-option",{attrs:{value:"Graphic Designer"}},[e._v("\n                                        Graphic Designer\n                                    ")]),a("a-select-option",{attrs:{value:"IOS Developer"}},[e._v("\n                                        IOS Developer\n                                    ")]),a("a-select-option",{attrs:{value:"Data Scientist"}},[e._v("\n                                        Data Scientist\n                                    ")])],1)],1)],1),a("a-col",{staticStyle:{"padding-right":"1%"},attrs:{span:8}},[a("a-form-item",{attrs:{label:"Developer Experience"}},[a("a-select",{attrs:{placeholder:"Select a option"},model:{value:e.job.dev_experience,callback:function(t){e.$set(e.job,"dev_experience",t)},expression:"job.dev_experience"}},[a("a-select-option",{attrs:{value:"Entry"}},[e._v("\n                                        Entry\n                                    ")]),a("a-select-option",{attrs:{value:"Junior"}},[e._v("\n                                        Junior\n                                    ")]),a("a-select-option",{attrs:{value:"Mid-Level"}},[e._v("\n                                        Mid-Level\n                                    ")]),a("a-select-option",{attrs:{value:"Senior"}},[e._v("\n                                        Senior\n                                    ")])],1)],1)],1),a("a-col",{staticStyle:{"padding-right":"1%"},attrs:{span:8}},[a("a-form-item",{attrs:{label:"Contract type"}},[a("a-select",{attrs:{placeholder:"Select a option"},model:{value:e.job.engagement_type,callback:function(t){e.$set(e.job,"engagement_type",t)},expression:"job.engagement_type"}},[a("a-select-option",{attrs:{value:"Full-time"}},[e._v("\n                                        Full-time\n                                    ")]),a("a-select-option",{attrs:{value:"Part-time"}},[e._v("\n                                        Part-time\n                                    ")]),a("a-select-option",{attrs:{value:"Contract"}},[e._v("\n                                        Contract\n                                    ")]),a("a-select-option",{attrs:{value:"Remote"}},[e._v("\n                                        Remote\n                                    ")]),a("a-select-option",{attrs:{value:"Freelance"}},[e._v("\n                                        Freelance\n                                    ")])],1)],1)],1),a("a-col",{staticStyle:{"padding-right":"1%"},attrs:{span:8}},[a("a-form-item",{attrs:{label:"Location"}},[a("country-select",{staticClass:"ant-input",model:{value:e.job.location,callback:function(t){e.$set(e.job,"location",t)},expression:"job.location"}})],1)],1),a("a-col",{staticStyle:{"padding-right":"1%"},attrs:{span:8}},[a("a-form-item",{attrs:{label:"Salary range per month "}},[a("a-input",{attrs:{placeholder:"1000-1500$"},model:{value:e.job.remuneration,callback:function(t){e.$set(e.job,"remuneration",t)},expression:"job.remuneration"}})],1)],1),a("a-col",{staticStyle:{"padding-right":"1%"},attrs:{span:8}},[a("a-form-item",{attrs:{label:"Deadline "}},[a("a-date-picker",{attrs:{placeholder:"Applications deadline",format:"YYYY-MM-DD HH:mm:ss",disabledDate:e.disabledDate,disabledTime:e.disabledDateTime,showTime:{defaultValue:e.moment("00:00:00","HH:mm:ss")}},model:{value:e.job.deadline,callback:function(t){e.$set(e.job,"deadline",t)},expression:"job.deadline"}})],1)],1),a("a-col",{staticStyle:{"padding-right":"1%"},attrs:{span:12}},[a("a-form-item",{attrs:{label:"Developers needed "}},[a("a-input-number",{attrs:{min:1},model:{value:e.job.num_devs_wanted,callback:function(t){e.$set(e.job,"num_devs_wanted",t)},expression:"job.num_devs_wanted"}})],1)],1)],1)],1)],1),a("tab-content",{attrs:{title:"Skills of interest",icon:"ti-settings"}},[a("a-row",{attrs:{gutter:16}},[a("a-col",{attrs:{span:24}},[a("a-form-item",[a("p",[e._v("Pick skills you are looking for")]),a("div",[e._l(e.recommendationtags,function(t){return[a("a-checkable-tag",{key:t,staticStyle:{"border-color":"blue","font-size":"14px"},attrs:{checked:e.selectedTags.indexOf(t)>-1},on:{change:function(a){return e.handleChange(t,a)}}},[e._v("\n                                        "+e._s(t)+"\n                                    ")])]})],2)])],1),a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"Job description ","label-col":{span:24},"wrapper-col":{span:24}}},[a("a-textarea",{attrs:{placeholder:"A bit about the job",rows:6},model:{value:e.job.description,callback:function(t){e.$set(e.job,"description",t)},expression:"job.description"}})],1)],1)],1)],1),a("tab-content",{attrs:{title:"Job review",icon:"ti-settings"}},[a("a-form",{attrs:{form:e.form}},[a("a-row",{attrs:{gutter:16}},[a("a-col",{staticStyle:{"padding-right":"1%"},attrs:{span:8}},[a("a-form-item",{attrs:{label:"Title"}},[a("a-input",{model:{value:e.job.title,callback:function(t){e.$set(e.job,"title",t)},expression:"job.title"}})],1)],1),a("a-col",{staticStyle:{"padding-right":"1%"},attrs:{span:8}},[a("a-form-item",{attrs:{label:"Job role"}},[a("a-select",{attrs:{placeholder:"Select a option and change input text above"},model:{value:e.job.job_role,callback:function(t){e.$set(e.job,"job_role",t)},expression:"job.job_role"}},[a("a-select-option",{attrs:{value:"Full Stack Developer"}},[e._v("\n                                        Full Stack Developer\n                                    ")]),a("a-select-option",{attrs:{value:"Frontend Developer"}},[e._v("\n                                        Frontend Developer\n                                    ")]),a("a-select-option",{attrs:{value:"Backend  Developer"}},[e._v("\n                                        Backend Developer\n                                    ")]),a("a-select-option",{attrs:{value:"Android  Developer"}},[e._v("\n                                        Android Developer\n                                    ")]),a("a-select-option",{attrs:{value:"Graphic Designer"}},[e._v("\n                                        Graphic Designer\n                                    ")]),a("a-select-option",{attrs:{value:"IOS Developer"}},[e._v("\n                                        IOS Developer\n                                    ")]),a("a-select-option",{attrs:{value:"Data Scientist"}},[e._v("\n                                        Data Scientist\n                                    ")])],1)],1)],1),a("a-col",{staticStyle:{"padding-right":"1%"},attrs:{span:8}},[a("a-form-item",{attrs:{label:"Developer Experience"}},[a("a-select",{attrs:{placeholder:"Select a option and change input text above"},model:{value:e.job.dev_experience,callback:function(t){e.$set(e.job,"dev_experience",t)},expression:"job.dev_experience"}},[a("a-select-option",{attrs:{value:"Entry"}},[e._v("\n                                        Entry\n                                    ")]),a("a-select-option",{attrs:{value:"Junior"}},[e._v("\n                                        Junior\n                                    ")]),a("a-select-option",{attrs:{value:"Mid-Level"}},[e._v("\n                                        Mid-Level\n                                    ")]),a("a-select-option",{attrs:{value:"Senior"}},[e._v("\n                                        Senior\n                                    ")])],1)],1)],1),a("a-col",{staticStyle:{"padding-right":"1%"},attrs:{span:8}},[a("a-form-item",{attrs:{label:"Contract type"}},[a("a-select",{model:{value:e.job.engagement_type,callback:function(t){e.$set(e.job,"engagement_type",t)},expression:"job.engagement_type"}},[a("a-select-option",{attrs:{value:"Full-time"}},[e._v("\n                                        Full-time\n                                    ")]),a("a-select-option",{attrs:{value:"Part-time"}},[e._v("\n                                        Part-time\n                                    ")]),a("a-select-option",{attrs:{value:"Contract"}},[e._v("\n                                        Contract\n                                    ")]),a("a-select-option",{attrs:{value:"Remote"}},[e._v("\n                                        Remote\n                                    ")]),a("a-select-option",{attrs:{value:"Freelance"}},[e._v("\n                                        Freelance\n                                    ")])],1)],1)],1),a("a-col",{staticStyle:{"padding-right":"1%"},attrs:{span:8}},[a("a-form-item",[a("span",[e._v("Location : "+e._s(e.job.location))]),a("country-select",{staticClass:"ant-input",model:{value:e.job.location,callback:function(t){e.$set(e.job,"location",t)},expression:"job.location"}})],1)],1),a("a-col",{staticStyle:{"padding-right":"1%"},attrs:{span:8}},[a("a-form-item",{attrs:{label:"Salary range "}},[a("a-input",{attrs:{placeholder:"1000-1500$"},model:{value:e.job.remuneration,callback:function(t){e.$set(e.job,"remuneration",t)},expression:"job.remuneration"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-item",[a("p",[e._v("Pick skills you are looking for")]),a("div",[e._l(e.recommendationtags,function(t){return[a("a-checkable-tag",{key:t,staticStyle:{"border-color":"blue","font-size":"14px"},attrs:{checked:e.selectedTags.indexOf(t)>-1},on:{change:function(a){return e.handleChange(t,a)}}},[e._v("\n                                            "+e._s(t)+"\n                                        ")])]})],2)]),a("a-form-item",{attrs:{label:"Application Deadline"}},[a("a-date-picker",{attrs:{format:"YYYY-MM-DD HH:mm:ss",disabledDate:e.disabledDate,disabledTime:e.disabledDateTime,showTime:{defaultValue:e.moment("00:00:00","HH:mm:ss")}},model:{value:e.job.deadline,callback:function(t){e.$set(e.job,"deadline",t)},expression:"job.deadline"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"Job description ","label-col":{span:24},"wrapper-col":{span:24}}},[a("a-textarea",{attrs:{placeholder:"A bit about the job",rows:6},model:{value:e.job.description,callback:function(t){e.$set(e.job,"description",t)},expression:"job.description"}})],1)],1)],1)],1)],1)],1)],1)],1)},n=[]}}]);
//# sourceMappingURL=app~c60401bb.dd9d2269.js.map
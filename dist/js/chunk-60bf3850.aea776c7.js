(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60bf3850"],{"9da4":function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-layout-sider",{staticStyle:{"box-shadow":"2px 0 6px rgba(0,21,41,.35)","background-color":"white"},attrs:{breakpoint:"lg","collapsed-width":"0"},on:{collapse:t.onCollapse,breakpoint:t.onBreakpoint}},[r("hide-at",{attrs:{breakpoints:{small:425,medium:768},breakpoint:"mediumAndBelow"}},[r("router-link",{attrs:{to:"/"}},[r("img",{staticStyle:{width:"9rem",height:"2rem","margin-top":"1rem","margin-bottom":"1rem","margin-left":"1rem"},attrs:{src:t.defaultlogo}})])],1),r("show-at",{attrs:{breakpoint:"mediumAndBelow"}},[r("router-link",{attrs:{to:"/"}},[r("img",{staticStyle:{width:"9rem",height:"2rem","margin-top":"1rem","margin-bottom":"1rem","margin-left":"1rem"},attrs:{src:t.defaultlogo}})])],1),r("a-menu",{staticStyle:{"min-height":"85vh"},attrs:{defaultSelectedKeys:["1"],mode:"inline"}},[r("a-menu-item",{key:"1"},[r("router-link",{attrs:{to:"/recruiter"}},[r("a-icon",{attrs:{type:"dashboard"}}),r("span",[t._v("Dashboard")])],1)],1),r("a-menu-item",{key:"10"},[r("router-link",{attrs:{to:"/CreateJob"}},[r("a-icon",{attrs:{type:"edit"}}),r("span",[t._v("Post a job")])],1)],1),r("a-menu-item",{key:"2"},[r("router-link",{attrs:{to:"/managejobs"}},[r("a-icon",{attrs:{type:"project"}}),r("span",[t._v("My jobs\n                  ")])],1)],1),t.mycandidates.length>0?r("a-menu-item",{key:"3"},[r("router-link",{attrs:{to:"/mycandidates"}},[r("a-icon",{attrs:{type:"team"}}),r("span",[t._v("My Candidates")])],1)],1):r("a-menu-item",{attrs:{disabled:""}},[r("a-icon",{attrs:{type:"team"}}),r("span",[t._v("My Candidates")])],1),r("a-menu-item",{key:"4"},[r("router-link",{attrs:{to:"/talent"}},[r("a-icon",{attrs:{type:"star"}}),r("span",[t._v("Talent Pool")])],1)],1),r("a-menu-item",{key:"8"},[r("router-link",{attrs:{to:"/calendar"}},[r("a-icon",{attrs:{type:"calendar"}}),r("span",[t._v("Calendar")])],1)],1),r("a-menu-item",{key:"6"},[r("router-link",{attrs:{to:"/myprofile"}},[r("a-icon",{attrs:{type:"user"}}),r("span",[t._v("My profile")])],1)],1),r("a-menu-item",{key:"7"},[r("a",{on:{click:t.logout}},[r("a-icon",{attrs:{type:"export"}}),r("span",[t._v("  Logout")])],1)])],1)],1)},n=[],a=(r("96cf"),r("3b8d")),o=r("c1df"),i=r.n(o),l=r("b8fb"),c=r.n(l),u=r("8808"),p={name:"RecruiterSider",data:function(){return{top:0,defaultlogo:c.a,myjobs:[],mycandidates:[],currentUserProfile:null,jobmobile:!1}},components:{hideAt:u["hideAt"],showAt:u["showAt"]},computed:{},mounted:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$store.state.user.pk&&(this.currentUserProfile=this.$store.state.user_object);case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{moment:i.a,disabledDate:function(t){return t&&t<i()().endOf("day")},onCollapse:function(t,e){return e},onBreakpoint:function(t){return t},logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$store.dispatch("setNext",null),this.$store.dispatch("setCart",null),this.$store.dispatch("setPicked",null),this.$store.dispatch("setLanguage",null),this.$store.dispatch("setCountry",null),this.$store.dispatch("setManaged",!1),this.$store.dispatch("setRecommend",null),this.$store.dispatch("setlazyloader",null),this.$store.dispatch("setuser_object",null),this.$router.push({name:"home"})},navigateTo:function(t){this.$router.push(t)}}},h=p,d=r("2877"),f=Object(d["a"])(h,s,n,!1,null,"bc825776",null);e["a"]=f.exports},c189:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-layout",{staticStyle:{"min-height":"100vh"},attrs:{id:"components-layout-demo-side"}},[r("RecruiterSider"),r("a-layout",{style:{backgroundColor:"#F8FAFB"}},[r("a-layout-content",[r("Pageheader"),r("div",{style:{padding:"6px 20px",background:"#fff",minHeight:"75vh",maxWidth:"72rem",marginLeft:"1%",marginRight:"1%",marginTop:"1rem"}},[r("a-form",{attrs:{form:t.form}},[r("a-row",{attrs:{gutter:16}},[r("a-col",{attrs:{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:12,offset:0},lg:{span:12,offset:0},xl:{span:12,offset:0}}},[r("a-row",{attrs:{gutter:16}},[r("a-col",{attrs:{span:24}},[r("a-form-item",{attrs:{label:"Company name","label-col":{span:24},"wrapper-col":{span:24}}},[r("a-input",{model:{value:t.currentUserProfile.company,callback:function(e){t.$set(t.currentUserProfile,"company",e)},expression:"currentUserProfile.company"}})],1)],1),r("a-col",{attrs:{span:24}},[r("a-form-item",{attrs:{label:"Company website link","label-col":{span:24},"wrapper-col":{span:24}}},[r("a-input",{model:{value:t.currentUserProfile.company_url,callback:function(e){t.$set(t.currentUserProfile,"company_url",e)},expression:"currentUserProfile.company_url"}})],1)],1),r("a-col",{attrs:{span:24}},[r("a-form-item",{attrs:{"label-col":{span:24},"wrapper-col":{span:24}}},[r("span",{attrs:{slot:"label"},slot:"label"},[t._v("Country : "+t._s(t.currentUserProfile.country))]),r("country-select",{staticClass:"ant-input",model:{value:t.currentUserProfile.country,callback:function(e){t.$set(t.currentUserProfile,"country",e)},expression:"currentUserProfile.country"}})],1)],1),r("a-col",{attrs:{span:24}},[r("a-form-item",{attrs:{label:"Company industry sector","label-col":{span:24},"wrapper-col":{span:24}}},[r("a-input",{model:{value:t.currentUserProfile.industry,callback:function(e){t.$set(t.currentUserProfile,"industry",e)},expression:"currentUserProfile.industry"}})],1)],1),r("a-col",{attrs:{span:24}},[r("a-form-item",{attrs:{label:"Your role at the Company","label-col":{span:24},"wrapper-col":{span:24}}},[r("a-input",{attrs:{placeholder:"Recruiter,CTO,HR,CEO etc"},model:{value:t.currentUserProfile.job_role,callback:function(e){t.$set(t.currentUserProfile,"job_role",e)},expression:"currentUserProfile.job_role"}})],1)],1),r("a-col",{staticStyle:{"margin-bottom":"1rem"},attrs:{span:24}},[r("VuePhoneNumberInput",{attrs:{name:"number","default-country-code":t.countrycode},on:{update:t.onUpdate},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),r("a-col",{staticStyle:{"margin-bottom":"1rem"},attrs:{span:24}},[r("a-checkbox",{model:{value:t.currentUserProfile.notifications,callback:function(e){t.$set(t.currentUserProfile,"notifications",e)},expression:"currentUserProfile.notifications"}},[t._v("Unsubscribe/Opt out from\n                                        future Codeln email notifications\n                                    ")])],1)],1)],1),r("a-col",{attrs:{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:12,offset:0},lg:{span:12,offset:0},xl:{span:12,offset:0}}},[r("a-col",{attrs:{span:24}},[r("a-form-item",[r("p",[t._v("Pick skills to enable candidate\n                                        recommendations")]),r("div",[t._l(t.recommendationtags,(function(e){return[r("a-checkable-tag",{key:e,staticStyle:{"border-color":"blue","font-size":"14px"},attrs:{checked:t.selectedTags.indexOf(e)>-1},on:{change:function(r){return t.handleChange(e,r)}}},[t._v("\n                                                "+t._s(e)+"\n                                            ")])]}))],2)])],1)],1)],1),!1===t.loading?r("div",{staticStyle:{"text-align":"center"}},[r("a-button",{staticStyle:{width:"15rem"},attrs:{type:"primary"},on:{click:t.Save}},[t._v("Save")])],1):r("div",{staticStyle:{"text-align":"center"}},[r("div",{staticStyle:{"text-align":"center"}},[r("a-spin")],1)])],1)],1)],1)],1)],1)},n=[],a=r("75fc"),o=(r("ac6a"),r("a481"),r("28a5"),r("96cf"),r("3b8d")),i=r("bf80"),l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("a-affix",{attrs:{offsetTop:"this.top"}},[r("a-layout-header",{staticStyle:{background:"#fff",padding:"0","border-bottom":"1px solid #e8e8e8"}},[r("div",{staticStyle:{padding:"0 2%"}},[r("span",{staticStyle:{float:"right"}},[r("a-avatar",{attrs:{size:"large",icon:"user"}})],1)])])],1)],1)},c=[],u=r("b8fb"),p=r.n(u),h=r("c1df"),d=r.n(h),f={name:"Pageheader",components:{},data:function(){return{defaultlogo:p.a,top:0}},mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:d.a;case 1:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),filters:{},methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$store.dispatch("setNext",null),this.$store.dispatch("setCart",null),this.$store.dispatch("setPicked",null),this.$store.dispatch("setLanguage",null),this.$store.dispatch("setCountry",null),this.$store.dispatch("setManaged",!1),this.$store.dispatch("setRecommend",null),this.$store.dispatch("setlazyloader",null),this.$store.dispatch("setuser_object",null),this.$router.push({name:"home"})},navigateTo:function(t){this.$router.push(t)}}},m=f,g=r("2877"),b=Object(g["a"])(m,l,c,!1,null,"65551888",null),y=b.exports,k=r("9da4"),v=r("da05"),P=r("7bec"),$=r.n(P),U=(r("4413"),r("8c3b")),_={name:"Myprofile",data:function(){return{currentUserProfile:null,recommendationtags:["Django","Javascript","Python","Php","Postgres","Sql","Html","Css","bootstrap","React","Java","React Native","Redux","Flask ","Go","Expressjs","Vuejs","Angular","Ios","flutter","Ionic","Rails","Meteor","AI","Cybersecurity","Blockchain","Arduino","Spring","Bitcoin","Kotlin","Scala","Nativescript ","Android","Website","Mobile"],selectedTags:[],loading:!1,formattednumber:null,number:"null",phone:"",countrycode:""}},components:{ACol:v["b"],Pageheader:y,RecruiterSider:k["a"],VuePhoneNumberInput:$.a},mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,r,s=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.$store.state.user.pk){if(this.currentUserProfile=this.$store.state.user_object,this.currentUserProfile.skills.length>=0)for(e=this.currentUserProfile.skills.replace(/'/g,"").replace(/ /g,"").split(","),r=0;r<e.length;r++)this.selectedTags.push(e[r]);this.currentUserProfile.phone_number&&"+"===this.currentUserProfile.phone_number.charAt(0)&&(this.phone=this.currentUserProfile.phone_number,U.forEach((function(t){(s.currentUserProfile.phone_number.substring(0,4)===t.dial_code||s.currentUserProfile.phone_number.substring(0,4)===t.dial_code)&&(s.countrycode=t.code)})))}case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{onUpdate:function(t){this.results=t,this.currentUserProfile.phone_number=this.results.formattedNumber},Save:function(){for(var t=this,e={headers:{Authorization:"JWT "+this.$store.state.token}},r=0;r<this.selectedTags.length;r++)if(""===this.selectedTags[r]){var s=this.selectedTags.indexOf(this.selectedTags[r]);this.selectedTags.splice(s,1)}this.loading=!0,this.currentUserProfile.skills=this.selectedTags.join(","),this.currentUserProfile.user=this.$store.state.user.pk,this.currentUserProfile.phone_number=this.results.formattedNumber,i["a"].update(this.$store.state.user.pk,this.currentUserProfile,e).then((function(e){return"developer"===t.currentUserProfile.user_type?t.$router.push({name:"developer"}):t.$router.push({name:"recruiter"}),e})).catch((function(t){return t}))},handleClose:function(t){var e=this.tags.filter((function(e){return e!==t}));this.tags=e;var r=this.tags.join(", ");this.currentUserProfile.skills=r},showInput:function(){this.inputVisible=!0,this.$nextTick((function(){this.$refs.input.focus()}))},handleInputChange:function(t){this.inputValue=t.target.value},handleInputConfirm:function(){var t=this.inputValue,e=this.tags;t&&-1===e.indexOf(t)&&(e=[].concat(Object(a["a"])(e),[t]));var r=e.join(", ");this.currentUserProfile.skills=r,Object.assign(this,{tags:e,inputVisible:!1,inputValue:""})},handleChange:function(t,e){var r=this.selectedTags,s=e?[].concat(Object(a["a"])(r),[t]):r.filter((function(e){return e!==t}));this.selectedTags=s;var n=this.selectedTags.join(", ");this.currentUserProfile.skills=n}}},x=_,w=Object(g["a"])(x,s,n,!1,null,"44353821",null);e["default"]=w.exports}}]);
//# sourceMappingURL=chunk-60bf3850.aea776c7.js.map
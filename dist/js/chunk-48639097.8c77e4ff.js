(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48639097"],{1789:function(t,e,s){"use strict";var r=s("da75"),a=s.n(r);a.a},"96c7":function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-layout-header",{style:{position:"fixed",zIndex:1,width:"100%",backgroundColor:"white",borderBottom:"1px solid #e8e8e8"},attrs:{id:"components-layout-demo-fixed"}},[r("div",{staticClass:"logo"},[r("router-link",{attrs:{to:"/"}},[r("img",{staticStyle:{width:"100%","margin-left":"1.5rem"},attrs:{src:s("b8fb")}})])],1),r("hide-at",{attrs:{breakpoint:"mediumAndBelow"}},[r("div",{staticClass:"ant-menu-horizontal ",style:{lineHeight:"64px",float:"right",borderBottom:0}},[r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/talent"}},[t._v("Talent pool")]),t.$store.state.isUserLoggedIn&&"recruiter"===t.$store.state.usertype&&"complete"===t.currentUserProfile.stage?r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/recruiter"}},[t._v("My account\n            ")]):t._e(),t.$store.state.isUserLoggedIn&&"recruiter"===t.$store.state.usertype&&"complete"!==t.currentUserProfile.stage?r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/register"}},[t._v("My account\n            ")]):t._e(),t.$store.state.isUserLoggedIn&&"developer"===t.$store.state.usertype&&"complete"!==t.currentUserProfile.stage?r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/register"}},[t._v("My account\n            ")]):t._e(),t.$store.state.isUserLoggedIn&&"developer"===t.$store.state.usertype&&"complete"===t.currentUserProfile.stage?r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/developer"}},[t._v("My account\n            ")]):t._e(),t.$store.state.isUserLoggedIn?t._e():r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/login"}},[t._v("\n                Login\n            ")]),t.$store.state.isUserLoggedIn?t._e():r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/register"}},[t._v("Sign up\n            ")]),r("a",[t.$store.state.isUserLoggedIn?r("a-button",{staticStyle:{"margin-bottom":"0",border:"0","-webkit-box-shadow":"0 0 0 rgba(255,255,255,0.01)",color:"#1890ff"},on:{click:t.logout}},[t._v("Logout\n                ")]):t._e()],1)],1)]),r("show-at",{attrs:{breakpoint:"mediumAndBelow"}},[r("div",{staticStyle:{float:"right"}},[r("Menusider")],1)])],1)},a=[],o=(s("96cf"),s("3b8d")),n=s("8808"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a-dropdown",{attrs:{trigger:["click"],placement:"bottomCenter"}},[s("a",{staticClass:"ant-dropdown-link",attrs:{href:"#"}},[s("a-icon",{attrs:{type:"menu-fold"}})],1),s("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[s("a-menu-item",{key:"0"},[s("router-link",{attrs:{to:"/talent"}},[s("span",[t._v("Talent pool")])])],1),t.$store.state.isUserLoggedIn&&"recruiter"===t.$store.state.usertype&&"complete"===t.currentUserProfile.stage?s("a-menu-item",{key:"1"},[s("router-link",{attrs:{to:"/recruiter"}},[s("span",[t._v("My account")])])],1):t._e(),t.$store.state.isUserLoggedIn&&"recruiter"===t.$store.state.usertype&&"complete"!==t.currentUserProfile.stage?s("a-menu-item",{key:"6"},[s("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/register"}},[t._v("My account\n              ")])],1):t._e(),t.$store.state.isUserLoggedIn&&"developer"===t.$store.state.usertype?s("a-menu-item",{key:"2"},[s("router-link",{attrs:{to:"/developer"}},[s("span",[t._v("My account")])])],1):t._e(),t.$store.state.isUserLoggedIn&&"developer"===t.$store.state.usertype&&"complete"!==t.currentUserProfile.stage?s("a-menu-item",{key:"7"},[s("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/register"}},[t._v("My account\n              ")])],1):t._e(),t.$store.state.isUserLoggedIn?t._e():s("a-menu-item",{key:"3"},[s("router-link",{attrs:{to:"/login"}},[s("span",[t._v("Login")])])],1),t.$store.state.isUserLoggedIn?t._e():s("a-menu-item",{key:"4"},[s("router-link",{attrs:{to:"/register"}},[s("span",[t._v("Register")])])],1),t.$store.state.isUserLoggedIn?s("a-menu-item",{key:"5"},[s("a",{on:{click:t.logout}},[t._v("Logout")])]):t._e()],1)],1)},l=[],c=s("bf80"),u={name:"Menusider",data:function(){return{currentUserProfile:null}},mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e={headers:{Authorization:"JWT "+this.$store.state.token}},!this.$store.state.user.pk){t.next=5;break}return t.next=4,c["a"].currentuser(this.$store.state.user.pk,e);case 4:this.currentUserProfile=t.sent.data;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$store.dispatch("setNext",null),this.$router.push({name:"home"})}}},d=u,m=s("2877"),p=Object(m["a"])(d,i,l,!1,null,"46c71f91",null),f=p.exports,g={name:"Header",components:{hideAt:n["hideAt"],showAt:n["showAt"],Menusider:f},data:function(){return{currentUserProfile:{}}},mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e={headers:{Authorization:"JWT "+this.$store.state.token}},!this.$store.state.user){t.next=5;break}return t.next=4,c["a"].currentuser(this.$store.state.user.pk,e);case 4:this.currentUserProfile=t.sent.data;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$store.dispatch("setNext",null),this.$router.push({name:"home"})}}},h=g,v=(s("f91a"),Object(m["a"])(h,r,a,!1,null,"0b081a01",null));e["a"]=v.exports},9704:function(t,e,s){},"9b19":function(t,e,s){t.exports=s.p+"img/logo.b596d5fb.svg"},"9ef1":function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-layout-footer",{staticStyle:{"min-height":"16rem","background-color":"#1875d2"}},[r("footer",{style:{padding:"3%"},attrs:{id:"footer"}},[r("div",{staticClass:"footer-wrap"},[r("div",{staticClass:"ant-row gutter"},[r("hide-at",{attrs:{breakpoint:"mediumAndBelow"}},[r("div",{staticClass:"ant-col-xs-12 ant-col-sm-12 ant-col-md-6 "},[r("img",{staticClass:"imagecenter",staticStyle:{width:"50%"},attrs:{src:s("9b19")}})])]),r("div",{staticClass:"ant-col-xs-12 ant-col-sm-12 ant-col-md-6"},[r("div",{staticClass:"footer-center"},[r("h2",{staticStyle:{color:"white","font-size":"1rem"}},[t._v("Services")]),r("div",[r("router-link",{attrs:{to:"talent"}},[t._v("\n                                    Talent pool\n                                ")])],1),r("div",[r("router-link",{attrs:{to:"jobs"}},[t._v("\n                                    Job Board\n                                ")])],1)])]),r("div",{staticClass:"ant-col-xs-12 ant-col-sm-12 ant-col-md-6"},[r("div",{staticClass:"footer-center"},[r("h2",{staticStyle:{color:"white","font-size":"1rem"}},[t._v("Company")]),r("div",[r("router-link",{attrs:{to:"privacy"}},[t._v("Privacy")])],1),r("div",[r("router-link",{attrs:{to:"terms"}},[t._v("Terms")])],1)])]),r("div",{staticClass:"ant-col-xs-12 ant-col-sm-12 ant-col-md-6"},[r("div",{staticClass:"footer-center"},[r("h2",{staticStyle:{color:"white","font-size":"1rem"}},[t._v("Contact")]),r("div",{staticClass:"icons-list"},[r("a",{attrs:{href:"mailto:info@codeln.com",target:"_top"}},[r("a-icon",{attrs:{type:"message"}})],1),r("a",{staticClass:"text-muted",attrs:{href:"https://www.facebook.com/CodelnSpaces/",target:"_blank"}},[r("a-icon",{attrs:{type:"facebook"}})],1),r("a",{staticClass:"text-muted",attrs:{href:"https://www.linkedin.com/company/codeln/",target:"_blank"}},[r("a-icon",{attrs:{type:"linkedin"}})],1),r("a",{staticClass:"text-muted",attrs:{href:"https://twitter.com/Codeln_spaces",target:"_blank"}},[r("a-icon",{attrs:{type:"twitter"}})],1),r("a",{staticClass:"text-muted",attrs:{href:"https://medium.com/codeln",target:"_blank"}},[r("a-icon",{attrs:{type:"medium"}})],1)])])])],1)])])])},a=[],o=s("da05"),n=s("8808"),i={name:"Footer",components:{ACol:o["b"],hideAt:n["hideAt"]}},l=i,c=(s("1789"),s("2877")),u=Object(c["a"])(l,r,a,!1,null,"35ed347f",null);e["a"]=u.exports},b012:function(t,e,s){"use strict";var r=s("3f4a");e["a"]={register:function(t){return Object(r["a"])().post("rest-auth/registration/",t)},login:function(t){return Object(r["a"])().post("rest-auth/login/",t)},forgot:function(t){return Object(r["a"])().post("rest-auth/password/reset/",t)}}},da75:function(t,e,s){},f2dd:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a-layout",[s("Pageheader"),s("a-layout-content",{style:{padding:"0 0px",marginTop:"4rem"}},[s("div",{style:{background:"#fff",minHeight:"81vh"}},[s("a-row",{staticStyle:{padding:"3%"}},[s("a-col",{attrs:{xs:{span:18,offset:0},sm:{span:12,offset:6},md:{span:12,offset:6},lg:{span:12,offset:8},xl:{span:12,offset:9}}},[t.$store.state.isUserLoggedIn?t._e():s("a-card",{style:{width:"21rem"},attrs:{title:"Password reset"}},[t.error?s("p",{staticClass:"alert"},[t._v(t._s(t.error))]):t._e(),t.info?s("p",{staticClass:"info"},[t._v(t._s(t.info))]):t._e(),null===t.info?s("a-form",{staticClass:"login-form",attrs:{id:"components-form-demo-normal-login",form:t.form},on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[s("a-form-item",[s("a-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticStyle:{"z-index":"0"},attrs:{placeholder:"Password",type:"password",name:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}},[s("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1),t.errors.has("password")?s("div",{staticClass:"ant-form-explain",staticStyle:{color:"#f5222d"}},[t._v("\n                                    "+t._s(t.errors.first("password"))+"\n                                ")]):t._e()],1),s("a-form-item",[s("a-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticStyle:{"z-index":"0"},attrs:{placeholder:"Password",type:"password",name:"password"},model:{value:t.password1,callback:function(e){t.password1=e},expression:"password1"}},[s("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1),t.errors.has("password")?s("div",{staticClass:"ant-form-explain",staticStyle:{color:"#f5222d"}},[t._v("\n                                    "+t._s(t.errors.first("password"))+"\n                                ")]):t._e()],1),!1===t.loading?s("a-form-item",[s("a-button",{staticClass:"login-form-button",attrs:{type:"primary"},on:{click:t.Forgot}},[t._v("\n                                    Submit\n                                ")])],1):s("a-form-item",[s("div",{staticStyle:{"text-align":"center"}},[s("a-spin")],1)])],1):t._e()],1)],1)],1)],1)]),s("Footer")],1)},a=[],o=s("96c7"),n=s("9ef1"),i=s("b012"),l=s("290c"),c={name:"passwordreset",components:{ARow:l["a"],Pageheader:o["a"],Footer:n["a"]},data:function(){return{password:"",password1:"",loading:!1,form:this.$form.createForm(this),info:null,error:null}},methods:{Forgot:function(){var t=this;this.$validator.validateAll().then(function(e){e?(t.loading=!0,i["a"].forgot({email:t.email}).then(function(e){t.info="Password reset e-mail has been sent.Please check your email",t.loading=!1}).catch(function(e){return t.loading=!1,t.error="details incorrect",e})):t.loading=!1})}}},u=c,d=s("2877"),m=Object(d["a"])(u,r,a,!1,null,"1116a16a",null);e["default"]=m.exports},f91a:function(t,e,s){"use strict";var r=s("9704"),a=s.n(r);a.a}}]);
//# sourceMappingURL=chunk-48639097.8c77e4ff.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a29f0944"],{"23ef":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout",{staticStyle:{"min-height":"100vh","background-color":"#F8FAFB"},attrs:{id:"components-layout-demo-side"}},[a("pageheader"),a("a-layout",{style:{backgroundColor:"#F8FAFB",marginTop:"1rem"}},[a("a-layout-content",{staticStyle:{"margin-top":"5rem"}},[a("a-row",[a("a-col",{staticClass:"jobdetails",attrs:{xs:{span:20,offset:2},sm:{span:20,offset:2},md:{span:20,offset:2},lg:{span:14,offset:6},xl:{span:14,offset:6}}},[t.dataload?a("div",{staticStyle:{"text-align":"center"}},[a("a-spin")],1):a("div",[a("div",{staticStyle:{"border-bottom":"1px solid #e8e8e8","margin-bottom":"1%","padding-bottom":"3%"}},[a("span",[a("span",{staticStyle:{"font-weight":"700","font-size":"large"}},[t._v(t._s(t.job.title))]),this.$store.state.isUserLoggedIn?a("span",["developer"===t.currentUserProfile.user_type&&!1===t.applied?a("span",{staticStyle:{float:"right"}},[t.save?a("div",[a("a-spin")],1):a("span",[0===t.error.length?a("div",[this.$store.state.isUserLoggedIn?a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.ApplicationModal()}}},[t._v("Apply")]):t._e()],1):a("div",[this.$store.state.isUserLoggedIn?a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.Fillprofile()}}},[t._v("Apply")]):t._e()],1)])]):t._e(),"developer"===t.currentUserProfile.user_type&&!0===t.applied?a("span",{staticStyle:{float:"right"}},[a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.navigateTo({name:"manageapplications"})}}},[t._v("Manage Job application")])],1):t._e(),"developer"===t.currentUserProfile.user_type&&"complete"!==t.currentUserProfile.stage?a("span",[a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.navigateTo({name:"register"})}}},[t._v("Registration incomplete click to continue")])],1):t._e()]):a("span",{staticStyle:{float:"right"}},[a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.navigateTo({name:"login"})}}},[t._v("Login to apply")])],1)])]),a("div",[this.$store.state.isUserLoggedIn?a("span",["developer"===t.currentUserProfile.user_type&&t.applied?a("a-alert",{attrs:{message:"Job application successful",type:"success",closeText:"Close Now"}}):t._e()],1):t._e(),a("span",[t._v(" Job tag :\n                                  "),a("a-tag",{staticStyle:{color:"#007BFF"},attrs:{color:"#F0F6FD"}},[a("a-icon",{attrs:{type:"tags"}}),t._v("\n                                      "+t._s(t.job.tag)+"\n                                  ")],1)],1),a("p",[t._v("\n\n                Country : "+t._s(t.country)+" "),t.job.city?a("span",[t._v("| City : "+t._s(t.job.city))]):t._e()]),a("p",[t._v("Contract type: "+t._s(t.job.engagement_type))]),a("p",[t._v("Monthly renumeration * : "+t._s(t.job.remuneration))]),a("p",[t._v("\n                Skills looking for :\n                "),t._l(t.skills,(function(e){return a("span",{key:e},[a("a-tag",{staticStyle:{color:"#007BFF"},attrs:{color:"#F0F6FD"}},[t._v(t._s(e))])],1)}))],2),a("p",[t._v("Application Deadline : "+t._s(t.deadline))])]),a("div",[a("p",{staticStyle:{"font-weight":"700"}},[t._v("Job Details")]),a("markdown",[t._v(t._s(t.job.description))])],1)])])],1),a("a-modal",{staticStyle:{top:"20px"},attrs:{title:"Please fill your Profile"},model:{value:t.fillprofile,callback:function(e){t.fillprofile=e},expression:"fillprofile"}},[a("template",{slot:"footer"},[a("a-button",{key:"submit",attrs:{type:"primary"},on:{click:function(e){return t.$router.push("/portfolio")}}},[t._v("\n            Edit Profile\n          ")])],1),a("div",[a("p",[t._v("Hello your profile is not complete.To enable us to easily analyse your fitness for the\n            job,satisy the following below")]),t._l(t.error,(function(e){return a("p",{key:e},[a("span",{staticStyle:{color:"#ff0000"}},[t._v("* "+t._s(e))])])})),t._v("\n\n          Click on Edit profile button to complete your profile.\n\n\n        ")],2)],2),a("a-modal",{attrs:{title:"Application placement",footer:null},model:{value:t.applyterms,callback:function(e){t.applyterms=e},expression:"applyterms"}},[a("p",[a("strong",[t._v(" Placement")])]),a("p",[t._v("Final successful placement is upto the client.By applying its not an assurance of getting the job")]),a("p",[a("strong",[t._v(" Communication")])]),a("p",[t._v("All parties will be kept in the loop in terms of where the application stand.You can monitor this on you manage applications on your dashboard.\n      Note communication timeline is highly determined by the client so patience is key")]),a("p",[a("strong",[t._v("Skill Verification")])]),a("p",[t._v("As per our objective as Codeln is to enable employment of skilled developers.Your skills may be called for test .That will be a Codeln owned project aligned to\n       client needs.We retain the code and only share a demo of your work and a performance report based on your code")]),a("p",[a("strong",[t._v("Data shared")])]),a("p",[t._v("On registration you are requested to provide data such as your cv,github,linkedin profiles and other details. This data will be available\n       to our clients for review")]),a("p",[t._v("By Applying i agree to be bound by the above")]),a("a-button",{attrs:{type:"primary"},on:{click:t.ApplyJob}},[t._v("Apply")])],1)],1)],1)],1)},o=[],n=a("768b"),s=(a("ffc1"),a("28a5"),a("ac6a"),a("96cf"),a("3b8d")),i=a("bf80"),l=a("96c7"),u=a("290c"),c=a("da05"),p=a("688c"),d=a("c1df"),m=a.n(d),h=a("9ce6"),g=a.n(h),y=a("4590"),f={name:"jobdetails",data:function(){return{job:{},skills:[],currentUserProfile:{},applied:!1,myjobs:[],dataload:!1,deadline:"",save:!1,country:"",portfolio:0,experiences:0,error:[],fillprofile:!1,applyterms:!1}},components:{ACol:c["b"],ARow:u["a"],Pageheader:l["a"],markdown:g.a},mounted:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:m.a,this.dataload=!0,this.fetchData();case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{moment:m.a,fetchData:function(){var t=this;if(this.$store.state.isUserLoggedIn){var e={headers:{Authorization:"JWT "+this.$store.state.token}};this.currentUserProfile=this.$store.state.user_object,p["a"].jobdetails(this.$route.params.jobId).then((function(a){t.job=a.data,p["a"].candidatejobs(t.$store.state.user.pk,e).then((function(e){t.myjobs=e.data,t.dataload=!1,t.myjobs&&t.job&&t.myjobs.forEach((function(e){e.job.id===t.job.id&&(t.applied=!0)})),t.job.tech_stack&&(t.skills=t.job.tech_stack.split(",")),t.Applicationvalidators()}))})),this.deadline=m()(this.job.deadline).format("YYYY-MM-DD HH:mm:ss");for(var a=0,r=Object.entries(y);a<r.length;a++){var o=Object(n["a"])(r[a],2),s=o[0],i=o[1];s===this.job.location&&(this.country=i)}}else{p["a"].jobdetails(this.$route.params.jobId).then((function(e){t.job=e.data,t.dataload=!1})),this.skills=this.job.tech_stack.split(","),this.deadline=m()(this.job.deadline).format("YYYY-MM-DD HH:mm:ss");for(var l=0,u=Object.entries(y);l<u.length;l++){var c=Object(n["a"])(u[l],2),d=c[0],h=c[1];d===this.job.location&&(this.country=h)}}},Applicationvalidators:function(){var t=this,e={headers:{Authorization:"JWT "+this.$store.state.token}};"developer"===this.currentUserProfile.user_type&&(i["a"].portfolio(this.$store.state.user.pk,e).then((function(e){t.portfoliolist=e.data,t.portfolio=t.portfoliolist.length})),i["a"].portfolio(this.$store.state.user.pk,e).then((function(e){t.experienceslist=e.data,t.experiences=t.experienceslist.length})),""!==this.currentUserProfile.phone_number&&null!==this.currentUserProfile.phone_number||this.error.push("phone number required"),""!==this.currentUserProfile.file&&null!==this.currentUserProfile.file||this.error.push("cv required"),this.experiences.length<=0&&this.error.push("at least one work experience"),this.portfolio.length<=0&&this.error.push("at least one personal project"))},navigateTo:function(t){this.$router.push(t)},Fillprofile:function(){this.fillprofile=!0},ApplicationModal:function(){this.applyterms=!0},ApplyJob:function(){var t=this,e=this.job.id,a=this.currentUserProfile.id,r={headers:{Authorization:"JWT "+this.$store.state.token}};this.applyterms=!1,this.save=!0,p["a"].applyjob({job:e,candidate:a,recruiter:this.job.posted_by,stage:"new",selected:!1,type:"applied"},r).then((function(e){t.save=!1,t.applied=!0,p["a"].newapplicationemail(e.data.id,r).then().catch()})).catch((function(t){return t}))}}},b=f,v=(a("4e1b"),a("2877")),_=Object(v["a"])(b,r,o,!1,null,"46a33221",null);e["default"]=_.exports},4590:function(t){t.exports=JSON.parse('{"BD":"Bangladesh","BE":"Belgium","BF":"Burkina Faso","BG":"Bulgaria","BA":"Bosnia and Herzegovina","BB":"Barbados","WF":"Wallis and Futuna","BL":"Saint Barthelemy","BM":"Bermuda","BN":"Brunei","BO":"Bolivia","BH":"Bahrain","BI":"Burundi","BJ":"Benin","BT":"Bhutan","JM":"Jamaica","BV":"Bouvet Island","BW":"Botswana","WS":"Samoa","BQ":"Bonaire, Saint Eustatius and Saba ","BR":"Brazil","BS":"Bahamas","JE":"Jersey","BY":"Belarus","BZ":"Belize","RU":"Russia","RW":"Rwanda","RS":"Serbia","TL":"East Timor","RE":"Reunion","TM":"Turkmenistan","TJ":"Tajikistan","RO":"Romania","TK":"Tokelau","GW":"Guinea-Bissau","GU":"Guam","GT":"Guatemala","GS":"South Georgia and the South Sandwich Islands","GR":"Greece","GQ":"Equatorial Guinea","GP":"Guadeloupe","JP":"Japan","GY":"Guyana","GG":"Guernsey","GF":"French Guiana","GE":"Georgia","GD":"Grenada","GB":"United Kingdom","GA":"Gabon","SV":"El Salvador","GN":"Guinea","GM":"Gambia","GL":"Greenland","GI":"Gibraltar","GH":"Ghana","OM":"Oman","TN":"Tunisia","JO":"Jordan","HR":"Croatia","HT":"Haiti","HU":"Hungary","HK":"Hong Kong","HN":"Honduras","HM":"Heard Island and McDonald Islands","VE":"Venezuela","PR":"Puerto Rico","PS":"Palestinian Territory","PW":"Palau","PT":"Portugal","SJ":"Svalbard and Jan Mayen","PY":"Paraguay","IQ":"Iraq","PA":"Panama","PF":"French Polynesia","PG":"Papua New Guinea","PE":"Peru","PK":"Pakistan","PH":"Philippines","PN":"Pitcairn","PL":"Poland","PM":"Saint Pierre and Miquelon","ZM":"Zambia","EH":"Western Sahara","EE":"Estonia","EG":"Egypt","ZA":"South Africa","EC":"Ecuador","IT":"Italy","VN":"Vietnam","SB":"Solomon Islands","ET":"Ethiopia","SO":"Somalia","ZW":"Zimbabwe","SA":"Saudi Arabia","ES":"Spain","ER":"Eritrea","ME":"Montenegro","MD":"Moldova","MG":"Madagascar","MF":"Saint Martin","MA":"Morocco","MC":"Monaco","UZ":"Uzbekistan","MM":"Myanmar","ML":"Mali","MO":"Macao","MN":"Mongolia","MH":"Marshall Islands","MK":"Macedonia","MU":"Mauritius","MT":"Malta","MW":"Malawi","MV":"Maldives","MQ":"Martinique","MP":"Northern Mariana Islands","MS":"Montserrat","MR":"Mauritania","IM":"Isle of Man","UG":"Uganda","TZ":"Tanzania","MY":"Malaysia","MX":"Mexico","IL":"Israel","FR":"France","IO":"British Indian Ocean Territory","SH":"Saint Helena","FI":"Finland","FJ":"Fiji","FK":"Falkland Islands","FM":"Micronesia","FO":"Faroe Islands","NI":"Nicaragua","NL":"Netherlands","NO":"Norway","NA":"Namibia","VU":"Vanuatu","NC":"New Caledonia","NE":"Niger","NF":"Norfolk Island","NG":"Nigeria","NZ":"New Zealand","NP":"Nepal","NR":"Nauru","NU":"Niue","CK":"Cook Islands","XK":"Kosovo","CI":"Ivory Coast","CH":"Switzerland","CO":"Colombia","CN":"China","CM":"Cameroon","CL":"Chile","CC":"Cocos Islands","CA":"Canada","CG":"Republic of the Congo","CF":"Central African Republic","CD":"Democratic Republic of the Congo","CZ":"Czech Republic","CY":"Cyprus","CX":"Christmas Island","CR":"Costa Rica","CW":"Curacao","CV":"Cape Verde","CU":"Cuba","SZ":"Swaziland","SY":"Syria","SX":"Sint Maarten","KG":"Kyrgyzstan","KE":"Kenya","SS":"South Sudan","SR":"Suriname","KI":"Kiribati","KH":"Cambodia","KN":"Saint Kitts and Nevis","KM":"Comoros","ST":"Sao Tome and Principe","SK":"Slovakia","KR":"South Korea","SI":"Slovenia","KP":"North Korea","KW":"Kuwait","SN":"Senegal","SM":"San Marino","SL":"Sierra Leone","SC":"Seychelles","KZ":"Kazakhstan","KY":"Cayman Islands","SG":"Singapore","SE":"Sweden","SD":"Sudan","DO":"Dominican Republic","DM":"Dominica","DJ":"Djibouti","DK":"Denmark","VG":"British Virgin Islands","DE":"Germany","YE":"Yemen","DZ":"Algeria","US":"United States","UY":"Uruguay","YT":"Mayotte","UM":"United States Minor Outlying Islands","LB":"Lebanon","LC":"Saint Lucia","LA":"Laos","TV":"Tuvalu","TW":"Taiwan","TT":"Trinidad and Tobago","TR":"Turkey","LK":"Sri Lanka","LI":"Liechtenstein","LV":"Latvia","TO":"Tonga","LT":"Lithuania","LU":"Luxembourg","LR":"Liberia","LS":"Lesotho","TH":"Thailand","TF":"French Southern Territories","TG":"Togo","TD":"Chad","TC":"Turks and Caicos Islands","LY":"Libya","VA":"Vatican","VC":"Saint Vincent and the Grenadines","AE":"United Arab Emirates","AD":"Andorra","AG":"Antigua and Barbuda","AF":"Afghanistan","AI":"Anguilla","VI":"U.S. Virgin Islands","IS":"Iceland","IR":"Iran","AM":"Armenia","AL":"Albania","AO":"Angola","AQ":"Antarctica","AS":"American Samoa","AR":"Argentina","AU":"Australia","AT":"Austria","AW":"Aruba","IN":"India","AX":"Aland Islands","AZ":"Azerbaijan","IE":"Ireland","ID":"Indonesia","UA":"Ukraine","QA":"Qatar","MZ":"Mozambique"}')},"4e1b":function(t,e,a){"use strict";var r=a("8e1d"),o=a.n(r);o.a},"80f1":function(t,e,a){"use strict";var r=a("a908"),o=a.n(r);o.a},"8e1d":function(t,e,a){},"96c7":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-layout-header",{style:{position:"fixed",zIndex:1,width:"100%",backgroundColor:"white",borderBottom:"1px solid #e8e8e8"},attrs:{id:"components-layout-demo-fixed"}},[r("div",{staticClass:"logo"},[r("router-link",{attrs:{to:"/"}},[r("img",{staticStyle:{width:"100%","margin-left":"1.5rem"},attrs:{src:a("b8fb")}})])],1),r("hide-at",{attrs:{breakpoint:"mediumAndBelow"}},[r("div",{staticClass:"ant-menu-horizontal ",style:{lineHeight:"64px",float:"right",borderBottom:0}},["recruiter"===t.$store.state.usertype?r("router-link",{staticClass:"ant-btn ant-btn-primary",staticStyle:{"margin-bottom":"0"},attrs:{to:"/post/true"}},[t._v("Post a job for free\n                ")]):"developer"===t.$store.state.usertype?r("router-link",{staticClass:"ant-btn ant-btn-primary",staticStyle:{"margin-bottom":"0"},attrs:{to:"/developer"}},[t._v("Post a job for free\n                ")]):r("router-link",{staticClass:"ant-btn ant-btn-primary",staticStyle:{"margin-bottom":"0"},attrs:{to:"/login"}},[t._v("Post a job for\n                    free\n                ")]),r("a",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{href:"https://remote.codeln.com/",target:"_blank"}},[t._v("\n                Remote.Codeln\n              ")]),r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/prices"}},[t._v("Pricing")]),r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/bridgesHome"}},[t._v("Skill Bridging program\n                ")]),r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/talent"}},[t._v("Talent pool")]),r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/jobs"}},[t._v("Job board")]),t.$store.state.isUserLoggedIn&&"recruiter"===t.$store.state.usertype&&"complete"===t.currentUserProfile.stage?r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/recruiter"}},[t._v("\n                    My account\n                ")]):t._e(),t.$store.state.isUserLoggedIn&&"recruiter"===t.$store.state.usertype&&"complete"!==t.currentUserProfile.stage?r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/register"}},[t._v("\n                    My account\n                ")]):t._e(),t.$store.state.isUserLoggedIn&&"developer"===t.$store.state.usertype&&"complete"!==t.currentUserProfile.stage?r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/register"}},[t._v("\n                    My account\n                ")]):t._e(),t.$store.state.isUserLoggedIn&&"developer"===t.$store.state.usertype&&"complete"===t.currentUserProfile.stage?r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/developer"}},[t._v("\n                    My account\n                ")]):t._e(),t.$store.state.isUserLoggedIn?t._e():r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/login"}},[t._v("\n                    Login\n                ")]),r("a",[t.$store.state.isUserLoggedIn?r("a-button",{staticStyle:{"margin-bottom":"0",border:"0","-webkit-box-shadow":"0 0 0 rgba(255,255,255,0.01)",color:"#1890ff"},on:{click:t.logout}},[t._v("Logout\n                    ")]):t._e()],1)],1)]),r("show-at",{attrs:{breakpoint:"mediumAndBelow"}},[r("div",{staticStyle:{float:"right"}},[r("Menusider")],1)])],1)},o=[],n=(a("96cf"),a("3b8d")),s=a("8808"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-dropdown",{attrs:{trigger:["click"],placement:"bottomCenter"}},[a("a",{staticClass:"ant-dropdown-link",attrs:{href:"#"}},[a("a-icon",{attrs:{type:"menu-fold"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"0"},["recruiter"===t.$store.state.usertype?a("router-link",{attrs:{to:"/post/true"}},[a("span",[t._v("Post a job for free")])]):"developer"===t.$store.state.usertype?a("router-link",{attrs:{to:"/developer"}},[a("span",[t._v("Post a job for free")])]):a("router-link",{attrs:{to:"/login"}},[a("span",[t._v("Post a job for free")])])],1),a("a-menu-item",{key:"20"},[a("a",{attrs:{href:"https://remote.codeln.com/",target:"_blank"}},[t._v("\n        Remote.Codeln\n      ")])]),a("a-menu-item",{key:"6"},[a("router-link",{attrs:{to:"/prices"}},[a("span",[t._v("Pricing")])])],1),a("a-menu-item",{key:"12"},[a("a",{attrs:{href:"https://youtu.be/nmH8uD32IqA",target:"_blank"}},[t._v("\n\n              Demo\n          ")])]),a("a-menu-item",{key:"7"},[a("router-link",{attrs:{to:"/talent"}},[a("span",[t._v("Talent pool")])])],1),a("a-menu-item",{key:"8"},[a("router-link",{attrs:{to:"/jobs"}},[a("span",[t._v("Job board ")])])],1),t.$store.state.isUserLoggedIn&&"recruiter"===t.$store.state.usertype&&"complete"===t.currentUserProfile.stage?a("a-menu-item",{key:"1"},[a("router-link",{attrs:{to:"/recruiter"}},[a("span",[t._v("My account")])])],1):t._e(),t.$store.state.isUserLoggedIn&&"recruiter"===t.$store.state.usertype&&"complete"!==t.currentUserProfile.stage?a("a-menu-item",{key:"6"},[a("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/register"}},[t._v("My account\n              ")])],1):t._e(),t.$store.state.isUserLoggedIn&&"developer"===t.$store.state.usertype?a("a-menu-item",{key:"2"},[a("router-link",{attrs:{to:"/developer"}},[a("span",[t._v("My account")])])],1):t._e(),t.$store.state.isUserLoggedIn&&"developer"===t.$store.state.usertype&&"complete"!==t.currentUserProfile.stage?a("a-menu-item",{key:"7"},[a("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/register"}},[t._v("My account\n              ")])],1):t._e(),t.$store.state.isUserLoggedIn?t._e():a("a-menu-item",{key:"3"},[a("router-link",{attrs:{to:"/login"}},[a("span",[t._v("Login")])])],1),t.$store.state.isUserLoggedIn?t._e():a("a-menu-item",{key:"4"},[a("router-link",{attrs:{to:"/register"}},[a("span",[t._v("Register")])])],1),t.$store.state.isUserLoggedIn?a("a-menu-item",{key:"5"},[a("a",{on:{click:t.logout}},[t._v("Logout")])]):t._e()],1)],1)},l=[],u={name:"Menusider",data:function(){return{currentUserProfile:null}},mounted:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$store.state.user&&this.$store.state.user.pk&&(this.currentUserProfile=this.$store.state.user_object);case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$store.dispatch("setNext",null),this.$store.dispatch("setCart",null),this.$store.dispatch("setPicked",null),this.$store.dispatch("setLanguage",null),this.$store.dispatch("setCountry",null),this.$store.dispatch("setManaged",!1),this.$store.dispatch("setRecommend",null),this.$store.dispatch("setlazyloader",null),this.$store.dispatch("setuser_object",null),this.$router.push({name:"home"})}}},c=u,p=a("2877"),d=Object(p["a"])(c,i,l,!1,null,"2ad7e8fc",null),m=d.exports,h={name:"Header",components:{hideAt:s["hideAt"],showAt:s["showAt"],Menusider:m},data:function(){return{currentUserProfile:{}}},mounted:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$store.state.user&&(this.currentUserProfile=this.$store.state.user_object);case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$store.dispatch("setNext",null),this.$store.dispatch("setCart",null),this.$store.dispatch("setPicked",null),this.$store.dispatch("setLanguage",null),this.$store.dispatch("setCountry",null),this.$store.dispatch("setManaged",!1),this.$store.dispatch("setRecommend",null),this.$store.dispatch("setlazyloader",null),this.$store.dispatch("setuser_object",null),this.$router.push({name:"home"})}}},g=h,y=(a("80f1"),Object(p["a"])(g,r,o,!1,null,"60a19cd2",null));e["a"]=y.exports},a908:function(t,e,a){}}]);
//# sourceMappingURL=chunk-a29f0944.61c47ecb.js.map
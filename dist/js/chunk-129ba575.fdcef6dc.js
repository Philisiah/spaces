(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-129ba575"],{"02f4":function(t,e,a){var r=a("4588"),n=a("be13");t.exports=function(t){return function(e,a){var i,s,o=String(n(e)),l=r(a),u=o.length;return l<0||l>=u?t?"":void 0:(i=o.charCodeAt(l),i<55296||i>56319||l+1===u||(s=o.charCodeAt(l+1))<56320||s>57343?t?o.charAt(l):i:t?o.slice(l,l+2):s-56320+(i-55296<<10)+65536)}}},"0390":function(t,e,a){"use strict";var r=a("02f4")(!0);t.exports=function(t,e,a){return e+(a?r(t,e).length:1)}},"05a5":function(t,e,a){},"0bfb":function(t,e,a){"use strict";var r=a("cb7c");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,a){"use strict";a("b0c5");var r=a("2aba"),n=a("32e9"),i=a("79e5"),s=a("be13"),o=a("2b4c"),l=a("520a"),u=o("species"),c=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),d=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2===a.length&&"a"===a[0]&&"b"===a[1]}();t.exports=function(t,e,a){var p=o(t),h=!i((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),g=h?!i((function(){var e=!1,a=/a/;return a.exec=function(){return e=!0,null},"split"===t&&(a.constructor={},a.constructor[u]=function(){return a}),a[p](""),!e})):void 0;if(!h||!g||"replace"===t&&!c||"split"===t&&!d){var m=/./[p],f=a(s,p,""[t],(function(t,e,a,r,n){return e.exec===l?h&&!n?{done:!0,value:m.call(e,a,r)}:{done:!0,value:t.call(a,e,r)}:{done:!1}})),b=f[0],y=f[1];r(String.prototype,t,b),n(RegExp.prototype,p,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)})}}},"23ef":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout",{staticStyle:{"min-height":"100vh","background-color":"#F8FAFB"},attrs:{id:"components-layout-demo-side"}},[a("pageheader"),a("a-layout",{style:{backgroundColor:"#F8FAFB",marginTop:"1rem"}},[a("a-layout-content",{staticStyle:{"margin-top":"5rem"}},[a("a-row",[a("a-col",{staticClass:"jobdetails",attrs:{xs:{span:20,offset:2},sm:{span:20,offset:2},md:{span:20,offset:2},lg:{span:14,offset:6},xl:{span:14,offset:6}}},[t.dataload?a("div",{staticStyle:{"text-align":"center"}},[a("a-spin")],1):a("div",[a("div",{staticStyle:{"border-bottom":"1px solid #e8e8e8","margin-bottom":"1%","padding-bottom":"3%"}},[a("span",[a("span",{staticStyle:{"font-weight":"700","font-size":"large"}},[t._v(t._s(t.job.title))]),this.$store.state.isUserLoggedIn?a("span",["developer"===t.currentUserProfile.user_type&&!1===t.applied?a("span",{staticStyle:{float:"right"}},[t.save?a("div",[a("a-spin")],1):a("span",[this.$store.state.isUserLoggedIn?a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.ApplyJob(t.job.id,t.currentUserProfile.id)}}},[t._v("Apply")]):t._e()],1)]):t._e(),"developer"===t.currentUserProfile.user_type&&!0===t.applied?a("span",{staticStyle:{float:"right"}},[a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.navigateTo({name:"manageapplications"})}}},[t._v("Manage Job application")])],1):t._e()]):a("span",{staticStyle:{float:"right"}},[a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.navigateTo({name:"login"})}}},[t._v("Login to apply")])],1)])]),a("div",[this.$store.state.isUserLoggedIn?a("span",["developer"===t.currentUserProfile.user_type&&t.applied?a("a-alert",{attrs:{message:"Job application successful",type:"success",closeText:"Close Now"}}):t._e()],1):t._e(),a("span",[t._v(" Job tag :\n                                "),a("a-tag",{staticStyle:{color:"#007BFF"},attrs:{color:"#F0F6FD"}},[a("a-icon",{attrs:{type:"tags"}}),t._v("\n                                    "+t._s(t.job.tag)+"\n                                ")],1)],1),a("p",[t._v("\n\n                                Country :  "+t._s(t.country)+" "),t.job.city?a("span",[t._v("| City : "+t._s(t.job.city))]):t._e()]),a("p",[t._v("Contract type: "+t._s(t.job.engagement_type))]),a("p",[t._v("Monthly renumeration * : "+t._s(t.job.remuneration))]),a("p",[t._v("\n                                Skills looking for :\n                                "),t._l(t.skills,(function(e){return a("span",{key:e},[a("a-tag",{staticStyle:{color:"#007BFF"},attrs:{color:"#F0F6FD"}},[t._v(t._s(e))])],1)}))],2),a("p",[t._v("Application Deadline : "+t._s(t.deadline))])]),a("div",[a("p",{staticStyle:{"font-weight":"700"}},[t._v("Job Details")]),a("markdown",[t._v(t._s(t.job.description))])],1)])])],1)],1)],1)],1)},n=[],i=a("768b"),s=(a("ac6a"),a("ffc1"),a("28a5"),a("96cf"),a("3b8d")),o=a("bf80"),l=a("96c7"),u=a("290c"),c=a("da05"),d=a("688c"),p=a("c1df"),h=a.n(p),g=a("9ce6"),m=a.n(g),f=a("4590"),b={name:"jobdetails",data:function(){return{job:{},skills:null,currentUserProfile:{},applied:!1,myjobs:[],dataload:!1,deadline:"",save:!1,country:""}},components:{ACol:c["b"],ARow:u["a"],Pageheader:l["a"],markdown:m.a},mounted:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a,r,n,s,l,u,c,p,g,m,b;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(h.a,e={headers:{Authorization:"JWT "+this.$store.state.token}},this.dataload=!0,!this.$store.state.isUserLoggedIn){t.next=19;break}return t.next=6,o["a"].currentuser(this.$store.state.user.pk,e);case 6:return this.currentUserProfile=t.sent.data,t.next=9,d["a"].jobdetails(this.$route.params.jobId);case 9:return this.job=t.sent.data,this.skills=this.job.tech_stack.split(","),t.next=13,d["a"].candidatejobs(this.$store.state.user.pk,e);case 13:for(this.myjobs=t.sent.data,this.deadline=h()(this.job.deadline).format("YYYY-MM-DD HH:mm:ss"),a=0,r=Object.entries(f);a<r.length;a++)n=Object(i["a"])(r[a],2),s=n[0],l=n[1],s===this.job.location&&(this.country=l);if(this.myjobs.length>0)for(u=0;u<this.myjobs.length;u++)this.myjobs[u].job.id===this.job.id&&(this.applied=!0);else this.applied=!1;t.next=25;break;case 19:return t.next=21,d["a"].jobdetails(this.$route.params.jobId);case 21:for(this.job=t.sent.data,this.skills=this.job.tech_stack.split(","),this.deadline=h()(this.job.deadline).format("YYYY-MM-DD HH:mm:ss"),c=0,p=Object.entries(f);c<p.length;c++)g=Object(i["a"])(p[c],2),m=g[0],b=g[1],m===this.job.location&&(this.country=b);case 25:this.dataload=!1;case 26:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{navigateTo:function(t){this.$router.push(t)},ApplyJob:function(t,e){var a=this,r={headers:{Authorization:"JWT "+this.$store.state.token}};this.save=!0,d["a"].applyjob({job:t,candidate:e,recruiter:this.job.posted_by,stage:"new",selected:!1,type:"applied"},r).then((function(t){a.save=!1,a.applied=!0,d["a"].newapplicationemail(t.data.id,r).then().catch()})).catch((function(t){return t}))}}},y=b,v=(a("c320"),a("2877")),S=Object(v["a"])(y,r,n,!1,null,"240c7ecc",null);e["default"]=S.exports},"28a5":function(t,e,a){"use strict";var r=a("aae3"),n=a("cb7c"),i=a("ebd6"),s=a("0390"),o=a("9def"),l=a("5f1b"),u=a("520a"),c=a("79e5"),d=Math.min,p=[].push,h="split",g="length",m="lastIndex",f=4294967295,b=!c((function(){RegExp(f,"y")}));a("214f")("split",2,(function(t,e,a,c){var y;return y="c"=="abbc"[h](/(b)*/)[1]||4!="test"[h](/(?:)/,-1)[g]||2!="ab"[h](/(?:ab)*/)[g]||4!="."[h](/(.?)(.?)/)[g]||"."[h](/()()/)[g]>1||""[h](/.?/)[g]?function(t,e){var n=String(this);if(void 0===t&&0===e)return[];if(!r(t))return a.call(n,t,e);var i,s,o,l=[],c=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,h=void 0===e?f:e>>>0,b=new RegExp(t.source,c+"g");while(i=u.call(b,n)){if(s=b[m],s>d&&(l.push(n.slice(d,i.index)),i[g]>1&&i.index<n[g]&&p.apply(l,i.slice(1)),o=i[0][g],d=s,l[g]>=h))break;b[m]===i.index&&b[m]++}return d===n[g]?!o&&b.test("")||l.push(""):l.push(n.slice(d)),l[g]>h?l.slice(0,h):l}:"0"[h](void 0,0)[g]?function(t,e){return void 0===t&&0===e?[]:a.call(this,t,e)}:a,[function(a,r){var n=t(this),i=void 0==a?void 0:a[e];return void 0!==i?i.call(a,n,r):y.call(String(n),a,r)},function(t,e){var r=c(y,t,this,e,y!==a);if(r.done)return r.value;var u=n(t),p=String(this),h=i(u,RegExp),g=u.unicode,m=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(b?"y":"g"),v=new h(b?u:"^(?:"+u.source+")",m),S=void 0===e?f:e>>>0;if(0===S)return[];if(0===p.length)return null===l(v,p)?[p]:[];var k=0,M=0,_=[];while(M<p.length){v.lastIndex=b?M:0;var C,I=l(v,b?p:p.slice(M));if(null===I||(C=d(o(v.lastIndex+(b?0:M)),p.length))===k)M=s(p,M,g);else{if(_.push(p.slice(k,M)),_.length===S)return _;for(var x=1;x<=I.length-1;x++)if(_.push(I[x]),_.length===S)return _;M=k=C}}return _.push(p.slice(k)),_}]}))},4590:function(t){t.exports=JSON.parse('{"BD":"Bangladesh","BE":"Belgium","BF":"Burkina Faso","BG":"Bulgaria","BA":"Bosnia and Herzegovina","BB":"Barbados","WF":"Wallis and Futuna","BL":"Saint Barthelemy","BM":"Bermuda","BN":"Brunei","BO":"Bolivia","BH":"Bahrain","BI":"Burundi","BJ":"Benin","BT":"Bhutan","JM":"Jamaica","BV":"Bouvet Island","BW":"Botswana","WS":"Samoa","BQ":"Bonaire, Saint Eustatius and Saba ","BR":"Brazil","BS":"Bahamas","JE":"Jersey","BY":"Belarus","BZ":"Belize","RU":"Russia","RW":"Rwanda","RS":"Serbia","TL":"East Timor","RE":"Reunion","TM":"Turkmenistan","TJ":"Tajikistan","RO":"Romania","TK":"Tokelau","GW":"Guinea-Bissau","GU":"Guam","GT":"Guatemala","GS":"South Georgia and the South Sandwich Islands","GR":"Greece","GQ":"Equatorial Guinea","GP":"Guadeloupe","JP":"Japan","GY":"Guyana","GG":"Guernsey","GF":"French Guiana","GE":"Georgia","GD":"Grenada","GB":"United Kingdom","GA":"Gabon","SV":"El Salvador","GN":"Guinea","GM":"Gambia","GL":"Greenland","GI":"Gibraltar","GH":"Ghana","OM":"Oman","TN":"Tunisia","JO":"Jordan","HR":"Croatia","HT":"Haiti","HU":"Hungary","HK":"Hong Kong","HN":"Honduras","HM":"Heard Island and McDonald Islands","VE":"Venezuela","PR":"Puerto Rico","PS":"Palestinian Territory","PW":"Palau","PT":"Portugal","SJ":"Svalbard and Jan Mayen","PY":"Paraguay","IQ":"Iraq","PA":"Panama","PF":"French Polynesia","PG":"Papua New Guinea","PE":"Peru","PK":"Pakistan","PH":"Philippines","PN":"Pitcairn","PL":"Poland","PM":"Saint Pierre and Miquelon","ZM":"Zambia","EH":"Western Sahara","EE":"Estonia","EG":"Egypt","ZA":"South Africa","EC":"Ecuador","IT":"Italy","VN":"Vietnam","SB":"Solomon Islands","ET":"Ethiopia","SO":"Somalia","ZW":"Zimbabwe","SA":"Saudi Arabia","ES":"Spain","ER":"Eritrea","ME":"Montenegro","MD":"Moldova","MG":"Madagascar","MF":"Saint Martin","MA":"Morocco","MC":"Monaco","UZ":"Uzbekistan","MM":"Myanmar","ML":"Mali","MO":"Macao","MN":"Mongolia","MH":"Marshall Islands","MK":"Macedonia","MU":"Mauritius","MT":"Malta","MW":"Malawi","MV":"Maldives","MQ":"Martinique","MP":"Northern Mariana Islands","MS":"Montserrat","MR":"Mauritania","IM":"Isle of Man","UG":"Uganda","TZ":"Tanzania","MY":"Malaysia","MX":"Mexico","IL":"Israel","FR":"France","IO":"British Indian Ocean Territory","SH":"Saint Helena","FI":"Finland","FJ":"Fiji","FK":"Falkland Islands","FM":"Micronesia","FO":"Faroe Islands","NI":"Nicaragua","NL":"Netherlands","NO":"Norway","NA":"Namibia","VU":"Vanuatu","NC":"New Caledonia","NE":"Niger","NF":"Norfolk Island","NG":"Nigeria","NZ":"New Zealand","NP":"Nepal","NR":"Nauru","NU":"Niue","CK":"Cook Islands","XK":"Kosovo","CI":"Ivory Coast","CH":"Switzerland","CO":"Colombia","CN":"China","CM":"Cameroon","CL":"Chile","CC":"Cocos Islands","CA":"Canada","CG":"Republic of the Congo","CF":"Central African Republic","CD":"Democratic Republic of the Congo","CZ":"Czech Republic","CY":"Cyprus","CX":"Christmas Island","CR":"Costa Rica","CW":"Curacao","CV":"Cape Verde","CU":"Cuba","SZ":"Swaziland","SY":"Syria","SX":"Sint Maarten","KG":"Kyrgyzstan","KE":"Kenya","SS":"South Sudan","SR":"Suriname","KI":"Kiribati","KH":"Cambodia","KN":"Saint Kitts and Nevis","KM":"Comoros","ST":"Sao Tome and Principe","SK":"Slovakia","KR":"South Korea","SI":"Slovenia","KP":"North Korea","KW":"Kuwait","SN":"Senegal","SM":"San Marino","SL":"Sierra Leone","SC":"Seychelles","KZ":"Kazakhstan","KY":"Cayman Islands","SG":"Singapore","SE":"Sweden","SD":"Sudan","DO":"Dominican Republic","DM":"Dominica","DJ":"Djibouti","DK":"Denmark","VG":"British Virgin Islands","DE":"Germany","YE":"Yemen","DZ":"Algeria","US":"United States","UY":"Uruguay","YT":"Mayotte","UM":"United States Minor Outlying Islands","LB":"Lebanon","LC":"Saint Lucia","LA":"Laos","TV":"Tuvalu","TW":"Taiwan","TT":"Trinidad and Tobago","TR":"Turkey","LK":"Sri Lanka","LI":"Liechtenstein","LV":"Latvia","TO":"Tonga","LT":"Lithuania","LU":"Luxembourg","LR":"Liberia","LS":"Lesotho","TH":"Thailand","TF":"French Southern Territories","TG":"Togo","TD":"Chad","TC":"Turks and Caicos Islands","LY":"Libya","VA":"Vatican","VC":"Saint Vincent and the Grenadines","AE":"United Arab Emirates","AD":"Andorra","AG":"Antigua and Barbuda","AF":"Afghanistan","AI":"Anguilla","VI":"U.S. Virgin Islands","IS":"Iceland","IR":"Iran","AM":"Armenia","AL":"Albania","AO":"Angola","AQ":"Antarctica","AS":"American Samoa","AR":"Argentina","AU":"Australia","AT":"Austria","AW":"Aruba","IN":"India","AX":"Aland Islands","AZ":"Azerbaijan","IE":"Ireland","ID":"Indonesia","UA":"Ukraine","QA":"Qatar","MZ":"Mozambique"}')},"520a":function(t,e,a){"use strict";var r=a("0bfb"),n=RegExp.prototype.exec,i=String.prototype.replace,s=n,o="lastIndex",l=function(){var t=/a/,e=/b*/g;return n.call(t,"a"),n.call(e,"a"),0!==t[o]||0!==e[o]}(),u=void 0!==/()??/.exec("")[1],c=l||u;c&&(s=function(t){var e,a,s,c,d=this;return u&&(a=new RegExp("^"+d.source+"$(?!\\s)",r.call(d))),l&&(e=d[o]),s=n.call(d,t),l&&s&&(d[o]=d.global?s.index+s[0].length:e),u&&s&&s.length>1&&i.call(s[0],a,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(s[c]=void 0)})),s}),t.exports=s},"5f1b":function(t,e,a){"use strict";var r=a("23c6"),n=RegExp.prototype.exec;t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var i=a.call(t,e);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return n.call(t,e)}},"7f8f":function(t,e,a){},"96c7":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-layout-header",{style:{position:"fixed",zIndex:1,width:"100%",backgroundColor:"white",borderBottom:"1px solid #e8e8e8"},attrs:{id:"components-layout-demo-fixed"}},[r("div",{staticClass:"logo"},[r("router-link",{attrs:{to:"/"}},[r("img",{staticStyle:{width:"100%","margin-left":"1.5rem"},attrs:{src:a("b8fb")}})])],1),r("hide-at",{attrs:{breakpoint:"mediumAndBelow"}},[r("div",{staticClass:"ant-menu-horizontal ",style:{lineHeight:"64px",float:"right",borderBottom:0}},["recruiter"===t.$store.state.usertype?r("router-link",{staticClass:"ant-btn ant-btn-primary",staticStyle:{"margin-bottom":"0"},attrs:{to:"/post/true"}},[t._v("Post a job for free\n            ")]):"developer"===t.$store.state.usertype?r("router-link",{staticClass:"ant-btn ant-btn-primary",staticStyle:{"margin-bottom":"0"},attrs:{to:"/developer"}},[t._v("Post a job for free\n            ")]):r("router-link",{staticClass:"ant-btn ant-btn-primary",staticStyle:{"margin-bottom":"0"},attrs:{to:"/login"}},[t._v("Post a job for\n                free\n            ")]),r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/prices"}},[t._v("Pricing")]),r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/bridgesHome"}},[t._v("Skill Bridging program\n            ")]),r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/talent"}},[t._v("Talent pool")]),r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/jobs"}},[t._v("Job board")]),t.$store.state.isUserLoggedIn&&"recruiter"===t.$store.state.usertype&&"complete"===t.currentUserProfile.stage?r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/recruiter"}},[t._v("\n                My account\n            ")]):t._e(),t.$store.state.isUserLoggedIn&&"recruiter"===t.$store.state.usertype&&"complete"!==t.currentUserProfile.stage?r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/register"}},[t._v("\n                My account\n            ")]):t._e(),t.$store.state.isUserLoggedIn&&"developer"===t.$store.state.usertype&&"complete"!==t.currentUserProfile.stage?r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/register"}},[t._v("\n                My account\n            ")]):t._e(),t.$store.state.isUserLoggedIn&&"developer"===t.$store.state.usertype&&"complete"===t.currentUserProfile.stage?r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/developer"}},[t._v("\n                My account\n            ")]):t._e(),t.$store.state.isUserLoggedIn?t._e():r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/login"}},[t._v("\n                Login\n            ")]),t.$store.state.isUserLoggedIn?t._e():r("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/register"}},[t._v("Sign up\n            ")]),r("a",[t.$store.state.isUserLoggedIn?r("a-button",{staticStyle:{"margin-bottom":"0",border:"0","-webkit-box-shadow":"0 0 0 rgba(255,255,255,0.01)",color:"#1890ff"},on:{click:t.logout}},[t._v("Logout\n                ")]):t._e()],1)],1)]),r("show-at",{attrs:{breakpoint:"mediumAndBelow"}},[r("div",{staticStyle:{float:"right"}},[r("Menusider")],1)])],1)},n=[],i=(a("96cf"),a("3b8d")),s=a("8808"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-dropdown",{attrs:{trigger:["click"],placement:"bottomCenter"}},[a("a",{staticClass:"ant-dropdown-link",attrs:{href:"#"}},[a("a-icon",{attrs:{type:"menu-fold"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"0"},["recruiter"===t.$store.state.usertype?a("router-link",{attrs:{to:"/post/true"}},[a("span",[t._v("Post a job for free")])]):"developer"===t.$store.state.usertype?a("router-link",{attrs:{to:"/developer"}},[a("span",[t._v("Post a job for free")])]):a("router-link",{attrs:{to:"/login"}},[a("span",[t._v("Post a job for free")])])],1),a("a-menu-item",{key:"6"},[a("router-link",{attrs:{to:"/prices"}},[a("span",[t._v("Pricing")])])],1),a("a-menu-item",{key:"7"},[a("router-link",{attrs:{to:"/talent"}},[a("span",[t._v("Talent pool")])])],1),a("a-menu-item",{key:"8"},[a("router-link",{attrs:{to:"/jobs"}},[a("span",[t._v("Job board ")])])],1),t.$store.state.isUserLoggedIn&&"recruiter"===t.$store.state.usertype&&"complete"===t.currentUserProfile.stage?a("a-menu-item",{key:"1"},[a("router-link",{attrs:{to:"/recruiter"}},[a("span",[t._v("My account")])])],1):t._e(),t.$store.state.isUserLoggedIn&&"recruiter"===t.$store.state.usertype&&"complete"!==t.currentUserProfile.stage?a("a-menu-item",{key:"6"},[a("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/register"}},[t._v("My account\n              ")])],1):t._e(),t.$store.state.isUserLoggedIn&&"developer"===t.$store.state.usertype?a("a-menu-item",{key:"2"},[a("router-link",{attrs:{to:"/developer"}},[a("span",[t._v("My account")])])],1):t._e(),t.$store.state.isUserLoggedIn&&"developer"===t.$store.state.usertype&&"complete"!==t.currentUserProfile.stage?a("a-menu-item",{key:"7"},[a("router-link",{staticClass:"ant-menu-item",staticStyle:{"margin-bottom":"0"},attrs:{to:"/register"}},[t._v("My account\n              ")])],1):t._e(),t.$store.state.isUserLoggedIn?t._e():a("a-menu-item",{key:"3"},[a("router-link",{attrs:{to:"/login"}},[a("span",[t._v("Login")])])],1),t.$store.state.isUserLoggedIn?t._e():a("a-menu-item",{key:"4"},[a("router-link",{attrs:{to:"/register"}},[a("span",[t._v("Register")])])],1),t.$store.state.isUserLoggedIn?a("a-menu-item",{key:"5"},[a("a",{on:{click:t.logout}},[t._v("Logout")])]):t._e()],1)],1)},l=[],u=a("bf80"),c={name:"Menusider",data:function(){return{currentUserProfile:null}},mounted:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e={headers:{Authorization:"JWT "+this.$store.state.token}},!this.$store.state.user||!this.$store.state.user.pk){t.next=5;break}return t.next=4,u["a"].currentuser(this.$store.state.user.pk,e);case 4:this.currentUserProfile=t.sent.data;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$store.dispatch("setNext",null),this.$router.push({name:"home"})}}},d=c,p=a("2877"),h=Object(p["a"])(d,o,l,!1,null,"539f1aac",null),g=h.exports,m={name:"Header",components:{hideAt:s["hideAt"],showAt:s["showAt"],Menusider:g},data:function(){return{currentUserProfile:{}}},mounted:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e={headers:{Authorization:"JWT "+this.$store.state.token}},!this.$store.state.user){t.next=5;break}return t.next=4,u["a"].currentuser(this.$store.state.user.pk,e);case 4:this.currentUserProfile=t.sent.data;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$store.dispatch("setNext",null),this.$store.dispatch("setCart",null),this.$store.dispatch("setPicked",null),this.$store.dispatch("setLanguage",null),this.$store.dispatch("setCountry",null),this.$store.dispatch("setManaged",!1),this.$store.dispatch("setRecommend",null),this.$router.push({name:"home"})}}},f=m,b=(a("9cb6"),Object(p["a"])(f,r,n,!1,null,"33ce5363",null));e["a"]=b.exports},"9cb6":function(t,e,a){"use strict";var r=a("7f8f"),n=a.n(r);n.a},aae3:function(t,e,a){var r=a("d3f4"),n=a("2d95"),i=a("2b4c")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==n(t))}},b0c5:function(t,e,a){"use strict";var r=a("520a");a("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},c320:function(t,e,a){"use strict";var r=a("05a5"),n=a.n(r);n.a}}]);
//# sourceMappingURL=chunk-129ba575.fdcef6dc.js.map
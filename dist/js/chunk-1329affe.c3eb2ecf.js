(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1329affe"],{"2a9a":function(e,t,s){"use strict";var i=s("5b30"),r=s.n(i);r.a},"5b30":function(e,t,s){},"9f4b":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.pickedprofiles.length>0?s("div",{staticClass:"profile"},[s("div",{staticStyle:{padding:"7%"}},[s("p",[e._v("Added Candidates")]),s("p",[s("a-icon",{attrs:{type:"check-circle",theme:"twoTone"}}),e._v("\n                indicates verified candidate\n            ")],1),e._l(e.pickedprofiles,function(t){return s("div",{key:t,staticStyle:{"border-bottom":"1px solid #e8e8e8","padding-top":"1rem"}},[s("p",[e._v(e._s(t.name)+" "),t.verified?s("span",[s("a-icon",{attrs:{type:"check-circle",theme:"twoTone"}})],1):e._e(),s("span",{staticStyle:{float:"right"}},[s("a",{attrs:{"@click":e.remove(t.id)}},[s("a-icon",{attrs:{type:"close-circle",theme:"twoTone"}})],1)])])])}),s("p",{staticStyle:{"padding-top":"1rem"}},[e._v("Total:"+e._s(e.amount))]),s("div",{staticStyle:{"text-align":"center"}},[s("Rave",{attrs:{"style-class":"paymentbtn",email:e.email,amount:e.amount,reference:e.reference,"rave-key":e.raveKey,callback:e.callback,close:e.close,currency:e.currency,country:e.country,customer_firstname:e.customer_firstname,customer_lastname:e.customer_lastname,custom_title:e.custom.title,custom_description:e.custom.description,custom_logo:e.custom.logo,redirect_url:e.redirectUrl,payment_plan:e.paymentPlan,subaccounts:e.subaccounts,payment_method:e.paymentMethod}})],1)],2)]):e._e(),s("div",{staticClass:"profile"},[s("div",{staticStyle:{padding:"4%",margin:"3%","padding-bottom":"7%"}},[e._m(0),s("p",{staticStyle:{"text-align":"center"}},[e._v("I like this profile")]),s("div",{staticStyle:{"text-align":"center"}},[e._l(e.devrequestdevs,function(t){return s("div",{key:t},[t===e.currentUserProfile.id?s("a-button",{staticStyle:{"margin-left":"1rem"},attrs:{type:"primary"},on:{click:function(t){return e.navigateTo({name:"mycandidates"})}}},[e._v("\n                        manage candidate\n                    ")]):e._e()],1)}),s("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.pickcandidate(e.currentUserProfile.id)}}},[e._v("\n                    Add to my Candidates\n\n                ")])],2)])])])},r=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{"text-align":"center"}},[i("img",{staticStyle:{width:"50%","padding-bottom":"2rem"},attrs:{src:s("b31e")}})])}],a=(s("6b54"),s("c5f6"),s("28a5"),s("96cf"),s("3b8d")),n=s("d225"),c=s("bf80"),o=s("ebba"),d=s("20f9"),u=s("688c"),h=function e(t,s,i){Object(n["a"])(this,e),this.id=t,this.name=s,this.verified=i},l={name:"Checkout",data:function(){return{currentUserProfile:{},cart:[],pickeddevs:[],pickeddevlist:[],cart_items:[],mycart:null,carts:[],devrequestdevs:[],devrequestpicked:!1,devs:[],pickedprofiles:[],amount:0,raveKey:"FLWPUBK-37536a50fc02bed5bddf5ebe89a18e7c-X",email:"",currency:"USD",country:"GH",customer_firstname:"",customer_lastname:"",custom:{title:"Codeln",description:"Payment for Codeln Developers",logo:"https://www.codeln.com/img/logobg.f302741d.svg"},paymentPlan:"",paymentMethod:"",subaccounts:{id:"",transaction_split_ratio:"",transaction_charge_type:"",transaction_charge:""}}},components:{Rave:d["a"]},mounted:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t,s,i,r,a,n,d,l,p,m=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.customer_firstname=this.$store.state.user.first_name,this.customer_lastname=this.$store.state.user.last_name,this.email=this.$store.state.user.email,t={headers:{Authorization:"JWT "+this.$store.state.token}},s=this.$route.params.candidateProfileID,e.next=7,c["a"].currentuser(this.$route.params.candidateProfileID,t);case 7:if(this.currentUserProfile=e.sent.data,!this.$store.state.user.pk){e.next=25;break}return e.next=11,o["a"].cartlist(this.$store.state.user.pk,t);case 11:if(this.carts=e.sent.data,!(this.carts.length>0)){e.next=17;break}this.mycart=this.carts[0],this.mycart.devs&&(this.pickeddevs=this.mycart.devs.split(",")),e.next=20;break;case 17:return e.next=19,o["a"].cartcreate({user:this.$store.state.user.pk},t);case 19:this.cart=e.sent.data;case 20:for(i=0;i<this.pickeddevs.length;i++)this.pickeddevlist.push(Number(this.pickeddevs[i])),Number(this.pickeddevs[i])===s&&console.log(s);return e.next=23,c["a"].devs();case 23:if(this.devs=e.sent.data,this.pickeddevlist.length>0)for(r=0;r<this.devs.length;r++)for(a=0;a<this.pickeddevlist.length;a++)this.devs[r].id===this.pickeddevlist[a]&&(n=this.devs[r].id,d=this.devs[r].user.first_name,l=!1,this.devs[r].verified_skills&&(l=!0),p=new h(n,d,l),this.pickedprofiles.push(p));case 25:this.pickeddevs.length<=10?this.amount=200:this.amount=400,u["a"].mydevelopers(this.$store.state.user.pk,t).then(function(e){if(0!==e.data.length){for(var t=0;t<e.data.length;t++)m.devrequestdevs.push(Number(e.data[t].developer.id));for(var s=0;s<m.devrequestdevs.length;s++)m.currentUserProfile.id===m.devrequestdevs[s]&&(m.devrequestpicked=!0)}}).catch();case 27:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),computed:{reference:function(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=0;s<10;s++)e+=t.charAt(Math.floor(Math.random()*t.length));return e}},methods:{navigateTo:function(e){this.$router.push(e)},pickcandidate:function(){var e=this,t=this,s={headers:{Authorization:"JWT "+this.$store.state.token}};this.pickeddevs.push(this.$route.params.candidateProfileID);var i=this.pickeddevs.join(",");o["a"].cartitemadd(this.mycart.id,{devs:i},s).then(function(s){e.pickedprofiles=[],t.refresh()}).catch(function(e){return e})},refresh:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t,s,i,r,a,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c["a"].devs();case 2:for(this.devs=e.sent.data,t=0;t<this.devs.length;t++)if(this.pickeddevs.length>0)for(s=0;s<this.pickeddevs.length;s++)this.devs[t].id===Number(this.pickeddevs[s])&&(i=this.devs[t].id,r=this.devs[t].user.first_name,a=!1,this.devs[t].verified_skills&&(a=!0),n=new h(i,r,a),this.pickedprofiles.push(n));this.pickeddevs.length<=10?this.amount=200:this.amount=400;case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),remove:function(e){var t=this,s={headers:{Authorization:"JWT "+this.$store.state.token}},i=this,r=this.pickeddevs.indexOf(e.toString());if(r>-1){this.pickeddevs.splice(r,1);var a=this.pickeddevs.join(",");o["a"].cartitemadd(this.mycart.id,{devs:a},s).then(function(e){return t.pickedprofiles=[],i.refresh(),e}).catch(function(e){return e})}},callback:function(e){var t=this;if(e.success){for(var s={headers:{Authorization:"JWT "+this.$store.state.token}},i=0;i<this.pickedprofiles.length;i++){var r={owner:this.$store.state.user.pk,developer:this.pickedprofiles[i].id,paid:!0,stage:"new"};u["a"].pickdeveloper(r,s).then(function(e){return e}).catch(function(e){return e})}o["a"].cartitemadd(this.mycart.id,{checked_out:!0},s).then(function(e){return t.close(),e}).catch(function(e){return e}),this.$router.push({name:"mycandidates"})}},close:function(){console.log("Payment closed")}}},p=l,m=(s("2a9a"),s("2877")),v=Object(m["a"])(p,i,r,!1,null,"4b348167",null);t["default"]=v.exports}}]);
//# sourceMappingURL=chunk-1329affe.c3eb2ecf.js.map
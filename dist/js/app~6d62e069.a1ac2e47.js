(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app~6d62e069"],{"425f":function(e,t,r){"use strict";var s=r("75fc"),i=(r("a481"),r("28a5"),r("96cf"),r("3b8d")),a=(r("3b2b"),r("96c7")),n=r("9ef1"),o=r("b012"),u=r("bf80"),c=r("290c"),l=r("da05"),h=r("c0e4"),p=r("2ee4"),d=(r("da93"),r("2b0e")),f=r("7bb1");d["default"].use(f["a"]),f["a"].Validator.extend("verify_password",{getMessage:function(e){return"The password must contain at least: 1 uppercase, 1 lowercase, 1 number,8 characters min"},validate:function(e){var t=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");return t.test(e)}}),t["a"]={name:"register",components:{ACol:l["b"],ARadioButton:h["a"],ARow:c["a"],Pageheader:a["a"],Footer:n["a"],FormWizard:p["FormWizard"],TabContent:p["TabContent"]},data:function(){return{usertype:null,firstname:"",lastname:"",email:"",password1:"",password2:"",error:null,currentUserProfile:{},tags:[],inputVisible:!1,inputValue:"",abouterror:null,recommendationtags:["Django","Html","Css","bootstrap","React","Java","React Native","Redux","Flask ","Go","Expressjs","Vuejs","Angular","Ios","flutter","Ionic","Rails","Meteor","AI","Cybersecurity","Blockchain","Arduino","Spring","Bitcoin","Kotlin","Scala","Nativescript ","Android","Website","Mobile"],selectedTags:[]}},mounted:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,r,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t={headers:{Authorization:"JWT "+this.$store.state.token}},e.next=3,u["a"].currentuser(this.$store.state.user.pk,t);case 3:this.currentUserProfile=e.sent.data,r=this.currentUserProfile.skills,s=r.replace(/'/g,"").replace(/ /g,"").split(","),this.tags=s;case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),methods:{validateFirstStep:function(){var e=!1;return e=this.$validator.validateAll(),e},register:function(){var e=this;this.$validator.validateAll().then(function(t){t&&o["a"].register({first_name:e.firstname,last_name:e.lastname,email:e.email,password1:e.password1,password2:e.password2}).then(function(t){e.$store.dispatch("setToken",t.data.token),e.$store.dispatch("setUser",t.data.user)}).catch(function(t){console.log(t),e.error="check details incorrect"})})},onComplete:function(){var e=this;if(null!==this.currentUserProfile.about){var t={headers:{Authorization:"JWT "+this.$store.state.token}};this.currentUserProfile.stage="complete",this.$store.dispatch("setUsertype",this.currentUserProfile.user_type),this.$store.dispatch("setUser_id",this.currentUserProfile.user),u["a"].update(this.$store.state.user.pk,this.currentUserProfile,t).then(function(t){"developer"===e.currentUserProfile.user_type?e.$router.push({name:"developer"}):e.$router.push({name:"recruiter"})}).catch(function(e){console.log(e)})}else this.abouterror="please input something about yourself"},onCompleteRecruiter:function(){var e=this,t={headers:{Authorization:"JWT "+this.$store.state.token}};this.currentUserProfile.stage="complete",this.$store.dispatch("setUsertype",this.currentUserProfile.user_type),this.$store.dispatch("setUser_id",this.currentUserProfile.user),u["a"].update(this.$store.state.user.pk,this.currentUserProfile,t).then(function(t){"developer"===e.currentUserProfile.user_type?e.$router.push({name:"developer"}):e.$router.push({name:"recruiter"})}).catch(function(e){console.log(e)})},handleClose:function(e){var t=this.tags.filter(function(t){return t!==e});this.tags=t;var r=this.tags.join(", ");this.currentUserProfile.skills=r},showInput:function(){this.inputVisible=!0,this.$nextTick(function(){this.$refs.input.focus()})},handleInputChange:function(e){this.inputValue=e.target.value},handleInputConfirm:function(){var e=this.inputValue,t=this.tags;e&&-1===t.indexOf(e)&&(t=[].concat(Object(s["a"])(t),[e]));var r=t.join(", ");this.currentUserProfile.skills=r,Object.assign(this,{tags:t,inputVisible:!1,inputValue:""})},handleChange:function(e,t){var r=this.selectedTags,i=t?[].concat(Object(s["a"])(r),[e]):r.filter(function(t){return t!==e});this.selectedTags=i;var a=this.selectedTags.join(", ");this.currentUserProfile.skills=a}}}}}]);
//# sourceMappingURL=app~6d62e069.a1ac2e47.js.map
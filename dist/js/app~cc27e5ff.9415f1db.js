(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app~cc27e5ff"],{"836e":function(t,e,r){"use strict";r("96cf");var a=r("3b8d"),n=(r("6b54"),r("bf80")),s=r("688c");e["a"]={name:"CandidateHeader",data:function(){return{currentUserProfile:{},currentUser:{},allapplicant:null,myapplicant:null}},components:{},filters:{capitalize:function(t){return t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""}},mounted:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e={headers:{Authorization:"JWT "+this.$store.state.token}},t.next=3,n["a"].retrieveuser(this.$route.params.candidateId,e);case 3:return this.currentUser=t.sent.data,t.next=6,n["a"].currentuser(this.$route.params.candidateId,e);case 6:return this.currentUserProfile=t.sent.data,t.next=9,s["a"].joboneapplicant(this.$route.params.candidateId,this.$route.params.jobId,e);case 9:this.allapplicant=t.sent.data,this.myapplicant=this.allapplicant[0];case 11:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$router.push({name:"home"})},navigateTo:function(t){this.$router.push(t)}}}}}]);
//# sourceMappingURL=app~cc27e5ff.9415f1db.js.map
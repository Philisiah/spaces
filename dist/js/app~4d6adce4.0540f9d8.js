(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app~4d6adce4"],{b2dd:function(t,e,a){"use strict";a("96cf");var n=a("3b8d"),r=a("113c"),s=a("1226"),i=a("688c"),o=a("da05"),c=a("840c"),d=a("bf80");e["a"]={name:"myprojectdetails",data:function(){return{project:null,job:{},playerVars:{autoplay:1},candidate:{},ApplicationId:null,application:{}}},components:{ACol:o["b"],MycandidatesHeader:c["a"],RecruiterSider:r["a"]},mounted:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e,a,n,r=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e={headers:{Authorization:"JWT "+this.$store.state.token}},a=this.$store.state.route.params.candidateId,this.ApplicationId=this.$store.state.route.params.applicationId,n=this.$store.state.route.params.projectId,t.next=6,i["a"].retrievecandidate(this.ApplicationId,e);case 6:return this.application=t.sent.data,t.next=9,d["a"].retrieveuser(a,e);case 9:if(this.candidate=t.sent.data,!n){t.next=16;break}return t.next=13,s["a"].projectdetails(n,e);case 13:this.project=t.sent.data,t.next=17;break;case 16:s["a"].recommendedprojects(this.$store.state.user.pk,e).then(function(t){r.project=t.data[0]}).catch();case 17:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{AssignProject:function(t,e,a){var n={headers:{Authorization:"JWT "+this.$store.state.token}};i["a"].candidatemanager(e,{test_stage:"invite sent",project:t,name:a},n),this.$router.push({name:"mycandidates"})}}}}}]);
//# sourceMappingURL=app~4d6adce4.0540f9d8.js.map
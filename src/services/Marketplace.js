import Api from '@/services/Api'

export default {

    pickdeveloper(instance,auth){
      return Api().post(`marketplace/pickdev `,instance, auth)
    },

    mydevelopers(user_id, auth) {
        return Api().get(`marketplace/mydevs/${user_id} `, auth)
    },
    mydeveloperssimple(user_id, auth) {
        return Api().get(`marketplace/mydevssimple/${user_id} `, auth)
    },
    allmyjobapplicants(user_id,auth){
        return Api().get(`marketplace/myapplicants/${user_id} `, auth)
    },

    alljobs() {
        return Api().get('marketplace/alljobs')
    },
    myjobs(user_id, auth) {
        return Api().get(`marketplace/myjobs/${user_id}`, auth)
    },
    myjobssliced(user_id, auth) {
        return Api().get(`marketplace/myjobssliced/${user_id}`, auth)
    },
    applicants(job_id, auth) {
        return Api().get(`marketplace/jobapplicants/${job_id}`, auth)
    },
    applicantssliced(job_id, auth) {
        return Api().get(`marketplace/jobapplicantssliced/${job_id}`, auth)
    },
    specificjob(job_id, auth) {
        return Api().get(`marketplace/specificjob/${job_id}`, auth)
    },
    specificjobapplicants(job_id, auth) {
        return Api().get(`marketplace/specificjobapplicants/${job_id}`, auth)
    },
    joboneapplicant(candidate_id, job_id, auth) {
        return Api().get(`marketplace/myjobapplication/${candidate_id}/${job_id}`, auth)
    },
    jobdetails(job_id,auth){
        return Api().get(`marketplace/jobdetails/${job_id}`, auth)

    },
    candidatejobs(candidate_id,auth){
        return Api().get(`marketplace/candidatejobs/${candidate_id}`, auth)

    },
    updatejob(job_id, CurrentJob, auth) {
        return Api().patch(`marketplace/updatejob/${job_id} `, CurrentJob, auth)
    },

    pickreject(jobapplication_id,Currentapplication, auth) {
        return Api().patch(`marketplace/pickreject/${jobapplication_id} `, Currentapplication,auth)
    },
    deletejobapplication(jobapplication_id, auth) {
        return Api().delete(`marketplace/pickreject/${jobapplication_id} `,auth)
    },
    retrieveapplication(jobapplication_id, auth) {
        return Api().get(`marketplace/applicationprofile/${jobapplication_id} `, auth)
    },
    candidatemanager(candidatemanagement_id,CurrentCandidate, auth) {
        return Api().patch(`marketplace/candidateinfoupdater/${candidatemanagement_id} `, CurrentCandidate,auth)
    },
    retrievecandidate(application_id, auth) {
        return Api().get(`marketplace/candidateinfo/${application_id} `, auth)
    },

    unpublishjob(job_id,Currentjob, auth) {
        return Api().patch(`marketplace/unpublishjob/${job_id} `, Currentjob,auth)
    },
    createjob(currentJob, auth) {
        return Api().post(`marketplace/createjob`, currentJob, auth)
    },
    pickrecommended(newapplication,auth) {
        return Api().post(`marketplace/pickrecommended`,newapplication,auth)
    },
    applyjob(newapplication,auth) {
        return Api().post(`marketplace/applyjob`,newapplication,auth)
    },

    pickedapplications(dev_id,auth){
        return Api().get(`marketplace/pickedapplications/${dev_id} `, auth)

    },
    jobmanagerview(application_id,auth){
        return Api().get(`marketplace/jobmanagerview/${application_id} `, auth)
    },
    talentpickedmanagerview(application_id,auth){
        return Api().get(`marketplace/talentpickedmanagerview/${application_id} `, auth)
    },
    newjobemail(job_id,auth){
        return Api().get(`marketplace/newjobemail/${job_id} `, auth)
    },
    newapplicationemail(application_id,auth){
        return Api().get(`marketplace/newjobapplication/${application_id} `, auth)
    },
    newonsite(assesment_id,auth){
        return Api().get(`marketplace/newonsite/${assesment_id} `, auth)
    },
    candidatemanagerdelete(candidatemanagement_id, auth) {
        return Api().delete(`marketplace/candidateinfoupdater/${candidatemanagement_id} `,auth)
    },

}

<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <CandidateSider/>
        <a-layout>

            <a-layout-content style="background-color: white">
                <DevHeader/>
                <div :style="{ padding: '0 2%', background: '#fff' }">
                    <a-row style="margin-top: 1rem;margin-bottom: 2%">
                        <a-col :xs="{span: 18, offset: 2 }" :sm="{span: 24, offset: 1 }" :md="{span: 24, offset: 1 }"
                               :lg="{span: 24, offset: 0 }" :xl="{span: 24, offset: 0}">
                            <h3 style="color: #1976D2;font-weight: bold">
                                Get your skills verified and your rank improved?
                            </h3>
                        </a-col>

                    </a-row>
                    <a-row :gutter="16" style="padding-right: 2rem;padding-bottom: 1.5rem;">
                        <router-link to="/quizlist">
                            <a-col class="boxes" :xs="{span: 16, offset: 2  }" :sm="{span: 12, offset: 0 }" :md="{span: 10, offset: 0 }"
                                   :lg="{span: 8, offset: 0 }" :xl="{span: 8,offset: 0 }">
                                <a-row class="ant-card actioncards">
                                    <a-col span="24">
                                        <div style="text-align: center">
                                            <img class="poolavatar" src="../../../assets/images/quiz.svg">
                                        </div>

                                    </a-col>
                                    <a-col span="24" style="text-align: center">
                                        <p class="ant-card-head-title" style="font-weight: bold">Take a Quiz</p>
                                        <p style="margin: 0;"> Jolt your memories on fundamentals</p>
                                    </a-col>
                                </a-row>
                            </a-col>
                        </router-link>
                        <router-link to="/selectassesment">
                            <a-col class="boxes" :xs="{span: 24, offset: 2  }" :sm="{span: 12, offset: 0 }" :md="{span: 10, offset: 0 }"
                                   :lg="{span: 8, offset: 0 }" :xl="{span: 8,offset: 0 }" >
                                <a-row class="ant-card actioncards" >
                                    <a-col span="24">
                                        <div style="text-align: center">
                                            <img class="poolavatar" src="../../../assets/images/code.svg">
                                        </div>

                                    </a-col>
                                    <a-col span="24" style="text-align: center">
                                        <p class="ant-card-head-title" style="font-weight: bold">Build a Project</p>
                                        <p style="margin: 0;">Build a real world project</p>
                                    </a-col>
                                </a-row>
                            </a-col>
                        </router-link>


                    </a-row>

                </div>


            </a-layout-content>


        </a-layout>
    </a-layout>
</template>

<script>


    import UsersService from '@/services/UsersService'
    import CandidateSider from "../../layout/CandidateSider";
    import DevHeader from "../../layout/DevHeader";
    import ACol from "ant-design-vue/es/grid/Col";
    import ARow from "ant-design-vue/es/grid/Row";

    export default {
        name: "Assesment",
        data() {
            return {
                currentUserProfile: {},
                recommendedprojects: [],



            }
        },
        components: {
            DevHeader,
            CandidateSider,
            ACol,
            ARow,
        },
        async mounted() {
            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }

            if (this.$store.state.user.pk) {
                this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data;

            }


        },
        methods: {
            navigateTo(route) {
                this.$router.push(route)
            },
        },
    }
</script>

<style scoped>
    #components-layout-demo-side .logo {
        height: 32px;
        background: rgba(255, 255, 255, .2);
        margin: 16px;
    }

    .projcard {
        min-height: 200px;
    }

    .projcard:hover {
        border-color: #004ec7;
    }

    #components-layout-demo-side .logo {
        height: 32px;
        background: rgba(255, 255, 255, .2);
        margin: 16px;
    }

    .me {
        width: 70px;
        height: 70px;
        color: blue;
    }

    .me:hover {
        fill: red;
    }

    .boxes {
        margin-bottom: 1rem;
        padding-left: 0;
        padding-right: 0;


    }

    .poolavatar {
        width: 30%;
        margin-top: 0.5rem;
    }

    .talentcard {
        margin-bottom: 1rem;
    }

    .center {
        margin: auto;
        width: 60%;


    }

    .actioncards {
        width: 16rem;
        border-radius: 0;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        padding: 0.89rem;
    }
</style>

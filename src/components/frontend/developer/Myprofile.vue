<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh;">
        <CandidateSider/>
        <a-layout>

            <a-layout-content style="background-color: white">
                <DevHeader/>
                <div :style="{ padding: '6px 20px', background: '#fff', minHeight: '75vh',maxWidth:'72rem',marginTop:'1rem',
                marginLeft: '1%',marginRight:'1%' }">
                    <a-form :form="form">
                        <a-row :gutter="16">
                            <a-col :xs="{span: 24, offset: 0  }" :sm="{span: 24, offset: 0 }"
                                   :md="{span: 12, offset: 0 }"
                                   :lg="{span: 12, offset: 0 }" :xl="{span: 12,offset: 0 }">

                                <a-row :gutter="16">
                                    <a-col :span="24">
                                        <a-form-item
                                                label="Github profile"
                                                :label-col="{ span: 24 }"
                                                :wrapper-col="{ span:  24}"
                                        >
                                            <a-input
                                                    v-model="currentUserProfile.github_repo"

                                            />

                                        </a-form-item>

                                    </a-col>

                                    <a-col :span="24">
                                        <a-form-item
                                                label="Linkedin profile"
                                                :label-col="{ span: 24 }"
                                                :wrapper-col="{ span:  24}"
                                        >
                                            <a-input
                                                    v-model="currentUserProfile.linkedin_url"

                                            />


                                        </a-form-item>

                                    </a-col>

                                    <a-col :span="24">
                                        <a-form-item

                                                :label-col="{ span: 24 }"
                                                :wrapper-col="{ span:  24}"
                                        >
                                            <span slot="label">Country : {{currentUserProfile.country}}</span>
                                            <country-select v-model="currentUserProfile.country"
                                                            class="ant-input"
                                            />
                                        </a-form-item>

                                    </a-col>

                                    <a-col :span="24">
                                        <a-form-item
                                                label="Availability"
                                                :label-col="{ span: 24 }"
                                                :wrapper-col="{ span:  24}"
                                        >
                                            <a-select

                                                    mode="tags"
                                                    name="work_type"
                                                    @change="Availabiltytags"
                                                    placeholder="Select a option and change input text above"
                                                    v-model="availabiltytags"
                                            >
                                                <a-select-option value="contract">
                                                    contract
                                                </a-select-option>
                                                <a-select-option value="fulltime">
                                                    fulltime
                                                </a-select-option>
                                                <a-select-option value="parttime">
                                                    part time
                                                </a-select-option>
                                                <a-select-option value="remote">
                                                    remote
                                                </a-select-option>
                                            </a-select>
                                        </a-form-item>

                                    </a-col>


                                </a-row>


                            </a-col>
                            <a-col :xs="{span: 24, offset: 0  }" :sm="{span: 24, offset: 0 }"
                                   :md="{span: 12, offset: 0 }"
                                   :lg="{span: 12, offset: 0 }" :xl="{span: 12,offset: 0 }" style="padding: 2% 4%">
                                <a-col :span="24">
                                    <a-form-item
                                            label="What are your tech skills "
                                            :label-col="{ span: 24 }"
                                            :wrapper-col="{ span:  24}"
                                    >
                                        <template v-for="(tag, index) in tags">
                                            <a-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
                                                <a-tag :key="tag"
                                                       :afterClose="() => handleClose(tag)" color="#2db7f5">
                                                    {{`${tag.slice(0, 20)}...`}}
                                                </a-tag>
                                            </a-tooltip>
                                            <a-tag v-else :key="tag" :closable="index >= 0"
                                                   :afterClose="() => handleClose(tag)" color="#2db7f5">
                                                {{tag}}
                                            </a-tag>
                                        </template>
                                        <a-input
                                                v-if="inputVisible"
                                                ref="input"
                                                type="text"
                                                size="small"
                                                :style="{ width: '78px' }"
                                                :value="inputValue"
                                                @change="handleInputChange"
                                                @blur="handleInputConfirm"
                                                @keyup.enter="handleInputConfirm"
                                        />
                                        <a-tag v-else @click="showInput"
                                               style="background: #fff; borderStyle: dashed;">
                                            <a-icon type="plus"/>
                                            New Tag
                                        </a-tag>
                                    </a-form-item>
                                </a-col>
                                <a-col :span="24">
                                    <a-form-item
                                            label="Bio"
                                            :label-col="{ span: 24 }"
                                            :wrapper-col="{ span:  24}"
                                    >
                                        <a-textarea name="bio"
                                                    maxlength="300"
                                                    v-model="currentUserProfile.about"
                                                    placeholder="Tell us something about yourself"
                                                    :rows="6"/>

                                    </a-form-item>

                                </a-col>
                                <a-col :span="24" style="margin-bottom: 1rem">
                                            <span>
                                                Monthly Salary expectations
                                            </span>
                                    <a-input-number
                                            :defaultValue="1000"
                                            :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                                            :parser="value => value.replace(/\$\s?|(,*)/g, '')"
                                            v-model="currentUserProfile.salary"
                                    />


                                </a-col>

                            </a-col>
                        </a-row>
                        <div v-if="cv">
                            <p v-if="alert" style="color: blue">Upload successful /cv changed</p>
                            <p>Current cv :<a :href="cv" target="_blank">cv link</a>
                            </p>


                                <div v-if="uploading">

                                <span>Uploading file <a-spin/></span>

                            </div>
                            <div v-else>
                                Change/update CV
                                <input type="file" @change="ChangehandleUpload" accept="application/pdf">
                            </div>


                        </div>

                        <div v-else>

                            <div v-if="uploading">
                                <span>Uploading file <a-spin/></span>

                            </div>
                            <div v-else>
                                <input type="file" @change="handleUpload" accept="application/pdf">
                            </div>


                        </div>


                        <div style="text-align: center" v-if="loading === false">
                            <a-button @click="Save" type="primary" style="width: 15rem">Save</a-button>


                        </div>
                        <div style="text-align: center" v-else>
                            <div style="text-align: center;">
                                <a-spin/>
                            </div>

                        </div>

                    </a-form>
                </div>



            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script>


    import CandidateSider from "../../layout/CandidateSider";
    import UsersService from '@/services/UsersService'
    import DevHeader from "../../layout/DevHeader";
    import axios from 'axios'
    import cloudinary from 'cloudinary-core'
    import Vue from 'vue'

    Vue.use(cloudinary)


    export default {
        name: "Myprofile",
        components: {
            DevHeader,
            CandidateSider,
        },
        data() {

            return {
                loading: false,
                currentUserProfile: null,
                tags: [],
                inputVisible: false,
                inputValue: '',
                fileList: [],
                uploading: false,
                cv: '',
                alert:false,
                availabiltytags:[]


            }
        },


        async mounted() {


            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }
            if (this.$store.state.user.pk) {
                this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data
                if (this.currentUserProfile.skills) {
                    if (this.currentUserProfile.skills.length >= 0) {
                        let tags = this.currentUserProfile.skills.replace(/'/g, '').replace(/ /g, '').split(',');
                        for (let i = 0; i < tags.length; i++) {
                            this.tags.push(tags[i])
                        }

                    }
                }
                this.availabiltytags = this.currentUserProfile.availabilty.replace(/'/g, '').replace(/ /g, '').split(',');


            }
            if (this.currentUserProfile.file) {
                if (this.currentUserProfile.file.includes("http")) {
                    this.cv = this.currentUserProfile.file
                } else {
                    this.cv = `https://res.cloudinary.com/dwtvwjhn3/${this.currentUserProfile.file} `


                }

            }


        },
        methods: {
            Save() {

                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                if (this.tags) {
                    for (let i = 0; i < this.tags.length; i++) {
                        if (this.tags[i] === '') {
                            let index = this.tags.indexOf(this.tags[i]);
                            this.tags.splice(index, 1);

                        }
                    }
                    this.currentUserProfile.skills = this.tags.join(',')
                }

                this.currentUserProfile.file = this.cv.slice(48)

                this.currentUserProfile.user = this.$store.state.user.pk
                this.loading = true

                UsersService.update(this.$store.state.user.pk, this.currentUserProfile, auth)
                    .then(resp => {
                        if (this.currentUserProfile.user_type === 'developer') {

                            this.$router.push({
                                name: 'developer'
                            })

                        } else {
                            this.$router.push({
                                name: 'recruiter'
                            })

                        }
                        return resp


                    })
                    .catch(error => {
                        this.loading = false
                        return error


                    });


            },
            handleClose(removedTag) {
                const tags = this.tags.filter(tag => tag !== removedTag)
                this.tags = tags
                let alltags = this.tags.join(", ")
                this.currentUserProfile.skills = alltags

            },

            showInput() {
                this.inputVisible = true
                this.$nextTick(function () {
                    this.$refs.input.focus()
                })
            },

            handleInputChange(e) {
                this.inputValue = e.target.value
            },

            handleInputConfirm() {
                const inputValue = this.inputValue
                let tags = this.tags
                if (inputValue && tags.indexOf(inputValue) === -1) {
                    tags = [...tags, inputValue]
                }

                let alltags = tags.join(", ")
                this.currentUserProfile.skills = alltags
                Object.assign(this, {
                    tags,
                    inputVisible: false,
                    inputValue: '',
                })
            },

            handleChange(info) {
                let self = this;
                self.uploadFile(info.file)


            },
            beforeUpload(file) {
                this.fileList = [...this.fileList, file]
                return false;
            },
            async handleUpload(e) {
                this.uploading = true
                const cloudName = 'dwtvwjhn3';
                const unsignedUploadPreset = 'ml_default';

                // console.log(e);
                const file = e.target.files[0];
                const formData = new FormData();
                formData.append('file', file);
                formData.append('upload_preset', unsignedUploadPreset);
                let CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${cloudName}/raw/upload`

                // Send to cloudianry
                const res = await axios.post(
                    CLOUDINARY_URL,
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        },

                    }
                );

                this.cv = res.data.secure_url


            },
            async ChangehandleUpload(e) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                this.uploading = true
                const cloudName = 'dwtvwjhn3';
                const unsignedUploadPreset = 'ml_default';

                // console.log(e);
                const file = e.target.files[0];
                const formData = new FormData();
                formData.append('file', file);
                formData.append('upload_preset', unsignedUploadPreset);
                let CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${cloudName}/raw/upload`

                // Send to cloudianry
                const res = await axios.post(
                    CLOUDINARY_URL,
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        },

                    }
                );

                this.cv = res.data.secure_url
                this.currentUserProfile.file = this.cv.slice(48)
                UsersService.updatepatch(this.$store.state.user.pk, {file:this.cv.slice(48)}, auth)
                    .then(resp => {
                        this.currentUserProfile.file = this.cv
                        this.uploading = false
                        this.alert = true

                        return resp


                    })
                    .catch(error => {

                        return error


                    });




            },
            Availabiltytags(value) {
                console.log(`selected ${value}`);
                this.currentUserProfile.availabilty = this.availabiltytags.join(", ")
            },
        }
    }


</script>

<style scoped>
    #dropbox {
        border: 4px dashed #ccc;
        padding-left: 8px;
    }

    .my-form {
        margin-top: 10px;
    }

    .gallery {
        margin: 10px;
    }

    .gallery img {
        margin-left: 16px;
    }

    .progress-bar {
        width: 200px;
        position: relative;
        height: 8px;
        margin-top: 4px;
    }

    .progress-bar .progress {
        height: 8px;
        background-color: #ff0000;
        width: 0;
    }
</style>

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {sync} from 'vuex-router-sync'
import store from '@/store/store'
import cloudinary from 'cloudinary-core';
Vue.config.productionTip = false
Vue.use(cloudinary)
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

import VueCarousel from 'vue-carousel';
import VueFormWizard from 'vue-form-wizard'
import VeeValidate from 'vee-validate';
import SocialSharing from 'vue-social-sharing'
Vue.use(SocialSharing)
import VueYoutube from 'vue-youtube'
Vue.use(VueYoutube)
const config = {
    fastExit: false
}
Vue.use(VeeValidate, config);

import Multiselect from 'vue-multiselect'

Vue.component('multiselect', Multiselect)
import {
    Spin,
    Drawer,
    Alert,
    Avatar,
    Checkbox,
    Badge,
    Modal,
    Button,
    Tabs,
    Table,
    Card,
    Select,
    Col,
    Radio,
    Carousel,
    Form,
    Input,
    InputNumber,
    Layout,
    List,
    Popover,
    AutoComplete,
    Menu,
    Dropdown,
    Progress,
    Tag,
    DatePicker,
    Steps,
    Timeline,
    Skeleton,
    Icon,
    Row,Upload,Switch,Tooltip,Affix




} from 'ant-design-vue';

Vue.use(VueFormWizard)
Vue.use(Alert);
Vue.use(Avatar);
Vue.use(Badge);
Vue.use(Button);
Vue.use(Card);
Vue.use(Col);
Vue.use(Popover);
Vue.use(Form);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Layout);
Vue.use(List);
Vue.use(Menu);
Vue.use(Tag);
Vue.use(Carousel);
Vue.use(Radio);
Vue.use(VueCarousel);
Vue.use(Select);
Vue.use(Checkbox);
Vue.use(Drawer)
Vue.use(AutoComplete)
Vue.use(Modal)
Vue.use(Table)
Vue.use(Tabs)
Vue.use(Dropdown)
Vue.use(Progress)
Vue.use(DatePicker)
Vue.use(Steps)
Vue.use(Timeline)
Vue.use(Skeleton)
Vue.use(Icon)
Vue.use(Spin)
Vue.use(Row)
Vue.use(Upload)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Affix)



import vueCountryRegionSelect from 'vue-country-region-select'

Vue.use(vueCountryRegionSelect)
import VueSession from 'vue-session'

Vue.use(VueSession)

sync(store, router);
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')

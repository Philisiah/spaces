import axios from 'axios'

export default () => {
  return axios.create({
    // baseURL: process.env.VUE_APP_PATH
    // baseURL: `https://codelnapi.herokuapp.com`
    baseURL: `http://127.0.0.1:8000`,
    // headers: { Authorization: 'JWT ' + this.$store.state.token }
  })
}

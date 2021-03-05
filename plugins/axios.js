import Cookies from 'js-cookie';
export default function ({ $axios, app, store }) {
    $axios.setToken(store.state.access_token, 'Bearer');
    $axios.onRequest(config =>{
        $axios.setToken(store.state.access_token, 'Bearer');
    })
}

import Cookies from 'js-cookie';
export default function ({ $axios, app, store }) {
    $axios.setToken(store.state.access_token, 'Bearer');
    if (process.client && store.getters.isAuth) {
        $axios.setToken(store.state.access_token, 'Bearer');
    }
    // $axios.onRequest(config => {
    // })
    $axios.onRequest(config =>{
        console.log('chegou')
        if (Cookies.get('token')){
            $axios.setToken(Cookies.get('token'), 'Bearer');
        }
        
    })
    // $axios.onError(error => {
    //     const code = parseInt(error.response && error.response.status)
    //     if (code === 401) {
    //         if (process.client && store.getters.isAuth) {
    //             store.dispatch('logout')
    //         }
    //     }
    // })
}

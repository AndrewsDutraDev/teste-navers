import Cookies from 'js-cookie';
import axios from 'axios'
const cookieparser = process.server ? require('cookieparser') : undefined
const Cookie = process.client ? require('js-cookie') : undefined

export const getters = {
    isAuth: state => {
        return !!state.access_token
    }
}
export const state = () => {
    return {    
        access_token: '',
    }
}
export const mutations = {
    setAuth(state, auth){
        state.access_token = auth
    }
}
export const actions = {
    async nuxtServerInit({commit, state}, {req, app}) {
        let access_token = ''
        if (req.headers.cookie) {
            const parsed = cookieparser.parse(req.headers.cookie)
            try {
                access_token = parsed.token
            } catch (e) {
                // No valid cookie found
                console.log(e)
            }
        }
        commit('setAuth', access_token)

    },
    logout({commit}) {
        this.$axios.$get('/?logout=sim')
        commit('setAuth', {
            access_token: '',
        })
        Cookie.remove('auth')
    }
}
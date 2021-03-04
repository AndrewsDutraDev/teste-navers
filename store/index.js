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
    setAuth(state, auth = {
        access_token: '',
    }) {
        state.access_token = auth
    },
}
export const actions = {
    async nuxtServerInit({commit, state}, {req, app}) {
        let access_token = ''
        if (req.headers.cookie) {
            console.log('veio aq')
            const parsed = cookieparser.parse(req.headers.cookie)
            console.log(parsed)
            try {
                access_token = JSON.parse(parsed.auth)
            } catch (err) {
                // No valid cookie found
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
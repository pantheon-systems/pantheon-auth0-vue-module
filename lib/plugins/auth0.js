import { useAuth0 } from '../auth'

export const Auth0Plugin = {
    install(Vue, options) {
        Vue.prototype.$auth = useAuth0(options, Vue);
    }
}

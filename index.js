import authGuard from './lib/auth/authGuard'
import { getInstance, useAuth0 } from './lib/auth/index'
import Auth0Plugin from './lib/plugins/auth0'

export default {
    authGuard,
    getInstance,
    useAuth0,
    Auth0Plugin
};
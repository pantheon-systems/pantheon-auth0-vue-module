'use strict';

module.exports = {
    authGuard: require('./lib/auth/authGuard').authGuard,
    getInstance: require('./lib/auth/index').getInstance,
    useAuth0: require('./lib/auth/index').useAuth0,
    Auth0Plugin: require('./lib/plugins/auth0').Auth0Plugin
};

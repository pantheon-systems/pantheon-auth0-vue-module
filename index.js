'use strict';

export const authGuard = require('./lib/auth/authGuard').authGuard;
export const getInstance = require('./lib/auth/index').getInstance;
export const useAuth0 = require('./lib/auth/index').useAuth0;
export const Auth0Plugin = require('./lib/plugins/auth0').Auth0Plugin;

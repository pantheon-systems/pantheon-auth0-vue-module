'use strict';

export const authGuard = require('./lib/auth/authGuard');
export const { getInstance, useAuth0 } = require('./lib/auth/index');
export const Auth0Plugin = require('./lib/plugins/auth0');

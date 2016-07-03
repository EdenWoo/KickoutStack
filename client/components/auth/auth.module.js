'use strict';

angular.module('kickoutStackApp.auth', [
  'kickoutStackApp.constants',
  'kickoutStackApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });

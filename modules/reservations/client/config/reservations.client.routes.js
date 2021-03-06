'use strict';

angular.module('reservations').config(function ($stateProvider) {
    $stateProvider
        .state('reservations', {
            abstract: true,
            url: '/reservations',
            template: '<ui-view/>'
        })
        .state('reservations.list', {
            url: '',
            templateUrl: 'modules/reservations/client/views/reservations-list.client.view.html'
        })
        .state('reservations.list.create', {
            url: '/book',
            data: {
                roles: ['user', 'admin']
            },
            params: {
                reservation: null
            },
            onEnter: function ($document, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'modules/reservations/client/views/reservation-create.client.view.html'
                }).result.then(function () {

                }).catch(function () {
                    $state.go('reservations.list');
                });
            }
        })
        .state('reservations.list.confirm', {
            url: '/confirm',
            data: {
                roles: ['user', 'admin']
            },
            params: {
                reservation: null,
                personalData: null
            },
            onEnter: function ($document, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'modules/reservations/client/views/reservation-confirm.client.view.html'
                }).result.then(function () {

                }).catch(function () {
                    $state.go('reservations.list');
                });
            }
        })
        .state('reservations.list.summary', {
            url: '/confirm',
            data: {
                roles: ['user', 'admin']
            },
            params: {
                reservation: null,
                personalData: null
            },
            onEnter: function ($document, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'modules/reservations/client/views/reservation-summary.client.view.html'
                }).result.finally(function () {
                    $state.go('reservations.list');
                });
            }
        })
        .state('reservations.my', {
            url: '/my',
            templateUrl: 'modules/reservations/client/views/reservations-my.client.view.html'
        });
});

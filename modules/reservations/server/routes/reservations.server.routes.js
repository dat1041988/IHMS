'use strict';

var reservationsPolicy = require('../policies/reservations.server.policy'),
    reservations = require('../controllers/reservations.server.controller');

module.exports = function (app) {
    app.route('/api/reservations').all(reservationsPolicy.isAllowed)
        .get(reservations.list)
        .post(reservations.create);

    app.route('/api/reservations/:reservationId').all(reservationsPolicy.isAllowed)
        .get(reservations.read);

    app.param('reservationId', reservations.reservationById);
};

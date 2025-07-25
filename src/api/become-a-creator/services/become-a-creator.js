'use strict';

/**
 * become-a-creator service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::become-a-creator.become-a-creator');

'use strict';

/**
 * event-categories service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::event-categories.event-category');

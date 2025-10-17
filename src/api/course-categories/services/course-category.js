'use strict';

/**
 * course-categories service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::course-categories.course-category');

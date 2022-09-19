'use strict';

/**
 * jury service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::jury.jury');

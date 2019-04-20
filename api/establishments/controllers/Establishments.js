'use strict';

/**
 * Establishments.js controller
 *
 * @description: A set of functions called "actions" for managing `Establishments`.
 */

module.exports = {

  /**
   * Retrieve establishments records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.establishments.search(ctx.query);
    } else {
      return strapi.services.establishments.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a establishments record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.establishments.fetch(ctx.params);
  },

  /**
   * Count establishments records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.establishments.count(ctx.query, populate);
  },

  /**
   * Create a/an establishments record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.establishments.add(ctx.request.body);
  },

  /**
   * Update a/an establishments record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.establishments.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an establishments record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.establishments.remove(ctx.params);
  }
};

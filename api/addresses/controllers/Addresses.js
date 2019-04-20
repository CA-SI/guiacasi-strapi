'use strict';

/**
 * Addresses.js controller
 *
 * @description: A set of functions called "actions" for managing `Addresses`.
 */

module.exports = {

  /**
   * Retrieve addresses records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.addresses.search(ctx.query);
    } else {
      return strapi.services.addresses.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a addresses record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.addresses.fetch(ctx.params);
  },

  /**
   * Count addresses records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.addresses.count(ctx.query, populate);
  },

  /**
   * Create a/an addresses record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.addresses.add(ctx.request.body);
  },

  /**
   * Update a/an addresses record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.addresses.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an addresses record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.addresses.remove(ctx.params);
  }
};

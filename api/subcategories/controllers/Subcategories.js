'use strict';

/**
 * Subcategories.js controller
 *
 * @description: A set of functions called "actions" for managing `Subcategories`.
 */

module.exports = {

  /**
   * Retrieve subcategories records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.subcategories.search(ctx.query);
    } else {
      return strapi.services.subcategories.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a subcategories record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.subcategories.fetch(ctx.params);
  },

  /**
   * Count subcategories records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.subcategories.count(ctx.query, populate);
  },

  /**
   * Create a/an subcategories record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.subcategories.add(ctx.request.body);
  },

  /**
   * Update a/an subcategories record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.subcategories.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an subcategories record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.subcategories.remove(ctx.params);
  }
};

'use strict';

/**
 * Adonisschema.js controller
 *
 * @description: A set of functions called "actions" for managing `Adonisschema`.
 */

module.exports = {

  /**
   * Retrieve adonisschema records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.adonisschema.search(ctx.query);
    } else {
      return strapi.services.adonisschema.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a adonisschema record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.adonisschema.fetch(ctx.params);
  },

  /**
   * Count adonisschema records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.adonisschema.count(ctx.query, populate);
  },

  /**
   * Create a/an adonisschema record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.adonisschema.add(ctx.request.body);
  },

  /**
   * Update a/an adonisschema record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.adonisschema.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an adonisschema record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.adonisschema.remove(ctx.params);
  }
};

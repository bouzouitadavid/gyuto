'use strict';

/**
 * Langue.js controller
 *
 * @description: A set of functions called "actions" for managing `Langue`.
 */

module.exports = {

  /**
   * Retrieve langue records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.langue.search(ctx.query);
    } else {
      return strapi.services.langue.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a langue record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.langue.fetch(ctx.params);
  },

  /**
   * Count langue records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.langue.count(ctx.query);
  },

  /**
   * Create a/an langue record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.langue.add(ctx.request.body);
  },

  /**
   * Update a/an langue record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.langue.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an langue record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.langue.remove(ctx.params);
  }
};

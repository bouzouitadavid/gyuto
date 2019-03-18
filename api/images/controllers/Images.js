'use strict';

/**
 * Images.js controller
 *
 * @description: A set of functions called "actions" for managing `Images`.
 */

module.exports = {

  /**
   * Retrieve images records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.images.search(ctx.query);
    } else {
      return strapi.services.images.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a images record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.images.fetch(ctx.params);
  },

  /**
   * Count images records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.images.count(ctx.query);
  },

  /**
   * Create a/an images record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.images.add(ctx.request.body);
  },

  /**
   * Update a/an images record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.images.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an images record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.images.remove(ctx.params);
  }
};

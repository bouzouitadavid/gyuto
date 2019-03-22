'use strict';

/**
 * Videos.js controller
 *
 * @description: A set of functions called "actions" for managing `Videos`.
 */

module.exports = {

  /**
   * Retrieve videos records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.videos.search(ctx.query);
    } else {
      return strapi.services.videos.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a videos record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.videos.fetch(ctx.params);
  },

  /**
   * Count videos records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.videos.count(ctx.query);
  },

  /**
   * Create a/an videos record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.videos.add(ctx.request.body);
  },

  /**
   * Update a/an videos record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.videos.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an videos record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.videos.remove(ctx.params);
  }
};

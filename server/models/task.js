/**
 * task
 *
 * @module      :: Model
 * @description :: task model
 *
 */

module.exports = function (we) {
  var model = {
    // define you model here
    // see http://docs.sequelizejs.com/en/latest/docs/models-definition
    definition: {
      // // Examples:
      name: { type: we.db.Sequelize.STRING },
      done: {
        type: we.db.Sequelize.BOOLEAN,
        defaultValue: false,
        formFieldType: null // hide this field
      },
      // attrText: { type: we.db.Sequelize.TEXT, formFieldType: 'text' },
      // attrHtml: {
      //  type: we.db.Sequelize.TEXT,
      //  formFieldType: 'html',
      //  formFieldHeight: 200
      //}
    },
    // Associations
    // see http://docs.sequelizejs.com/en/latest/docs/associations
    associations: {
      // // Example:
      // NxN assoc
      // assoc1: {
      //  type: 'belongsToMany',
      //  model: 'role',
      //  inverse: 'users',
      //  through: 'users_roles'
      //},
      // // 1xN assoc
      creator: { type: 'belongsTo', model: 'user' }
    },
    options: {
      // title field, for default title record pages
      // titleField: 'title',

      // Class methods for use with: we.db.models.[yourmodel].[method]
      classMethods: {},
      // record method for use with record.[method]
      instanceMethods: {},
      // Sequelize hooks
      // See http://docs.sequelizejs.com/en/latest/api/hooks
      hooks: {}
    }
  };

  return model;
};
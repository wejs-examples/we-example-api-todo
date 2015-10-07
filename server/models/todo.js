/**
 * todo
 *
 * @module      :: Model
 * @description :: todo model
 *
 */

module.exports = function (we) {
  var model = {
    // define you model here
    // see http://docs.sequelizejs.com/en/latest/docs/models-definition
    definition: {
      title: { type: we.db.Sequelize.STRING },
      description: { type: we.db.Sequelize.TEXT },
      done: { type: we.db.Sequelize.BOOLEAN, defaultValue: false },
      // // Examples:
      // attrString: { type: we.db.Sequelize.STRING },
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
      // assoc2: { type: 'belongsTo', model: 'user' }
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
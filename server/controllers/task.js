module.exports = {
  find: function find(req, res) {
    if (req.query.done == 'all') {
      delete res.locals.query.where.done;
    } else if(req.query.done == 'true' || req.params.done){
      res.locals.query.where.done = true;
    } else {
      res.locals.query.where.done = false;
    }

    if (req.isAuthenticated()) {
      res.locals.query.where.creatorId = req.user.id;
    } else {
      return res.forbidden();
    }

    return res.locals.Model.findAndCountAll(res.locals.query)
    .then(function (record) {
      res.locals.metadata.count = record.count;
      res.locals.data = record.rows;
      return res.ok();
    }).catch(res.queryError);
  },

  create: function create(req, res) {
    if (!res.locals.template) res.locals.template = res.locals.model + '/' + 'create';

    if (req.method === 'POST') {
      if (req.isAuthenticated())
        req.body.creatorId = req.user.id;

      req.we.utils._.merge(res.locals.data, req.body);

      return res.locals.Model.create(req.body)
      .then(function (record) {
        res.locals.data = record;
        res.created();
      }).catch(res.queryError);
    } else {
      res.locals.data = req.query;
      res.ok();
    }
  }
};
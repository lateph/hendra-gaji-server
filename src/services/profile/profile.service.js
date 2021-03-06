// Initializes the `profile` service on path `/profile`
const createService = require('./profile.class.js');
const hooks = require('./profile.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/profile', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('profile');

  service.hooks(hooks);
};

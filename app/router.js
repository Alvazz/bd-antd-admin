module.exports = (app) => {

  // pages
  app.router.get('/', '/', app.controller.routes.home);
  app.router.get(
    'routes',
    '/*',
    // app.role.can('user'),
    app.controller.routes.show
  );
};
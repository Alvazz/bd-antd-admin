module.exports = (app) => {
  class RoutesController extends app.Controller {
    async home() {
      console.log('11111111111111111111111111111111');
      this.ctx.redirect('/home');
      console.log('server side coming home.');
    }

    async show() {
      console.log('server side coming show method.');
      await this.ctx.render('pages/home');
      console.log('222222222222222222');
    }
  }

  return RoutesController;
};
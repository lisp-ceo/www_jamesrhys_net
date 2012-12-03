// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'vm',
], function ($, _, Backbone, Vm) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      '!/core' : 'core',
      '!/blog' : 'blog',
      '!/blog/:title' : 'blogPost',
      '!/labs' : 'labs',
      '!/prod' : 'products',
      '': 'index'
    }
  });

  var initialize = function(options){
    var appView = options.appView;
    var router = new AppRouter(options);
    router.on('route:index', function (actions) {
      require(['views/index/page'], function (IndexPage) {
        var indexPage = Vm.create(appView, 'IndexPage', IndexPage);
        indexPage.render();
      });
    });
    router.on('route:core', function (actions) {
      require(['views/core/page'], function (CorePage) {
        var corePage = Vm.create(appView, 'CorePage', CorePage);
        corePage.render();
      });
    });
    router.on('route:blog', function (actions) {
      require(['views/blog/page'], function (BlogPage) {
        var blogPage = Vm.create(appView, 'BlogPage', BlogPage);
        blogPage.render();
      });
    });
    router.on('route:blogPost', function (actions, blog_title) {
      require(['views/blog/post'], function (BlogPage) {
        var blogPage = Vm.create(appView, 'BlogPage', BlogPage);
        blogPage.render();
      });
    });
    router.on('route:labs', function () {
     require(['views/labs/page'], function (ModulePage) {
        var modulePage = Vm.create(appView, 'ModulesPage', ModulePage);
        modulePage.render();
      });
    });
    router.on('route:products', function (section) {
      require(['views/products/page'], function (BackbonePage) {
        var backbonePage = Vm.create(appView, 'BackbonePage', BackbonePage, {section: section});
        backbonePage.render();
      });
    });
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});

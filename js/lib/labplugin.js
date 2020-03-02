var plugin = require('./index');
var base = require('@jupyter-widgets/base');

module.exports = {
  id: 'pic-sure-jupyter-widgets',
  requires: [base.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'pic-sure-jupyter-widgets',
          version: plugin.version,
          exports: plugin
      });
  },
  autoStart: true
};


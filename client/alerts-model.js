/**
 * Show all type of alerts including error, warning, inform, success etc.
 *
 */

/**
 * Alert object
 *
 *  type: 'error', 'warning', 'info', 'success', etc.
 *  duration: the alert is disappeared automatically after the duration
 *    if -1, the alert does not disappear.
 *    default value is 3000. the unit is millisecond
 *  message: message content
 */
Alerts = {
  // Local (client-only) collection
  collection: new Mongo.Collection(null),

  set: function(type, message, template) {
    var _type = type || 'default', _duration = 5000;

    Alerts.collection.insert({
      message: I18n.get(message),
      type: _type,
      duration: _duration,
      template: template
    });
  },

  error: function(message, modal) {
    var template = (modal) ? 'modal' : 'window';
    this.set('error', message, template);
  },

  info: function(message, modal) {
    var template = (modal) ? 'modal' : 'window';
    this.set('info', message, template);
  },

  warning: function(message, modal) {
    var template = (modal) ? 'modal' : 'window';
    this.set('warning', message, template);
  },

  success: function(message, modal) {
    var template = (modal) ? 'modal' : 'window';
    this.set('success', message, template);
  }
};

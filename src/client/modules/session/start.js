/**
 * @file
 * Contains code pertaining to the /start route.
 */
/* globals Meteor Router */

Router.route('/start', {
  action: function () {
    this.render('start');
  }
});


/**
 * @file
 * Defines '/start' route.
 */
/* globals Router, Meteor */

Router.route('start', {
  // Render the 'start' template.
  action: function () {
    this.render('start');
  }
});


/**
 * @file
 * Contains global router configurations.
 */
/* globals Router, Meteor */

// Define main layout page.
Router.configure({
  layoutTemplate: 'layoutMain'
});

// If a user has no session, then direct them to the start page.
Router.before(function () {
  if (!Meteor.userId()) {
    this.redirect('start');
    this.stop();
  }
}, {except: ['start']});

// Define a main route that directs to another accordingly.
Router.route('/', {
  action: function () {
    this.redirect('start');
  }
});

/**
 * @file
 * Permission settings and publications for Ideas collection.
 */
/* globals Meteor Ideas */

Meteor.startup(function() {
  Ideas.allow({
    insert: function(userId, idea) {
      return true;
    },
    update: function(userId, idea) {
      return true;
    },
    remove: function(userId, idea) {
      return true;
    }
  });
});

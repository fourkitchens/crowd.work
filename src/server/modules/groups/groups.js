/**
 * @file
 * Permission settings and publications for Groups collection.
 */
/* globals Meteor Groups */

Meteor.startup(function() {
  Groups.allow({
    insert: function(userId, group) {
      return true;
    },
    update: function(userId, group) {
      return true;
    },
    remove: function(userId, group) {
      return true;
    }
  });
});

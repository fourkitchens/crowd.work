/**
 * @file
 * Permission settings and publications for Sessions collection.
 */
/* globals Meteor Sessions */

Meteor.startup(function() {
  Sessions.allow({
    insert: function(userId, session) {
      return true;
    },
    update: function(userId, session) {
      return true;
    },
    remove: function(userId, session) {
      return true;
    }
  });
});

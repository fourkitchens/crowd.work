/**
 * @file
 * Permission settings and publications for Votes collection.
 */
/* globals Meteor Votes */

Meteor.startup(function() {
  Votes.allow({
    insert: function(userId, vote) {
      return true;
    },
    update: function(userId, vote) {
      return true;
    },
    remove: function(userId, vote) {
      return true;
    }
  });
});

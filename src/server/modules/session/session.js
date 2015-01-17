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

// Declare 'Sessions' collection.
Sessions = new Mongo.Collection('sessions');

// Define schema for Examples collection.
Sessions.attachSchema({
  title: {
    type: String,
    label: 'Title',
    max: 200
  },
  machine_name: {
    type: String,
    label: 'Machine Name',
    max: 200
  }
});

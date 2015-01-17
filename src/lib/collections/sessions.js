/**
 * @file
 * Defines 'Sessions' collection.
 */

Sessions = new Mongo.Collection('sessions');

// Define schema for Sessions collection.
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
  },
  phase: {
    type: Number,
    label: 'Phase number'
  }
});

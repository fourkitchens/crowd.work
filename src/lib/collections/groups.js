/**
 * @file
 * Defines 'Groups' collection.
 */

Groups = new Mongo.Collection('groups');

// Define schema for Groups collection.
Groups.attachSchema({
  author: {
    type: String,
    label: 'Author',
    max: 200
  },
  label: {
    type: String,
    label: 'Label',
    max: 200
  },
  description: {
    type: String,
    label: 'Label',
    max: 450
  }
});

/**
 * @file
 * Defines 'Votes' collection.
 */

Votes = new Mongo.Collection('votes');

// Define schema for Ideas collection.
Votes.attachSchema({
  author: {
    type: String,
    label: 'Author',
    max: 200
  },
  category: {
    type: String,
    label: 'Category',
    max: 200
  }
});

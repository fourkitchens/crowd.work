/**
 * @file
 * Defines 'Votes' collection.
 */
/* globals Votes Mongo */

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

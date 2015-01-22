/**
 * @file
 * Defines 'Ideas' collection.
 */
/* globals Ideas Mongo */

Ideas = new Mongo.Collection('ideas');

// Define schema for Ideas collection.
Ideas.attachSchema({
  author: {
    type: String,
    label: 'Author',
    max: 200
  },
  category: {
    type: String,
    label: 'Category',
    max: 200
  },
  content: {
    type: String,
    label: 'Idea',
    max: 450
  },
  locked: {
    type: Boolean,
    label: 'Locked?',
  }
});

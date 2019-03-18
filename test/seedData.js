const Note = require('../lib/models/Note');

module.exports = function(count = 100) {
  const notes = [...Array(count)].map((_, i) => ({
    title: `My Note${i}`,
    body: `My Note ${i}`
  }));

  return Note.create(notes);
};

(function(exports) {
  function NoteList() {
    this.notes = [];
  };

  NoteList.prototype.allNotes = function() {
    return this.notes;
  };

  NoteList.prototype.createNote = function(text) {
    var note = new Note(text);
    this.notes.push(note);
    return note;
  };

  exports.NoteList = NoteList;

})(this);

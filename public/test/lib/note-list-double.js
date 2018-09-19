(function(exports) {

  function NoteListDouble() {
    this.notes = [];
    this.createNoteCallCount = 0;
  }

  NoteListDouble.prototype.createNote = function(string) {
      var note = {text: string}
      this.notes.push(note);
      this.createNoteCallCount++;
  };

  NoteListDouble.prototype.allNotes = function() {
      return this.notes;
  };  

  exports.NoteListDouble = NoteListDouble;
})(this);

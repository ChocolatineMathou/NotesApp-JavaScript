(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  };

  NoteListView.prototype.displayHTML = function() {
    var noteArray = this.noteList.allNotes()
    var emptyArray = [] // array of note objects
    noteArray.forEach(function(note) {
      var text = note.text
      var id = note.id
      var string = id + '">' + text.slice(0,20)
      emptyArray.push(string)
    })
    return '<ul><li><a href="#notes/' + emptyArray.join('</a></li><li><a href="#notes/') + '</a></li></ul>'
  }

  exports.NoteListView = NoteListView;

})(this);

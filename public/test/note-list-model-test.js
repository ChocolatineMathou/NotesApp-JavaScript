(function(exports) {

  function noteListTests() {
    var noteList = new NoteList();

    assert.isTrue(noteList.notes.constructor === Array, 'noteList Instantiates with an array');

    assert.isTrue((noteList.allNotes()).length === 0, 'noteList returns empty array')

    assert.isTrue(noteList.createNote("test note").text === "test note", 'noteList creates a note')

    assert.isTrue(noteList.allNotes().length === 1, 'noteList adds object to array')

    assert.isTrue(noteList.notes[0].text === "test note", 'noteList adds new note to array')

  };

  noteListTests();

})(this);

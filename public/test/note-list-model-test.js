(function(exports) {

  function noteListTests() {
    var noteList = new NoteList();

    assert.isTrue(noteList.notes.constructor === Array, 'NoteList instantiates and creates an array');

    assert.isTrue((noteList.allNotes()).length === 0, 'NoteList instantiates an empty array')

    assert.isTrue(noteList.createNote("test note").text === "test note", 'NoteList,createNote() creates a Note')

    assert.isTrue(noteList.allNotes().length === 1, 'NoteList.createNote() adds an object to the notes array')

    assert.isTrue(noteList.notes[0].text === "test note", 'NoteList.createNote() adds Note object to array')

  };

  noteListTests();

})(this);

(function(exports) {

  function noteListViewTests() {

    var testNoteList = new NoteList();
    testNoteList.createNote("Test");
    testNoteList.createNote("Test2")
    var noteListView = new NoteListView(testNoteList);

    assert.isTrue((noteListView.noteList) === testNoteList, 'NoteListView takes an object on instantiation');

    assert.isTrue(noteListView.displayHTML() === "<ul><li>Test</li><li>Test2</li></ul>", "NoteListView.displayHTML() returns an HTML string of all Note texts")

  };

  noteListViewTests();

})(this);

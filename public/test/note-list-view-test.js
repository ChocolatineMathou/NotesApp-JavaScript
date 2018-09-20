(function(exports) {

  function noteListViewTests() {

    var testNoteList = new NoteList();
    testNoteList.createNote("Test");
    testNoteList.createNote("Test2");
    var noteListView = new NoteListView(testNoteList);

    assert.isTrue((noteListView.noteList) === testNoteList, 'NoteListView takes an object on instantiation');

    assert.isTrue(noteListView.displayHTML() === "<ul><li>Test</li><li>Test2</li></ul>", "NoteListView.displayHTML() returns an HTML string of all Note texts")

  };

  noteListViewTests();

  function twentyCharactersTest() {

    var testNoteList = new NoteList();
    testNoteList.createNote("This is a really long note that will hopefully be more than 20 characters.")
    var noteListView = new NoteListView(testNoteList);

    assert.isTrue(noteListView.displayHTML() ===  "<ul><li>This is a really lon</li></ul>", "It displays the first 20 characters of a note");
  }

  twentyCharactersTest();

  function testNoteListViewUrl() {

    var testNoteList = new NoteList();
    testNoteList.createNote("Aidez moi ! Je suis perdu !")
    var noteListView = new NoteListView(testNoteList);
    console.log(testNoteList.notes[0].id);
    console.log(testNoteList);
    console.log(window.location.href);
    console.log(document.URL);

    assert.isTrue(testNoteList.notes.window.location.href === "http://localhost:8080#notes/7", 'It displays the URL for each note');

  };

  testNoteListViewUrl();

})(this);

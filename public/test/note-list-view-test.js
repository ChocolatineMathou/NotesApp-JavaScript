(function(exports) {

  function noteListViewTests() {

    var testNoteList = new NoteList();
    testNoteList.createNote("Test");
    testNoteList.createNote("Test2");
    var noteListView = new NoteListView(testNoteList);

    assert.isTrue((noteListView.noteList) === testNoteList, 'NoteListView takes an object on instantiation');

    assert.isTrue(noteListView.displayHTML() === '<ul><li><a href="#notes/4">Test</a></li><li><a href="#notes/5">Test2</a></li></ul>', "NoteListView.displayHTML() returns an HTML string of all Note texts")

  };

  noteListViewTests();

  function twentyCharactersTest() {

    var testNoteList = new NoteList();
    testNoteList.createNote("This is a really long note that will hopefully be more than 20 characters.")
    var noteListView = new NoteListView(testNoteList);

    assert.isTrue(noteListView.displayHTML() ===  '<ul><li><a href="#notes/6">This is a really lon</a></li></ul>', "It displays the first 20 characters of a note");
  }

  twentyCharactersTest();

  function testNoteListViewUrl() {

    var testNoteList = new NoteList();
    testNoteList.createNote("Aidez moi ! Je suis perdu !")
    var noteListView = new NoteListView(testNoteList);
    var testId = 6

    assert.isTrue(window.location.href === "http://localhost:8080/#notes/"+testId, 'It displays the URL for each note');

  };

  testNoteListViewUrl();

})(this);

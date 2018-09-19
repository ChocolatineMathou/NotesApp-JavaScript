(function(exports) {

  function noteControllerTest() {

    var noteListDouble = new NoteListDouble();
    var noteController = new NoteController(noteListDouble);

    assert.isTrue(noteController.constructor === NoteController, 'NoteController instantiates correctly');

    assert.isTrue(noteListDouble.createNoteCallCount === 1, 'NoteController instantiates and invokes createNote() on noteList');

    assert.isTrue(noteListView.noteList === noteListDouble, 'NoteController instantiates and passes noteList to noteListView');

    assert.isTrue(noteListView.displayHTML() === "<ul><li>Favourite drink: San Pellegrino with a slice of lemon</li></ul>", 'NoteContoller.displayHTML() returns HTML string from NoteListView');
  }

  noteControllerTest();

})(this);

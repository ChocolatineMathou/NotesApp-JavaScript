(function(exports) {

  function noteControllerTest() {

    var noteController = new NoteController(noteList = new NoteList());
    noteList.createNote('Favourite drink: San Pellegrino with a slice of lemon')

    assert.isTrue(noteController.constructor === NoteController, 'NoteController instantiates correctly');
    assert.isTrue(noteListView.noteList === noteList, 'NoteController instantiates and passes noteList to noteListView');

    assert.isTrue(noteListView.displayHTML() === '<ul><li><a href="#notes/8">Favourite drink: San</a></li></ul>', 'NoteContoller.displayHTML() returns HTML string from NoteListView');
  }

  noteControllerTest();

})(this);

(function(exports) {

  function noteControllerTest() {
    function NoteListDouble() {
      this.notes = [];
      this.createNoteCallCount = 0
    }

    NoteListDouble.prototype.createNote = function(string) {
        var note = {text: string}
        this.notes.push(note);
        this.createNoteCallCount++;
    };

    NoteListDouble.prototype.allNotes = function() {
        return this.notes;
    };

    var noteListDouble = new NoteListDouble();
    var noteController = new NoteController(noteListDouble);
    console.log(noteListView.displayHTML());

    assert.isTrue(noteController.constructor === NoteController, 'noteController instantiates correctly');
    assert.isTrue(noteListDouble.createNoteCallCount === 1, 'Invokes createNote on noteList');
    assert.isTrue(noteListView.noteList === noteListDouble, 'Passes noteList to noteListView');
    assert.isTrue(noteListView.displayHTML() === "<ul><li>Favourite drink: San Pellegrino with a slice of lemon</li></ul>", 'test');
  }

noteControllerTest();
})(this);

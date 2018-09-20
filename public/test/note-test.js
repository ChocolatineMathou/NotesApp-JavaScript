(function(exports) {

  function testNoteInstantiation() {
    var note = new Note("Test note");

    assert.isTrue(note.textReturn() === "Test note", 'Note instantiates with note text')

  };

  testNoteInstantiation();

  function testNoteModelUniqueId() {
    var note = new Note("Hello Thursday!")

    assert.isTrue(note.idReturn() === 2, 'Note has a unique ID')
  }

  testNoteModelUniqueId();

})(this);

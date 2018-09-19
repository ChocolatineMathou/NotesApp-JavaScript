(function(exports) {

  var testNote = new Note("I hate notes");
  var singleNoteView = new SingleNoteView(testNote);

  assert.isTrue((singleNoteView.note) === testNote, 'Instantiate this view with a note');
  console.log(singleNoteView.note.text);
  assert.isTrue((singleNoteView.displayHTML()) === '<div>I hate notes</div>', 'It returns a string of HTML')

})(this);

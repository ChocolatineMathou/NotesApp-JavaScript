(function(exports) {

  function NoteController(noteList) {
    noteList.createNote('Favourite drink: San Pellegrino with a slice of lemon')
    noteListView = new NoteListView(noteList)
  }

  NoteController.prototype.updateDisplay = function() {
    var result = document.getElementById("app")
    result.innerHTML = noteListView.displayHTML();

  };

  exports.NoteController = NoteController;
})(this);

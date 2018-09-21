(function(exports) {

  function NoteController(noteList) {
    noteListView = new NoteListView(noteList)
  }

  NoteController.prototype.updateDisplay = function() {
    var result = document.getElementById("app")
    result.innerHTML = noteListView.displayHTML();

  };

  exports.NoteController = NoteController;
})(this);

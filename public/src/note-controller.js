(function(exports) {

  function NoteController() {
    var result = document.getElementById("app")
    console.log(result)
    result.innerHTML = "howdy"
  }

  NoteController.prototype.updateDisplay = function() {

  };

  exports.NoteController = NoteController;
})(this);

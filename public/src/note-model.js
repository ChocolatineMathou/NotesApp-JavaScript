(function(exports) {
  var counterId = 1
  function Note(string) {
    this.text = string;
    this.id = counterId++
  };

  Note.prototype.textReturn = function() {
    return this.text;
  };

  Note.prototype.idReturn = function () {
    return this.id;
  };

  exports.Note = Note;

})(this);

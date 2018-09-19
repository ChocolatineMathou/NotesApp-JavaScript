(function(exports) {

  function SingleNoteView(note) {
    this.note = note
  }

  SingleNoteView.prototype.displayHTML = function () {
        // return "<div>" + this.note.text + "</div>"
        return `<div>${this.note.text}</div>`
  };

  exports.SingleNoteView = SingleNoteView;
})(this);

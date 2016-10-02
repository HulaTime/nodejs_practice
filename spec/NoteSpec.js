describe("Note", function() {
  var note;

  beforeEach(function() {
    note = new Note("Hello");
  });

  it("should be able to return instantiated text", function() {
    expect(note.text()).toEqual("Hello");;
  });

});

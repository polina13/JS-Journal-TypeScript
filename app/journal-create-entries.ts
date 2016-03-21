/// <reference path="journal-classes.ts" />
/// <reference path="entry-people.ts" />

var people = Journal.people;
var entries = [];
entries.push(new Journal.Entry("Example Title", "Example Body", people.polina));
entries.push(new Journal.Entry("Title-two", "Example-two", people.alex));

$(document).ready(function() {
  $("#journalEntry").submit(function(event) {
  event.preventDefault();

  var inputTitle = $('#inputTitle').val();
  console.log(title);
  console.log(body);
  var inputBody = $('#inputBody').val();
  var entries = new Journal.Entry(title, body, people.polina);
  entries.push();
  console.log(entries);
})

})

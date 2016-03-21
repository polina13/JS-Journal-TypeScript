/// <reference path="journal-classes.ts" />

module Journal {

  var polina: Journal.IPerson = {
    name: "Polina",
    email: "polina@example.com"
  }

  var alex: Journal.IPerson = {
    name: "Alex",
    email: "alex@example.com"
  }

  export var people = {
    "polina": polina,
    "alex": alex
  };
}

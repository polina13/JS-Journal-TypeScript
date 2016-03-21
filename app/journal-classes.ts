module Journal {
  export interface IEntry {
    title: string;
    body: string;
    wordCount(): number;
    validEntry(): boolean;
    votes: number;
    assignedTo: IPerson;
  }
  export interface IPerson {
    name: string;
    email: string;
  }

  export class Entry implements IEntry {
    validation: boolean = false;
    // wordCount: number = 0;
    votes: number = 0;
    constructor ( public title: string, public body: string, public assignedTo:IPerson) {}

    isValid() {
      if (this.title.split("").length <=20 && this.body.split("").length <=200) {
        this.validEntry = true;
      } else {
        this.validEntry = false;
      }
    }

    upVote() {
      this.votes +=1;
    }

    downVote() {
      this.votes -= 1;
    }

    wordCount() {
      var words = this.body.split(" ").length;
      for (var i=0; words.length; i++) {
        if(words[i] === " ") {
        }
        return words.length;
      }
}

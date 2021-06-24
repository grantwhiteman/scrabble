


class Scrabble {
  constructor(word) {
      this.word = word;
  }
  score() {
    let score = 0;

    if (this.checkValidity()) {
      return score
    };

    this.word = this.word.toUpperCase();

    for (let i = 0; i < this.word.length; i++) { //iterates over chars in word
      for (let key in dict) { //iterates over keys in dictionary
        if (dict[key].includes(this.word[i])) { //checks if char is in dict
          score += Number(key);
        }
      }
    }
    return score;
  }
  checkValidity() { //Checks for spaces/null values
    if ((this.word === null) || (this.word.includes(' '))) {
      return true;
    }
    return false;
  }
}

//create dict of scores
const dict = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']};

let myWord = new Scrabble('flow ers');
console.log(myWord.score());

module.exports = Scrabble
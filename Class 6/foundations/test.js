const hero = {name: "BW",
 alias: "BM",
  Phrase: 'AAAAAAA',
  speak: function() {
    return 'attention' + this.Phrase;
  }, 
  attack: function(sound) {
    return '(punches) ${sound}'
  }
 };

const thingToLookFor = 'alias';
console.log(hero.name);
console.log(hero["name"]);
console.log(hero[thingToLookFor]);

console.log(hero.speak());
console.log(hero.attack('BOOM'));

'this is sparta'.toUpperCase();
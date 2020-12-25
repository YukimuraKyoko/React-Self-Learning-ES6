const person = {
  name: 'Kyoko',
  walk(){
    // logs the currect object with the name 'kyoko'
    console.log(this);
  },
  talk(){}
};

person.walk();

const walk = person.walk;
//logs the walk function from person object
console.log(walk);

// this won't work, because strict mode is enabled by default
// instead we get a window object
walk();
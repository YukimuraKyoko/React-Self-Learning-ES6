const person = {
  name: 'Kyoko',
  walk(){
    // logs the currect object with the name 'kyoko'
    console.log(this);
  },
  talk(){}
};

person.walk();


// with the bind method you can set the value of 'this' permanently
const walk = person.walk.bind(person);

//logs the walk function from person object
console.log(walk);

// this won't work, because strict mode is enabled by default
// instead we get a window object
walk();
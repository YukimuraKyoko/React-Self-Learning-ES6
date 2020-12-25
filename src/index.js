const person = {
  name: 'Kyoko',
  walk(){},
  talk(){}
};

person.talk();
person.name = '';

const targetMember = 'name';
person[targetMember.value] = 'John';
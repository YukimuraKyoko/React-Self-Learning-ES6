const colors = ['red','green','blue'];

const items1 = colors.map(color => '<li>' + color + '</li>');

//A templete literal
const items2 = colors.map(color => `<li>${color}</li>`);

console.log(items2);
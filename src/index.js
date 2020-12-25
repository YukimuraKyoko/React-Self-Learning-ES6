const first = [1,2,3];
const second = [4,5,6];

//old way
const combined1 = first.concat(second);

//'...' 3 dots is the spread operator
const combined2 = [...first, ...second];

//you can insert individual elements in between arrays
const combined3 = [...first, 'a', ...second, 'b'];

//the exact same as first
const clone = [...first];
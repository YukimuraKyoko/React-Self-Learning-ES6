const address = {
  street: '',
  city: '',
  country: ''
};
/*
const street = address.street;
const city = address.city;
const country = address.country;
*/

//Object Destructuring, the same as lines 7-9
const {street, city, country} = address;

//Object Destructuring street named as 'st'
const {street: st} = address;
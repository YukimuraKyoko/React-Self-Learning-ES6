const first = {name: 'kyoko'};
const second = {job: 'developer'};

const combined = {...first, ...second, location:'SF'}

const clone = {...first}
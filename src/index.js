const square1 = function(number){
  return number * number;
}

// new function syntax, more compact and cleaner
const square2 = number => number * number;

console.log(square1(3));

console.log(square2(5));


const jobs = [
  {id: 1, isActive: true},
  {id: 2, isActive: true},
  {id: 3, isActive: false},
];


//filter iterates through the jobs array, 'job' is every single element
//in the array, and returns of that current job is active
const activeJobs1 = jobs.filter(function(job){ return job.isActive ;})

//cleaner version of above
const activeJobs2 = jobs.filter(job => job.isActive );
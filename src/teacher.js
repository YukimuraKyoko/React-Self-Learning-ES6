import { Person } from './person';

export class Teacher extends Person{
    constructor(name, degree) {
      //reference the parent, which is required
      super(name);
      this.degree = degree;
    }
    teach(){
        console.log("teach");
      }
}
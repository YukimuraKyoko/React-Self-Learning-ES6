class Person {
  constructor(name){
    this.name = name;
  }
  walk(){
    console.log("walk");
  }
}

const person = new Person("Kyoko");


class Teacher extends Person{
  constructor(name, degree) {
    //reference the parent, which is required
    super(name);
    this.degree = degree;

  }

  teach(){
    console.log("teach");
  }
}

const teacher = new Teacher("KyokoTeacher", "BS");

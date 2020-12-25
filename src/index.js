const person = {
  talk(){
    var self = this;
    setTimeout(() => {
      //this returns a reference to the window object
      console.log("this", this);

    },1000);
    
  }
};

person.talk();
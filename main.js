//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (hungry, owner, color) {
  this.status = 'normal';
  this.hungry = hungry;
  this.owner = owner;
  this.color = color;
}

// Instances of Dog
// Needed: sadie, moonshine, atticus
let sadie = new Dog (false, "me", "black");
let moonshine = new Dog (true);
let atticus = new Dog (true);

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (cool) {
  //when a Human pets, set the Dog.status to happy
  this.pet = function (dog) {
    dog.status = 'happy';
  }
  //When a human feeds, set the Dog.hungry to false
  this.feed = function (dog) {
    dog.hungry = false;
  }
  //No clue
  this.cool = cool;
}

// Instances of Human
// Needed: mason, julia
let mason = new Human (false);
let julia = new Human (true);

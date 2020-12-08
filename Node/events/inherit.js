import { EventEmitter } from "events";
import * as util from "util";

// function Greeter() {
//   this.greeting = "Hello world";
// }

//util.inherits(Greeter, EventEmitter);
class Greeter extends EventEmitter {
  greeting = "Hello World!";
}

Greeter.prototype.greet = function () {
  console.log(this.greeting);
  this.emit("greet");
};

var greeter1 = new Greeter();

greeter1.on("greet", () => {
  console.log("someone just greeted");
});

greeter1.greet();

const person = {
  name: "ABC",
  greet: function () {
    console.log(this.name);
  },
};

person.greet();

//const Emitter = require("events");
import { EventEmitter as Emitter } from "events";
import { events as eventConfig } from "./config.js";

const emitter = new Emitter();

emitter.on(eventConfig.GREET, () => {
  console.log("Hey how's going");
});

emitter.on(eventConfig.GREET, () => {
  console.log("Oh, did someone say something?");
});

emitter.emit(eventConfig.GREET);

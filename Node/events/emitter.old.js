/**
 * Represents a simplified version of Node event emitter
 * @constructor
 */

function Emitter() {
  this.events = {};
}

/**
 * Adds the event listeners to the event emitter
 * @param {string} type - event type
 * @param {function} listener - event listener function
 */
Emitter.prototype.on = function (type, listener) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
};

/**
 * Emits event type signals to all the event listener functions
 * @param {string} type - event type
 */
Emitter.prototype.emit = function (type) {
  if (this.events[type]) {
    this.events[type].forEach((eventListener) => {
      eventListener();
    });
  }
};

export { Emitter };

'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    for (let i = this.length - 1; i >= 0; i--) {
      this[i + elements.length] = this[i];
    };
    elements.forEach((element, i) => {
      this[i] = element;
    });
    return this.length;
  };
}

module.exports = applyCustomUnshift;

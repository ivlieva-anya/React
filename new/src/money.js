"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Money;

require("core-js/modules/web.dom.iterable");

function Money() {
  var sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
  };

  function calcCash() {
    var own = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var everyCash = arguments.length > 1 ? arguments[1] : undefined;
    var total = own;
    everyCash.forEach(function (e) {
      total += +e;
    });
    return total;
  }

  var money = calcCash(null, sponsors.cash);
}
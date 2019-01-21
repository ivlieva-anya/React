"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Employers;

function Employers() {
  var employersNames = employers.filter(function (elem) {
    return elem.length > 0 && elem.length != '';
  });
  employersNames = employersNames.map(function (elem) {
    return elem.toLowerCase().trim();
  });
}
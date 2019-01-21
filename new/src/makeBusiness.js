"use strict";

require("core-js/modules/es6.object.set-prototype-of");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.reflect.construct");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MakeBusiness = function MakeBusiness(owner) {
  var _console;

  var director = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Victor';
  var cash = arguments.length > 2 ? arguments[2] : undefined;
  var emp = arguments.length > 3 ? arguments[3] : undefined;

  _classCallCheck(this, MakeBusiness);

  var sumSponsors = [].concat(_toConsumableArray(sponsors.eu), _toConsumableArray(sponsors.rus), ['unexpected sponsor']);
  console.log("We have a business. Owner: ".concat(owner, " , director: ").concat(director, ". Our budget: ").concat(cash, ". And our employers: ").concat(emp));
  console.log('And we have a sponsors: ');

  (_console = console).log.apply(_console, _toConsumableArray(sumSponsors));

  console.log("Note. Be careful with ".concat(sponsors.eu[0], ". It's a huge risk."));
};

exports.default = MakeBusiness;
makeBusiness = _construct(MakeBusiness, ['Sam',, money, employersNames]);
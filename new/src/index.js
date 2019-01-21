'use strict';

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.reflect.construct");

require("core-js/modules/es6.object.set-prototype-of");

var _employers = _interopRequireDefault(require("./employers"));

var _makeBusiness = _interopRequireDefault(require("./makeBusiness"));

var _money = _interopRequireDefault(require("./money"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var employers = new _employers.default();
var money = new _money.default();

var mB = _construct(_makeBusiness.default, ['Sam',, money, employersNames]); // const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];
// let employersNames = employers.filter(elem =>{
//     return (elem.length > 0 && elem.length != '')
// });
// employersNames = employersNames.map(elem => elem.toLowerCase().trim());
// const sponsors = {
//     cash: [40000, 5000, 30400, 12000],
//     eu: ['SRL', 'PLO', 'J&K'],
//     rus: ['RusAuto', 'SBO']
// };
// function calcCash(own=0,everyCash) {
//     let total = own;
//     everyCash.forEach(e => {
//         total += +e;
//     });
//     return total;
// }
// let money = calcCash(null,sponsors.cash);
// function makeBusiness(owner, director = 'Victor', cash, emp) {
//     let sumSponsors = [...sponsors.eu,...sponsors.rus, 'unexpected sponsor'];
//     console.log(`We have a business. Owner: ${owner} , director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
//     console.log('And we have a sponsors: ');
//     console.log(...sumSponsors);
//     console.log(`Note. Be careful with ${sponsors.eu[0]}. It's a huge risk.`);
// }
// makeBusiness(...['Sam', , money, employersNames]);
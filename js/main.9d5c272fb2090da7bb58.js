"use strict";(self.webpackChunkreact_modele=self.webpackChunkreact_modele||[]).push([[179],{5750:(t,e,r)=>{var n=r(745),o=r(5998),i=(r(7327),r(1539),r(9826),r(9753),r(2526),r(1817),r(2165),r(6992),r(8783),r(3948),r(1038),r(7042),r(3710),r(9714),r(8309),r(4916),r(7294)),u=function(t){return{type:"GET_TASK_TO_ADD",label:t}},a=function(t){return{type:"GET_TASK_TO_UPDATE",task:t}},c=function(t){return{type:"SET_TASKS_IN_STATE",newTasks:t}};r(1249),r(2707);function s(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function f(t){return t.sort((function(t){if(!t.done)return-1}))}function b(t){return t.filter((function(t){return!t.done})).length}var p=r(5697),y=r.n(p),m=r(5893);function d(t){var e=t.nbTasksNotDone;return(0,m.jsxs)("p",{className:"counter",children:[" ",e," tâches en cours"]})}d.propTypes={nbTasksNotDone:y().number.isRequired},d.defaultProps={nbTasksNotDone:0};const v=i.memo(d);r(2222);var O=r(7856),S=r.n(O);function j(t){return function(t){if(Array.isArray(t))return g(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return g(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const h=function(){var t=(0,i.useRef)(null),e=(0,o.v9)((function(t){return t.tasks.tasks})),r=(0,o.v9)((function(t){return t.tasks.taskToAdd})),n=(0,o.I0)();function a(){if(""!=r){var t=function(t){if(0===t.length)return 1;var e=t.map((function(t){return t.id}));return Math.max.apply(Math,s(e))+1}(e),o={id:t,label:r,done:!1};n(c(f([].concat(j(e),[o])))),n(u(""))}}return(0,i.useEffect)((function(){t.current.focus()}),[]),(0,m.jsx)("form",{className:"form",onSubmit:function(t){a(),t.preventDefault()},children:(0,m.jsx)("input",{type:"text",ref:t,className:"form-item",placeholder:"Ajouter une tâche",value:S().sanitize(r),onChange:function(t){n(u(t.target.value))}})})};r(6649),r(6078),r(9653),r(9070),r(7941),r(5003),r(9554),r(4747),r(9337),r(3321);function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function k(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function w(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?k(Object(r),!0).forEach((function(e){P(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function P(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==T(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==T(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===T(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function A(t){var e=t.handleUpdateTask,r=(0,o.I0)(),n=(0,o.v9)((function(t){return t.tasks.taskToUpdate})),i={display:(0,o.v9)((function(t){return t.tasks.showModal}))?"block":"none"};return(0,m.jsx)("div",{className:"modal",style:i,children:(0,m.jsx)("form",{onSubmit:function(t){t.preventDefault(),""!=n.label&&(e(n.id,n.label),r({type:"TOGGLE_MODAL"}))},children:(0,m.jsx)("input",{type:"text",value:n.label,onChange:function(t){r(a(w(w({},n),{},{label:t.target.value})))}})})})}A.propTypes={handleUpdateTask:y().func.isRequired};const E=A;var D=r(7516),_=r(5434);function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function x(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function N(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?x(Object(r),!0).forEach((function(e){M(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function M(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==I(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==I(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===I(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function C(t){var e=t.label,r=t.done,n=t.id,i=t.setTaskState,u=t.removeTaskInState,c=(0,o.I0)(),s={backgroundColor:"rgba(255, 255, 255, 0.6)",borderRadius:"0.5em",cursor:"pointer",marginRight:"0.5em"},l=r?"none":"block";return(0,m.jsxs)("div",{className:"task",children:[(0,m.jsx)("p",{className:r?"list-item list-item--done":"list-item",id:n,onClick:function(){i(n)},children:e}),(0,m.jsx)(D.Hlf,{color:"#165955",size:45,style:N(N({},s),{},{display:l}),onClick:function(){c({type:"TOGGLE_MODAL"}),c(a({id:n,label:e,done:r}))}}),(0,m.jsx)(_.FH3,{color:"#b53c3c",size:45,style:s,onClick:function(){u(n)}})]})}C.propTypes={done:y().bool.isRequired,id:y().number.isRequired,label:y().string.isRequired,removeTaskInState:y().func.isRequired,setTaskState:y().func.isRequired};const R=C;function U(t){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(t)}function q(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function G(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==U(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==U(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===U(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function L(t){var e=t.removeTaskInState,r=t.setTaskState,n=(0,o.v9)((function(t){return t.tasks.tasks}));return(0,m.jsx)("ul",{className:"list",children:n.map((function(t){return(0,m.jsx)(R,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?q(Object(r),!0).forEach((function(e){G(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({removeTaskInState:e,setTaskState:r},t),t.id)}))})}L.propTypes={removeTaskInState:y().func.isRequired,setTaskState:y().func.isRequired};const K=L;function z(t){return function(t){if(Array.isArray(t))return $(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return $(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return $(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const B=function(){var t=(0,o.I0)(),e=(0,o.v9)((function(t){return t.tasks.tasks}));return(0,o.v9)((function(t){return t.tasks.showModal})),(0,i.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(e))})),(0,m.jsxs)("div",{className:"app",children:[(0,m.jsx)(h,{}),(0,m.jsx)(v,{nbTasksNotDone:b(e)}),(0,m.jsx)(K,{tasks:e,setTaskState:function(r){var n=z(e),o=e.find((function(t){return t.id===r}));o.done=!o.done,t(c(f(n)))},removeTaskInState:function(r){var n=e.filter((function(t){return t.id!==r}));t(c(n))}}),(0,m.jsx)(E,{handleUpdateTask:function(r,n){var o=z(e);e.find((function(t){return t.id===r})).label=n,t(c(f(o)))}})]})};var H=r(4791);function J(t){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},J(t)}function X(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function F(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?X(Object(r),!0).forEach((function(e){V(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function V(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==J(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==J(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===J(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var Y={tasks:localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[],taskToAdd:"",taskToUpdate:{},showModal:!1};const Q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(e.type){case"TOGGLE_MODAL":return F(F({},t),{},{showModal:!t.showModal});case"GET_TASK_TO_ADD":return F(F({},t),{},{taskToAdd:e.label});case"GET_TASK_TO_UPDATE":return F(F({},t),{},{taskToUpdate:e.task});case"SET_TASKS_IN_STATE":return F(F({},t),{},{tasks:e.newTasks});default:return t}};const W=(0,H.UY)({tasks:Q});var Z=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||H.qC)((0,H.md)());const tt=(0,H.jB)(W,Z);(0,n.s)(document.getElementById("root")).render((0,m.jsx)(o.zt,{store:tt,children:(0,m.jsx)(B,{})}))},9193:()=>{}},t=>{var e=e=>t(t.s=e);t.O(0,[369],(()=>(e(9193),e(5750))));t.O()}]);
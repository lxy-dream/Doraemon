// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = ".skin \n* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n  }\n  *::before,\n  *::after {\n   box-sizing:border-box\n  }\n  \n  body {\n    background: #93b8ca;\n  }\n  \n  .clearfix {\n    content: \"\";\n    display: block;\n    clear: both;\n  }\n  \n  .face_1 {\n    margin: 25px auto;\n    position: relative;\n    width: 210px;\n    height: 200px;\n    background-color: #1e90ff;\n    border: 2px solid #000000;\n    border-radius: 47% 47% 45% 45%;\n  }\n  \n  .face_2 {\n    position: absolute;\n    bottom: 0;\n    left: 15px;\n    width: 180px;\n    height: 150px;\n    background-color: #fff;\n    border: 2px solid #000;\n    border-radius: 50% 50% 45% 45%;\n  }\n  \n  .eye_box {\n    position: absolute;\n    top: -27.5px;\n    right: 45px;\n    width: 90px;\n    height: auto;\n  }\n  \n  .eye_left,\n  .eye_right {\n    width: 45px;\n    height: 55px;\n    background-color: #fff;\n    border: 2px solid #000;\n    border-radius: 46%;\n  }\n  .eye_left {\n    float: left;\n  }\n  .eye_right {\n    float: right;\n  }\n  \n  .puli_left,\n  .puli_right {\n    position: absolute;\n    top: 30px;\n    width: 10px;\n    height: 10px;\n    background-color: #000;\n    border-radius: 50%;\n  }\n  .puli_left {\n    left: 30px;\n  }\n  .puli_right {\n    right: 30px;\n  }\n  \n  .nose_1 {\n    position: absolute;\n    top: 18.5px;\n    left: 75.5px;\n    width: 25px;\n    height: 25px;\n    background-color: #ff0000;\n    border: 2px solid #000;\n    border-radius: 50%;\n  }\n  \n  .nose_1_shadow {\n    position: absolute;\n    top: 5px;\n    left: 11px;\n    width: 11px;\n    height: 11px;\n    background-color: #fff;\n    border-radius: 50%;\n    box-shadow: 0px 0px 2px 2px rgba(255, 255, 0.4);\n  }\n  \n  .nose_2 {\n    height: 70px;\n    width: 1px;\n    position: absolute;\n    top: 42.5px;\n    left: 88px;\n    border-left: 2px solid #000000;\n  }\n  \n  .mouth {\n    position: absolute;\n    top: 12.5px;\n    left: 30px;\n    height: 100px;\n    width: 120px;\n    border-bottom: 2px solid #000000;\n    border-radius: 0 0 45% 45%;\n  }\n  \n  .whisker_left,\n  .whisker_right {\n    position: absolute;\n    top: 30px;\n    width: 90px;\n    height: 90px;\n  }\n  .whisker_left {\n    left: 0;\n  }\n  .whisker_right {\n    right: 0;\n  }\n  \n  .whisker_left span:nth-child(1),\n  .whisker_right span:nth-child(1) {\n    position: absolute;\n    top: 15px;\n    height: 30px;\n    width: 50px;\n    border-top: 2px solid #000000;\n  }\n  .whisker_left span:nth-child(1) {\n    left: 15px;\n    transform: rotate(10deg);\n  }\n  .whisker_right span:nth-child(1) {\n    right: 15px;\n    transform: rotate(-10deg);\n  }\n  \n  .whisker_left span:nth-child(2),\n  .whisker_right span:nth-child(2) {\n    position: absolute;\n    top: 30px;\n    height: 30px;\n    width: 50px;\n    border-top: 2px solid #000;\n  }\n  .whisker_left span:nth-child(2) {\n    left: 17.5px;\n  }\n  .whisker_right span:nth-child(2) {\n    right: 17.5px;\n  }\n  \n  .whisker_left span:nth-child(3),\n  .whisker_right span:nth-child(3) {\n    position: absolute;\n    top: 45px;\n    height: 30px;\n    width: 50px;\n    border-top: 2px solid #000;\n  }\n  .whisker_left span:nth-child(3) {\n    left: 21px;\n    transform: rotate(-10deg);\n  }\n  .whisker_right span:nth-child(3) {\n    right: 21px;\n    transform: rotate(10deg);\n  }\n  \n  .collar {\n    position: absolute;\n    top: 175px;\n    left: 25px;\n    width: 160px;\n    height: 25px;\n    background-color: #ff0000;\n    border: 2px solid #000;\n    border-radius: 30px;\n  }\n  .bell_1 {\n    position: absolute;\n    top: 7.5px;\n    left: 65px;\n    width: 30px;\n    height: 30px;\n    background-color: #ffff00;\n    border: 2px solid #000;\n    border-radius: 50%;\n  }\n  .bell_2 {\n    position: absolute;\n    top: 8.5px;\n    left: -0.5px;\n    width: 26.5px;\n    height: 8px;\n    border-top: 2px solid #000;\n  }\n  .bell_3 {\n    position: absolute;\n    top: 11px;\n    left: -0.5px;\n    width: 28.5px;\n    height: 11.5px;\n    border-top: 2px solid #000;\n  }\n  .bell_4 {\n    position: absolute;\n    top: 15px;\n    left: 10px;\n    width: 7.5px;\n    height: 5px;\n    background-color: #000;\n    border-radius: 50%;\n  }\n  .bell_5 {\n    position: absolute;\n    top: 18.5px;\n    left: 12.5px;\n    width: 15px;\n    height: 10px;\n    border-left: 2px solid #000;\n  }";
var _default = string;
exports.default = _default;
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  time: 100,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast"
  },
  n: 1,
  init: function init() {
    player.ui.demo.innerHTML = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key]; //pause/play/slow

        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerText = _css.default.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  },
  slow: function slow() {
    player.pause();
    player.time = 100;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 10;
    player.play();
  }
};
player.init();
},{"./css.js":"K4Xi"}]},{},["epB2"], null)
//# sourceMappingURL=main.3d19eb3d.js.map
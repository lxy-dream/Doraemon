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
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = ".skin \n* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n  }\n  *::before,\n  *::after {\n   box-sizing:border-box\n  }\n  \n  body {\n    background: #93b8ca;\n  }\n  \n  .clearfix {\n    content: \"\";\n    display: block;\n    clear: both;\n  }\n  \n  .face_1 {\n    margin: 25px auto;\n    position: relative;\n    width: 210px;\n    height: 200px;\n    background-color: #1e90ff;\n    border: 2px solid #000000;\n    border-radius: 47% 47% 45% 45%;\n  }\n  \n  .face_2 {\n    position: absolute;\n    bottom: 0;\n    left: 15px;\n    width: 180px;\n    height: 150px;\n    background-color: #fff;\n    border: 2px solid #000;\n    border-radius: 50% 50% 45% 45%;\n  }\n  \n  .eye_box {\n    position: absolute;\n    top: -27.5px;\n    right: 45px;\n    width: 90px;\n    height: auto;\n  }\n  \n  .eye_left,\n  .eye_right {\n    width: 45px;\n    height: 55px;\n    background-color: #fff;\n    border: 2px solid #000;\n    border-radius: 46%;\n  }\n  .eye_left {\n    float: left;\n  }\n  .eye_right {\n    float: right;\n  }\n  \n  .puli_left,\n  .puli_right {\n    position: absolute;\n    top: 30px;\n    width: 10px;\n    height: 10px;\n    background-color: #000;\n    border-radius: 50%;\n  }\n  .puli_left {\n    left: 30px;\n  }\n  .puli_right {\n    right: 30px;\n  }\n  \n  .nose_1 {\n    position: absolute;\n    top: 18.5px;\n    left: 75.5px;\n    width: 25px;\n    height: 25px;\n    background-color: #ff0000;\n    border: 2px solid #000;\n    border-radius: 50%;\n  }\n  \n  .nose_1_shadow {\n    position: absolute;\n    top: 5px;\n    left: 11px;\n    width: 11px;\n    height: 11px;\n    background-color: #fff;\n    border-radius: 50%;\n    box-shadow: 0px 0px 2px 2px rgba(255, 255, 0.4);\n  }\n  \n  .nose_2 {\n    height: 70px;\n    width: 1px;\n    position: absolute;\n    top: 42.5px;\n    left: 88px;\n    border-left: 2px solid #000000;\n  }\n  \n  .mouth {\n    position: absolute;\n    top: 12.5px;\n    left: 30px;\n    height: 100px;\n    width: 120px;\n    border-bottom: 2px solid #000000;\n    border-radius: 0 0 45% 45%;\n  }\n  \n  .whisker_left,\n  .whisker_right {\n    position: absolute;\n    top: 30px;\n    width: 90px;\n    height: 90px;\n  }\n  .whisker_left {\n    left: 0;\n  }\n  .whisker_right {\n    right: 0;\n  }\n  \n  .whisker_left span:nth-child(1),\n  .whisker_right span:nth-child(1) {\n    position: absolute;\n    top: 15px;\n    height: 30px;\n    width: 50px;\n    border-top: 2px solid #000000;\n  }\n  .whisker_left span:nth-child(1) {\n    left: 15px;\n    transform: rotate(10deg);\n  }\n  .whisker_right span:nth-child(1) {\n    right: 15px;\n    transform: rotate(-10deg);\n  }\n  \n  .whisker_left span:nth-child(2),\n  .whisker_right span:nth-child(2) {\n    position: absolute;\n    top: 30px;\n    height: 30px;\n    width: 50px;\n    border-top: 2px solid #000;\n  }\n  .whisker_left span:nth-child(2) {\n    left: 17.5px;\n  }\n  .whisker_right span:nth-child(2) {\n    right: 17.5px;\n  }\n  \n  .whisker_left span:nth-child(3),\n  .whisker_right span:nth-child(3) {\n    position: absolute;\n    top: 45px;\n    height: 30px;\n    width: 50px;\n    border-top: 2px solid #000;\n  }\n  .whisker_left span:nth-child(3) {\n    left: 21px;\n    transform: rotate(-10deg);\n  }\n  .whisker_right span:nth-child(3) {\n    right: 21px;\n    transform: rotate(10deg);\n  }\n  \n  .collar {\n    position: absolute;\n    top: 175px;\n    left: 25px;\n    width: 160px;\n    height: 25px;\n    background-color: #ff0000;\n    border: 2px solid #000;\n    border-radius: 30px;\n  }\n  .bell_1 {\n    position: absolute;\n    top: 7.5px;\n    left: 65px;\n    width: 30px;\n    height: 30px;\n    background-color: #ffff00;\n    border: 2px solid #000;\n    border-radius: 50%;\n  }\n  .bell_2 {\n    position: absolute;\n    top: 8.5px;\n    left: -0.5px;\n    width: 26.5px;\n    height: 8px;\n    border-top: 2px solid #000;\n  }\n  .bell_3 {\n    position: absolute;\n    top: 11px;\n    left: -0.5px;\n    width: 28.5px;\n    height: 11.5px;\n    border-top: 2px solid #000;\n  }\n  .bell_4 {\n    position: absolute;\n    top: 15px;\n    left: 10px;\n    width: 7.5px;\n    height: 5px;\n    background-color: #000;\n    border-radius: 50%;\n  }\n  .bell_5 {\n    position: absolute;\n    top: 18.5px;\n    left: 12.5px;\n    width: 15px;\n    height: 10px;\n    border-left: 2px solid #000;\n  }";
var _default = string;
exports.default = _default;
},{}],"main.js":[function(require,module,exports) {
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
},{"./css.js":"css.js"}],"C:/Users/ASUS/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61284" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/ASUS/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pouchDb = require("./pouch-db");

Object.keys(_pouchDb).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _pouchDb[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _pouchDb[key];
    }
  });
});

var _rxStoragePouchdb = require("./rx-storage-pouchdb");

Object.keys(_rxStoragePouchdb).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _rxStoragePouchdb[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _rxStoragePouchdb[key];
    }
  });
});

var _adapterCheck = require("./adapter-check");

Object.keys(_adapterCheck).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _adapterCheck[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _adapterCheck[key];
    }
  });
});

var _customEventsPlugin = require("./custom-events-plugin");

Object.keys(_customEventsPlugin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _customEventsPlugin[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _customEventsPlugin[key];
    }
  });
});

//# sourceMappingURL=index.js.map
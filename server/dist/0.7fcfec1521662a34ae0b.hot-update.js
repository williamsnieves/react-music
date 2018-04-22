require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/server.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__("express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__middleware__ = __webpack_require__("./src/middleware.js");


//import { restRouter } from './api'

var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
Object(__WEBPACK_IMPORTED_MODULE_1__middleware__["a" /* default */])(app);

app.use('/', function (req, res) {
	res.json({ response: 'deezer' });
});

/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ })

};
//# sourceMappingURL=0.7fcfec1521662a34ae0b.hot-update.js.map
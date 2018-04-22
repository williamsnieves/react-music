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
//setupMiddware(app)

app.use('/deezer', function (req, res) {
	res.json({ response: 'deezer' });
});

/***/ })

};
//# sourceMappingURL=0.1b8a6001583ff9ea650b.hot-update.js.map
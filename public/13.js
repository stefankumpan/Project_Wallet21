(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/admin/adminDashboard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/admin/adminDashboard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "adminDashboard"
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/admin/adminDashboard.vue?vue&type=template&id=570f5adc&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/admin/adminDashboard.vue?vue&type=template&id=570f5adc& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "admin-layout" }, [
    _c("div", { staticClass: "admin-nav" }, [
      _c("h3", [_vm._v("Menu")]),
      _vm._v(" "),
      _c("ul", [
        _c(
          "li",
          [
            _c("router-link", { attrs: { to: { name: "adminOverview" } } }, [
              _vm._v("Dashboard")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          [
            _c("router-link", { attrs: { to: { name: "adminUsers" } } }, [
              _vm._v("Users")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          [
            _c("router-link", { attrs: { to: { name: "adminOrders" } } }, [
              _vm._v("Bestellungen")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          [
            _c("router-link", { attrs: { to: { name: "adminPartners" } } }, [
              _vm._v("Partners")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          [
            _c("router-link", { attrs: { to: { name: "adminPackages" } } }, [
              _vm._v("Pakete")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          [
            _c("router-link", { attrs: { to: { name: "adminIcons" } } }, [
              _vm._v("Icons")
            ])
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "admin-content" },
      [
        _c(
          "transition",
          { attrs: { name: "fade-in-down", mode: "out-in" } },
          [_c("router-view")],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/admin/adminDashboard.vue":
/*!*****************************************************************!*\
  !*** ./resources/assets/js/components/admin/adminDashboard.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adminDashboard_vue_vue_type_template_id_570f5adc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminDashboard.vue?vue&type=template&id=570f5adc& */ "./resources/assets/js/components/admin/adminDashboard.vue?vue&type=template&id=570f5adc&");
/* harmony import */ var _adminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminDashboard.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/admin/adminDashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _adminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _adminDashboard_vue_vue_type_template_id_570f5adc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _adminDashboard_vue_vue_type_template_id_570f5adc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/admin/adminDashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/admin/adminDashboard.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/components/admin/adminDashboard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_adminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./adminDashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/admin/adminDashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_adminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/admin/adminDashboard.vue?vue&type=template&id=570f5adc&":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/components/admin/adminDashboard.vue?vue&type=template&id=570f5adc& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adminDashboard_vue_vue_type_template_id_570f5adc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./adminDashboard.vue?vue&type=template&id=570f5adc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/admin/adminDashboard.vue?vue&type=template&id=570f5adc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adminDashboard_vue_vue_type_template_id_570f5adc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adminDashboard_vue_vue_type_template_id_570f5adc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
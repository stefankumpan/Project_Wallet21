(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/dashboard/account/AccountDelete.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/dashboard/account/AccountDelete.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utility_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utility/mixins */ "./resources/assets/js/utility/mixins.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
    account: 'getAccount'
  }),
  mixins: [_utility_mixins__WEBPACK_IMPORTED_MODULE_0__["default"]],
  methods: {
    deleteAccount: function deleteAccount() {
      var payload = this.account;
      this.$store.dispatch('deleteAccount', payload);
    }
  },
  created: function created() {
    var app = document.querySelector("#app"); // add class for Overlay

    app.classList.add("overlay");
  },
  destroyed: function destroyed() {
    var app = document.querySelector("#app"); // remove class for Overlay

    app.classList.remove("overlay");
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/dashboard/account/AccountDelete.vue?vue&type=template&id=03617798&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/dashboard/account/AccountDelete.vue?vue&type=template&id=03617798& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "modal" }, [
    _c("div", { staticClass: "modal-content" }, [
      _c("div", { staticClass: "modal-header" }, [
        _c("h3", [_vm._v(_vm._s(_vm.account.name) + " Löschen?")]),
        _vm._v(" "),
        _c("button", { on: { click: _vm.handleGoBack } }, [
          _vm._v("× "),
          _c("span", { staticClass: "visually-hidden" }, [_vm._v("close")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "modal-body" }, [
        _c("p", { staticClass: "error-msg" }, [
          _vm._v("Sie sind dabei "),
          _c("span", { staticClass: "highlight" }, [
            _vm._v('"' + _vm._s(_vm.account.name) + '"')
          ]),
          _vm._v(" zu Löschen,\n                möchten sie fortfahren?")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "modal-footer" }, [
        _c(
          "button",
          { staticClass: "btn btn-white", on: { click: _vm.handleGoBack } },
          [_vm._v("Abbrechen")]
        ),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "btn btn-danger", on: { click: _vm.deleteAccount } },
          [_vm._v("Löschen")]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/dashboard/account/AccountDelete.vue":
/*!****************************************************************************!*\
  !*** ./resources/assets/js/components/dashboard/account/AccountDelete.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccountDelete_vue_vue_type_template_id_03617798___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountDelete.vue?vue&type=template&id=03617798& */ "./resources/assets/js/components/dashboard/account/AccountDelete.vue?vue&type=template&id=03617798&");
/* harmony import */ var _AccountDelete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountDelete.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/dashboard/account/AccountDelete.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AccountDelete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccountDelete_vue_vue_type_template_id_03617798___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AccountDelete_vue_vue_type_template_id_03617798___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/dashboard/account/AccountDelete.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/dashboard/account/AccountDelete.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/js/components/dashboard/account/AccountDelete.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountDelete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountDelete.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/dashboard/account/AccountDelete.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountDelete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/dashboard/account/AccountDelete.vue?vue&type=template&id=03617798&":
/*!***********************************************************************************************************!*\
  !*** ./resources/assets/js/components/dashboard/account/AccountDelete.vue?vue&type=template&id=03617798& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountDelete_vue_vue_type_template_id_03617798___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountDelete.vue?vue&type=template&id=03617798& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/dashboard/account/AccountDelete.vue?vue&type=template&id=03617798&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountDelete_vue_vue_type_template_id_03617798___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountDelete_vue_vue_type_template_id_03617798___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
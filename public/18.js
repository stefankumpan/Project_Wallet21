(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/admin/overview/Overview.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/admin/overview/Overview.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _utility_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utility/mixins */ "./resources/assets/js/utility/mixins.js");
/* harmony import */ var _users_Users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users/Users */ "./resources/assets/js/components/admin/users/Users.vue");
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
  name: "Overview",
  mixins: [_utility_mixins__WEBPACK_IMPORTED_MODULE_1__["default"]],
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    overview: 'getAdminOverview'
  }),
  components: {
    'users-table': _users_Users__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  methods: {
    loadOverview: function loadOverview() {
      this.$store.dispatch('loadAdminOverview');
    }
  },
  created: function created() {
    this.loadOverview();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/admin/overview/Overview.vue?vue&type=template&id=5fa5f168&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/admin/overview/Overview.vue?vue&type=template&id=5fa5f168& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "wrapper admin-overview" },
    [
      _c("h2", { staticClass: "admin-dashboard-headline" }, [
        _vm._v("Admin Übersicht")
      ]),
      _vm._v(" "),
      _c("ul", { staticClass: "statistic" }, [
        _c("li", [
          _c("span", { staticClass: "highlight" }, [_vm._v("Bestellungen")]),
          _vm._v(" "),
          _c("span", { staticClass: "highlight red" }, [
            _vm._v(_vm._s(_vm.round(_vm.overview.ordersTotal, 0)))
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("span", { staticClass: "highlight" }, [
            _vm._v("Bestellungs Einnahmen")
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "highlight green" }, [
            _vm._v(
              _vm._s(_vm.formatCurrency(_vm.overview.ordersRevenue, "EUR"))
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("span", { staticClass: "highlight" }, [
            _vm._v(" Angemeldet Users")
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "highlight" }, [
            _vm._v(_vm._s(_vm.round(_vm.overview.usersCount, 0)))
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("span", { staticClass: "highlight" }, [
            _vm._v(" Erstellte Konten ")
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "highlight" }, [
            _vm._v(_vm._s(_vm.round(_vm.overview.accountsCount, 0)))
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("span", { staticClass: "highlight" }, [
            _vm._v("Erstellte Kategorien")
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "highlight" }, [
            _vm._v(_vm._s(_vm.round(_vm.overview.categoriesCount, 0)))
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("span", { staticClass: "highlight" }, [
            _vm._v(" Erstellte Buchungen")
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "highlight" }, [
            _vm._v(_vm._s(_vm.round(_vm.overview.bookingRecordsCount, 0)))
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("span", { staticClass: "highlight" }, [
            _vm._v("Avg. Einnahmen Betrag")
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "highlight green" }, [
            _vm._v(_vm._s(_vm.round(_vm.overview.revenueAvg, 2)))
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("span", { staticClass: "highlight" }, [
            _vm._v("Avg. Ausgaben Betrag")
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "highlight red" }, [
            _vm._v(_vm._s(_vm.round(_vm.overview.expenditureAvg, 2)))
          ])
        ])
      ]),
      _vm._v(" "),
      _c("users-table")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/admin/overview/Overview.vue":
/*!********************************************************************!*\
  !*** ./resources/assets/js/components/admin/overview/Overview.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Overview_vue_vue_type_template_id_5fa5f168___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Overview.vue?vue&type=template&id=5fa5f168& */ "./resources/assets/js/components/admin/overview/Overview.vue?vue&type=template&id=5fa5f168&");
/* harmony import */ var _Overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Overview.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/admin/overview/Overview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Overview_vue_vue_type_template_id_5fa5f168___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Overview_vue_vue_type_template_id_5fa5f168___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/admin/overview/Overview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/admin/overview/Overview.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/components/admin/overview/Overview.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Overview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/admin/overview/Overview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/admin/overview/Overview.vue?vue&type=template&id=5fa5f168&":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/components/admin/overview/Overview.vue?vue&type=template&id=5fa5f168& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Overview_vue_vue_type_template_id_5fa5f168___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Overview.vue?vue&type=template&id=5fa5f168& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/admin/overview/Overview.vue?vue&type=template&id=5fa5f168&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Overview_vue_vue_type_template_id_5fa5f168___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Overview_vue_vue_type_template_id_5fa5f168___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
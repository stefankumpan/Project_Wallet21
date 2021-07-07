(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/dashboard/passbook/PassbookDelete.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/dashboard/passbook/PassbookDelete.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_utility_mixins__WEBPACK_IMPORTED_MODULE_0__["default"]],
  computed: {
    passbook: function passbook() {
      return this.$store.getters.getPassbookById(this.$route.params.passbookId);
    }
  },
  methods: {
    deleteBookingRecord: function deleteBookingRecord() {
      var payload = this.passbook;
      this.$store.dispatch('deletePassbook', payload);
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/dashboard/passbook/PassbookDelete.vue?vue&type=template&id=08050fd0&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/dashboard/passbook/PassbookDelete.vue?vue&type=template&id=08050fd0& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
        _c("h3", [_vm._v(_vm._s(_vm.passbook.name) + " Löschen?")]),
        _vm._v(" "),
        _c("button", { on: { click: _vm.handleGoDashboard } }, [
          _vm._v("× "),
          _c("span", { staticClass: "visually-hidden" }, [_vm._v("close")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "modal-body" }, [
        _c("p", { staticClass: "error-msg" }, [
          _vm._v("Sie sind dabei "),
          _c("span", { staticClass: "highlight" }, [
            _vm._v('"' + _vm._s(_vm.passbook.name) + '"')
          ]),
          _vm._v(" zu Löschen, möchten sie Fortfahren?")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "modal-footer" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-white",
            on: { click: _vm.handleGoDashboard }
          },
          [_vm._v("Abbrechen")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-danger",
            on: { click: _vm.deleteBookingRecord }
          },
          [_vm._v("Löschen")]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/dashboard/passbook/PassbookDelete.vue":
/*!******************************************************************************!*\
  !*** ./resources/assets/js/components/dashboard/passbook/PassbookDelete.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PassbookDelete_vue_vue_type_template_id_08050fd0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PassbookDelete.vue?vue&type=template&id=08050fd0& */ "./resources/assets/js/components/dashboard/passbook/PassbookDelete.vue?vue&type=template&id=08050fd0&");
/* harmony import */ var _PassbookDelete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PassbookDelete.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/dashboard/passbook/PassbookDelete.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PassbookDelete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PassbookDelete_vue_vue_type_template_id_08050fd0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PassbookDelete_vue_vue_type_template_id_08050fd0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/dashboard/passbook/PassbookDelete.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/dashboard/passbook/PassbookDelete.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/assets/js/components/dashboard/passbook/PassbookDelete.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PassbookDelete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PassbookDelete.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/dashboard/passbook/PassbookDelete.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PassbookDelete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/dashboard/passbook/PassbookDelete.vue?vue&type=template&id=08050fd0&":
/*!*************************************************************************************************************!*\
  !*** ./resources/assets/js/components/dashboard/passbook/PassbookDelete.vue?vue&type=template&id=08050fd0& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PassbookDelete_vue_vue_type_template_id_08050fd0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PassbookDelete.vue?vue&type=template&id=08050fd0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/dashboard/passbook/PassbookDelete.vue?vue&type=template&id=08050fd0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PassbookDelete_vue_vue_type_template_id_08050fd0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PassbookDelete_vue_vue_type_template_id_08050fd0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/utility/mixins.js":
/*!***********************************************!*\
  !*** ./resources/assets/js/utility/mixins.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    formatDateYMD: function formatDateYMD(date) {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(date).format('YYYY/MM/DD');
    },
    formatDateDMY: function formatDateDMY(date) {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(date).format('DD.MM.YYYY');
    },
    handleGoBack: function handleGoBack() {
      this.$router.go(-1);
    },
    handleGoDashboard: function handleGoDashboard() {
      this.$router.push({
        name: 'dashboard'
      });
    },
    handleGoAdminOverview: function handleGoAdminOverview() {
      this.$router.push({
        name: 'adminOverview'
      });
    },
    formatCurrency: function formatCurrency(value) {
      var currency = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'EUR';
      //return value.toLocaleString('de-DE', {style: 'currency', currency: icon}); // format Currency - Formatiert die Währung
      return Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: currency
      }).format(value); // format Currency - Formatiert die Währung
    },
    spaceToHyphen: function spaceToHyphen(value) {
      return value.replace(/\s+/g, '-'); // replace space with hyphen "-" with regex - ersetztst space mit bindestrich
      // return value.split(" ").join("-").toLowerCase(); // without regex
    },
    calcProcent: function calcProcent(value, total, decimals) {
      if (value === 0) {
        return 0;
      }

      if (value < 0) {
        var _value = _value = _value * -1;
      }

      if (total < 0) {
        var _value2 = total = total * -1;
      }

      var newValue = value * 100 / total;
      return Number(Math.round(newValue + 'e' + decimals) + 'e-' + decimals);
    },
    round: function round(value, decimals) {
      return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
    }
  }
});

/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/dashboard/booking-records/BookingRecordShow.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/dashboard/booking-records/BookingRecordShow.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utility_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utility/mixins */ "./resources/assets/js/utility/mixins.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _utility_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utility/config */ "./resources/assets/js/utility/config.js");
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
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
    currency: 'getAccountCurrency'
  }),
  mixins: [_utility_mixins__WEBPACK_IMPORTED_MODULE_0__["default"]],
  data: function data() {
    return {
      bookingRecord: [],
      AppUrl: _utility_config__WEBPACK_IMPORTED_MODULE_2__["AppUrl"],
      imgFullSize: false
    };
  },
  methods: {
    handleImageSize: function handleImageSize() {
      console.log('cliock');
      console.log(this.imgFullSize);
      this.imgFullSize = !this.imgFullSize;
    }
  },
  created: function created() {
    var app = document.querySelector("#app"); // add class for Overlay

    app.classList.add("overlay");
    var id = this.$route.params.bookingRecordId;
    this.bookingRecord = this.$store.getters.filterBookingRecordsById(id);
  },
  destroyed: function destroyed() {
    var app = document.querySelector("#app"); // remove class for Overlay

    app.classList.remove("overlay");
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/dashboard/booking-records/BookingRecordShow.vue?vue&type=template&id=eabf3af8&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/dashboard/booking-records/BookingRecordShow.vue?vue&type=template&id=eabf3af8& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "modal-content-lg" }, [
      _c("div", { staticClass: "modal-header" }, [
        _c("h3", [_vm._v(_vm._s(_vm.bookingRecord.name))]),
        _vm._v(" "),
        _c("button", { on: { click: _vm.handleGoBack } }, [
          _vm._v("× "),
          _c("span", { staticClass: "visually-hidden" }, [_vm._v("close")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "modal-body" }, [
        _c("div", { staticClass: "booking-records-overview" }, [
          _c("div", { staticClass: "booking-records-info" }, [
            _c("ul", { staticClass: "booking-records-stats" }, [
              _c("li", { staticClass: "highlight" }, [
                _c("span", [_vm._v("Datum: ")]),
                _vm._v(" "),
                _c("span", [
                  _vm._v(_vm._s(_vm.formatDateDMY(_vm.bookingRecord.date)))
                ])
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "highlight" }, [
                _c("span", [_vm._v("Betrag: ")]),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    class: {
                      red:
                        _vm.bookingRecord.revenue -
                          _vm.bookingRecord.expenditure <
                        0,
                      green:
                        _vm.bookingRecord.revenue -
                          _vm.bookingRecord.expenditure >
                        0
                    }
                  },
                  [
                    _vm._v(
                      "\n                        " +
                        _vm._s(
                          _vm.formatCurrency(
                            _vm.bookingRecord.revenue -
                              _vm.bookingRecord.expenditure,
                            _vm.currency
                          )
                        )
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _c("span", { staticClass: "highlight" }, [_vm._v("Ust.: ")]),
                _vm._v(_vm._s(_vm.bookingRecord.tax) + "%")
              ]),
              _vm._v(" "),
              _c("li", [
                _c("span", { staticClass: "highlight" }, [
                  _vm._v("Ust. Betrag: ")
                ]),
                _vm._v(
                  "\n                            " +
                    _vm._s(
                      _vm.formatCurrency(
                        _vm.bookingRecord.tax_amount,
                        _vm.currency
                      )
                    ) +
                    "\n                        "
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _c("h4", [_vm._v("Beschreibung:")]),
                _vm._v(" "),
                _c("p", { staticClass: "description" }, [
                  _vm._v(_vm._s(_vm.bookingRecord.description))
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "booking-records-image-box" }, [
            _c("img", {
              class: { "booking-records-image-full": _vm.imgFullSize },
              attrs: {
                src: _vm.AppUrl + _vm.bookingRecord.image,
                alt: _vm.bookingRecord.name
              },
              on: { click: _vm.handleImageSize }
            }),
            _vm._v(" "),
            _c(
              "a",
              {
                attrs: {
                  href: _vm.AppUrl + _vm.bookingRecord.image,
                  download: ""
                }
              },
              [_vm._v("Downloaden")]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/dashboard/booking-records/BookingRecordShow.vue":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/components/dashboard/booking-records/BookingRecordShow.vue ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BookingRecordShow_vue_vue_type_template_id_eabf3af8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookingRecordShow.vue?vue&type=template&id=eabf3af8& */ "./resources/assets/js/components/dashboard/booking-records/BookingRecordShow.vue?vue&type=template&id=eabf3af8&");
/* harmony import */ var _BookingRecordShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookingRecordShow.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/dashboard/booking-records/BookingRecordShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BookingRecordShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BookingRecordShow_vue_vue_type_template_id_eabf3af8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BookingRecordShow_vue_vue_type_template_id_eabf3af8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/dashboard/booking-records/BookingRecordShow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/dashboard/booking-records/BookingRecordShow.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/assets/js/components/dashboard/booking-records/BookingRecordShow.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookingRecordShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BookingRecordShow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/dashboard/booking-records/BookingRecordShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookingRecordShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/dashboard/booking-records/BookingRecordShow.vue?vue&type=template&id=eabf3af8&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/assets/js/components/dashboard/booking-records/BookingRecordShow.vue?vue&type=template&id=eabf3af8& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookingRecordShow_vue_vue_type_template_id_eabf3af8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BookingRecordShow.vue?vue&type=template&id=eabf3af8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/dashboard/booking-records/BookingRecordShow.vue?vue&type=template&id=eabf3af8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookingRecordShow_vue_vue_type_template_id_eabf3af8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookingRecordShow_vue_vue_type_template_id_eabf3af8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
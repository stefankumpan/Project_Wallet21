(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/dashboard/booking-records/BookingRecordForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/dashboard/booking-records/BookingRecordForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utility_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utility/mixins */ "./resources/assets/js/utility/mixins.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
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
  name: "BookingRecordForm",
  mixins: [_utility_mixins__WEBPACK_IMPORTED_MODULE_0__["default"]],
  computed: {
    errors: function errors() {
      return this.$store.getters.getErrors;
    }
  },
  data: function data() {
    return {
      editMode: false,
      fileSizeError: false,
      bookingRecordForm: {
        name: '',
        amount: 0.00,
        imageFile: null,
        description: '',
        date: '',
        categoryId: '',
        tax: 20,
        tax_amount: 0,
        accountId: null
      }
    };
  },
  methods: {
    createBookingRecord: function createBookingRecord(event) {
      event.preventDefault();
      var payload = this.bookingRecordForm;
      this.$store.dispatch('createBookingRecord', payload);
    },
    updateBookingRecord: function updateBookingRecord(event) {
      event.preventDefault();
      var payload = this.bookingRecordForm;
      this.$store.dispatch('updateBookingRecord', payload);
    },
    handleTaxCalculation: function handleTaxCalculation() {
      var tax = parseInt(this.bookingRecordForm.tax);
      var amount = parseInt(this.bookingRecordForm.amount);
      var percent = tax + 100; // console.log('tax', tax);
      // console.log('pecent', percent);

      var taxValue = amount / percent * tax; // console.log(taxValue);

      this.bookingRecordForm.tax_amount = _utility_mixins__WEBPACK_IMPORTED_MODULE_0__["default"].methods.round(taxValue, 2);
    },
    handleFileSelect: function handleFileSelect(event) {
      var _this = this;

      var file = event.target.files[0];

      if (file.size < 2097152) {
        if (file.type === "image/jpeg" || file.type === 'image/png') {
          this.fileSizeError = false;
          var fileReader = new FileReader();
          fileReader.readAsDataURL(event.target.files[0]);

          fileReader.onload = function (e) {
            _this.bookingRecordForm.imageFile = e.target.result;
          };
        } else {
          this.fileSizeError = true;
        }
      } else {
        this.fileSizeError = true;
      }
    }
  },
  created: function created() {
    this.$store.commit('resetErrors');
    this.bookingRecordForm.categoryId = this.$route.params.categoryId;
    this.bookingRecordForm.date = moment__WEBPACK_IMPORTED_MODULE_1___default()().format('YYYY-MM-DD');

    if (this.$route.params.bookingRecordId !== undefined) {
      var id = this.$route.params.bookingRecordId;

      var data = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.clone(this.$store.getters.filterBookingRecordsById(id));

      this.editMode = true;
      this.bookingRecordForm = data;
      this.bookingRecordForm.amount = data.revenue - data.expenditure;
    }

    this.bookingRecordForm.accountId = this.$route.params.accountId;
    var app = document.querySelector("#app"); // add class for Overlay

    app.classList.add("overlay");
  },
  destroyed: function destroyed() {
    var app = document.querySelector("#app"); // remove class for Overlay

    app.classList.remove("overlay");
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/dashboard/booking-records/BookingRecordForm.vue?vue&type=template&id=89e34e6a&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/dashboard/booking-records/BookingRecordForm.vue?vue&type=template&id=89e34e6a& ***!
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
    _c("div", { staticClass: "modal-content" }, [
      _c("div", { staticClass: "modal-header" }, [
        _vm.editMode ? _c("h3", [_vm._v("Buchung Bearbeiten")]) : _vm._e(),
        _vm._v(" "),
        !_vm.editMode ? _c("h3", [_vm._v("Buchung Erstellen")]) : _vm._e(),
        _vm._v(" "),
        _c("button", { on: { click: _vm.handleGoBack } }, [_vm._v("×")])
      ]),
      _vm._v(" "),
      _c("form", { attrs: { enctype: "multipart/form-data" } }, [
        _c("div", { staticClass: "modal-body" }, [
          _c("div", { staticClass: "form-group" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.bookingRecordForm.name,
                  expression: "bookingRecordForm.name"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "text",
                id: "name",
                name: "name",
                placeholder: "Buchungssatz Name"
              },
              domProps: { value: _vm.bookingRecordForm.name },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.bookingRecordForm, "name", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.errors && _vm.errors.name
              ? _c("span", { staticClass: "error-msg" }, [
                  _vm._v(_vm._s(_vm.errors.name[0]))
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _vm._m(1),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.bookingRecordForm.date,
                  expression: "bookingRecordForm.date"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "date", id: "date", name: "date" },
              domProps: { value: _vm.bookingRecordForm.date },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.bookingRecordForm, "date", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.errors && _vm.errors.date
              ? _c("span", { staticClass: "error-msg" }, [
                  _vm._v(_vm._s(_vm.errors.date[0]))
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group split-2" }, [
            _vm._m(2),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.bookingRecordForm.amount,
                  expression: "bookingRecordForm.amount"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "number", id: "amount", name: "amount" },
              domProps: { value: _vm.bookingRecordForm.amount },
              on: {
                input: [
                  function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.bookingRecordForm,
                      "amount",
                      $event.target.value
                    )
                  },
                  _vm.handleTaxCalculation
                ]
              }
            }),
            _vm._v(" "),
            _vm.errors && _vm.errors.amount
              ? _c("span", { staticClass: "error-msg" }, [
                  _vm._v(_vm._s(_vm.errors.amount[0]))
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group split-2" }, [
            _c("label", { attrs: { for: "tax" } }, [_vm._v("Ust. in Prozent")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.bookingRecordForm.tax,
                  expression: "bookingRecordForm.tax"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "number", id: "tax", name: "tax" },
              domProps: { value: _vm.bookingRecordForm.tax },
              on: {
                input: [
                  function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.bookingRecordForm, "tax", $event.target.value)
                  },
                  _vm.handleTaxCalculation
                ]
              }
            }),
            _vm._v(" "),
            _vm.errors && _vm.errors.amount
              ? _c("span", { staticClass: "error-msg" }, [
                  _vm._v(_vm._s(_vm.errors.amount[0]))
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group split-2" }, [
            _c("label", { attrs: { for: "taxAmount" } }, [
              _vm._v("USt Betrag")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.bookingRecordForm.tax_amount,
                  expression: "bookingRecordForm.tax_amount"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "number", id: "taxAmount", name: "taxAmount" },
              domProps: { value: _vm.bookingRecordForm.tax_amount },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(
                    _vm.bookingRecordForm,
                    "tax_amount",
                    $event.target.value
                  )
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "file" } }, [
              _vm._v("Rechnung Anhang")
            ]),
            _vm._v(" "),
            _vm.fileSizeError
              ? _c("span", { staticClass: "error-msg" }, [
                  _vm._v(
                    "Die Datei muss kleiner als 2mb sein! (Nur .jpg oder .png) "
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-primary btn-icon",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    return _vm.$refs.file.click()
                  }
                }
              },
              [
                _c("i", { staticClass: "icon-upload" }),
                _vm._v(" "),
                _c("span", { staticClass: "mr-1" }, [_vm._v("Upload")]),
                _vm._v(" "),
                _vm.bookingRecordForm.imageFile != null
                  ? _c("i", { staticClass: "icon-checked" })
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
            _c("input", {
              ref: "file",
              staticClass: "file-upload",
              attrs: { type: "file", id: "file", name: "image" },
              on: { change: _vm.handleFileSelect }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _vm._m(3),
            _vm._v(" "),
            _vm.errors && _vm.errors.description
              ? _c("span", { staticClass: "error-msg" }, [
                  _vm._v(_vm._s(_vm.errors.description[0]))
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.bookingRecordForm.description,
                  expression: "bookingRecordForm.description"
                }
              ],
              attrs: {
                name: "description",
                id: "description",
                placeholder: "Beschreibung"
              },
              domProps: { value: _vm.bookingRecordForm.description },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(
                    _vm.bookingRecordForm,
                    "description",
                    $event.target.value
                  )
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "modal-footer" }, [
          _c(
            "button",
            { staticClass: "btn btn-white", on: { click: _vm.handleGoBack } },
            [_vm._v("Abbrechen\n                ")]
          ),
          _vm._v(" "),
          !_vm.editMode
            ? _c(
                "button",
                {
                  staticClass: "btn btn-primary ",
                  on: { click: _vm.createBookingRecord }
                },
                [_vm._v("Erstellen\n                ")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.editMode
            ? _c(
                "button",
                {
                  staticClass: "btn btn-primary ",
                  on: { click: _vm.updateBookingRecord }
                },
                [_vm._v("Speichern\n                ")]
              )
            : _vm._e()
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "name" } }, [
      _vm._v("Buchungssatz Name "),
      _c("span", { staticClass: "red" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "date" } }, [
      _vm._v("Datum "),
      _c("span", { staticClass: "red" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "amount" } }, [
      _vm._v("Betrag "),
      _c("span", { staticClass: "red" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "description" } }, [
      _vm._v("Beschreibung "),
      _c("span", { staticClass: "red" }, [_vm._v("*")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/dashboard/booking-records/BookingRecordForm.vue":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/components/dashboard/booking-records/BookingRecordForm.vue ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BookingRecordForm_vue_vue_type_template_id_89e34e6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookingRecordForm.vue?vue&type=template&id=89e34e6a& */ "./resources/assets/js/components/dashboard/booking-records/BookingRecordForm.vue?vue&type=template&id=89e34e6a&");
/* harmony import */ var _BookingRecordForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookingRecordForm.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/dashboard/booking-records/BookingRecordForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BookingRecordForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BookingRecordForm_vue_vue_type_template_id_89e34e6a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BookingRecordForm_vue_vue_type_template_id_89e34e6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/dashboard/booking-records/BookingRecordForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/dashboard/booking-records/BookingRecordForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/assets/js/components/dashboard/booking-records/BookingRecordForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookingRecordForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BookingRecordForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/dashboard/booking-records/BookingRecordForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookingRecordForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/dashboard/booking-records/BookingRecordForm.vue?vue&type=template&id=89e34e6a&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/assets/js/components/dashboard/booking-records/BookingRecordForm.vue?vue&type=template&id=89e34e6a& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookingRecordForm_vue_vue_type_template_id_89e34e6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BookingRecordForm.vue?vue&type=template&id=89e34e6a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/dashboard/booking-records/BookingRecordForm.vue?vue&type=template&id=89e34e6a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookingRecordForm_vue_vue_type_template_id_89e34e6a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookingRecordForm_vue_vue_type_template_id_89e34e6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
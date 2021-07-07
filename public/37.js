(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/dashboard/passbook/PassbookForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/dashboard/passbook/PassbookForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utility_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utility/mixins */ "./resources/assets/js/utility/mixins.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PassbookForm",
  mixins: [_utility_mixins__WEBPACK_IMPORTED_MODULE_0__["default"]],
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
    errors: 'getErrors',
    currencies: 'getCurrencies'
  }),
  data: function data() {
    return {
      editMode: false,
      fileSizeError: false,
      passbookForm: {
        name: '',
        amount: 0,
        description: '',
        currency: 'EUR'
      }
    };
  },
  methods: {
    //Create Passbook - Erstellt Sparkonto
    createPassbook: function createPassbook(event) {
      event.preventDefault();
      var payload = this.passbookForm;
      this.$store.dispatch('createPassbook', payload);
    },
    //Update Passbook - Update Sparkonto
    updatePassbook: function updatePassbook(event) {
      event.preventDefault();
      var payload = this.passbookForm;
      this.$store.dispatch('updatePassbook', payload);
    }
  },
  created: function created() {
    this.$store.commit('resetErrors');
    var app = document.querySelector("#app"); // add class for Overlay

    app.classList.add("overlay"); //set Form from passbook - setzt das Formular von Sparkonto

    if (this.$route.params.passbookId !== undefined) {
      var data = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.clone(this.$store.getters.getPassbookById(this.$route.params.passbookId));

      this.editMode = true;
      this.passbookForm = data;
      this.passbookForm.amount = data.savings_target;
    }
  },
  destroyed: function destroyed() {
    var app = document.querySelector("#app"); // remove class for Overlay

    app.classList.remove("overlay");
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/dashboard/passbook/PassbookForm.vue?vue&type=template&id=15adc81e&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/dashboard/passbook/PassbookForm.vue?vue&type=template&id=15adc81e& ***!
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
        _vm.editMode ? _c("h3", [_vm._v("Sparkonto Bearbeiten")]) : _vm._e(),
        _vm._v(" "),
        !_vm.editMode ? _c("h3", [_vm._v("Sparkonto Erstellen")]) : _vm._e(),
        _vm._v(" "),
        _c("button", { on: { click: _vm.handleGoDashboard } }, [_vm._v("×")])
      ]),
      _vm._v(" "),
      _c("form", [
        _c("div", { staticClass: "modal-body" }, [
          _c("div", { staticClass: "form-group" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.passbookForm.name,
                  expression: "passbookForm.name"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "text",
                id: "name",
                name: "name",
                placeholder: "Sparkonto Name"
              },
              domProps: { value: _vm.passbookForm.name },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.passbookForm, "name", $event.target.value)
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
          _c("div", { staticClass: "form-group split-2" }, [
            _vm._m(1),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.passbookForm.amount,
                  expression: "passbookForm.amount"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "number", id: "amount", name: "amount" },
              domProps: { value: _vm.passbookForm.amount },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.passbookForm, "amount", $event.target.value)
                }
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
          _c("div", { staticClass: "form-group" }, [
            _c("div", { staticClass: "split-2" }, [
              _vm._m(2),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.passbookForm.currency,
                      expression: "passbookForm.currency"
                    }
                  ],
                  staticClass: "form-control-select",
                  attrs: { id: "currency" },
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.passbookForm,
                        "currency",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                _vm._l(_vm.currencies, function(value, currency) {
                  return _c(
                    "option",
                    {
                      domProps: {
                        selected: _vm.passbookForm.currency === currency,
                        value: currency
                      }
                    },
                    [
                      _vm._v(
                        _vm._s(currency) + "\n                            "
                      )
                    ]
                  )
                }),
                0
              )
            ])
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
                  value: _vm.passbookForm.description,
                  expression: "passbookForm.description"
                }
              ],
              attrs: {
                name: "description",
                placeholder: "Beschreibung",
                id: "description"
              },
              domProps: { value: _vm.passbookForm.description },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.passbookForm, "description", $event.target.value)
                }
              }
            })
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
            [_vm._v("Abbrechen\n                ")]
          ),
          _vm._v(" "),
          !_vm.editMode
            ? _c(
                "button",
                {
                  staticClass: "btn btn-primary ",
                  on: { click: _vm.createPassbook }
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
                  on: { click: _vm.updatePassbook }
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
      _vm._v("Name "),
      _c("span", { staticClass: "red" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "amount" } }, [
      _vm._v("Ziel Betrag "),
      _c("span", { staticClass: "red" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "currency" } }, [
      _vm._v("Währung "),
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

/***/ "./resources/assets/js/components/dashboard/passbook/PassbookForm.vue":
/*!****************************************************************************!*\
  !*** ./resources/assets/js/components/dashboard/passbook/PassbookForm.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PassbookForm_vue_vue_type_template_id_15adc81e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PassbookForm.vue?vue&type=template&id=15adc81e& */ "./resources/assets/js/components/dashboard/passbook/PassbookForm.vue?vue&type=template&id=15adc81e&");
/* harmony import */ var _PassbookForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PassbookForm.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/dashboard/passbook/PassbookForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PassbookForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PassbookForm_vue_vue_type_template_id_15adc81e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PassbookForm_vue_vue_type_template_id_15adc81e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/dashboard/passbook/PassbookForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/dashboard/passbook/PassbookForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/js/components/dashboard/passbook/PassbookForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PassbookForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PassbookForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/dashboard/passbook/PassbookForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PassbookForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/dashboard/passbook/PassbookForm.vue?vue&type=template&id=15adc81e&":
/*!***********************************************************************************************************!*\
  !*** ./resources/assets/js/components/dashboard/passbook/PassbookForm.vue?vue&type=template&id=15adc81e& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PassbookForm_vue_vue_type_template_id_15adc81e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PassbookForm.vue?vue&type=template&id=15adc81e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/dashboard/passbook/PassbookForm.vue?vue&type=template&id=15adc81e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PassbookForm_vue_vue_type_template_id_15adc81e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PassbookForm_vue_vue_type_template_id_15adc81e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/dashboard/category/Category.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/dashboard/category/Category.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utility_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utility/mixins */ "./resources/assets/js/utility/mixins.js");
/* harmony import */ var _partials_Basic_ProgressBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../partials/Basic/ProgressBar */ "./resources/assets/js/components/partials/Basic/ProgressBar.vue");
/* harmony import */ var _booking_records_BookingRecords__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../booking-records/BookingRecords */ "./resources/assets/js/components/dashboard/booking-records/BookingRecords.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
  name: "Category",
  mixins: [_utility_mixins__WEBPACK_IMPORTED_MODULE_0__["default"]],
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])({
    category: 'getCategory',
    refreshStatus: 'getRefreshStatus'
  }),
  data: function data() {
    return {
      selectedPage: 0
    };
  },
  watch: {
    refreshStatus: function refreshStatus() {
      this.loadCategory();
    }
  },
  components: {
    'app-progressbar': _partials_Basic_ProgressBar__WEBPACK_IMPORTED_MODULE_1__["default"],
    'app-booking-records': _booking_records_BookingRecords__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  methods: {
    loadCategory: function loadCategory() {
      var payload = {
        'accountId': this.$route.params.accountId,
        'categoryId': this.$route.params.categoryId
      };
      this.$store.dispatch('loadCategory', payload);
    }
  },
  created: function created() {
    this.loadCategory();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/dashboard/category/Category.vue?vue&type=template&id=74c7f7e6&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/dashboard/category/Category.vue?vue&type=template&id=74c7f7e6& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "wrapper" },
    [
      _c("div", { staticClass: "action-nav" }, [
        _c("ul", [
          _c(
            "li",
            [
              _c(
                "router-link",
                {
                  staticClass: "btn btn-success btn-icon",
                  attrs: { to: { name: "bookingRecordCreate" } }
                },
                [
                  _c("i", { staticClass: "icon-add" }),
                  _vm._v("   Buchung "),
                  _c("span", { staticClass: "visually-hidden" }, [
                    _vm._v("erstellen")
                  ])
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            { staticClass: "mobile-hidden" },
            [
              _c(
                "router-link",
                {
                  staticClass: "btn btn-success btn-icon",
                  attrs: { to: { name: "importCSV" } }
                },
                [
                  _c("i", { staticClass: "icon-upload" }),
                  _vm._v("\n                CSV Import\n            ")
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c(
                "router-link",
                {
                  staticClass: "btn btn-warning btn-icon",
                  attrs: { to: { name: "categoryEdit" } }
                },
                [
                  _c("i", { staticClass: "icon-pencil-edit-button" }),
                  _vm._v("\n                Bearbeiten\n            ")
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c(
                "router-link",
                {
                  staticClass: "btn btn-danger btn-icon",
                  attrs: { to: { name: "categoryDelete" } }
                },
                [
                  _c("i", { staticClass: "icon-rubbish-bin-delete-button" }),
                  _vm._v("\n                Löschen\n            ")
                ]
              )
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "layout-dashboard" }, [
        _c(
          "div",
          { staticClass: "main-content" },
          [
            _c("div", { staticClass: "overview" }, [
              _c("h2", { class: "bg-" + _vm.category.color }, [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.category.name) +
                    "\n                "
                )
              ]),
              _vm._v(" "),
              _c("ul", { staticClass: "stats" }, [
                _c("li", { staticClass: "revenue" }, [
                  _c("span", [_vm._v("Einnahmen")]),
                  _vm._v(" "),
                  _c("span", [
                    _vm._v(
                      _vm._s(
                        _vm.formatCurrency(
                          _vm.category.revenue,
                          _vm.category.currency
                        )
                      )
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "expenditure" }, [
                  _c("span", [_vm._v("Ausgaben")]),
                  _vm._v(" "),
                  _c("span", [
                    _vm._v(
                      _vm._s(
                        _vm.formatCurrency(
                          _vm.category.expenditure,
                          _vm.category.currency
                        )
                      )
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "total" }, [
                  _c("span", [_vm._v("Summe")]),
                  _vm._v(" "),
                  _c("span", [
                    _vm._v(
                      _vm._s(
                        _vm.formatCurrency(
                          _vm.category.total,
                          _vm.category.currency
                        )
                      )
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("app-booking-records")
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "sidebar" }, [
          _c("div", { staticClass: "card" }, [
            _c("h3", [_vm._v("Einnahmen | Ausgaben")]),
            _vm._v(" "),
            _c("ul", { staticClass: "statistic" }, [
              _c(
                "li",
                [
                  _c(
                    "app-progressbar",
                    {
                      attrs: {
                        value: _vm.calcProcent(
                          _vm.category.revenue,
                          _vm.category.revenue + _vm.category.expenditure,
                          2
                        ),
                        "bar-class": "bg-green"
                      }
                    },
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(
                            _vm.calcProcent(
                              _vm.category.revenue,
                              _vm.category.revenue + _vm.category.expenditure,
                              2
                            )
                          ) +
                          "%\n                        "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                [
                  _c(
                    "app-progressbar",
                    {
                      attrs: {
                        value: _vm.calcProcent(
                          _vm.category.expenditure,
                          _vm.category.revenue + _vm.category.expenditure,
                          2
                        ),
                        "bar-class": "bg-red"
                      }
                    },
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(
                            _vm.calcProcent(
                              _vm.category.expenditure,
                              _vm.category.revenue + _vm.category.expenditure,
                              2
                            )
                          ) +
                          "%\n                        "
                      )
                    ]
                  )
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card" }, [
            _c("h3", [_vm._v("Beschreibung")]),
            _vm._v(" "),
            _c("p", { staticClass: "description card-body" }, [
              _vm._v(" " + _vm._s(_vm.category.description) + " ")
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("router-view")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/dashboard/category/Category.vue":
/*!************************************************************************!*\
  !*** ./resources/assets/js/components/dashboard/category/Category.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Category_vue_vue_type_template_id_74c7f7e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Category.vue?vue&type=template&id=74c7f7e6& */ "./resources/assets/js/components/dashboard/category/Category.vue?vue&type=template&id=74c7f7e6&");
/* harmony import */ var _Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Category.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/dashboard/category/Category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Category_vue_vue_type_template_id_74c7f7e6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Category_vue_vue_type_template_id_74c7f7e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/dashboard/category/Category.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/dashboard/category/Category.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/components/dashboard/category/Category.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Category.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/dashboard/category/Category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/dashboard/category/Category.vue?vue&type=template&id=74c7f7e6&":
/*!*******************************************************************************************************!*\
  !*** ./resources/assets/js/components/dashboard/category/Category.vue?vue&type=template&id=74c7f7e6& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_74c7f7e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Category.vue?vue&type=template&id=74c7f7e6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/dashboard/category/Category.vue?vue&type=template&id=74c7f7e6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_74c7f7e6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_74c7f7e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
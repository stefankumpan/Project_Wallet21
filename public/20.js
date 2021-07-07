(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/admin/packages/Packages.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/admin/packages/Packages.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _utility_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utility/mixins */ "./resources/assets/js/utility/mixins.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Packages",
  mixins: [_utility_mixins__WEBPACK_IMPORTED_MODULE_1__["default"]],
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    packages: 'getAdminPackages',
    currentPage: 'getAdminPackagesCurrentPage',
    lastPage: 'getAdminPackagesLastPage',
    refreshStatus: 'getRefreshStatus'
  }),
  data: function data() {
    return {
      pagination: 10,
      search: '',
      paginationOptions: ['10', '25', "50", "100"]
    };
  },
  methods: {
    loadPackages: function loadPackages() {
      var payload = {
        'pagination': this.pagination,
        'page': 1
      };
      this.$store.dispatch('adminPackagesPagination', payload);
    },
    handlePagination: function handlePagination(page) {
      var payload = {
        'pagination': this.pagination,
        'page': page
      }; // console.log(payload);

      this.$store.dispatch('adminPackagesPagination', payload);
    },
    searchOrder: function searchOrder(event) {
      // console.log('search', this.search.length);
      if (this.search.length > 1 && this.search !== undefined) {
        var payload = {
          'pagination': this.pagination,
          'search': this.search,
          'page': this.currentPage
        };
        this.$store.dispatch('adminPackagesSearch', payload);
      } else {
        this.loadPackages();
      }
    }
  },
  created: function created() {
    this.loadPackages();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/admin/packages/Packages.vue?vue&type=template&id=731bd3e8&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/admin/packages/Packages.vue?vue&type=template&id=731bd3e8& ***!
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
  return _c("div", { staticClass: "wrapper" }, [
    _c("h3", { staticClass: "admin-dashboard-headline" }, [_vm._v("Pakete")]),
    _vm._v(" "),
    _c("div", { staticClass: "data-table" }, [
      _c("div", { staticClass: "admin-options-bar" }, [
        _c("div", { staticClass: "pagination-select-box" }, [
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.pagination,
                  expression: "pagination"
                }
              ],
              attrs: {
                name: "pagination",
                title: "pagination",
                id: "pagination"
              },
              on: {
                change: [
                  function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.pagination = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  },
                  _vm.loadPackages
                ]
              }
            },
            _vm._l(_vm.paginationOptions, function(option) {
              return _c(
                "option",
                {
                  domProps: {
                    value: option,
                    selected: option === _vm.pagination
                  }
                },
                [_vm._v(_vm._s(option) + "\n                    ")]
              )
            }),
            0
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          [
            _c(
              "router-link",
              {
                staticClass: "btn btn-success btn-icon",
                attrs: { to: { name: "adminPackagesCreate" } }
              },
              [
                _c("i", { staticClass: "icon-add" }),
                _vm._v(" Paket "),
                _c("span", { staticClass: "visually-hidden" }, [
                  _vm._v("erstellen")
                ])
              ]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", [
        _c(
          "ul",
          { staticClass: "price-list" },
          _vm._l(_vm.packages.data, function(singlePackage) {
            return _c("li", { staticClass: "item" }, [
              _c("div", { staticClass: "offer" }, [
                _c("h3", [_vm._v(_vm._s(singlePackage.name))]),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "package" },
                  _vm._l(singlePackage.info, function(item) {
                    return _c("li", [
                      _c("i", { staticClass: "icon-checked" }),
                      _vm._v(_vm._s(item))
                    ])
                  }),
                  0
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "price-info" },
                [
                  _c("span", { staticClass: "amount" }, [
                    _vm._v(
                      _vm._s(
                        _vm.formatCurrency(singlePackage.discount_price, "EUR")
                      )
                    )
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "interval" }, [
                    _vm._v("pro Monat")
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "discount" }, [
                    _vm._v(
                      "Sparen Sie " +
                        _vm._s(
                          _vm.round(
                            _vm.calculationDiscount(
                              singlePackage.price,
                              singlePackage.discount_price
                            ),
                            0
                          )
                        ) +
                        "%"
                    )
                  ]),
                  _vm._v(" "),
                  singlePackage.discount_price < singlePackage.price
                    ? _c("p", { staticClass: "summe" }, [
                        _c("span", { staticClass: "line-through red" }, [
                          _vm._v(
                            _vm._s(
                              _vm.formatCurrency(
                                singlePackage.price * singlePackage.run_time,
                                "EUR"
                              )
                            )
                          )
                        ]),
                        _vm._v(
                          " " +
                            _vm._s(
                              _vm.formatCurrency(
                                singlePackage.discount_price *
                                  singlePackage.run_time,
                                "EUR"
                              )
                            ) +
                            "\n                        "
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  singlePackage.discount_price >= singlePackage.price
                    ? _c("p", { staticClass: "summe" }, [
                        _vm._v(
                          "\n                            Summe " +
                            _vm._s(
                              _vm.formatCurrency(
                                singlePackage.discount_price *
                                  singlePackage.run_time,
                                "EUR"
                              )
                            ) +
                            "\n                        "
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-primary btn-full",
                      attrs: {
                        to: {
                          name: "adminPackagesEdit",
                          params: { packageId: singlePackage.id }
                        }
                      }
                    },
                    [_vm._v("Bearbeiten")]
                  )
                ],
                1
              )
            ])
          }),
          0
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "pagination" }, [
        _c("div", { staticClass: "pagination-numbers" }, [
          _c(
            "ul",
            { staticClass: "pagination-number-list" },
            _vm._l(_vm.lastPage, function(i) {
              return _c("li", { class: { active: i === _vm.currentPage } }, [
                _c(
                  "a",
                  {
                    on: {
                      click: function($event) {
                        return _vm.handlePagination(i)
                      }
                    }
                  },
                  [_vm._v(_vm._s(i))]
                )
              ])
            }),
            0
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "pagination-button" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-white back",
              attrs: { disabled: _vm.currentPage - 1 === 0 },
              on: {
                click: function($event) {
                  return _vm.handlePagination(_vm.currentPage - 1)
                }
              }
            },
            [
              _c("i", { staticClass: "icon-left-arrow" }),
              _vm._v("\n                    Zurück\n                ")
            ]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-white  next",
              attrs: { disabled: _vm.currentPage === _vm.lastPage },
              on: {
                click: function($event) {
                  return _vm.handlePagination(_vm.currentPage + 1)
                }
              }
            },
            [
              _vm._v("\n                    Weiter\n                    "),
              _c("i", { staticClass: "icon-right-arrow" })
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/admin/packages/Packages.vue":
/*!********************************************************************!*\
  !*** ./resources/assets/js/components/admin/packages/Packages.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Packages_vue_vue_type_template_id_731bd3e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Packages.vue?vue&type=template&id=731bd3e8& */ "./resources/assets/js/components/admin/packages/Packages.vue?vue&type=template&id=731bd3e8&");
/* harmony import */ var _Packages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Packages.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/admin/packages/Packages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Packages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Packages_vue_vue_type_template_id_731bd3e8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Packages_vue_vue_type_template_id_731bd3e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/admin/packages/Packages.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/admin/packages/Packages.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/components/admin/packages/Packages.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Packages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Packages.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/admin/packages/Packages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Packages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/admin/packages/Packages.vue?vue&type=template&id=731bd3e8&":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/components/admin/packages/Packages.vue?vue&type=template&id=731bd3e8& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Packages_vue_vue_type_template_id_731bd3e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Packages.vue?vue&type=template&id=731bd3e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/admin/packages/Packages.vue?vue&type=template&id=731bd3e8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Packages_vue_vue_type_template_id_731bd3e8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Packages_vue_vue_type_template_id_731bd3e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
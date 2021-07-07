(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/admin/packages/PackageForm.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/admin/packages/PackageForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _utility_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utility/mixins */ "./resources/assets/js/utility/mixins.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "PackageForm",
  mixins: [_utility_mixins__WEBPACK_IMPORTED_MODULE_2__["default"]],
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
    errors: 'getErrors'
  }),
  data: function data() {
    return {
      editMode: false,
      reRenderFeature: 0,
      "package": {
        "id": 1,
        "name": "",
        "info": {},
        "run_time": 0,
        "numbering": 0,
        "price": "0.00",
        "discount_price": "0.00"
      },
      newFeature: ''
    };
  },
  methods: {
    createPackage: function createPackage(event) {
      event.preventDefault();
      this.$store.dispatch('adminCreatePackage', this["package"]);
    },
    updatePackage: function updatePackage(event) {
      event.preventDefault();
      this.$store.dispatch('adminUpdatePackage', this["package"]);
    },
    deletePackage: function deletePackage(event) {
      event.preventDefault();
      this.$store.dispatch('adminDeletePackage', this["package"]);
    },
    addFeatureInfo: function addFeatureInfo() {
      var idx = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.size(this["package"].info) + 1; // console.log(idx);
      // console.log(this.newFeature);

      this["package"].info[idx] = this.newFeature;
      this.reRenderFeature += 1;
    },
    removeFeature: function removeFeature(e) {
      delete this["package"].info[e];
      this.reRenderFeature += 1;
    }
  },
  created: function created() {
    // console.log(this.$route.params.packageId);
    if (this.$route.params.packageId !== undefined) {
      this["package"] = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.clone(this.$store.getters.filterAdminPackageById(this.$route.params.packageId));
      this.editMode = true;
    } else {
      this.editMode = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/admin/packages/PackageForm.vue?vue&type=template&id=77dd95ff&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/admin/packages/PackageForm.vue?vue&type=template&id=77dd95ff& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "card" }, [
      _c("h2", [_vm._v("Packet Übersicht")]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("form", [
          _c("div", { staticClass: "form-group split-2" }, [
            _c("label", { attrs: { for: "packageName" } }, [
              _vm._v("Paket Name")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.package.name,
                  expression: "package.name"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "text",
                id: "packageName",
                placeholder: "Paket Name"
              },
              domProps: { value: _vm.package.name },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.package, "name", $event.target.value)
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
            _c("label", { attrs: { for: "packageRunTime" } }, [
              _vm._v("Laufzeit [Monat]")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.package.run_time,
                  expression: "package.run_time"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "number", id: "packageRunTime", placeholder: "1" },
              domProps: { value: _vm.package.run_time },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.package, "run_time", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.errors && _vm.errors.rune_time
              ? _c("span", { staticClass: "error-msg" }, [
                  _vm._v(_vm._s(_vm.errors.run_time[0]))
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group split-2" }, [
            _c("label", { attrs: { for: "numbering" } }, [
              _vm._v("Ordnungs Nr ")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.package.numbering,
                  expression: "package.numbering"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "number", id: "numbering", placeholder: "1" },
              domProps: { value: _vm.package.numbering },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.package, "numbering", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group split-2" }, [
            _c("label", { attrs: { for: "price" } }, [
              _vm._v("Preis (Preis pro Monat)")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.package.price,
                  expression: "package.price"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "number", id: "price" },
              domProps: { value: _vm.package.price },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.package, "price", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.errors && _vm.errors.price
              ? _c("span", { staticClass: "error-msg" }, [
                  _vm._v(_vm._s(_vm.errors.price[0]))
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group split-2" }, [
            _c("label", { attrs: { for: "discountPrice" } }, [
              _vm._v("Rabbat Preis (Preis pro Monat)")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.package.discount_price,
                  expression: "package.discount_price"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "number", id: "discountPrice" },
              domProps: { value: _vm.package.discount_price },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.package, "discount_price", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.errors && _vm.errors.discount_price
              ? _c("span", { staticClass: "error-msg" }, [
                  _vm._v(_vm._s(_vm.errors.discount_price[0]))
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group split-2" }, [
            _c("div", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.reRenderFeature,
                    expression: "reRenderFeature"
                  }
                ],
                attrs: { type: "hidden" },
                domProps: { value: _vm.reRenderFeature },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.reRenderFeature = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "admin-package-feature" },
                _vm._l(_vm.package.info, function(item, index) {
                  return _c("li", { key: index, staticClass: "feature-item" }, [
                    _vm._v(
                      "\n                                " +
                        _vm._s(item) +
                        "\n                                "
                    ),
                    _c(
                      "span",
                      {
                        staticClass: "close",
                        on: {
                          click: function($event) {
                            return _vm.removeFeature(index)
                          }
                        }
                      },
                      [_vm._v("×")]
                    )
                  ])
                }),
                0
              )
            ]),
            _vm._v(" "),
            _c("div", [
              _c("label", { attrs: { for: "featureInfo" } }, [
                _vm._v("Feature")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.newFeature,
                    expression: "newFeature"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", id: "featureInfo" },
                domProps: { value: _vm.newFeature },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.newFeature = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-success mt-1 text-right",
                  attrs: { type: "button" },
                  on: { click: _vm.addFeatureInfo }
                },
                [
                  _vm._v(
                    "\n                            Hinzufügen\n                        "
                  )
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _vm.editMode
            ? _c("div", { staticClass: "form-group" }, [
                _c("p", [_vm._v("Möchten Sie das Paket Löschen?")]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-danger btn-icon",
                    on: { click: _vm.deletePackage }
                  },
                  [
                    _c("i", { staticClass: "icon-rubbish-bin-delete-button" }),
                    _vm._v("Löschen\n                    ")
                  ]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "space-between" },
            [
              _c(
                "router-link",
                {
                  staticClass: "btn btn-white",
                  attrs: { to: { name: "adminPackages" } }
                },
                [_vm._v("Zurück")]
              ),
              _vm._v(" "),
              !_vm.editMode
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      on: { click: _vm.createPackage }
                    },
                    [_vm._v("Erstellen")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.editMode
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      on: { click: _vm.updatePackage }
                    },
                    [_vm._v("Speichern")]
                  )
                : _vm._e()
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/admin/packages/PackageForm.vue":
/*!***********************************************************************!*\
  !*** ./resources/assets/js/components/admin/packages/PackageForm.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PackageForm_vue_vue_type_template_id_77dd95ff___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PackageForm.vue?vue&type=template&id=77dd95ff& */ "./resources/assets/js/components/admin/packages/PackageForm.vue?vue&type=template&id=77dd95ff&");
/* harmony import */ var _PackageForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PackageForm.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/admin/packages/PackageForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PackageForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PackageForm_vue_vue_type_template_id_77dd95ff___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PackageForm_vue_vue_type_template_id_77dd95ff___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/admin/packages/PackageForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/admin/packages/PackageForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/components/admin/packages/PackageForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PackageForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PackageForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/admin/packages/PackageForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PackageForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/admin/packages/PackageForm.vue?vue&type=template&id=77dd95ff&":
/*!******************************************************************************************************!*\
  !*** ./resources/assets/js/components/admin/packages/PackageForm.vue?vue&type=template&id=77dd95ff& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PackageForm_vue_vue_type_template_id_77dd95ff___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PackageForm.vue?vue&type=template&id=77dd95ff& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/admin/packages/PackageForm.vue?vue&type=template&id=77dd95ff&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PackageForm_vue_vue_type_template_id_77dd95ff___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PackageForm_vue_vue_type_template_id_77dd95ff___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
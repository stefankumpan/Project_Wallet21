(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/admin/icons/Icons.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/admin/icons/Icons.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _utility_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utility/config */ "./resources/assets/js/utility/config.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Icons",
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    icons: 'getAdminIcons',
    currentPage: 'getAdminIconsCurrentPage',
    lastPage: 'getAdminIconsLastPage',
    refreshStatus: 'getRefreshStatus'
  }),
  data: function data() {
    return {
      testTrue: true,
      AppUrl: _utility_config__WEBPACK_IMPORTED_MODULE_1__["AppUrl"],
      selectedPage: 0,
      pagination: 10,
      search: '',
      paginationOptions: ['10', '25', "50", "100"]
    };
  },
  methods: {
    loadIcons: function loadIcons() {
      var payload = this.pagination;
      this.$store.dispatch('adminLoadIcons', payload);
    },
    handlePagination: function handlePagination(page) {
      var payload = {
        'pagination': this.pagination,
        'page': page
      };
      this.$store.dispatch('adminIconsPagination', payload);
    }
  },
  created: function created() {
    this.loadIcons();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/admin/icons/Icons.vue?vue&type=template&id=7c44b57e&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/admin/icons/Icons.vue?vue&type=template&id=7c44b57e& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    _c("h2", { staticClass: "admin-dashboard-headline" }, [_vm._v("Icons")]),
    _vm._v(" "),
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
                _vm.loadIcons
              ]
            }
          },
          _vm._l(_vm.paginationOptions, function(option) {
            return _c(
              "option",
              {
                domProps: { value: option, selected: option === _vm.pagination }
              },
              [_vm._v(_vm._s(option) + "\n                ")]
            )
          }),
          0
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "admin-icons-action" },
        [
          _c(
            "router-link",
            {
              staticClass: "btn btn-success btn-icon",
              attrs: { to: { name: "adminIconsCreate" } }
            },
            [
              _c("i", { staticClass: "icon-add" }),
              _vm._v(" Icon "),
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
    _c(
      "ul",
      { staticClass: "admin-icons-list" },
      _vm._l(_vm.icons.data, function(icon) {
        return _c(
          "li",
          [
            _c(
              "router-link",
              {
                attrs: {
                  to: { name: "adminIconsEdit", params: { iconId: icon.id } }
                }
              },
              [
                _c("img", {
                  attrs: { src: _vm.AppUrl + icon.path, alt: icon.name }
                })
              ]
            )
          ],
          1
        )
      }),
      0
    ),
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
            _vm._v("\n                Zurück\n            ")
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
            _vm._v("\n                Weiter\n                "),
            _c("i", { staticClass: "icon-right-arrow" })
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/admin/icons/Icons.vue":
/*!**************************************************************!*\
  !*** ./resources/assets/js/components/admin/icons/Icons.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Icons_vue_vue_type_template_id_7c44b57e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icons.vue?vue&type=template&id=7c44b57e& */ "./resources/assets/js/components/admin/icons/Icons.vue?vue&type=template&id=7c44b57e&");
/* harmony import */ var _Icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icons.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/admin/icons/Icons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Icons_vue_vue_type_template_id_7c44b57e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Icons_vue_vue_type_template_id_7c44b57e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/admin/icons/Icons.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/admin/icons/Icons.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/components/admin/icons/Icons.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Icons.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/admin/icons/Icons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/admin/icons/Icons.vue?vue&type=template&id=7c44b57e&":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/components/admin/icons/Icons.vue?vue&type=template&id=7c44b57e& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_template_id_7c44b57e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Icons.vue?vue&type=template&id=7c44b57e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/admin/icons/Icons.vue?vue&type=template&id=7c44b57e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_template_id_7c44b57e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_template_id_7c44b57e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
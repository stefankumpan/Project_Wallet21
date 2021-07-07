(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/admin/users/Users.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/admin/users/Users.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Users",
  mixins: [_utility_mixins__WEBPACK_IMPORTED_MODULE_1__["default"]],
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    users: 'getUsers',
    currentPage: 'getUsersCurrentPage',
    lastPage: 'getUsersLastPage',
    refreshStatus: 'getRefreshStatus'
  }),
  data: function data() {
    return {
      selectedPage: 0,
      pagination: 10,
      search: '',
      paginationOptions: ['10', '25', "50", "100"]
    };
  },
  methods: {
    loadUsers: function loadUsers() {
      var payload = {
        'pagination': this.pagination,
        'page': 1
      };
      this.$store.dispatch('adminLoadUsers', payload);
    },
    handlePagination: function handlePagination(page) {
      var payload = {
        'pagination': this.pagination,
        'page': page
      };
      this.$store.dispatch('adminUsersPagination', payload);
    },
    searchUsers: function searchUsers() {
      if (this.search.length > 1 && this.search !== undefined) {
        var payload = {
          'pagination': this.pagination,
          'page': this.currentPage,
          'search': this.search
        };
        this.$store.dispatch('adminUsersSearch', payload);
      } else {
        this.loadUsers();
      }
    }
  },
  created: function created() {
    this.loadUsers();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/admin/users/Users.vue?vue&type=template&id=052fb2da&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/admin/users/Users.vue?vue&type=template&id=052fb2da& ***!
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
    _c("h3", { staticClass: "admin-dashboard-headline" }, [_vm._v("Users")]),
    _vm._v(" "),
    _c("div", { staticClass: "data-table" }, [
      _c("div", { staticClass: "data-table-action-bar" }, [
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
                title: "pagination",
                name: "pagination",
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
                  _vm.loadUsers
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
        _c("div", { staticClass: "search-box" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.search,
                expression: "search"
              }
            ],
            staticClass: "search-field",
            attrs: { type: "text", id: "search", placeholder: "User Suchen" },
            domProps: { value: _vm.search },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.search = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c(
            "button",
            { attrs: { type: "button" }, on: { click: _vm.searchUsers } },
            [_c("i", { staticClass: "icon-searching-magnifying-glass" })]
          )
        ])
      ]),
      _vm._v(" "),
      _c("table", { staticClass: "table" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.users.data, function(user) {
            return _c("tr", [
              _c("td", [
                _vm._v(
                  "\n                    " +
                    _vm._s(user.id) +
                    "\n                "
                )
              ]),
              _vm._v(" "),
              _c("td", [
                _vm._v(
                  "\n                    " +
                    _vm._s(user.name) +
                    "\n                "
                )
              ]),
              _vm._v(" "),
              _c(
                "td",
                [
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: {
                          name: "adminUsersEdit",
                          params: { userId: user.id }
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s(user.email) +
                          "\n                    "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("td", [
                _vm._v(
                  "\n                    " +
                    _vm._s(user.created_at) +
                    "\n                "
                )
              ])
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
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("E-Mail")]),
        _vm._v(" "),
        _c("th", [_vm._v("Registrierungs Datum")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/admin/users/Users.vue":
/*!**************************************************************!*\
  !*** ./resources/assets/js/components/admin/users/Users.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_vue_vue_type_template_id_052fb2da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=052fb2da& */ "./resources/assets/js/components/admin/users/Users.vue?vue&type=template&id=052fb2da&");
/* harmony import */ var _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/admin/users/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Users_vue_vue_type_template_id_052fb2da___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Users_vue_vue_type_template_id_052fb2da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/admin/users/Users.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/admin/users/Users.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/components/admin/users/Users.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/admin/users/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/admin/users/Users.vue?vue&type=template&id=052fb2da&":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/components/admin/users/Users.vue?vue&type=template&id=052fb2da& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_052fb2da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=template&id=052fb2da& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/admin/users/Users.vue?vue&type=template&id=052fb2da&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_052fb2da___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_052fb2da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/partials/Header/DefaultHeader.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/partials/Header/DefaultHeader.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utility_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utility/config */ "./resources/assets/js/utility/config.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "DefaultHeader",
  data: function data() {
    return {
      siteLogo: _utility_config__WEBPACK_IMPORTED_MODULE_0__["AppUrl"] + 'images/wallet-21-logo.svg',
      navShow: false
    };
  },
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
    isAuthorized: 'getIsAuthorizedStatus',
    userStatus: 'getUserStatus'
  }),
  watch: {
    '$route': function $route() {
      this.navShow = false;
    }
  },
  methods: {
    handleNavigation: function handleNavigation() {
      this.navShow = !this.navShow;
    },
    handleLogout: function handleLogout() {
      this.$store.dispatch('clientLogOut');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/partials/Header/DefaultHeader.vue?vue&type=template&id=58481402&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/partials/Header/DefaultHeader.vue?vue&type=template&id=58481402& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
  return _c("header", { staticClass: "site-header" }, [
    _c(
      "div",
      { staticClass: "site-header-container" },
      [
        _c(
          "router-link",
          { staticClass: "site-name-link", attrs: { to: { name: "home" } } },
          [
            _c("img", {
              staticClass: "site-logo",
              attrs: { src: _vm.siteLogo, alt: "Wallet 21 Logo" }
            }),
            _vm._v(" "),
            _c("h1", { staticClass: "site-name" }, [_vm._v("Wallet 21")])
          ]
        ),
        _vm._v(" "),
        _c("nav", [
          _c(
            "button",
            {
              staticClass: "main-nav-btn",
              on: { click: _vm.handleNavigation }
            },
            [
              _c("i", { staticClass: "icon-menu" }),
              _c("span", { staticClass: "visually-hidden" }, [_vm._v("menu")])
            ]
          ),
          _vm._v(" "),
          _c(
            "ul",
            {
              staticClass: "main-nav",
              class: { "main-nav-show": _vm.navShow }
            },
            [
              _vm.isAuthorized
                ? _c(
                    "li",
                    { staticClass: "main-nav-item" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "main-nav-link",
                          attrs: { to: { name: "dashboard" } }
                        },
                        [_vm._v("Dashboard")]
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.isAuthorized
                ? _c(
                    "li",
                    { staticClass: "main-nav-item" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "main-nav-link",
                          attrs: { to: { name: "userProfile" } }
                        },
                        [_vm._v("Profil")]
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.isAuthorized
                ? _c(
                    "li",
                    { staticClass: "main-nav-item" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "main-nav-link",
                          attrs: { to: { name: "home" } }
                        },
                        [_vm._v("Home")]
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "main-nav-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "main-nav-link",
                      attrs: { to: { name: "price" } }
                    },
                    [_vm._v("Preise")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              !_vm.isAuthorized
                ? _c(
                    "li",
                    { staticClass: "main-nav-item" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "main-nav-link",
                          attrs: { to: { name: "signin" } }
                        },
                        [_vm._v("Login")]
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.isAuthorized
                ? _c(
                    "li",
                    { staticClass: "main-nav-item" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "main-nav-link",
                          attrs: { to: { name: "signup" } }
                        },
                        [_vm._v("Registrieren")]
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.userStatus === "admin"
                ? _c(
                    "li",
                    { staticClass: "main-nav-item" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "main-nav-link",
                          attrs: { to: { name: "adminOverview" } }
                        },
                        [_vm._v("Admin")]
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.isAuthorized
                ? _c("li", { staticClass: "main-nav-item" }, [
                    _c(
                      "a",
                      {
                        staticClass: "main-nav-link",
                        attrs: { href: "javascript:void(0)" },
                        on: { click: _vm.handleLogout }
                      },
                      [_vm._v("Logout")]
                    )
                  ])
                : _vm._e()
            ]
          )
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/partials/Header/DefaultHeader.vue":
/*!**************************************************************************!*\
  !*** ./resources/assets/js/components/partials/Header/DefaultHeader.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DefaultHeader_vue_vue_type_template_id_58481402___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultHeader.vue?vue&type=template&id=58481402& */ "./resources/assets/js/components/partials/Header/DefaultHeader.vue?vue&type=template&id=58481402&");
/* harmony import */ var _DefaultHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultHeader.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/partials/Header/DefaultHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DefaultHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DefaultHeader_vue_vue_type_template_id_58481402___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DefaultHeader_vue_vue_type_template_id_58481402___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/partials/Header/DefaultHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/partials/Header/DefaultHeader.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/components/partials/Header/DefaultHeader.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DefaultHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/partials/Header/DefaultHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/partials/Header/DefaultHeader.vue?vue&type=template&id=58481402&":
/*!*********************************************************************************************************!*\
  !*** ./resources/assets/js/components/partials/Header/DefaultHeader.vue?vue&type=template&id=58481402& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultHeader_vue_vue_type_template_id_58481402___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DefaultHeader.vue?vue&type=template&id=58481402& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/partials/Header/DefaultHeader.vue?vue&type=template&id=58481402&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultHeader_vue_vue_type_template_id_58481402___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultHeader_vue_vue_type_template_id_58481402___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
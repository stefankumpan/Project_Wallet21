(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/admin/icons/IconForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/admin/icons/IconForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "IconForm",
  mixins: [_utility_mixins__WEBPACK_IMPORTED_MODULE_0__["default"]],
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
    errors: 'getErrors'
  }),
  data: function data() {
    return {
      editMode: false,
      fileSizeError: false,
      iconForm: {
        name: '',
        iconFile: null
      }
    };
  },
  methods: {
    // Create Icon
    createIcon: function createIcon(event) {
      event.preventDefault();
      var payload = this.iconForm;
      this.$store.dispatch('adminCreateIcon', payload);
    },
    // Update Icon
    updateIcon: function updateIcon(event) {
      event.preventDefault();
      var payload = this.iconForm;
      this.$store.dispatch('adminUpdateIcon', payload);
    },
    //Delete Icon
    deleteIcon: function deleteIcon(event) {
      event.preventDefault();
      var payload = this.iconForm;
      this.$store.dispatch('adminDeleteIcon', payload);
    },
    // File Upload
    handleFileSelect: function handleFileSelect(event) {
      var _this = this;

      var file = event.target.files[0]; // console.log(file);
      // console.log(file.type);

      if (file.size < 2097152) {
        if (file.type === "image/svg+xml") {
          this.fileSizeError = false;
          var fileReader = new FileReader();
          fileReader.readAsDataURL(event.target.files[0]);

          fileReader.onload = function (e) {
            _this.iconForm.iconFile = e.target.result;
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
    this.$store.commit('resetErrors'); // reset Errors

    var iconId = this.$route.params.iconId; // check Edit or New Create Icon

    if (iconId !== undefined) {
      this.editMode = true;
      this.iconForm = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.clone(this.$store.getters.filterAdminIconById(iconId));
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/admin/icons/IconForm.vue?vue&type=template&id=644144a9&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/admin/icons/IconForm.vue?vue&type=template&id=644144a9& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "wrapper-sm" }, [
    _c("div", { staticClass: "card" }, [
      !_vm.editMode ? _c("h2", [_vm._v("Icon Erstellen")]) : _vm._e(),
      _vm._v(" "),
      _vm.editMode ? _c("h2", [_vm._v("Icon Update")]) : _vm._e(),
      _vm._v(" "),
      _c("form", [
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "name" } }, [_vm._v("Name")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.iconForm.name,
                  expression: "iconForm.name"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", id: "name" },
              domProps: { value: _vm.iconForm.name },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.iconForm, "name", $event.target.value)
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
            _c("label", { attrs: { for: "file" } }, [_vm._v("Icon Upload")]),
            _vm._v(" "),
            _vm.errors && _vm.errors.file
              ? _c("span", { staticClass: "error-msg" }, [
                  _vm._v(_vm._s(_vm.errors.file[0]))
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.fileSizeError
              ? _c("span", { staticClass: "error-msg" }, [
                  _vm._v("Die Datei muss kleiner als 2mb sein! (Nur .svg) ")
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
                _vm.iconForm.iconFile != null
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
          _vm.editMode
            ? _c("div", { staticClass: "form-group" }, [
                _c("p", [_vm._v("Möchten sie das Icon Löschen?")]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-danger btn-icon",
                    on: { click: _vm.deleteIcon }
                  },
                  [
                    _c("i", { staticClass: "icon-rubbish-bin-delete-button" }),
                    _vm._v("Löschen")
                  ]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "space-between" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-white",
                attrs: { type: "button" },
                on: { click: _vm.handleGoBack }
              },
              [_vm._v("\n                        Zurück\n                    ")]
            ),
            _vm._v(" "),
            !_vm.editMode
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: {
                      disabled: _vm.iconForm.iconFile === null,
                      type: "button"
                    },
                    on: { click: _vm.createIcon }
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
                    attrs: { type: "button" },
                    on: { click: _vm.updateIcon }
                  },
                  [_vm._v("Speichern")]
                )
              : _vm._e()
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/admin/icons/IconForm.vue":
/*!*****************************************************************!*\
  !*** ./resources/assets/js/components/admin/icons/IconForm.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IconForm_vue_vue_type_template_id_644144a9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IconForm.vue?vue&type=template&id=644144a9& */ "./resources/assets/js/components/admin/icons/IconForm.vue?vue&type=template&id=644144a9&");
/* harmony import */ var _IconForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IconForm.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/admin/icons/IconForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _IconForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _IconForm_vue_vue_type_template_id_644144a9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _IconForm_vue_vue_type_template_id_644144a9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/admin/icons/IconForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/admin/icons/IconForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/components/admin/icons/IconForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IconForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./IconForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/admin/icons/IconForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IconForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/admin/icons/IconForm.vue?vue&type=template&id=644144a9&":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/components/admin/icons/IconForm.vue?vue&type=template&id=644144a9& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IconForm_vue_vue_type_template_id_644144a9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./IconForm.vue?vue&type=template&id=644144a9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/admin/icons/IconForm.vue?vue&type=template&id=644144a9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IconForm_vue_vue_type_template_id_644144a9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IconForm_vue_vue_type_template_id_644144a9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
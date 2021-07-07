(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/guest/Home.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/guest/Home.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utility_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utility/mixins */ "./resources/assets/js/utility/mixins.js");
/* harmony import */ var _utility_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utility/config */ "./resources/assets/js/utility/config.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Home",
  mixins: [_utility_mixins__WEBPACK_IMPORTED_MODULE_0__["default"]],
  data: function data() {
    return {
      AppUrl: _utility_config__WEBPACK_IMPORTED_MODULE_1__["AppUrl"],
      devicesImage: _utility_config__WEBPACK_IMPORTED_MODULE_1__["AppUrl"] + 'images/home/devices.png',
      passbookImage: _utility_config__WEBPACK_IMPORTED_MODULE_1__["AppUrl"] + 'images/home/passbook.svg',
      csvImport: _utility_config__WEBPACK_IMPORTED_MODULE_1__["AppUrl"] + 'images/home/csvImport.svg',
      csvExport: _utility_config__WEBPACK_IMPORTED_MODULE_1__["AppUrl"] + 'images/home/csvExport.svg',
      exchange: _utility_config__WEBPACK_IMPORTED_MODULE_1__["AppUrl"] + 'images/home/exchange.svg'
    };
  },
  created: function created() {
    if (this.$route.params.partnerKey !== undefined) {
      // console.log(this.$route.name);
      // console.log(this.$route.params);
      // console.log(this.$route.params.partnerKey);
      var cookieDate = new Date(moment__WEBPACK_IMPORTED_MODULE_2___default()().add(14, 'day').toDate());
      document.cookie = "partnerKey=" + this.$route.params.partnerKey + "; expires=" + cookieDate;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/guest/Home.vue?vue&type=template&id=94e2cda6&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/guest/Home.vue?vue&type=template&id=94e2cda6& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "hero-banner" }, [
      _c("div", { staticClass: "hero-content" }, [
        _vm._m(0),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "action" },
          [
            _c(
              "router-link",
              {
                staticClass: "btn btn-success",
                attrs: { to: { name: "signup" } }
              },
              [_vm._v("Kostenlos Anmelden")]
            )
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "wrapper home" }, [
      _vm._m(2),
      _vm._v(" "),
      _c("h3", { staticClass: "devices-title" }, [
        _vm._v("Wallet 21 auf Ihren PC, Tablet & Smartphone ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "devices-image" }, [
        _c("img", {
          attrs: { src: _vm.devicesImage, alt: "Wallet 21 devices" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "info-box" }, [
        _vm._m(3),
        _vm._v(" "),
        _c("div", { staticClass: "image" }, [
          _c("img", {
            attrs: { src: _vm.passbookImage, alt: "Sparkonto,Sparziel" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "info-box m-column-reverse" }, [
        _c("div", { staticClass: "image" }, [
          _c("img", { attrs: { src: _vm.exchange, alt: "Währungsumrechnung" } })
        ]),
        _vm._v(" "),
        _vm._m(4)
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "info-box" }, [
        _vm._m(5),
        _vm._v(" "),
        _c("div", { staticClass: "image" }, [
          _c("img", { attrs: { src: _vm.csvImport, alt: "CSV Import" } })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "info-box m-column-reverse" }, [
        _c("div", { staticClass: "image" }, [
          _c("img", { attrs: { src: _vm.csvExport, alt: "CSV Export" } })
        ]),
        _vm._v(" "),
        _vm._m(6)
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "hero-text" }, [
      _c("span", { staticClass: "highlight" }, [_vm._v("Wallet 21")]),
      _vm._v(" hilft dir,\n                "),
      _c("span", { staticClass: "highlight" }, [
        _vm._v("Einnahmen & Ausgaben")
      ]),
      _vm._v(
        "\n                einfach zu erfassen. Ordnen Sie Ihre Belege in "
      ),
      _c("span", { staticClass: "highlight" }, [_vm._v("Konten")]),
      _vm._v(" und "),
      _c("span", { staticClass: "highlight" }, [_vm._v("Kategorien")]),
      _vm._v(" hinzu.")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "hero-text" }, [
      _vm._v("Und profitiere von der geschaffenen "),
      _c("span", { staticClass: "highlight" }, [_vm._v("Ordnung")]),
      _vm._v(".")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "intro" }, [
      _c("h2", [_vm._v("Finanzen ganz einfach!")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "Wallet 21 hilft Ihnen, die Kontrolle über Ihre Finanzen zu bekommen."
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v("Mit nur einem Blick sehen Sie Ihre Einnahmen und Ausgaben.")
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          " Digitalisieren Sie Ihre Belege, nie wieder eine Rechnung verlieren. Einfach den Beleg als Foto\n                hinzufügen, damit Sie diesen jederzeit zu Hand haben. Egal ob Sie zu Hause oder unterwegs sind. Sie\n                können Ihre Finanzen jederzeit zu Bearbeiten, neue Hinzufügen und Löschen.\n            "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "info" }, [
      _c("h3", [_vm._v("Setzen Sie sich Sparziele")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "Jeder der auf seine Finanzen achtet, sollte sich auch Belohnen.\n                    Sie können sich einfach "
        ),
        _c("span", { staticClass: "highlight" }, [_vm._v("Sparziele")]),
        _vm._v(" erstellen und zu "),
        _c("span", { staticClass: "highlight" }, [_vm._v("jedem Zeitpunkt")]),
        _vm._v(
          " den Fortschritt sehen.\n                    Belohnen Sie sich selbst und sein Sie stolz auf jedes Ziel, dass Sie erreichen!"
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "info" }, [
      _c("h3", [_vm._v("Währungsumrechnung ")]),
      _vm._v(" "),
      _c("p", [
        _vm._v("Sie Fahren in Urlaub oder ziehen in ein anderes Land?")
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "Kein Problem lassen Sie sich Ihr Konto einfach automatische in Ihre neue Währung umrechnen."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "info" }, [
      _c("h3", [_vm._v("CSV Import")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          " Importieren Sie einfach Ihre CSV Dateien. Template runterladen oder Ihre CSV Datei anpassen.\n                    Hochladen und alle Ihre Einnahmen und Ausgaben sind gespeichert."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "info" }, [
      _c("h3", [_vm._v("CSV Export ")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "Sie brauchen einen schnellen Auszug von Ihren Konten, kein Problem einfach als CSV exportieren\n                    und Herunterladen."
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/guest/Home.vue":
/*!*******************************************************!*\
  !*** ./resources/assets/js/components/guest/Home.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_94e2cda6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=94e2cda6& */ "./resources/assets/js/components/guest/Home.vue?vue&type=template&id=94e2cda6&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/guest/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_94e2cda6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_94e2cda6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/guest/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/guest/Home.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/components/guest/Home.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/guest/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/guest/Home.vue?vue&type=template&id=94e2cda6&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/components/guest/Home.vue?vue&type=template&id=94e2cda6& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_94e2cda6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=94e2cda6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/guest/Home.vue?vue&type=template&id=94e2cda6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_94e2cda6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_94e2cda6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/guest/Home.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/guest/Home.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _utility_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utility/mixins */ "./resources/assets/js/utility/mixins.js");
/* harmony import */ var _utility_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utility/config */ "./resources/assets/js/utility/config.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_utility_mixins__WEBPACK_IMPORTED_MODULE_1__["default"]],
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    currencies: 'getCurrencies'
  }),
  data: function data() {
    return {
      AppUrl: _utility_config__WEBPACK_IMPORTED_MODULE_2__["AppUrl"],
      devicesImage: _utility_config__WEBPACK_IMPORTED_MODULE_2__["AppUrl"] + 'images/home/devices.png',
      passbookImage: _utility_config__WEBPACK_IMPORTED_MODULE_2__["AppUrl"] + 'images/home/passbook.png',
      csvImage: _utility_config__WEBPACK_IMPORTED_MODULE_2__["AppUrl"] + 'images/home/csvimport.png',
      conversionImage: _utility_config__WEBPACK_IMPORTED_MODULE_2__["AppUrl"] + 'images/home/currencyconversion.png'
    };
  } // ,created(){
  //   this.$store.dispatch('loadCurrencies');
  // }

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
          _c("img", { attrs: { src: _vm.csvImage, alt: "Sparkonto,Sparziel" } })
        ]),
        _vm._v(" "),
        _vm._m(4)
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "info-box" }, [
        _vm._m(5),
        _vm._v(" "),
        _c("div", { staticClass: "image" }, [
          _c("img", {
            attrs: { src: _vm.conversionImage, alt: "Währungsumrechnung" }
          })
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
    return _c("p", { staticClass: "hero-text" }, [
      _c("span", { staticClass: "highlight" }, [_vm._v("Wallet21")]),
      _vm._v(
        " hilft dir, deine Finanzen zu verstehen und\n                bessere Entscheidungen zu\n                treffen."
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "hero-text" }, [
      _c("span", { staticClass: "highlight" }, [_vm._v(" Einfaches Managen")]),
      _vm._v(" von "),
      _c("span", { staticClass: "highlight" }, [_vm._v("Einnahmen")]),
      _vm._v(" und "),
      _c("span", { staticClass: "highlight" }, [_vm._v("Aushaben")]),
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
        _vm._v("Mit nur einen Blick sehen Sie ihre Einnahmen und Ausgaben.")
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          " Digitalisieren Sie ihre Belege, nie wieder eine Rechnung verlieren. Einfach den Belag als Foto\n                hinzufügen. Damit Sie diesen jeder Zeit zu Hand haben. Egal ob Sie Zuhause oder Unterwegs sind. Sie\n                können ihre Finanzen jederzeit Bearbeiten, neue Hinzufügen und Löschen.\n            "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "info" }, [
      _c("h3", [_vm._v(" Setzen Sie sich Sparziele")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          " Jeder der auf seine Finanzen achtes sollte sich auch Belohnen.\n                    Sie können sich einfach "
        ),
        _c("span", { staticClass: "highlight" }, [_vm._v("Sparziele")]),
        _vm._v(" erstellen und zu "),
        _c("span", { staticClass: "highlight" }, [_vm._v("jedem Zeitpunkt")]),
        _vm._v(
          " den Fortschritt sehen.\n                    Belohnen Sie sich selbst und sein Sie stolz auf jeden erreichte Ziel! "
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
          " Importieren sie einfach Ihre CSV Dateien. Template runterladen oder ihre CSV Datei anpassen.\n                    Hochladen\n                    und alle ihre Einnahmen und Ausgaben sind gespeichert.\n                "
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
        _vm._v("Sie Fahren in Urlaube oder Ziehen in ein anderes Land?")
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "Kein Problem lassen sie sich ihr Konto einfach automatische in ihre neue Währung umrechnenen"
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



/***/ }),

/***/ "./resources/assets/js/utility/mixins.js":
/*!***********************************************!*\
  !*** ./resources/assets/js/utility/mixins.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    formatDateYMD: function formatDateYMD(date) {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(date).format('YYYY/MM/DD');
    },
    formatDateDMY: function formatDateDMY(date) {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(date).format('DD.MM.YYYY');
    },
    handleGoBack: function handleGoBack() {
      this.$router.go(-1);
    },
    handleGoDashboard: function handleGoDashboard() {
      this.$router.push({
        name: 'dashboard'
      });
    },
    handleGoAdminOverview: function handleGoAdminOverview() {
      this.$router.push({
        name: 'adminOverview'
      });
    },
    formatCurrency: function formatCurrency(value) {
      var currency = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'EUR';
      //return value.toLocaleString('de-DE', {style: 'currency', currency: icon}); // format Currency - Formatiert die Währung
      return Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: currency
      }).format(value); // format Currency - Formatiert die Währung
    },
    spaceToHyphen: function spaceToHyphen(value) {
      return value.replace(/\s+/g, '-'); // replace space with hyphen "-" with regex - ersetztst space mit bindestrich
      // return value.split(" ").join("-").toLowerCase(); // without regex
    },
    calcProcent: function calcProcent(value, total, decimals) {
      if (value === 0) {
        return 0;
      }

      if (value < 0) {
        var _value = _value = _value * -1;
      }

      if (total < 0) {
        var _value2 = total = total * -1;
      }

      var newValue = value * 100 / total;
      return Number(Math.round(newValue + 'e' + decimals) + 'e-' + decimals);
    },
    round: function round(value, decimals) {
      return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
    }
  }
});

/***/ })

}]);
"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,_toPropertyKey(o.key),o)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){t=_toPrimitive(t,"string");return"symbol"===_typeof(t)?t:String(t)}function _toPrimitive(t,e){if("object"!==_typeof(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0===r)return("string"===e?String:Number)(t);r=r.call(t,e||"default");if("object"!==_typeof(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _createSuper(r){var o=_isNativeReflectConstruct();return function(){var t,e=_getPrototypeOf(r);return _possibleConstructorReturn(this,o?(t=_getPrototypeOf(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))}}function _possibleConstructorReturn(t,e){if(e&&("object"===_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _wrapNativeSuper(t){var r="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(t){if(null===t||!_isNativeFunction(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,e)}function e(){return _construct(t,arguments,_getPrototypeOf(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(e,t)})(t)}function _construct(t,e,r){return(_construct=_isNativeReflectConstruct()?Reflect.construct.bind():function(t,e,r){var o=[null];o.push.apply(o,e);e=new(Function.bind.apply(t,o));return r&&_setPrototypeOf(e,r.prototype),e}).apply(null,arguments)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function _isNativeFunction(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}!function o(n,i,s){function u(e,t){if(!i[e]){if(!n[e]){var r="function"==typeof require&&require;if(!t&&r)return r(e,!0);if(c)return c(e,!0);throw(t=new Error("Cannot find module '"+e+"'")).code="MODULE_NOT_FOUND",t}r=i[e]={exports:{}},n[e][0].call(r.exports,function(t){return u(n[e][1][t]||t)},r,r.exports,o,n,i,s)}return i[e].exports}for(var c="function"==typeof require&&require,t=0;t<s.length;t++)u(s[t]);return u}({1:[function(t,e,r){customElements.get("custom-form")||customElements.define("custom-form",function(){_inherits(r,_wrapNativeSuper(HTMLElement));var e=_createSuper(r);function r(){var t;return _classCallCheck(this,r),(t=e.call(this)).form=t.querySelector("form"),t.form.querySelector("[name=id]").disabled=!1,t.form.addEventListener("submit",t.onSubmitHandler.bind(_assertThisInitialized(t))),t.cart=document.querySelector("cart-notification")||document.querySelector("cart-drawer"),t.submitButton=t.querySelector('[type="submit"]'),document.querySelector("cart-drawer")&&t.submitButton.setAttribute("aria-haspopup","dialog"),t.hideErrors="true"===t.dataset.hideErrors,t}return _createClass(r,[{key:"onSubmitHandler",value:function(t){var r,o=this;t.preventDefault(),"true"!==this.submitButton.getAttribute("aria-disabled")&&(this.handleErrorMessage(),this.submitButton.setAttribute("aria-disabled",!0),this.submitButton.classList.add("loading"),this.querySelector(".loading__spinner").classList.remove("hidden"),(t=fetchConfig("javascript")).headers["X-Requested-With"]="XMLHttpRequest",delete t.headers["Content-Type"],r=new FormData(this.form),this.cart&&(r.append("sections",this.cart.getSectionsToRender().map(function(t){return t.id})),r.append("sections_url",window.location.pathname),this.cart.setActiveElement(document.activeElement)),t.body=r,fetch("".concat(routes.cart_add_url),t).then(function(t){return t.json()}).then(function(t){var e;if(t.status)return publish(PUB_SUB_EVENTS.cartError,{source:"custom-form",productVariantId:r.get("id"),errors:t.errors||t.description,message:t.message}),o.handleErrorMessage(t.description),(e=o.submitButton.querySelector(".sold-out-message"))?(o.submitButton.setAttribute("aria-disabled",!0),o.submitButton.querySelector("span").classList.add("hidden"),e.classList.remove("hidden"),void(o.error=!0)):void 0;o.cart?(o.error||publish(PUB_SUB_EVENTS.cartUpdate,{source:"custom-form",productVariantId:r.get("id"),cartData:t}),o.error=!1,(e=o.closest("quick-add-modal"))?(document.body.addEventListener("modalClosed",function(){setTimeout(function(){o.cart.renderContents(t)})},{once:!0}),e.hide(!0)):o.cart.renderContents(t)):window.location=window.routes.cart_url}).catch(function(t){console.error(t)}).finally(function(){o.submitButton.classList.remove("loading"),o.cart&&o.cart.classList.contains("is-empty")&&o.cart.classList.remove("is-empty"),o.error||o.submitButton.removeAttribute("aria-disabled"),o.querySelector(".loading__spinner").classList.add("hidden")}))}},{key:"handleErrorMessage",value:function(){var t=0<arguments.length&&void 0!==arguments[0]&&arguments[0];this.hideErrors||(this.errorMessageWrapper=this.errorMessageWrapper||this.querySelector(".custom-form__error-message-wrapper"),this.errorMessageWrapper&&(this.errorMessage=this.errorMessage||this.errorMessageWrapper.querySelector(".custom-form__error-message"),this.errorMessageWrapper.toggleAttribute("hidden",!t),t)&&(this.errorMessage.textContent=t))}}]),r}())},{}]},{},[1]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY3VzdG9tLWZvcm0uanMiLCJjdXN0b20tZm9ybS5qcyJdLCJuYW1lcyI6WyJyIiwiZSIsIm4iLCJ0IiwibyIsImkiLCJmIiwiYyIsInJlcXVpcmUiLCJ1IiwiYSIsIkVycm9yIiwiY29kZSIsInAiLCJleHBvcnRzIiwiY2FsbCIsImxlbmd0aCIsIjEiLCJtb2R1bGUiLCJjdXN0b21FbGVtZW50cyIsImdldCIsImRlZmluZSIsIl9pbmhlcml0cyIsIkN1c3RvbUZvcm0iLCJfd3JhcE5hdGl2ZVN1cGVyIiwiSFRNTEVsZW1lbnQiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsInRoaXMiLCJmb3JtIiwicXVlcnlTZWxlY3RvciIsImRpc2FibGVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uU3VibWl0SGFuZGxlciIsImJpbmQiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiY2FydCIsImRvY3VtZW50Iiwic3VibWl0QnV0dG9uIiwic2V0QXR0cmlidXRlIiwiaGlkZUVycm9ycyIsImRhdGFzZXQiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImV2dCIsImZvcm1EYXRhIiwiX3RoaXMyIiwicHJldmVudERlZmF1bHQiLCJnZXRBdHRyaWJ1dGUiLCJoYW5kbGVFcnJvck1lc3NhZ2UiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJjb25maWciLCJmZXRjaENvbmZpZyIsImhlYWRlcnMiLCJGb3JtRGF0YSIsImFwcGVuZCIsImdldFNlY3Rpb25zVG9SZW5kZXIiLCJtYXAiLCJzZWN0aW9uIiwiaWQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic2V0QWN0aXZlRWxlbWVudCIsImFjdGl2ZUVsZW1lbnQiLCJib2R5IiwiZmV0Y2giLCJjb25jYXQiLCJyb3V0ZXMiLCJjYXJ0X2FkZF91cmwiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicXVpY2tBZGRNb2RhbCIsInN0YXR1cyIsInB1Ymxpc2giLCJQVUJfU1VCX0VWRU5UUyIsImNhcnRFcnJvciIsInNvdXJjZSIsInByb2R1Y3RWYXJpYW50SWQiLCJlcnJvcnMiLCJkZXNjcmlwdGlvbiIsIm1lc3NhZ2UiLCJzb2xkT3V0TWVzc2FnZSIsImVycm9yIiwiY2FydFVwZGF0ZSIsImNhcnREYXRhIiwiY2xvc2VzdCIsInNldFRpbWVvdXQiLCJyZW5kZXJDb250ZW50cyIsIm9uY2UiLCJoaWRlIiwiY2FydF91cmwiLCJjb25zb2xlIiwiY29udGFpbnMiLCJyZW1vdmVBdHRyaWJ1dGUiLCJlcnJvck1lc3NhZ2UiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJlcnJvck1lc3NhZ2VXcmFwcGVyIiwidG9nZ2xlQXR0cmlidXRlIiwidGV4dENvbnRlbnQiXSwibWFwcGluZ3MiOiI4NUdBQUEsQ0FBQSxTQUFBQSxFQUFBQyxFQUFBQyxFQUFBQyxHQUFBLFNBQUFDLEVBQUFDLEVBQUFDLEdBQUEsR0FBQSxDQUFBSixFQUFBRyxHQUFBLENBQUEsR0FBQSxDQUFBSixFQUFBSSxHQUFBLENBQUEsSUFBQUUsRUFBQSxZQUFBLE9BQUFDLFNBQUFBLFFBQUEsR0FBQSxDQUFBRixHQUFBQyxFQUFBLE9BQUFBLEVBQUFGLEVBQUEsQ0FBQSxDQUFBLEVBQUEsR0FBQUksRUFBQSxPQUFBQSxFQUFBSixFQUFBLENBQUEsQ0FBQSxFQUFBLE1BQUFLLEVBQUEsSUFBQUMsTUFBQSx1QkFBQU4sRUFBQSxHQUFBLEdBQUFPLEtBQUEsbUJBQUFGLENBQUEsQ0FBQUcsRUFBQVgsRUFBQUcsR0FBQSxDQUFBUyxRQUFBLEVBQUEsRUFBQWIsRUFBQUksR0FBQSxHQUFBVSxLQUFBRixFQUFBQyxRQUFBLFNBQUFkLEdBQUEsT0FBQUksRUFBQUgsRUFBQUksR0FBQSxHQUFBTCxJQUFBQSxDQUFBLENBQUEsRUFBQWEsRUFBQUEsRUFBQUMsUUFBQWQsRUFBQUMsRUFBQUMsRUFBQUMsQ0FBQSxDQUFBLENBQUEsT0FBQUQsRUFBQUcsR0FBQVMsT0FBQSxDQUFBLElBQUEsSUFBQUwsRUFBQSxZQUFBLE9BQUFELFNBQUFBLFFBQUFILEVBQUEsRUFBQUEsRUFBQUYsRUFBQWEsT0FBQVgsQ0FBQSxHQUFBRCxFQUFBRCxFQUFBRSxFQUFBLEVBQUEsT0FBQUQsQ0FBQSxFQUFBLENBQUFhLEVBQUEsQ0FBQSxTQUFBVCxFQUFBVSxFQUFBSixHQ0FBSyxlQUFBQyxJQUFBLGFBQUEsR0FDQUQsZUFBQUUsT0FDQSxjQUFBLFdBQUFDLFVBQUFDLEVBaUhBQyxpQkFoSEFDLFdBQUEsQ0FEQSxFQUFBLElBQUFDLEVBQUFDLGFBQUFKLENBQUEsRUFFQSxTQUFBQSxJQUFBLElBQUFLLEVBV0EsT0FYQUMsZ0JBQUFDLEtBQUFQLENBQUEsR0FDQUssRUFBQUYsRUFBQVgsS0FBQWUsSUFBQSxHQUVBQyxLQUFBSCxFQUFBSSxjQUFBLE1BQUEsRUFDQUosRUFBQUcsS0FBQUMsY0FBQSxXQUFBLEVBQUFDLFNBQUEsQ0FBQSxFQUNBTCxFQUFBRyxLQUFBRyxpQkFBQSxTQUFBTixFQUFBTyxnQkFBQUMsS0FBQUMsdUJBQUFULENBQUEsQ0FBQSxDQUFBLEVBQ0FBLEVBQUFVLEtBQUFDLFNBQUFQLGNBQUEsbUJBQUEsR0FBQU8sU0FBQVAsY0FBQSxhQUFBLEVBQ0FKLEVBQUFZLGFBQUFaLEVBQUFJLGNBQUEsaUJBQUEsRUFFQU8sU0FBQVAsY0FBQSxhQUFBLEdBQUFKLEVBQUFZLGFBQUFDLGFBQUEsZ0JBQUEsUUFBQSxFQUVBYixFQUFBYyxXQUFBLFNBQUFkLEVBQUFlLFFBQUFELFdBQUFkLENBQ0EsQ0FtR0EsT0FuR0FnQixhQUFBckIsRUFBQSxDQUFBLENBQUFzQixJQUFBLGtCQUFBQyxNQUVBLFNBQUFDLEdBQUEsSUFjQUMsRUFkQUMsRUFBQW5CLEtBQ0FpQixFQUFBRyxlQUFBLEVBQ0EsU0FBQXBCLEtBQUFVLGFBQUFXLGFBQUEsZUFBQSxJQUVBckIsS0FBQXNCLG1CQUFBLEVBRUF0QixLQUFBVSxhQUFBQyxhQUFBLGdCQUFBLENBQUEsQ0FBQSxFQUNBWCxLQUFBVSxhQUFBYSxVQUFBQyxJQUFBLFNBQUEsRUFDQXhCLEtBQUFFLGNBQUEsbUJBQUEsRUFBQXFCLFVBQUFFLE9BQUEsUUFBQSxHQUVBQyxFQUFBQyxZQUFBLFlBQUEsR0FDQUMsUUFBQSxvQkFBQSxpQkFDQSxPQUFBRixFQUFBRSxRQUFBLGdCQUVBVixFQUFBLElBQUFXLFNBQUE3QixLQUFBQyxJQUFBLEVBQ0FELEtBQUFRLE9BQ0FVLEVBQUFZLE9BQ0EsV0FDQTlCLEtBQUFRLEtBQUF1QixvQkFBQSxFQUFBQyxJQUFBLFNBQUFDLEdBQUEsT0FBQUEsRUFBQUMsRUFBQSxDQUFBLENBQ0EsRUFDQWhCLEVBQUFZLE9BQUEsZUFBQUssT0FBQUMsU0FBQUMsUUFBQSxFQUNBckMsS0FBQVEsS0FBQThCLGlCQUFBN0IsU0FBQThCLGFBQUEsR0FFQWIsRUFBQWMsS0FBQXRCLEVBRUF1QixNQUFBLEdBQUFDLE9BQUFDLE9BQUFDLFlBQUEsRUFBQWxCLENBQUEsRUFDQW1CLEtBQUEsU0FBQUMsR0FBQSxPQUFBQSxFQUFBQyxLQUFBLENBQUEsQ0FBQSxFQUNBRixLQUFBLFNBQUFDLEdBQ0EsSUE0QkFFLEVBNUJBLEdBQUFGLEVBQUFHLE9BVUEsT0FUQUMsUUFBQUMsZUFBQUMsVUFBQSxDQUNBQyxPQUFBLGNBQ0FDLGlCQUFBcEMsRUFBQTVCLElBQUEsSUFBQSxFQUNBaUUsT0FBQVQsRUFBQVMsUUFBQVQsRUFBQVUsWUFDQUMsUUFBQVgsRUFBQVcsT0FDQSxDQUFBLEVBQ0F0QyxFQUFBRyxtQkFBQXdCLEVBQUFVLFdBQUEsR0FFQUUsRUFBQXZDLEVBQUFULGFBQUFSLGNBQUEsbUJBQUEsSUFFQWlCLEVBQUFULGFBQUFDLGFBQUEsZ0JBQUEsQ0FBQSxDQUFBLEVBQ0FRLEVBQUFULGFBQUFSLGNBQUEsTUFBQSxFQUFBcUIsVUFBQUMsSUFBQSxRQUFBLEVBQ0FrQyxFQUFBbkMsVUFBQUUsT0FBQSxRQUFBLEVBRkFOLEtBR0FBLEVBQUF3QyxNQUFBLENBQUEsSUFKQSxLQUFBLEVBTUF4QyxFQUFBWCxNQUtBVyxFQUFBd0MsT0FDQVQsUUFBQUMsZUFBQVMsV0FBQSxDQUNBUCxPQUFBLGNBQ0FDLGlCQUFBcEMsRUFBQTVCLElBQUEsSUFBQSxFQUNBdUUsU0FBQWYsQ0FDQSxDQUFBLEVBQ0EzQixFQUFBd0MsTUFBQSxDQUFBLEdBQ0FYLEVBQUE3QixFQUFBMkMsUUFBQSxpQkFBQSxJQUVBckQsU0FBQStCLEtBQUFwQyxpQkFDQSxjQUNBLFdBQ0EyRCxXQUFBLFdBQ0E1QyxFQUFBWCxLQUFBd0QsZUFBQWxCLENBQUEsQ0FDQSxDQUFBLENBQ0EsRUFDQSxDQUFBbUIsS0FBQSxDQUFBLENBQUEsQ0FDQSxFQUNBakIsRUFBQWtCLEtBQUEsQ0FBQSxDQUFBLEdBRUEvQyxFQUFBWCxLQUFBd0QsZUFBQWxCLENBQUEsR0F4QkFYLE9BQUFDLFNBQUFELE9BQUFRLE9BQUF3QixRQTBCQSxDQUFBLEVBQUEsTUFDQSxTQUFBaEcsR0FDQWlHLFFBQUFULE1BQUF4RixDQUFBLENBQ0EsQ0FBQSxFQUFBLFFBQ0EsV0FDQWdELEVBQUFULGFBQUFhLFVBQUFFLE9BQUEsU0FBQSxFQUNBTixFQUFBWCxNQUFBVyxFQUFBWCxLQUFBZSxVQUFBOEMsU0FBQSxVQUFBLEdBQUFsRCxFQUFBWCxLQUFBZSxVQUFBRSxPQUFBLFVBQUEsRUFDQU4sRUFBQXdDLE9BQUF4QyxFQUFBVCxhQUFBNEQsZ0JBQUEsZUFBQSxFQUNBbkQsRUFBQWpCLGNBQUEsbUJBQUEsRUFBQXFCLFVBQUFDLElBQUEsUUFBQSxDQUVBLENBQUEsRUFDQSxDQUFBLEVBQUEsQ0FBQVQsSUFBQSxxQkFBQUMsTUFFQSxXQUFBLElBQUF1RCxFQUFBLEVBQUFDLFVBQUF0RixRQUFBdUYsS0FBQUEsSUFBQUQsVUFBQSxJQUFBQSxVQUFBLEdBQ0F4RSxLQUFBWSxhQUVBWixLQUFBMEUsb0JBQ0ExRSxLQUFBMEUscUJBQUExRSxLQUFBRSxjQUFBLHFDQUFBLEVBQ0FGLEtBQUEwRSxzQkFDQTFFLEtBQUF1RSxhQUFBdkUsS0FBQXVFLGNBQUF2RSxLQUFBMEUsb0JBQUF4RSxjQUFBLDZCQUFBLEVBRUFGLEtBQUEwRSxvQkFBQUMsZ0JBQUEsU0FBQSxDQUFBSixDQUFBLEVBRUFBLEtBQ0F2RSxLQUFBdUUsYUFBQUssWUFBQUwsR0FFQSxDQUFBLEVBQUEsRUFBQTlFLENBQUEsRUFoSEEsQ0FrSEEsQ0NJQSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSIsImZpbGUiOiJjdXN0b20tZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCgnY3VzdG9tLWZvcm0nKSkge1xuICBjdXN0b21FbGVtZW50cy5kZWZpbmUoXG4gICAgJ2N1c3RvbS1mb3JtJyxcbiAgICBjbGFzcyBDdXN0b21Gb3JtIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5mb3JtID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgICAgIHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1pZF0nKS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5vblN1Ym1pdEhhbmRsZXIuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuY2FydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhcnQtbm90aWZpY2F0aW9uJykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FydC1kcmF3ZXInKTtcbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b24gPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ1t0eXBlPVwic3VibWl0XCJdJyk7XG5cbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhcnQtZHJhd2VyJykpIHRoaXMuc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1oYXNwb3B1cCcsICdkaWFsb2cnKTtcblxuICAgICAgICB0aGlzLmhpZGVFcnJvcnMgPSB0aGlzLmRhdGFzZXQuaGlkZUVycm9ycyA9PT0gJ3RydWUnO1xuICAgICAgfVxuXG4gICAgICBvblN1Ym1pdEhhbmRsZXIoZXZ0KSB7XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodGhpcy5zdWJtaXRCdXR0b24uZ2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJykgPT09ICd0cnVlJykgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuaGFuZGxlRXJyb3JNZXNzYWdlKCk7XG5cbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIHRoaXMuc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2xvYWRpbmcnKTtcbiAgICAgICAgdGhpcy5xdWVyeVNlbGVjdG9yKCcubG9hZGluZ19fc3Bpbm5lcicpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IGZldGNoQ29uZmlnKCdqYXZhc2NyaXB0Jyk7XG4gICAgICAgIGNvbmZpZy5oZWFkZXJzWydYLVJlcXVlc3RlZC1XaXRoJ10gPSAnWE1MSHR0cFJlcXVlc3QnO1xuICAgICAgICBkZWxldGUgY29uZmlnLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddO1xuXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMuZm9ybSk7XG4gICAgICAgIGlmICh0aGlzLmNhcnQpIHtcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXG4gICAgICAgICAgICAnc2VjdGlvbnMnLFxuICAgICAgICAgICAgdGhpcy5jYXJ0LmdldFNlY3Rpb25zVG9SZW5kZXIoKS5tYXAoKHNlY3Rpb24pID0+IHNlY3Rpb24uaWQpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3NlY3Rpb25zX3VybCcsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICAgICAgdGhpcy5jYXJ0LnNldEFjdGl2ZUVsZW1lbnQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uZmlnLmJvZHkgPSBmb3JtRGF0YTtcblxuICAgICAgICBmZXRjaChgJHtyb3V0ZXMuY2FydF9hZGRfdXJsfWAsIGNvbmZpZylcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgcHVibGlzaChQVUJfU1VCX0VWRU5UUy5jYXJ0RXJyb3IsIHtcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICdjdXN0b20tZm9ybScsXG4gICAgICAgICAgICAgICAgcHJvZHVjdFZhcmlhbnRJZDogZm9ybURhdGEuZ2V0KCdpZCcpLFxuICAgICAgICAgICAgICAgIGVycm9yczogcmVzcG9uc2UuZXJyb3JzIHx8IHJlc3BvbnNlLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlLm1lc3NhZ2UsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yTWVzc2FnZShyZXNwb25zZS5kZXNjcmlwdGlvbik7XG5cbiAgICAgICAgICAgICAgY29uc3Qgc29sZE91dE1lc3NhZ2UgPSB0aGlzLnN1Ym1pdEJ1dHRvbi5xdWVyeVNlbGVjdG9yKCcuc29sZC1vdXQtbWVzc2FnZScpO1xuICAgICAgICAgICAgICBpZiAoIXNvbGRPdXRNZXNzYWdlKSByZXR1cm47XG4gICAgICAgICAgICAgIHRoaXMuc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvbi5xdWVyeVNlbGVjdG9yKCdzcGFuJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgIHNvbGRPdXRNZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICB0aGlzLmVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5jYXJ0KSB7XG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHdpbmRvdy5yb3V0ZXMuY2FydF91cmw7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0aGlzLmVycm9yKVxuICAgICAgICAgICAgICBwdWJsaXNoKFBVQl9TVUJfRVZFTlRTLmNhcnRVcGRhdGUsIHtcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICdjdXN0b20tZm9ybScsXG4gICAgICAgICAgICAgICAgcHJvZHVjdFZhcmlhbnRJZDogZm9ybURhdGEuZ2V0KCdpZCcpLFxuICAgICAgICAgICAgICAgIGNhcnREYXRhOiByZXNwb25zZSxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmVycm9yID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCBxdWlja0FkZE1vZGFsID0gdGhpcy5jbG9zZXN0KCdxdWljay1hZGQtbW9kYWwnKTtcbiAgICAgICAgICAgIGlmIChxdWlja0FkZE1vZGFsKSB7XG4gICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICAnbW9kYWxDbG9zZWQnLFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcnQucmVuZGVyQ29udGVudHMocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7IG9uY2U6IHRydWUgfVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBxdWlja0FkZE1vZGFsLmhpZGUodHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmNhcnQucmVuZGVyQ29udGVudHMocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdWJtaXRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGluZycpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY2FydCAmJiB0aGlzLmNhcnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1lbXB0eScpKSB0aGlzLmNhcnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZW1wdHknKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5lcnJvcikgdGhpcy5zdWJtaXRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJyk7XG4gICAgICAgICAgICB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nX19zcGlubmVyJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAvLyBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaGFuZGxlRXJyb3JNZXNzYWdlKGVycm9yTWVzc2FnZSA9IGZhbHNlKSB7XG4gICAgICAgIGlmICh0aGlzLmhpZGVFcnJvcnMpIHJldHVybjtcblxuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZVdyYXBwZXIgPVxuICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlV3JhcHBlciB8fCB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b20tZm9ybV9fZXJyb3ItbWVzc2FnZS13cmFwcGVyJyk7XG4gICAgICAgIGlmICghdGhpcy5lcnJvck1lc3NhZ2VXcmFwcGVyKSByZXR1cm47XG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gdGhpcy5lcnJvck1lc3NhZ2UgfHwgdGhpcy5lcnJvck1lc3NhZ2VXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b20tZm9ybV9fZXJyb3ItbWVzc2FnZScpO1xuXG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlV3JhcHBlci50b2dnbGVBdHRyaWJ1dGUoJ2hpZGRlbicsICFlcnJvck1lc3NhZ2UpO1xuXG4gICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9IGVycm9yTWVzc2FnZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgKTtcbn1cbiIsIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkoezE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuaWYgKCFjdXN0b21FbGVtZW50cy5nZXQoJ2N1c3RvbS1mb3JtJykpIHtcbiAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKFxuICAgICdjdXN0b20tZm9ybScsXG4gICAgY2xhc3MgQ3VzdG9tRm9ybSBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuZm9ybSA9IHRoaXMucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICAgICAgICB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9aWRdJykuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMub25TdWJtaXRIYW5kbGVyLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmNhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYXJ0LW5vdGlmaWNhdGlvbicpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhcnQtZHJhd2VyJyk7XG4gICAgICAgIHRoaXMuc3VibWl0QnV0dG9uID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdbdHlwZT1cInN1Ym1pdFwiXScpO1xuXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYXJ0LWRyYXdlcicpKSB0aGlzLnN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGFzcG9wdXAnLCAnZGlhbG9nJyk7XG5cbiAgICAgICAgdGhpcy5oaWRlRXJyb3JzID0gdGhpcy5kYXRhc2V0LmhpZGVFcnJvcnMgPT09ICd0cnVlJztcbiAgICAgIH1cblxuICAgICAgb25TdWJtaXRIYW5kbGVyKGV2dCkge1xuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHRoaXMuc3VibWl0QnV0dG9uLmdldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcpID09PSAndHJ1ZScpIHJldHVybjtcblxuICAgICAgICB0aGlzLmhhbmRsZUVycm9yTWVzc2FnZSgpO1xuXG4gICAgICAgIHRoaXMuc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdsb2FkaW5nJyk7XG4gICAgICAgIHRoaXMucXVlcnlTZWxlY3RvcignLmxvYWRpbmdfX3NwaW5uZXInKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblxuICAgICAgICBjb25zdCBjb25maWcgPSBmZXRjaENvbmZpZygnamF2YXNjcmlwdCcpO1xuICAgICAgICBjb25maWcuaGVhZGVyc1snWC1SZXF1ZXN0ZWQtV2l0aCddID0gJ1hNTEh0dHBSZXF1ZXN0JztcbiAgICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzWydDb250ZW50LVR5cGUnXTtcblxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzLmZvcm0pO1xuICAgICAgICBpZiAodGhpcy5jYXJ0KSB7XG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFxuICAgICAgICAgICAgJ3NlY3Rpb25zJyxcbiAgICAgICAgICAgIHRoaXMuY2FydC5nZXRTZWN0aW9uc1RvUmVuZGVyKCkubWFwKChzZWN0aW9uKSA9PiBzZWN0aW9uLmlkKVxuICAgICAgICAgICk7XG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdzZWN0aW9uc191cmwnLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgICAgICAgIHRoaXMuY2FydC5zZXRBY3RpdmVFbGVtZW50KGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbmZpZy5ib2R5ID0gZm9ybURhdGE7XG5cbiAgICAgICAgZmV0Y2goYCR7cm91dGVzLmNhcnRfYWRkX3VybH1gLCBjb25maWcpXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzKSB7XG4gICAgICAgICAgICAgIHB1Ymxpc2goUFVCX1NVQl9FVkVOVFMuY2FydEVycm9yLCB7XG4gICAgICAgICAgICAgICAgc291cmNlOiAnY3VzdG9tLWZvcm0nLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RWYXJpYW50SWQ6IGZvcm1EYXRhLmdldCgnaWQnKSxcbiAgICAgICAgICAgICAgICBlcnJvcnM6IHJlc3BvbnNlLmVycm9ycyB8fCByZXNwb25zZS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZS5tZXNzYWdlLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvck1lc3NhZ2UocmVzcG9uc2UuZGVzY3JpcHRpb24pO1xuXG4gICAgICAgICAgICAgIGNvbnN0IHNvbGRPdXRNZXNzYWdlID0gdGhpcy5zdWJtaXRCdXR0b24ucXVlcnlTZWxlY3RvcignLnNvbGQtb3V0LW1lc3NhZ2UnKTtcbiAgICAgICAgICAgICAgaWYgKCFzb2xkT3V0TWVzc2FnZSkgcmV0dXJuO1xuICAgICAgICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgdGhpcy5zdWJtaXRCdXR0b24ucXVlcnlTZWxlY3Rvcignc3BhbicpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICBzb2xkT3V0TWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuY2FydCkge1xuICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSB3aW5kb3cucm91dGVzLmNhcnRfdXJsO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5lcnJvcilcbiAgICAgICAgICAgICAgcHVibGlzaChQVUJfU1VCX0VWRU5UUy5jYXJ0VXBkYXRlLCB7XG4gICAgICAgICAgICAgICAgc291cmNlOiAnY3VzdG9tLWZvcm0nLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RWYXJpYW50SWQ6IGZvcm1EYXRhLmdldCgnaWQnKSxcbiAgICAgICAgICAgICAgICBjYXJ0RGF0YTogcmVzcG9uc2UsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5lcnJvciA9IGZhbHNlO1xuICAgICAgICAgICAgY29uc3QgcXVpY2tBZGRNb2RhbCA9IHRoaXMuY2xvc2VzdCgncXVpY2stYWRkLW1vZGFsJyk7XG4gICAgICAgICAgICBpZiAocXVpY2tBZGRNb2RhbCkge1xuICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgJ21vZGFsQ2xvc2VkJyxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJ0LnJlbmRlckNvbnRlbnRzKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeyBvbmNlOiB0cnVlIH1cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgcXVpY2tBZGRNb2RhbC5oaWRlKHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5jYXJ0LnJlbmRlckNvbnRlbnRzKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNhcnQgJiYgdGhpcy5jYXJ0LmNsYXNzTGlzdC5jb250YWlucygnaXMtZW1wdHknKSkgdGhpcy5jYXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWVtcHR5Jyk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZXJyb3IpIHRoaXMuc3VibWl0QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcpO1xuICAgICAgICAgICAgdGhpcy5xdWVyeVNlbGVjdG9yKCcubG9hZGluZ19fc3Bpbm5lcicpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgLy8gbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGhhbmRsZUVycm9yTWVzc2FnZShlcnJvck1lc3NhZ2UgPSBmYWxzZSkge1xuICAgICAgICBpZiAodGhpcy5oaWRlRXJyb3JzKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2VXcmFwcGVyID1cbiAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZVdyYXBwZXIgfHwgdGhpcy5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tLWZvcm1fX2Vycm9yLW1lc3NhZ2Utd3JhcHBlcicpO1xuICAgICAgICBpZiAoIXRoaXMuZXJyb3JNZXNzYWdlV3JhcHBlcikgcmV0dXJuO1xuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHRoaXMuZXJyb3JNZXNzYWdlIHx8IHRoaXMuZXJyb3JNZXNzYWdlV3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tLWZvcm1fX2Vycm9yLW1lc3NhZ2UnKTtcblxuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZVdyYXBwZXIudG9nZ2xlQXR0cmlidXRlKCdoaWRkZW4nLCAhZXJyb3JNZXNzYWdlKTtcblxuICAgICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSBlcnJvck1lc3NhZ2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICk7XG59XG5cbn0se31dfSx7fSxbMV0pXG5cbiJdfQ==
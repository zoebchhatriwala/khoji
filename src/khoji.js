"use strict";

(function () {
	// Returns an object with 'passOn' data
	// This can be called numerous times
	// returns in callback will be new 'passOn' data
	function _phir(passOn) {
		var _this = this;

		return { "phir": function phir(callback) {
				return _phir(callback.call(_this, passOn));
			} };
	}

	// Finds the element
	// returns 'phir' callback
	function _khoj(selector) {
		var qElement = !!this.querySelector ? this : document;
		var sElement = qElement.querySelector(selector);
		return _phir(sElement);
	}

	// Finds elements
	// returns 'phir' callback
	function _sabKhoj(selector) {
		var qElement = !!this.querySelector ? this : document;
		var sElement = qElement.querySelectorAll(selector);
		return _phir(sElement);
	}

	// Apply to DOM Element functions
	if (typeof Element.prototype["khoj"] == "undefined") {
		window.khoj = _khoj;
		Element.prototype.khoj = _khoj;
	}

	// Apply to DOM Element functions
	if (typeof Element.prototype["sabKhoj"] == "undefined") {
		window.sabKhoj = _sabKhoj;
		Element.prototype.sabKhoj = _sabKhoj;
	}
})();
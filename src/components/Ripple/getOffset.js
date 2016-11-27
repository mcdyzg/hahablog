'use strict';

module.exports = function(element){
	var rect = element.getBoundingClientRect();

	if(rect.width || rect.height) {
		var doc = element.ownerDocument;
		var docElem = doc.documentElement;

		return {
			top: rect.top + window.pageYOffset - docElem.clientTop,
			left: rect.left + window.pageXOffset - docElem.clientLeft
		}
	}
}
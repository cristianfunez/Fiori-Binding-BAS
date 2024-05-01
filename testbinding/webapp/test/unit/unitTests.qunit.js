/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ypf/testbinding/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});

sap.ui.define([
	"sap/ui/core/mvc/Controller", 
	"sap/m/MessageToast", 
	"sap/ui/model/json/JSONModel"
], function(Controller, MessageToast, JSONModel) {
	"use strict";

	return Controller.extend("AboApp.controller.Login", {
         onLogin : function (e) {
            // show a native JavaScript alert 
            var loginName = $('#__xmlview0--loginName-inner').val(); 
            var loginPassword = $('#__input0-inner').val(); 

            MessageToast.show("Hello World" + loginName + loginPassword);
         }
	});

});
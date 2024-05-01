sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("ypf.testbinding.controller.mainView", {
            onInit: function () {

                var  oModel = new JSONModel(
                    {
                        "FirstName" : "Cristian",
                        "LastName" : "Funez"
                    }
                    
                );

                /// Con Binding
                //Setear modelo a vista
                this.getView().setModel(oModel);
                                
                // /// Oocion sin Binding
                // //Obtenemos valores del modelo

                // var oFistName1 = oModel.getProperty("/FirstName");
                // var oLastName1 = oModel.getProperty("/LastName");

                // //Seteamos valores al modelo
                // this.getView().byId("Nombre").setValue(oFistName1);
                // this.getView().byId("Apellido").setValue(oLastName1);
                // this.getView().byId("FullName").setValue(oFistName1 + " " + oLastName1);
            },

            processFullName: function(){
                var oFirstName = this.getView().byId("Nombre").getValue(oFirstName);
                var oLastName = this.getView().byId("Apellido").getValue(oLastName);
                this.getView().byId("FullName").setValue(oFirstName + " " + oLastName);
            }

        });
    });

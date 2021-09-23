// controller.js as same as <script> in Vue's component to manage page's interaction
sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
  ],
  // pass module objects as parameters in function
  function (Controller, MessageToast, JSONModel) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
      // onInit, a lifecycle method as same as Vue
      onInit: function () {
        // set data for view, as same as the variables in Vue's component for data binding
        var oData = {
          recipient: {
            name: "World",
          },
        };
        // set data as JSON model on view
        var oModel = new JSONModel(oData);
        // setModel() function makes this model be used within XML view
        this.getView().setModel(oModel);
      },
      onShowHello: function () {
        MessageToast.show("Hello World");
      },
    });
  }
);

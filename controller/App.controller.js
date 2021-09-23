// controller.js as same as <script> in Vue's component to manage page's interaction
sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  // pass module objects as parameters in function
  function (Controller, MessageToast, JSONModel, ResourceModel) {
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

        // set i18n model on view
        var i18nModel = new ResourceModel({
          // bundleName points to i18n path
          bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
        });
        this.getView().setModel(i18nModel, "i18n");
      },
      onShowHello: function () {
        // read msg from i18n model
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        var sRecipient = this.getView()
          .getModel()
          .getProperty("/recipient/name");
        var sMsg = oBundle.getText("helloMsg", [sRecipient]);
        // show message
        MessageToast.show(sMsg);
      },
    });
  }
);

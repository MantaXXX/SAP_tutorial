// Component.js hold app setup, init function will be invoked when component is instantiated
sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (UIComponent, JSONModel, ResourceModel) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
      // Component.js consists of two parts： 1. metadata 2. init function
      // metadata defines root view
      metadata: {
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
        // define descriptor that will be loaded and parsed when component is instantiated
        manifest: "json",
      },
      // init function instantiate data & i18n models
      init: function () {
        // call the init function of the parent
        UIComponent.prototype.init.apply(this, arguments);
        // set data for view, as same as the variables in Vue's component for data binding
        var oData = {
          recipient: {
            name: "World",
          },
        };
        // set data as JSON model on view
        var oModel = new JSONModel(oData);
        // setModel() function makes this model be used within XML view
        this.setModel(oModel);
      },
    });
  }
);

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
        rootView: {
          viewName: "sap.ui.demo.walkthrough.view.App",
          type: "XML",
          /*"async": true, // implicitly set via the sap.ui.core.IAsyncContentCreation interface*/
          id: "app",
        },
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

        // set i18n model on view
        var i18nModel = new ResourceModel({
          // bundleName points to i18n path
          bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
        });
        this.setModel(i18nModel, "i18n");
      },
    });
  }
);

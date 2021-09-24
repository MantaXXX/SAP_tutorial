sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    // use Fragment module to load framgent
    "sap/ui/core/Fragment",
  ],
  function (Controller, MessageToas, Fragment) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
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
      onOpenDialog: function () {
        var oView = this.getView();
        // console.log(oView);

        // create dialog lazily
        if (!this.pDialog) {
          this.pDialog = Fragment.load({
            id: oView.getId(),
            // fragment path
            name: "sap.ui.demo.walkthrough.view.HelloDialog",
            // pass a controller object to Fragment.load API. Here is HelloPanel controller.
            // third parameters can be any object
            controller: this,
          }).then((oDialog) => {
            // connect dialog to the root view of this component (models, lifecycle)
            oView.addDependent(oDialog);
            return oDialog;
          });
        }
        this.pDialog.then((oDialog) => {
          oDialog.open();
        });
      },
      onCloseDialog: function () {
        // note: We don't need to chain to the pDialog promise, since this event-handler
        // is only called from within the loaded dialog itself.
        this.byId("helloDialog").close();
      },
    });
  }
);

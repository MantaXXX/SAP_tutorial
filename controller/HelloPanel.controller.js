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
            name: "sap.ui.demo.walkthrough.view.HelloDialog",
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
    });
  }
);

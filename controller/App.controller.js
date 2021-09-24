// controller.js as same as <script> in Vue's component to manage page's interaction
sap.ui.define(
  ["sap/ui/core/mvc/Controller"],
  function (Controller) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
      onOpenDialog: function () {
        this.getOwnerComponent().openHelloDialog();
      },
    });
  }
);

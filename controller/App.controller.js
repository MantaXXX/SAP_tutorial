// controller.js as same as <script> in Vue's component to manage page's interaction
sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
      onShowHello: function () {
        MessageToast.show("Hello World");
      },
    });
  }
);

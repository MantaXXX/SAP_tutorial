// controller.js as same as <script> in Vue's component to manage page's interaction
sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";
  return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
    onShowHello: function () {
      // show a native JavaScript alert
      alert("Hello World");
    },
  });
});

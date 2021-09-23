// index.js contains the application logic which will be called by the index.html as a module we defined in "data-sap-ui-onInit"
sap.ui.define(["sap/ui/core/mvc/XMLView"], function (XMLView) {
  "use strict";

  XMLView.create({
    viewName: "sap.ui.demo.walkthrough.view.App",
  }).then(function (oView) {
    oView.placeAt("content");
  });
});

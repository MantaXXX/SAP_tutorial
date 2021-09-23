// index.js contains the application logic which will be called by the index.html as a module we defined in "data-sap-ui-onInit"
sap.ui.define(
  // create a component container to instantiates the view according to the component configuration
  ["sap/ui/core/ComponentContainer"],
  function (ComponentContainer) {
    "use strict";

    new ComponentContainer({
      name: "sap.ui.demo.walkthrough",
      settings: {
        id: "walkthrough",
      },
      async: true,
    }).placeAt("content");
  }
);

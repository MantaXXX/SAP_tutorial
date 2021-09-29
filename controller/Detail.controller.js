sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";
  return Controller.extend("sap.ui.demo.walkthrough.controller.Detail", {
    onInit: function () {
      // fetch the app router instance
      var oRouter = this.getOwnerComponent().getRouter();
      // getRoute() method attach to the "detail" route
      // attachPatternMatched() method register an internal callback "_onObjectMatched" which will be executed when the route is hit
      oRouter
        .getRoute("detail")
        .attachPatternMatched(this._onObjectMatched, this);
    },
    // "_onObjectMatched" receive an event to access URL & navigation parameters
    _onObjectMatched: function (oEvent) {
      // bindElement() creates a object
      this.getView().bindElement({
        path:
          "/" +
          window.decodeURIComponent(
            // "arguments" parameter return an object corresponds to the navigation parameters from the route pattern
            oEvent.getParameter("arguments").invoicePath
          ),
        // receive a model for detailed item use
        model: "invoice",
      });
    },
  });
});

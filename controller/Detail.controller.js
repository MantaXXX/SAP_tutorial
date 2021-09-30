sap.ui.define(
  // add navigation history dependency
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/m/MessageToast",
  ],
  function (Controller, History, MessageToast) {
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
        this.byId("rating").reset();
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
      onNavBack: function () {
        // access the navigation history & previous hash
        var oHistory = History.getInstance();
        var sPreviousHash = oHistory.getPreviousHash();

        if (sPreviousHash !== undefined) {
          window.history.go(-1);
        } else {
          var oRouter = this.getOwnerComponent().getRouter();
          // second parameter "{}" => do not pass any additional parameters to this route
          // third parameter "true" => tell the router to replace the current history state with the new one
          oRouter.navTo("overview", {}, true);
        }
      },
      onRatingChange: function (oEvent) {
        var fValue = oEvent.getParameter("value");
        var oResourceBundle = this.getView()
          .getModel("i18n")
          .getResourceBundle();

        MessageToast.show(
          oResourceBundle.getText("ratingConfirmation", [fValue])
        );
      },
    });
  }
);

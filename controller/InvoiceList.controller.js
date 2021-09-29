sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    // loading two dependencies for filtering:
    // Filter object hold the configuration for filter action
    // FilterOperator is a helper type to specify the Filter
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  function (Controller, JSONModel, formatter, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {
      formatter: formatter,
      onInit: function () {
        var oViewModel = new JSONModel({
          currency: "EUR",
        });
        this.getView().setModel(oViewModel, "view");
      },
      onFilterInvoices: function (oEvent) {
        // build filter array
        var aFilter = [];
        // getParameter("query") to get the content in the search field
        var sQuery = oEvent.getParameter("query");
        // search in the "ProductName" path
        // Specify a filter operator that will search for the given query string
        if (sQuery) {
          aFilter.push(
            new Filter("ProductName", FilterOperator.Contains, sQuery)
          );
        }

        // filter binding
        // Asking the view for list with the helper byID()
        var oList = this.byId("invoiceList");
        // Access the binding of the aggregation items to filter with newly constructed filter object
        var oBinding = oList.getBinding("items");
        oBinding.filter(aFilter);
      },
      onPress: function (oEvent) {
        // getSource() -> Returns the event provider on which the event was fired.
        var oItem = oEvent.getSource();

        // access the router instance by calling the getOwnerComponent().getRouter()
        var oRouter = this.getOwnerComponent().getRouter();
        // navTo() method navigate to the specific route
        // add a configuration object to pass the navigation parameter "invoicePath" with the current item's path
        // substr(1) remove the first "/" from the binding path, cause it's a special character not allowed
        oRouter.navTo("detail", {
          invoicePath: window.encodeURIComponent(
            oItem.getBindingContext("invoice").getPath().substr(1)
          ),
        });
      },
    });
  }
);

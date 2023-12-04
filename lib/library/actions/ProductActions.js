"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/library/actions/ProductActions.ts
var ProductActions_exports = {};
__export(ProductActions_exports, {
  getProductActions: () => getProductActions
});
module.exports = __toCommonJS(ProductActions_exports);
var import_frontend_sdk = require("@commercetools/frontend-sdk");
var getProductActions = (sdk) => {
  return {
    getProduct: async (query, options = {}) => {
      const response = await sdk.callAction({
        actionName: "product/getProduct",
        query,
        serverOptions: options.serverOptions
      });
      if (response.isError === false && response.data) {
        sdk.trigger(
          new import_frontend_sdk.Event({
            eventName: "productFetched",
            data: {
              product: response.data
            }
          })
        );
      }
      return response;
    },
    query: async (query, options = {}) => {
      const response = await sdk.callAction({
        actionName: "product/query",
        query,
        serverOptions: options.serverOptions
      });
      if (response.isError === false) {
        sdk.trigger(
          new import_frontend_sdk.Event({
            eventName: "productsQueried",
            data: {
              query,
              result: response.data
            }
          })
        );
      }
      return response;
    },
    queryCategories: async (query, options = {}) => {
      const response = await sdk.callAction({
        actionName: "product/queryCategories",
        query,
        serverOptions: options.serverOptions
      });
      if (response.isError === false) {
        sdk.trigger(
          new import_frontend_sdk.Event({
            eventName: "productCategoriesQueried",
            data: {
              query,
              result: response.data
            }
          })
        );
      }
      return response;
    },
    getSearchableAttributes: async (options = {}) => {
      const response = await sdk.callAction({
        actionName: "product/searchableAttributes",
        serverOptions: options.serverOptions
      });
      if (response.isError === false) {
        sdk.trigger(
          new import_frontend_sdk.Event({
            eventName: "searchableProductAttributesFetched",
            data: {
              filterFields: response.data
            }
          })
        );
      }
      return response;
    }
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getProductActions
});
//# sourceMappingURL=ProductActions.js.map
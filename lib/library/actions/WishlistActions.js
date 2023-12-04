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

// src/library/actions/WishlistActions.ts
var WishlistActions_exports = {};
__export(WishlistActions_exports, {
  getWishlistActions: () => getWishlistActions
});
module.exports = __toCommonJS(WishlistActions_exports);
var import_frontend_sdk = require("@commercetools/frontend-sdk");
var getWishlistActions = (sdk) => {
  return {
    getWishlist: async (options = {}) => {
      const response = await sdk.callAction({
        actionName: "wishlist/getWishlist",
        serverOptions: options.serverOptions
      });
      if (response.isError === false) {
        sdk.trigger(
          new import_frontend_sdk.Event({
            eventName: "wishlistFetched",
            data: {
              wishlist: response.data
            }
          })
        );
      }
      return response;
    },
    addItem: async (payload, options = {}) => {
      const response = await sdk.callAction({
        actionName: "wishlist/addToWishlist",
        payload,
        serverOptions: options.serverOptions
      });
      if (response.isError === false) {
        const lineItem = response.data.lineItems?.find(
          (lineItem2) => lineItem2.variant?.sku === payload.variant.sku
        );
        if (lineItem) {
          sdk.trigger(
            new import_frontend_sdk.Event({
              eventName: "lineItemAddedToWishlist",
              data: {
                lineItem
              }
            })
          );
        }
      }
      return response;
    },
    removeItem: async (payload, options = {}) => {
      const response = await sdk.callAction({
        actionName: "wishlist/removeLineItem",
        payload,
        serverOptions: options.serverOptions
      });
      if (response.isError === false && !response.data.lineItems?.find(
        (item) => item.lineItemId === payload.lineItem.id
      )) {
        sdk.trigger(
          new import_frontend_sdk.Event({
            eventName: "lineItemRemovedFromWishlist",
            data: {
              lineItemId: payload.lineItem.id
            }
          })
        );
      }
      return response;
    },
    updateItem: async (payload, options = {}) => {
      const response = await sdk.callAction({
        actionName: "wishlist/updateLineItemCount",
        payload,
        serverOptions: options.serverOptions
      });
      if (response.isError === false) {
        const lineItem = response.data.lineItems?.find(
          (item) => item.lineItemId === payload.lineItem.id
        );
        if (lineItem?.count === payload.count) {
          sdk.trigger(
            new import_frontend_sdk.Event({
              eventName: "wishlistLineItemUpdated",
              data: {
                lineItem
              }
            })
          );
        }
      }
      return response;
    }
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getWishlistActions
});
//# sourceMappingURL=WishlistActions.js.map
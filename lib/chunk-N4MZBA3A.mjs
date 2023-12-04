// src/library/actions/WishlistActions.ts
import { Event } from "@commercetools/frontend-sdk";
var getWishlistActions = (sdk) => {
  return {
    getWishlist: async (options = {}) => {
      const response = await sdk.callAction({
        actionName: "wishlist/getWishlist",
        serverOptions: options.serverOptions
      });
      if (response.isError === false) {
        sdk.trigger(
          new Event({
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
            new Event({
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
          new Event({
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
            new Event({
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

export {
  getWishlistActions
};
//# sourceMappingURL=chunk-N4MZBA3A.mjs.map
// src/library/actions/CartActions.ts
import { Event } from "@commercetools/frontend-sdk";
var getCartActions = (sdk) => {
  return {
    getCart: async (options = {}) => {
      const response = await sdk.callAction({
        actionName: "cart/getCart",
        serverOptions: options.serverOptions
      });
      if (response.isError === false) {
        sdk.trigger(
          new Event({
            eventName: "cartFetched",
            data: {
              cart: response
            }
          })
        );
      }
      return response;
    },
    addItem: async (payload, options = {}) => {
      const response = await sdk.callAction({
        actionName: "cart/addToCart",
        payload,
        serverOptions: options.serverOptions
      });
      if (response.isError === false) {
        sdk.trigger(
          new Event({
            eventName: "productAddedToCart",
            data: {
              product: payload.variant,
              quantity: payload.variant.count
            }
          })
        );
      }
      return response;
    },
    removeItem: async (payload, options = {}) => {
      const response = await sdk.callAction({
        actionName: "cart/removeLineItem",
        payload,
        serverOptions: options.serverOptions
      });
      if (response.isError === false) {
        sdk.trigger(
          new Event({
            eventName: "productRemovedFromCart",
            data: {
              product: payload.lineItem,
              quantity: 1
            }
          })
        );
      }
      return response;
    },
    updateItem: async (payload, options = {}) => {
      const response = await sdk.callAction({
        actionName: "cart/updateLineItem",
        payload,
        serverOptions: options.serverOptions
      });
      if (response.isError === false) {
        sdk.trigger(
          new Event({
            eventName: "productUpdatedInCart",
            data: {
              product: {
                id: payload.lineItem.id
              },
              newQuantity: payload.lineItem.count
            }
          })
        );
      }
      return response;
    },
    updateCart: async (payload, options = {}) => {
      const response = await sdk.callAction({
        actionName: "cart/updateCart",
        payload,
        serverOptions: options.serverOptions
      });
      if (response.isError === false) {
        sdk.trigger(
          new Event({
            eventName: "cartUpdated",
            data: payload
          })
        );
      }
      return response;
    },
    getShippingMethods: async (payload, options = {}) => {
      const response = await sdk.callAction({
        actionName: "cart/getShippingMethods",
        query: payload?.query ?? void 0,
        serverOptions: options.serverOptions
      });
      if (response.isError === false) {
        sdk.trigger(
          new Event({
            eventName: "shippingMethodsFetched",
            data: {
              shippingMethods: response.data
            }
          })
        );
      }
      return response;
    },
    getAvailableShippingMethods: async (options = {}) => {
      const response = await sdk.callAction({
        actionName: "cart/getAvailableShippingMethods",
        serverOptions: options.serverOptions
      });
      if (response.isError === false) {
        sdk.trigger(
          new Event({
            eventName: "availableShippingMethodsFetched",
            data: {
              shippingMethods: response.data
            }
          })
        );
      }
      return response;
    },
    setShippingMethod: async (payload, options = {}) => {
      const response = await sdk.callAction({
        actionName: "cart/setShippingMethod",
        payload,
        serverOptions: options.serverOptions
      });
      if (response.isError === false) {
        sdk.trigger(
          new Event({
            eventName: "shippingMethodUpdated",
            data: {
              shippingMethod: response.data.availableShippingMethods?.find(
                (shippingMethod) => shippingMethod.shippingMethodId === payload.shippingMethod.id
              )
            }
          })
        );
      }
      return response;
    },
    redeemDiscountCode: async (payload, options = {}) => {
      const response = await sdk.callAction({
        actionName: "cart/redeemDiscount",
        payload,
        serverOptions: options.serverOptions
      });
      if (response.isError === false) {
        sdk.trigger(
          new Event({
            eventName: "discountCodeRedeemed",
            data: {
              discountCode: typeof response.data !== "string" ? payload.code : response.data,
              cart: typeof response.data !== "string" ? response.data : void 0
            }
          })
        );
      }
      return response;
    },
    removeDiscountCode: async (payload, options = {}) => {
      const response = await sdk.callAction({
        actionName: "cart/removeDiscount",
        payload,
        serverOptions: options.serverOptions
      });
      if (response.isError === false) {
        sdk.trigger(
          new Event({
            eventName: "discountCodeRemoved",
            data: {
              discountCode: payload.discountId,
              cart: response.data
            }
          })
        );
      }
      return response;
    },
    checkout: async (options = {}) => {
      const response = await sdk.callAction({
        actionName: "cart/checkout",
        serverOptions: options.serverOptions
      });
      if (response.isError === false) {
        sdk.trigger(
          new Event({
            eventName: "cartCheckedOut",
            data: {}
          })
        );
      }
      return response;
    },
    queryOrders: async (query, options = {}) => {
      const response = await sdk.callAction({
        actionName: "cart/queryOrders",
        query,
        serverOptions: options.serverOptions
      });
      return response;
    }
  };
};

export {
  getCartActions
};
//# sourceMappingURL=chunk-MIYJWH5T.mjs.map
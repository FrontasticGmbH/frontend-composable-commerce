// src/library/actions/ProductActions.ts
import { Event } from "@commercetools/frontend-sdk";
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
          new Event({
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
          new Event({
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
          new Event({
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
          new Event({
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

export {
  getProductActions
};
//# sourceMappingURL=chunk-QHYL7UUU.mjs.map
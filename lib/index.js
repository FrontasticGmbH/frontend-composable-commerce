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

// src/index.ts
var src_exports = {};
__export(src_exports, {
  ComposableCommerce: () => ComposableCommerce
});
module.exports = __toCommonJS(src_exports);

// src/library/Integration.ts
var import_frontend_sdk6 = require("@commercetools/frontend-sdk");

// src/library/actions/ProjectActions.ts
var import_frontend_sdk = require("@commercetools/frontend-sdk");
var getProjectActions = (sdk) => {
  return {
    getSettings: async (options = {}) => {
      const response = await sdk.callAction({
        actionName: "project/getProjectSettings",
        serverOptions: options.serverOptions
      });
      if (response.isError === false) {
        sdk.trigger(
          new import_frontend_sdk.Event({
            eventName: "projectSettingsFetched",
            data: {
              projectSettings: response.data
            }
          })
        );
      }
      return response;
    }
  };
};

// src/library/actions/ProductActions.ts
var import_frontend_sdk2 = require("@commercetools/frontend-sdk");
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
          new import_frontend_sdk2.Event({
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
          new import_frontend_sdk2.Event({
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
          new import_frontend_sdk2.Event({
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
          new import_frontend_sdk2.Event({
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

// src/library/actions/CartActions.ts
var import_frontend_sdk3 = require("@commercetools/frontend-sdk");
var getCartActions = (sdk) => {
  return {
    getCart: async (options = {}) => {
      const response = await sdk.callAction({
        actionName: "cart/getCart",
        serverOptions: options.serverOptions
      });
      if (response.isError === false) {
        sdk.trigger(
          new import_frontend_sdk3.Event({
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
          new import_frontend_sdk3.Event({
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
          new import_frontend_sdk3.Event({
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
          new import_frontend_sdk3.Event({
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
          new import_frontend_sdk3.Event({
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
          new import_frontend_sdk3.Event({
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
          new import_frontend_sdk3.Event({
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
          new import_frontend_sdk3.Event({
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
          new import_frontend_sdk3.Event({
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
          new import_frontend_sdk3.Event({
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
          new import_frontend_sdk3.Event({
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

// src/library/actions/WishlistActions.ts
var import_frontend_sdk4 = require("@commercetools/frontend-sdk");
var getWishlistActions = (sdk) => {
  return {
    getWishlist: async (options = {}) => {
      const response = await sdk.callAction({
        actionName: "wishlist/getWishlist",
        serverOptions: options.serverOptions
      });
      if (response.isError === false) {
        sdk.trigger(
          new import_frontend_sdk4.Event({
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
            new import_frontend_sdk4.Event({
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
          new import_frontend_sdk4.Event({
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
            new import_frontend_sdk4.Event({
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

// src/library/actions/AccountActions.ts
var import_frontend_sdk5 = require("@commercetools/frontend-sdk");
var addressesAreEqual = function(firstAddress, secondAddress, compareIds) {
  return !compareIds || compareIds && firstAddress.addressId === secondAddress.addressId && firstAddress.streetName === secondAddress.streetName && firstAddress.streetNumber === secondAddress.streetNumber && firstAddress.additionalStreetInfo === secondAddress.additionalStreetInfo && firstAddress.additionalAddressInfo === secondAddress.additionalAddressInfo && firstAddress.city === secondAddress.city && firstAddress.state === secondAddress.state && firstAddress.country === secondAddress.country && firstAddress.postalCode === secondAddress.postalCode && firstAddress.salutation === secondAddress.salutation && firstAddress.firstName === secondAddress.firstName && firstAddress.lastName === secondAddress.lastName && firstAddress.isDefaultBillingAddress === secondAddress.isDefaultBillingAddress && firstAddress.isDefaultShippingAddress === secondAddress.isDefaultShippingAddress && firstAddress.phone === secondAddress.phone;
};
var getAccountActions = (sdk) => {
  return {
    getAccount: async (options = {}) => {
      const response = await sdk.callAction({
        actionName: "account/getAccount",
        serverOptions: options.serverOptions
      });
      if (response.isError === false && response.data.loggedIn && response.data.account) {
        sdk.trigger(
          new import_frontend_sdk5.Event({
            eventName: "accountFetched",
            data: {
              account: response.data.account
            }
          })
        );
      }
      return response;
    },
    login: async (payload, options = {}) => {
      const remember = payload.remember;
      payload.remember = void 0;
      const response = await sdk.callAction({
        actionName: "account/login",
        payload,
        serverOptions: options.serverOptions
      });
      if (response.isError === false) {
        if (remember) {
          await import_frontend_sdk5.rememberMeCookieAsync.set(
            true,
            options.serverOptions
          );
        }
        sdk.trigger(
          new import_frontend_sdk5.Event({
            eventName: "userLoggedIn",
            data: {
              account: response.data
            }
          })
        );
      }
      return response;
    },
    logout: async (options = {}) => {
      const response = await sdk.callAction({
        actionName: "account/logout",
        serverOptions: options.serverOptions
      });
      if (response.isError === false) {
        await import_frontend_sdk5.rememberMeCookieAsync.remove(options.serverOptions);
        sdk.trigger(
          new import_frontend_sdk5.Event({
            eventName: "userLoggedOut",
            data: {}
          })
        );
      }
      return response;
    },
    register: async (payload, options = {}) => {
      const response = await sdk.callAction({
        actionName: "account/register",
        payload,
        serverOptions: options.serverOptions
      });
      if (response.isError === false) {
        sdk.trigger(
          new import_frontend_sdk5.Event({
            eventName: "userRegistered",
            data: {
              account: response.data
            }
          })
        );
      }
      return response;
    },
    confirm: async (payload, options = {}) => {
      const response = await sdk.callAction({
        actionName: "account/confirm",
        payload,
        serverOptions: options.serverOptions
      });
      if (response.isError === false) {
        sdk.trigger(
          new import_frontend_sdk5.Event({
            eventName: "accountConfirmed",
            data: {
              account: response.data
            }
          })
        );
      }
      return response;
    },
    requestConfirmationEmail: async (payload, options = {}) => {
      const response = await sdk.callAction({
        actionName: "account/requestConfirmationEmail",
        payload,
        serverOptions: options.serverOptions
      });
      if (response.isError === false) {
        sdk.trigger(
          new import_frontend_sdk5.Event({
            eventName: "accountConfirmationEmailRequested",
            data: {
              email: payload.email
            }
          })
        );
      }
      return response;
    },
    changePassword: async (payload, options = {}) => {
      const response = await sdk.callAction({
        actionName: "account/password",
        payload,
        serverOptions: options.serverOptions
      });
      if (response.isError === false) {
        sdk.trigger(
          new import_frontend_sdk5.Event({
            eventName: "passwordChanged",
            data: {}
          })
        );
      }
      return response;
    },
    requestResetPassword: async (payload, options = {}) => {
      const response = await sdk.callAction({
        actionName: "account/requestReset",
        payload,
        serverOptions: options.serverOptions
      });
      if (response.isError === false) {
        sdk.trigger(
          new import_frontend_sdk5.Event({
            eventName: "passwordResetRequested",
            data: {}
          })
        );
      }
      return response;
    },
    resetPassword: async (payload, options = {}) => {
      const response = await sdk.callAction({
        actionName: "account/reset",
        payload,
        serverOptions: options.serverOptions
      });
      if (response.isError === false) {
        sdk.trigger(
          new import_frontend_sdk5.Event({
            eventName: "passwordReset",
            data: {}
          })
        );
      }
      return response;
    },
    updateAccount: async (payload, options = {}) => {
      const response = await sdk.callAction({
        actionName: "account/update",
        payload,
        serverOptions: options.serverOptions
      });
      if (response.isError === false) {
        sdk.trigger(
          new import_frontend_sdk5.Event({
            eventName: "accountUpdated",
            data: {
              account: response.data
            }
          })
        );
      }
      return response;
    },
    addAddress: async (payload, options = {}) => {
      const response = await sdk.callAction({
        actionName: "account/addAddress",
        payload,
        serverOptions: options.serverOptions
      });
      if (response.isError === false) {
        const newAddress = response.data.addresses?.find(
          (address) => addressesAreEqual(address, payload, false)
        );
        if (newAddress) {
          sdk.trigger(
            new import_frontend_sdk5.Event({
              eventName: "accountAddressAdded",
              data: {
                address: newAddress
              }
            })
          );
        }
      }
      return response;
    },
    updateAddress: async (payload, options = {}) => {
      const response = await sdk.callAction({
        actionName: "account/updateAddress",
        payload,
        serverOptions: options.serverOptions
      });
      if (response.isError === false) {
        const newAddress = response.data.addresses?.find(
          (address) => addressesAreEqual(address, payload, true)
        );
        if (newAddress) {
          sdk.trigger(
            new import_frontend_sdk5.Event({
              eventName: "accountAddressUpdated",
              data: {
                address: newAddress
              }
            })
          );
        }
      }
      return response;
    },
    removeAddress: async (payload, options = {}) => {
      const response = await sdk.callAction({
        actionName: "account/removeAddress",
        payload,
        serverOptions: options.serverOptions
      });
      if (response.isError === false) {
        if (!response.data.addresses?.find(
          (address) => address.addressId === payload.addressId
        )) {
          sdk.trigger(
            new import_frontend_sdk5.Event({
              eventName: "accountAddressRemoved",
              data: {
                addressId: payload.addressId
              }
            })
          );
        }
      }
      return response;
    },
    setDefaultBillingAddress: async (payload, options = {}) => {
      const response = await sdk.callAction({
        actionName: "account/setDefaultBillingAddress",
        payload,
        serverOptions: options.serverOptions
      });
      if (response.isError === false) {
        const address = response.data.addresses?.find(
          (address2) => address2.addressId === payload.addressId
        );
        if (address?.isDefaultBillingAddress) {
          sdk.trigger(
            new import_frontend_sdk5.Event({
              eventName: "defaultBillingAddressSet",
              data: {
                address
              }
            })
          );
        }
      }
      return response;
    },
    setDefaultShippingAddress: async (payload, options = {}) => {
      const response = await sdk.callAction({
        actionName: "account/setDefaultShippingAddress",
        payload,
        serverOptions: options.serverOptions
      });
      if (response.isError === false) {
        const address = response.data.addresses?.find(
          (address2) => address2.addressId === payload.addressId
        );
        if (address?.isDefaultShippingAddress) {
          sdk.trigger(
            new import_frontend_sdk5.Event({
              eventName: "defaultShippingAddressSet",
              data: {
                address
              }
            })
          );
        }
      }
      return response;
    }
  };
};

// src/library/Integration.ts
var ComposableCommerce = class extends import_frontend_sdk6.Integration {
  constructor(sdk) {
    super(sdk);
    this.project = getProjectActions(sdk);
    this.product = getProductActions(sdk);
    this.cart = getCartActions(sdk);
    this.wishlist = getWishlistActions(sdk);
    this.account = getAccountActions(sdk);
  }
  unregisterExtension() {
  }
  project;
  product;
  cart;
  wishlist;
  account;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ComposableCommerce
});
//# sourceMappingURL=index.js.map
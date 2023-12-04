// src/library/actions/AccountActions.ts
import {
  rememberMeCookieAsync,
  Event
} from "@commercetools/frontend-sdk";
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
          new Event({
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
          await rememberMeCookieAsync.set(
            true,
            options.serverOptions
          );
        }
        sdk.trigger(
          new Event({
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
        await rememberMeCookieAsync.remove(options.serverOptions);
        sdk.trigger(
          new Event({
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
          new Event({
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
          new Event({
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
          new Event({
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
          new Event({
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
          new Event({
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
          new Event({
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
          new Event({
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
            new Event({
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
            new Event({
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
            new Event({
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
            new Event({
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
            new Event({
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

export {
  getAccountActions
};
//# sourceMappingURL=chunk-MV5NDRI7.mjs.map
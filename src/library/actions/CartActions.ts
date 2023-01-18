import { Event, SDK } from "@commercetools/frontend-sdk";
import {
    AddCartItemPayload,
    GetCartShippingMethodsPayload,
    RedeemDiscountCodePayload,
    RemoveCartItemPayload,
    RemoveDiscountCodePayload,
    SetCartShippingMethodPayload,
    UpdateCartItemPayload,
    UpdateCartPayload,
} from "../../types/payloads/CartPayloads";
import {
    AddCartItemAction,
    CheckoutCartAction,
    GetAvailableCartShippingMethodsAction,
    GetCartAction,
    GetCartShippingMethodsAction,
    GetOrderHistoryAction,
    RedeemDiscountCodeAction,
    RemoveCartItemAction,
    RemoveDiscountCodeAction,
    SetCartShippingMethodAction,
    UpdateCartAction,
    UpdateCartItemAction,
} from "../../types/actions/CartActions";
import { Cart } from "@commercetools/frontend-domain-types/cart/Cart";
import { ShippingMethod } from "@commercetools/frontend-domain-types/cart/ShippingMethod";
import { Order } from "@commercetools/frontend-domain-types/cart/Order";
import { ComposableCommerceEvents } from "../../types/types";

export type CartActions = {
    getCart: GetCartAction;
    addItem: AddCartItemAction;
    removeItem: RemoveCartItemAction;
    updateItem: UpdateCartItemAction;
    updateCart: UpdateCartAction;
    getShippingMethods: GetCartShippingMethodsAction;
    getAvailableShippingMethods: GetAvailableCartShippingMethodsAction;
    setShippingMethod: SetCartShippingMethodAction;
    redeemDiscountCode: RedeemDiscountCodeAction;
    removeDiscountCode: RemoveDiscountCodeAction;
    checkout: CheckoutCartAction;
    getOrderHistory: GetOrderHistoryAction;
};

export const getCartActions = (
    sdk: SDK<ComposableCommerceEvents>,
): CartActions => {
    return {
        getCart: async () => {
            const response = await sdk.callAction<Cart>({
                actionName: "cart/getCart",
            });

            if (!response.isError) {
                sdk.trigger(
                    new Event({
                        eventName: "cartFetched",
                        data: {
                            cart: response,
                        },
                    }),
                );
            }
            return response;
        },
        addItem: async (payload: AddCartItemPayload) => {
            const response = await sdk.callAction<Cart>({
                actionName: "cart/addToCart",
                payload,
            });

            if (!response.isError) {
                sdk.trigger(
                    new Event({
                        eventName: "productAddedToCart",
                        data: {
                            product: payload.variant,
                            quantity: payload.variant.count,
                        },
                    }),
                );
            }
            return response;
        },
        removeItem: async (payload: RemoveCartItemPayload) => {
            const response = await sdk.callAction<Cart>({
                actionName: "cart/removeLineItem",
                payload,
            });

            if (!response.isError) {
                sdk.trigger(
                    new Event({
                        eventName: "productRemovedFromCart",
                        data: {
                            product: payload.lineItem,
                            quantity: 1,
                        },
                    }),
                );
            }
            return response;
        },
        updateItem: async (payload: UpdateCartItemPayload) => {
            const response = await sdk.callAction<Cart>({
                actionName: "cart/updateLineItem",
                payload,
            });

            if (!response.isError) {
                sdk.trigger(
                    new Event({
                        eventName: "productUpdatedInCart",
                        data: {
                            product: {
                                id: payload.lineItem.id,
                            },
                            newQuantity: payload.lineItem.count,
                        },
                    }),
                );
            }
            return response;
        },
        updateCart: async (payload: UpdateCartPayload) => {
            const response = await sdk.callAction<Cart>({
                actionName: "cart/updateCart",
                payload,
            });

            if (!response.isError) {
                sdk.trigger(
                    new Event({
                        eventName: "cartUpdated",
                        data: payload,
                    }),
                );
            }
            return response;
        },
        getShippingMethods: async (payload?: GetCartShippingMethodsPayload) => {
            const response = await sdk.callAction<ShippingMethod[]>({
                actionName: "cart/getShippingMethods",
                query: payload?.query ?? undefined,
            });

            if (!response.isError) {
                sdk.trigger(
                    new Event({
                        eventName: "shippingMethodsFetched",
                        data: {
                            shippingMethods: response.data,
                        },
                    }),
                );
            }
            return response;
        },
        getAvailableShippingMethods: async () => {
            const response = await sdk.callAction<ShippingMethod[]>({
                actionName: "cart/getAvailableShippingMethods",
            });

            if (!response.isError) {
                sdk.trigger(
                    new Event({
                        eventName: "availableShippingMethodsFetched",
                        data: {
                            shippingMethods: response.data,
                        },
                    }),
                );
            }
            return response;
        },
        setShippingMethod: async (payload: SetCartShippingMethodPayload) => {
            const response = await sdk.callAction<Cart>({
                actionName: "cart/setShippingMethod",
                payload,
            });

            if (!response.isError) {
                sdk.trigger(
                    new Event({
                        eventName: "shippingMethodUpdated",
                        data: {
                            shippingMethod:
                                response.data.availableShippingMethods?.find(
                                    (shippingMethod) =>
                                        shippingMethod.shippingMethodId ===
                                        payload.shippingMethod.id,
                                ),
                        },
                    }),
                );
            }
            return response;
        },
        redeemDiscountCode: async (payload: RedeemDiscountCodePayload) => {
            const response = await sdk.callAction<Cart | string>({
                actionName: "cart/redeemDiscount",
                payload,
            });

            if (!response.isError) {
                sdk.trigger(
                    new Event({
                        eventName: "discountCodeRedeemed",
                        data: {
                            discountCode:
                                typeof response.data !== "string"
                                    ? payload.code
                                    : response.data,
                            cart:
                                typeof response.data !== "string"
                                    ? response.data
                                    : undefined,
                        },
                    }),
                );
            }
            return response;
        },
        removeDiscountCode: async (payload: RemoveDiscountCodePayload) => {
            const response = await sdk.callAction<Cart>({
                actionName: "cart/removeDiscount",
                payload,
            });

            if (!response.isError) {
                sdk.trigger(
                    new Event({
                        eventName: "discountCodeRemoved",
                        data: {
                            discountCode: payload.discountId,
                            cart: response.data,
                        },
                    }),
                );
            }
            return response;
        },
        checkout: async () => {
            const response = await sdk.callAction<Cart>({
                actionName: "cart/checkout",
            });

            if (!response.isError) {
                sdk.trigger(
                    new Event({
                        eventName: "cartCheckedOut",
                        data: {},
                    }),
                );
            }
            return response;
        },
        getOrderHistory: async () => {
            const response = await sdk.callAction<Order[]>({
                actionName: "cart/getOrders",
            });

            if (!response.isError) {
                sdk.trigger(
                    new Event({
                        eventName: "orderHistoryFetched",
                        data: {
                            orders: response.data,
                        },
                    }),
                );
            }
            return response;
        },
    };
};

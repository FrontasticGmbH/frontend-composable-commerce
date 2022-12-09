import { SDK, Event } from "@commercetools/frontend-sdk";
import {
	AddCartItemPayload,
	GetCartShippingMethodsPayload,
	RedeemDiscountCodePayload,
	RemoveCartItemPayload,
	RemoveDiscountCodePayload,
	SetCartShippingMethodPayload,
	UpdateCartItemPayload,
	UpdateCartPayload
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
	UpdateCartItemAction
} from "../../types/actions/CartActions";
import { Cart } from "@commercetools/frontend-domain-types/cart/Cart";


export type CartActions = {
	getCart: GetCartAction,
	addItem: AddCartItemAction,
	removeItem: RemoveCartItemAction,
	updateItem: UpdateCartItemAction,
	updateCart: UpdateCartAction,
	getShippingMethods: GetCartShippingMethodsAction,
	getAvailableShippingMethods: GetAvailableCartShippingMethodsAction,
	setShippingMethod: SetCartShippingMethodAction,
	redeemDiscountCode: RedeemDiscountCodeAction,
	removeDiscountCode: RemoveDiscountCodeAction,
	checkout: CheckoutCartAction,
	getOrderHistory: GetOrderHistoryAction
}

export const getCartActions = (sdk: SDK): CartActions => {
	return {
		getCart: () => {
			return sdk.callAction<Cart>("cart/getCart").then(cart => {
				if (!cart.isError) {
					sdk.trigger(new Event({
						eventName: "cartFetched",
						data: {
							cart: cart
						}
					}));
				}
				return cart;
			});
		},
		addItem: (payload: AddCartItemPayload) => {
			return sdk.callAction<Cart>("cart/addToCart", payload).then(cart => {
				if (!cart.isError) {
					sdk.trigger(new Event({
						eventName: "productAddedToCart",
						data: {
							product: payload.variant,
							quantity: payload.variant.count
						}
					}));
				}
				return cart;
			});
		},
		removeItem: (payload: RemoveCartItemPayload) => {
			return sdk.callAction<Cart>("cart/removeLineItem", payload).then(cart => {
				if (!cart.isError) {
					sdk.trigger(new Event({
						eventName: "productRemovedFromCart",
						data: {
							product: payload.lineItem,
							quantity: 1
						}
					}));
				}
				return cart;
			});
		},
		updateItem: (payload: UpdateCartItemPayload) => {
			return sdk.callAction<Cart>("cart/updateLineItem", payload).then(cart => {
				if (!cart.isError) {
					sdk.trigger(new Event({
						eventName: "productUpdatedInCart",
						data: {
							product: {
								id: payload.lineItem.id
							},
							newQuantity: payload.lineItem.count
						}
					}));
				}
				return cart;
			});
		},
		updateCart: (payload: UpdateCartPayload) => {
			return sdk.callAction<Cart>("cart/updateCart", payload);
		},
		getShippingMethods: (payload?: GetCartShippingMethodsPayload) => {
			return sdk.callAction("cart/getShippingMethods", {}, payload?.query ?? undefined);
		},
		getAvailableShippingMethods: () => {
			return sdk.callAction("cart/getAvailableShippingMethods");
		},
		setShippingMethod: (payload: SetCartShippingMethodPayload) => {
			return sdk.callAction("cart/setShippingMethod", payload);
		},
		redeemDiscountCode: (payload: RedeemDiscountCodePayload,) => {
			return sdk.callAction("cart/redeemDiscount", payload);
		},
		removeDiscountCode: (payload: RemoveDiscountCodePayload) => {
			return sdk.callAction("cart/removeDiscount", payload);
		},
		checkout: () => {
			return sdk.callAction("cart/checkout");
		},
		getOrderHistory: () => {
			return sdk.callAction("cart/getOrders");
		}
	}
};

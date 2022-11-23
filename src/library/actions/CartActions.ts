import { SDK, Event } from "@commercetools-frontend/sdk";
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
import { Cart } from "@commercetools-frontend/domain-types/cart/Cart";


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
			return sdk.callAction("cart/getCart", {});
		},
		addItem: (payload: AddCartItemPayload) => {
			return sdk.callAction<Cart>("cart/addToCart", payload).then(cart => {
				sdk.triggerHandlers(new Event({
					eventName: "productAddedToCart",
					data: {
						product: payload.variant,
						quantity: payload.variant.count
					}
				}));
				return cart;
			});
		},
		removeItem: (payload: RemoveCartItemPayload) => {
			return sdk.callAction("cart/removeLineItem", payload);
		},
		updateItem: (payload: UpdateCartItemPayload) => {
			return sdk.callAction("cart/updateLineItem", payload);
		},
		updateCart: (payload: UpdateCartPayload) => {
			return sdk.callAction("cart/updateCart", payload);
		},
		getShippingMethods: (payload?: GetCartShippingMethodsPayload) => {
			return sdk.callAction("cart/getShippingMethods", {}, payload?.query ?? undefined);
		},
		getAvailableShippingMethods: () => {
			return sdk.callAction("cart/getAvailableShippingMethods", {});
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
			return sdk.callAction("cart/checkout", {});
		},
		getOrderHistory: () => {
			return sdk.callAction("cart/getOrders", {});
		}
	}
};

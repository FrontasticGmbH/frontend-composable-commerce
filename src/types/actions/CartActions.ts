import { Cart } from "@commercetools/frontend-domain-types/cart/Cart";
import { Order } from "@commercetools/frontend-domain-types/cart/Order";
import { ShippingMethod } from "@commercetools/frontend-domain-types/cart/ShippingMethod";
import { sdk } from "@commercetools/frontend-sdk";
import {
	AddCartItemPayload,
	RemoveCartItemPayload,
	UpdateCartItemPayload,
	UpdateCartPayload,
	GetCartShippingMethodsPayload,
	SetCartShippingMethodPayload,
	RedeemDiscountCodePayload,
	RemoveDiscountCodePayload
} from "../payloads/CartPayloads";

type GetCartAction = () => ReturnType<typeof sdk.callAction<Cart>>;

type AddCartItemAction = (payload: AddCartItemPayload) => ReturnType<typeof sdk.callAction<Cart>>;

type RemoveCartItemAction = (payload: RemoveCartItemPayload) => ReturnType<typeof sdk.callAction<Cart>>;

type UpdateCartItemAction = (payload: UpdateCartItemPayload) => ReturnType<typeof sdk.callAction<Cart>>;

type UpdateCartAction = (payload: UpdateCartPayload) => ReturnType<typeof sdk.callAction<Cart>>;

type GetCartShippingMethodsAction = (payload: GetCartShippingMethodsPayload) => ReturnType<typeof sdk.callAction<ShippingMethod[]>>;

type GetAvailableCartShippingMethodsAction = () => ReturnType<typeof sdk.callAction<ShippingMethod[]>>;

type SetCartShippingMethodAction = (
	payload: SetCartShippingMethodPayload,
) => ReturnType<typeof sdk.callAction<Cart>>;

type RedeemDiscountCodeAction = (
	payload: RedeemDiscountCodePayload,
) => ReturnType<typeof sdk.callAction<Cart | string>>;

type RemoveDiscountCodeAction = (
	payload: RemoveDiscountCodePayload,
) => ReturnType<typeof sdk.callAction<Cart>>;

type CheckoutCartAction = () => ReturnType<typeof sdk.callAction<Cart>>;

type GetOrderHistoryAction = () => ReturnType<typeof sdk.callAction<Order[]>>;

export {
	GetCartAction,
	AddCartItemAction,
	RemoveCartItemAction,
	UpdateCartItemAction,
	UpdateCartAction,
	GetCartShippingMethodsAction,
	GetAvailableCartShippingMethodsAction,
	SetCartShippingMethodAction,
	RedeemDiscountCodeAction,
	RemoveDiscountCodeAction,
	CheckoutCartAction,
	GetOrderHistoryAction
};

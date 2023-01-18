import { Cart } from "@commercetools/frontend-domain-types/cart/Cart";
import { Order } from "@commercetools/frontend-domain-types/cart/Order";
import { ShippingMethod } from "@commercetools/frontend-domain-types/cart/ShippingMethod";
import { SDKResponse } from "@commercetools/frontend-sdk";
import {
	AddCartItemPayload,
	RemoveCartItemPayload,
	UpdateCartItemPayload,
	UpdateCartPayload,
	GetCartShippingMethodsPayload,
	SetCartShippingMethodPayload,
	RedeemDiscountCodePayload,
	RemoveDiscountCodePayload,
} from "../payloads/CartPayloads";

type GetCartAction = () => Promise<SDKResponse<Cart>>;

type AddCartItemAction = (
	payload: AddCartItemPayload,
) => Promise<SDKResponse<Cart>>;

type RemoveCartItemAction = (
	payload: RemoveCartItemPayload,
) => Promise<SDKResponse<Cart>>;

type UpdateCartItemAction = (
	payload: UpdateCartItemPayload,
) => Promise<SDKResponse<Cart>>;

type UpdateCartAction = (
	payload: UpdateCartPayload,
) => Promise<SDKResponse<Cart>>;

type GetCartShippingMethodsAction = (
	payload: GetCartShippingMethodsPayload,
) => Promise<SDKResponse<ShippingMethod[]>>;

type GetAvailableCartShippingMethodsAction = () => Promise<
	SDKResponse<ShippingMethod[]>
>;

type SetCartShippingMethodAction = (
	payload: SetCartShippingMethodPayload,
) => Promise<SDKResponse<Cart>>;

type RedeemDiscountCodeAction = (
	payload: RedeemDiscountCodePayload,
) => Promise<SDKResponse<Cart | string>>;

type RemoveDiscountCodeAction = (
	payload: RemoveDiscountCodePayload,
) => Promise<SDKResponse<Cart>>;

type CheckoutCartAction = () => Promise<SDKResponse<Cart>>;

type GetOrderHistoryAction = () => Promise<SDKResponse<Order[]>>;

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
	GetOrderHistoryAction,
};

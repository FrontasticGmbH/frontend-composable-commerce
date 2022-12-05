import { Cart } from "@commercetools/frontend-domain-types/cart/Cart";
import { Order } from "@commercetools/frontend-domain-types/cart/Order";
import { ShippingMethod } from "@commercetools/frontend-domain-types/cart/ShippingMethod";
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

type GetCartAction = () => Promise<Cart | Error>;

type AddCartItemAction = (payload: AddCartItemPayload) => Promise<Cart | Error>;

type RemoveCartItemAction = (payload: RemoveCartItemPayload) => Promise<Cart | Error>;

type UpdateCartItemAction = (payload: UpdateCartItemPayload) => Promise<Cart | Error>;

type UpdateCartAction = (payload: UpdateCartPayload) => Promise<Cart | Error>;

type GetCartShippingMethodsAction = (payload: GetCartShippingMethodsPayload) => Promise<ShippingMethod[] | Error>;

type GetAvailableCartShippingMethodsAction = () => Promise<ShippingMethod[] | Error>;

type SetCartShippingMethodAction = (
	payload: SetCartShippingMethodPayload,
) => Promise<Cart | Error>;

type RedeemDiscountCodeAction = (
	payload: RedeemDiscountCodePayload,
) => Promise<Cart | string | Error>;

type RemoveDiscountCodeAction = (
	payload: RemoveDiscountCodePayload,
) => Promise<Cart | Error>;

type CheckoutCartAction = () => Promise<Cart | Error>;

type GetOrderHistoryAction = () => Promise<Order[] | Error>;

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

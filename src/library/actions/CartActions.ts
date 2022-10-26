import { Cart } from "@commercetools/domain-types/cart/Cart";
import { Order } from "@commercetools/domain-types/cart/Order";
import { ShippingMethod } from "@commercetools/domain-types/cart/ShippingMethod";
import {
	AddCartItemPayload,
	RemoveCartItemPayload,
	UpdateCartItemPayload,
	UpdateCartPayload,
	SetCartShippingMethodPayload,
	RedeemDiscountCodePayload,
	RemoveDiscountCodePayload
} from "../payloads/CartPayloads";

type GetCartAction = () => Promise<Cart>;

type AddCartItemAction = (payload: AddCartItemPayload) => Promise<Cart>;

type RemoveCartItemAction = (payload: RemoveCartItemPayload) => Promise<Cart>;

type UpdateCartItemAction = (payload: UpdateCartItemPayload) => Promise<Cart>;

type UpdateCartAction = (payload: UpdateCartPayload) => Promise<Cart>;

type GetCartShippingMethodsAction = () => Promise<ShippingMethod[]>;

type GetAvailableCartShippingMethodsAction = () => Promise<ShippingMethod[]>;

type SetCartShippingMethodAction = (
	payload: SetCartShippingMethodPayload,
) => Promise<Cart>;

type RedeemDiscountCodeAction = (
	payload: RedeemDiscountCodePayload,
) => Promise<Cart | string>;

type RemoveDiscountCodeAction = (
	payload: RemoveDiscountCodePayload,
) => Promise<Cart>;

type CheckoutCartAction = () => Promise<Cart>;

type GetOrderHistoryAction = () => Promise<Order[]>;

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

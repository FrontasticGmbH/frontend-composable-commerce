import { Address } from "@commercetools/domain-types/account/Address";

type AddCartItemPayload = {
	variant: {
		sku: number;
		count: number;
	};
};

type RemoveCartItemPayload = {
	lineItem: {
		id: string;
	};
};

type UpdateCartItemPayload = {
	lineItem: {
		id: string;
		count: number;
	};
};

type UpdateCartPayload = {
	account?: {
		email: string;
	};
	shipping?: Address;
	billing?: Address;
};

type SetCartShippingMethodPayload = {
	shippingMethod: {
		id: string;
	};
};

type RedeemDiscountCodePayload = {
	code: string;
};

type RemoveDiscountCodePayload = {
	discountId: string;
};

export {
	AddCartItemPayload,
	RemoveCartItemPayload,
	UpdateCartItemPayload,
	UpdateCartPayload,
	SetCartShippingMethodPayload,
	RedeemDiscountCodePayload,
	RemoveDiscountCodePayload
};
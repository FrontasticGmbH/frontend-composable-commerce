import { Address } from "@commercetools/domain-types/account/Address";

type AddCartItemPayload = {
	variant: {
		sku: string;
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

type GetCartShippingMethodsPayload = {
	query: {
		onlyMatching: boolean
	}
}

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
	GetCartShippingMethodsPayload,
	SetCartShippingMethodPayload,
	RedeemDiscountCodePayload,
	RemoveDiscountCodePayload
};

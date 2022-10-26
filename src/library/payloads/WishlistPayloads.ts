type AddToWishlistPayload = {
	variant: {
		sku: string;
	};
	count: number;
};

type RemoveFromWishlistPayload = {
	lineItem: {
		id: string;
	};
};

type UpdateWishlistItemPayload = {
	lineItem: {
		id: string;
	};
	count: number;
};

export {
	AddToWishlistPayload,
	RemoveFromWishlistPayload,
	UpdateWishlistItemPayload
};

import { SDK } from "@commercetools-frontend/sdk";
import {
	AddToWishlistPayload,
	RemoveFromWishlistPayload,
	UpdateWishlistItemPayload
} from "../../types/payloads/WishlistPayloads";
import {
	AddToWishlistAction,
	GetWishlistAction,
	RemoveFromWishlistAction,
	UpdateWishlistItemAction
} from "../../types/actions/WishlistActions";


export type WishlistActions = {
	getWishlist: GetWishlistAction,
	addItem: AddToWishlistAction,
	removeItem: RemoveFromWishlistAction,
	updateItem: UpdateWishlistItemAction
}

export const getWishlistActions = (sdk: SDK): WishlistActions => {
	return {
		getWishlist: () => {
			return sdk.callAction("wishlist/getWishlist", {});
		},
		addItem: (payload: AddToWishlistPayload) => {
			return sdk.callAction("wishlist/addToWishlist", payload);
		},
		removeItem: (payload: RemoveFromWishlistPayload) => {
			return sdk.callAction("wishlist/removeLineItem", payload);
		},
		updateItem: (payload: UpdateWishlistItemPayload) => {
			return sdk.callAction("wishlist/updateLineItemCount", payload);
		}
	}
}

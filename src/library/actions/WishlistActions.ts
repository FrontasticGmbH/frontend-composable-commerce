import { Event, SDK } from "@commercetools/frontend-sdk";
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
import { Wishlist } from "@commercetools/frontend-domain-types/wishlist/Wishlist";
import { ComposableCommerceEvents } from "../../types/types";


export type WishlistActions = {
	getWishlist: GetWishlistAction,
	addItem: AddToWishlistAction,
	removeItem: RemoveFromWishlistAction,
	updateItem: UpdateWishlistItemAction
}

export const getWishlistActions = (sdk: SDK<ComposableCommerceEvents>): WishlistActions => {
	return {
		getWishlist: async () => {
			const response = await sdk.callAction<Wishlist>({
				actionName: "wishlist/getWishlist"
			});

			if (!response.isError) {
				sdk.trigger(new Event({
					eventName: "wishlistFetched",
					data: {
						wishlist: response.data
					}
				}));
			}
			return response;
		},
		addItem: async (payload: AddToWishlistPayload) => {
			const response = await sdk.callAction<Wishlist>({
				actionName: "wishlist/addToWishlist",
				payload
			});

			if (!response.isError) {
				const lineItem = response.data.lineItems?.find(lineItem => lineItem.variant?.sku === payload.variant.sku);
				if (lineItem) {
					sdk.trigger(new Event({
						eventName: "lineItemAddedToWishlist",
						data: {
							lineItem
						}
					}));
				}
			}
			return response;
		},
		removeItem: async (payload: RemoveFromWishlistPayload) => {
			const response = await sdk.callAction<Wishlist>({
				actionName: "wishlist/removeLineItem", payload
			});

			if (!response.isError && !response.data.lineItems?.find(item => item.lineItemId === payload.lineItem.id)) {
				sdk.trigger(new Event({
					eventName: "lineItemRemovedFromWishlist",
					data: {
						lineItemId: payload.lineItem.id
					}
				}));
			}
			return response;
		},
		updateItem: async (payload: UpdateWishlistItemPayload) => {
			const response = await sdk.callAction<Wishlist>({
				actionName: "wishlist/updateLineItemCount", payload
			});

			if (!response.isError) {
				const lineItem = response.data.lineItems?.find(item => item.lineItemId === payload.lineItem.id);
				if (lineItem?.count === payload.count) {
					sdk.trigger(new Event({
						eventName: "wishlistLineItemUpdated",
						data: {
							lineItem: lineItem
						}
					}));
				}
			}
			return response;
		}
	}
}

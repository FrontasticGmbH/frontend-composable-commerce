import { Wishlist } from "@commercetools/frontend-domain-types/wishlist";
import { SDKResponse } from "@commercetools/frontend-sdk";
import {
	AddToWishlistPayload,
	RemoveFromWishlistPayload,
	UpdateWishlistItemPayload,
} from "../payloads/WishlistPayloads";

type GetWishlistAction = () => Promise<SDKResponse<Wishlist>>;

type AddToWishlistAction = (
	payload: AddToWishlistPayload
) => Promise<SDKResponse<Wishlist>>;

type RemoveFromWishlistAction = (
	payload: RemoveFromWishlistPayload
) => Promise<SDKResponse<Wishlist>>;

type UpdateWishlistItemAction = (
	payload: UpdateWishlistItemPayload
) => Promise<SDKResponse<Wishlist>>;

export {
	GetWishlistAction,
	AddToWishlistAction,
	RemoveFromWishlistAction,
	UpdateWishlistItemAction,
};

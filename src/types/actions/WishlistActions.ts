import { Wishlist } from "@commercetools/frontend-domain-types/wishlist/Wishlist";
import { sdk } from "@commercetools/frontend-sdk";
import {
	AddToWishlistPayload,
	RemoveFromWishlistPayload,
	UpdateWishlistItemPayload,
} from "../payloads/WishlistPayloads";

type GetWishlistAction = () => ReturnType<typeof sdk.callAction<Wishlist>>;

type AddToWishlistAction = (payload: AddToWishlistPayload) => ReturnType<typeof sdk.callAction<Wishlist>>;

type RemoveFromWishlistAction = (payload: RemoveFromWishlistPayload) => ReturnType<typeof sdk.callAction<Wishlist>>;

type UpdateWishlistItemAction = (payload: UpdateWishlistItemPayload) => ReturnType<typeof sdk.callAction<Wishlist>>;

export {
	GetWishlistAction,
	AddToWishlistAction,
	RemoveFromWishlistAction,
	UpdateWishlistItemAction,
};

import { Wishlist } from "@commercetools/domain-types/wishlist/Wishlist";
import {
	AddToWishlistPayload,
	RemoveFromWishlistPayload,
	UpdateWishlistItemPayload,
} from "../payloads/WishlistPayloads";

type GetWishlistAction = () => Promise<Wishlist>;

type AddToWishlistAction = (payload: AddToWishlistPayload) => Promise<Wishlist>;

type RemoveFromWishlistAction = (
	payload: RemoveFromWishlistPayload,
) => Promise<Wishlist>;

type UpdateWishlistItemAction = (
	payload: UpdateWishlistItemPayload,
) => Promise<Wishlist>;

export {
	GetWishlistAction,
	AddToWishlistAction,
	RemoveFromWishlistAction,
	UpdateWishlistItemAction,
};

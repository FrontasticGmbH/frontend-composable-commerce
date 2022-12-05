import { Wishlist } from "@commercetools/frontend-domain-types/wishlist/Wishlist";
import {
	AddToWishlistPayload,
	RemoveFromWishlistPayload,
	UpdateWishlistItemPayload,
} from "../payloads/WishlistPayloads";

type GetWishlistAction = () => Promise<Wishlist | Error>;

type AddToWishlistAction = (payload: AddToWishlistPayload) => Promise<Wishlist | Error>;

type RemoveFromWishlistAction = (payload: RemoveFromWishlistPayload) => Promise<Wishlist | Error>;

type UpdateWishlistItemAction = (payload: UpdateWishlistItemPayload) => Promise<Wishlist | Error>;

export {
	GetWishlistAction,
	AddToWishlistAction,
	RemoveFromWishlistAction,
	UpdateWishlistItemAction,
};

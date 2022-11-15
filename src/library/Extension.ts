import { SDK, Extension } from "@commercetools/sdk";
import { REMEMBER_ME } from "@commercetools/sdk";

import {
	AddAccountAddressAction,
	ChangeAccountPasswordAction,
	ConfirmAccountAction,
	GetAccountAction,
	LoginAccountAction,
	LogoutAccountAction,
	RegisterAccountAction,
	RemoveAccountAddressAction,
	RequestAccountConfirmationEmailAction,
	RequestAccountPasswordResetAction,
	ResetAccountPasswordAction,
	SetDefaultAccountShippingAddressAction,
	UpdateAccountAction,
	UpdateAccountAddressAction
} from "./actions/AccountActions";

import {
	AddCartItemAction,
	CheckoutCartAction,
	GetAvailableCartShippingMethodsAction,
	GetCartAction,
	GetCartShippingMethodsAction,
	GetOrderHistoryAction,
	RedeemDiscountCodeAction,
	RemoveCartItemAction,
	RemoveDiscountCodeAction,
	SetCartShippingMethodAction,
	UpdateCartAction,
	UpdateCartItemAction
} from "./actions/CartActions";

import {
	GetProductAction,
	ProductQueryAction,
	QueryProductCategoriesAction,
	GetSearchableProductAttributesAction
} from "./actions/ProductActions";

import { GetProjectSettingsAction } from "./actions/ProjectActions";

import {
	AddToWishlistAction,
	GetWishlistAction,
	RemoveFromWishlistAction,
	UpdateWishlistItemAction
} from "./actions/WishlistActions";

import {
	AddAccountAddressPayload,
	ChangeAccountPasswordPayload,
	ConfirmAccountPayload,
	LoginAccountPayload,
	RegisterAccountPayload,
	RemoveAccountAddressPayload,
	RequestAccountConfirmationEmailPayload,
	RequestAccountPasswordResetPayload,
	ResetAccountPasswordPayload,
	SetDefaultAccountShippingAddressPayload,
	UpdateAccountAddressPayload,
	UpdateAccountPayload
} from "./payloads/AccountPayloads";

import {
	AddCartItemPayload,
	RedeemDiscountCodePayload,
	RemoveCartItemPayload,
	RemoveDiscountCodePayload,
	SetCartShippingMethodPayload,
	UpdateCartItemPayload,
	UpdateCartPayload,
	GetCartShippingMethodsPayload
} from "./payloads/CartPayloads";

import {
	GetProductPayload,
	ProductQueryPayload,
	QueryProductCategoriesPayload
} from "./payloads/ProductPayloads";

import {
	AddToWishlistPayload,
	RemoveFromWishlistPayload,
	UpdateWishlistItemPayload
} from "./payloads/WishlistPayloads";

class ComposableCommerce extends Extension {
	constructor(sdk: SDK) {
		super(sdk);
	}

	unregisterExtension(): void { }

	getProjectSettings: GetProjectSettingsAction = () => {
		return this.sdk.callAction("project/getProjectSettings", {});
	};

	getProduct: GetProductAction = (payload: GetProductPayload) => {
		return this.sdk.callAction("product/getProduct", {}, payload.query);
	};

	productQuery: ProductQueryAction = (payload: ProductQueryPayload) => {
		return this.sdk.callAction("product/query", payload);
	};

	queryProductCategories: QueryProductCategoriesAction = (
		payload: QueryProductCategoriesPayload,
	) => {
		return this.sdk.callAction("product/queryCategories", {}, payload.query);
	};

	getSearchableProductAttributes: GetSearchableProductAttributesAction = () => {
		return this.sdk.callAction("product/searchableAttributes", {});
	};

	getCart: GetCartAction = () => {
		return this.sdk.callAction("cart/getCart", {});
	};

	addCartItem: AddCartItemAction = (payload: AddCartItemPayload) => {
		return this.sdk.callAction("cart/addToCart", payload);
	};

	removeCartItem: RemoveCartItemAction = (payload: RemoveCartItemPayload) => {
		return this.sdk.callAction("cart/removeLineItem", payload);
	};

	updateCartItem: UpdateCartItemAction = (payload: UpdateCartItemPayload) => {
		return this.sdk.callAction("cart/updateLineItem", payload);
	};

	updateCart: UpdateCartAction = (payload: UpdateCartPayload) => {
		return this.sdk.callAction("cart/updateCart", payload);
	};

	getShippingMethods: GetCartShippingMethodsAction = (payload?: GetCartShippingMethodsPayload) => {
		return this.sdk.callAction("cart/getShippingMethods", {}, payload?.query ?? undefined);
	};

	getAvailableShippingMethods: GetAvailableCartShippingMethodsAction = () => {
		return this.sdk.callAction("cart/getAvailableShippingMethods", {});
	};

	// TODO: test if route param is needed `/action/cart/setShippingMethod?shippingMethodId=${shippingMethodId}`
	setShippingMethod: SetCartShippingMethodAction = (
		payload: SetCartShippingMethodPayload,
	) => {
		return this.sdk.callAction("cart/setShippingMethod", payload);
	};

	redeemDiscountCode: RedeemDiscountCodeAction = (
		payload: RedeemDiscountCodePayload,
	) => {
		return this.sdk.callAction("cart/redeemDiscount", payload);
	};

	removeDiscountCode: RemoveDiscountCodeAction = (
		payload: RemoveDiscountCodePayload,
	) => {
		return this.sdk.callAction("cart/removeDiscount", payload);
	};

	checkoutCart: CheckoutCartAction = () => {
		return this.sdk.callAction("cart/checkout", {});
	};

	getOrderHistory: GetOrderHistoryAction = () => {
		return this.sdk.callAction("cart/getOrders", {});
	};

	getWishlist: GetWishlistAction = (wishlistId?: string) => {
		return this.sdk.callAction("wishlist/getWishlist", {}, wishlistId ? { id: wishlistId } : undefined);
	};

	addToWishlist: AddToWishlistAction = (payload: AddToWishlistPayload, wishlistId?: string) => {
		return this.sdk.callAction("wishlist/addToWishlist", payload, wishlistId ? { id: wishlistId } : undefined);
	};

	removeFromWishlist: RemoveFromWishlistAction = (
		payload: RemoveFromWishlistPayload,
		wishlistId?: string
	) => {
		return this.sdk.callAction("wishlist/removeLineItem", payload, wishlistId ? { id: wishlistId } : undefined);
	};

	// TODO: check below is actually necessary...
	updateWishlistItem: UpdateWishlistItemAction = (
		payload: UpdateWishlistItemPayload,
		wishlistId?: string
	) => {
		return this.sdk.callAction("wishlist/updateLineItemCount", payload, wishlistId ? { id: wishlistId } : undefined);
	};

	getAccount: GetAccountAction = async () => {
		const result = await this.sdk.callAction("account/getAccount", {});
		const account = (result as any)?.data?.account || (result as any)?.data;

		if (account?.accountId && account?.confirmed) {
			return { account, loggedIn: true };
		}

		return {
			loggedIn: false,
			account: undefined,
			error: (result as any).error,
		};
	};

	login: LoginAccountAction = async (payload: LoginAccountPayload) => {
		const remember = payload.remember;
		payload.remember = undefined;

		const result: any = this.sdk.callAction("account/login", payload);

		if (remember) {
			window.localStorage.setItem(REMEMBER_ME, "1");
		}

		return result;
	};

	logout: LogoutAccountAction = async () => {
		await this.sdk.callAction("account/logout", {});
		window.localStorage.removeItem(REMEMBER_ME);
	};

	registerAccount: RegisterAccountAction = (
		payload: RegisterAccountPayload,
	) => {
		return this.sdk.callAction("account/register", payload);
	};

	confirmAccount: ConfirmAccountAction = (payload: ConfirmAccountPayload) => {
		return this.sdk.callAction("account/confirm", payload);
	};

	requestAccountConfirmationEmail: RequestAccountConfirmationEmailAction = (
		payload: RequestAccountConfirmationEmailPayload,
	) => {
		return this.sdk.callAction("account/requestConfirmationEmail", payload);
	};

	changeAccountPassword: ChangeAccountPasswordAction = (
		payload: ChangeAccountPasswordPayload,
	) => {
		return this.sdk.callAction("account/password", payload);
	};

	requestResetAccountPassword: RequestAccountPasswordResetAction = (
		payload: RequestAccountPasswordResetPayload,
	) => {
		return this.sdk.callAction("account/requestReset", payload);
	};

	resetAccountPassword: ResetAccountPasswordAction = (
		payload: ResetAccountPasswordPayload,
	) => {
		return this.sdk.callAction("account/reset", payload);
	};

	updateAccount: UpdateAccountAction = (payload: UpdateAccountPayload) => {
		return this.sdk.callAction("account/update", payload);
	};

	addAccountAddress: AddAccountAddressAction = (
		payload: AddAccountAddressPayload,
	) => {
		return this.sdk.callAction("account/addAddress", payload);
	};

	updateAccountAddress: UpdateAccountAddressAction = (
		payload: UpdateAccountAddressPayload,
	) => {
		return this.sdk.callAction("account/updateAddress", payload);
	};

	removeAccountAddress: RemoveAccountAddressAction = (
		payload: RemoveAccountAddressPayload,
	) => {
		return this.sdk.callAction("account/removeAddress", payload);
	};

	setDefaultBillingAddress: SetDefaultAccountShippingAddressAction = (
		payload: SetDefaultAccountShippingAddressPayload,
	) => {
		return this.sdk.callAction("account/setDefaultBillingAddress", payload);
	};

	setDefaultShippingAddress: SetDefaultAccountShippingAddressAction = (
		payload: SetDefaultAccountShippingAddressPayload,
	) => {
		return this.sdk.callAction(
			"account/setDefaultShippingAddress",
			payload,
		);
	};
}

export { ComposableCommerce };

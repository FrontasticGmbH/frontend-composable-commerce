import { SDK, Extension } from "@commercetools/sdk";
import { getProjectActions, ProjectActions } from "./actions/ProjectActions";
import { getProductActions, ProductActions } from "./actions/ProductActions";
import { getCartActions, CartActions } from "./actions/CartActions";
import { getWishlistActions, WishlistActions } from "./actions/WishlistActions";
import { AccountActions, getAccountActions } from "./actions/AccountActions";

class ComposableCommerce extends Extension {
	constructor(sdk: SDK) {
		super(sdk);

		this.project = getProjectActions(this.sdk);
		this.product = getProductActions(this.sdk);
		this.cart = getCartActions(this.sdk);
		this.wishlist = getWishlistActions(this.sdk);
		this.account = getAccountActions(this.sdk);
	}

	unregisterExtension(): void { }

	project: ProjectActions;
	product: ProductActions;
	cart: CartActions;
	wishlist: WishlistActions;
	account: AccountActions
}

export { ComposableCommerce };

import { SDK } from "@commercetools/frontend-sdk";
import {
	GetProductPayload,
	ProductQueryPayload,
	QueryProductCategoriesPayload
} from "../../types/payloads/ProductPayloads";
import {
	GetProductAction,
	GetSearchableProductAttributesAction,
	ProductQueryAction,
	QueryProductCategoriesAction
} from "../../types/actions/ProductActions";


export type ProductActions = {
	getProduct: GetProductAction,
	query: ProductQueryAction,
	queryCategories: QueryProductCategoriesAction,
	getSearchableAttributes: GetSearchableProductAttributesAction
}

export const getProductActions = (sdk: SDK): ProductActions => {
	return {
		getProduct: (payload: GetProductPayload) => {
			return sdk.callAction("product/getProduct", undefined, payload.query);
		},
		query: (payload: ProductQueryPayload) => {
			return sdk.callAction("product/query", payload);
		},
		queryCategories: (
			payload: QueryProductCategoriesPayload,
		) => {
			return sdk.callAction("product/queryCategories", undefined, payload.query);
		},
		getSearchableAttributes: () => {
			return sdk.callAction("product/searchableAttributes");
		}
	}
};

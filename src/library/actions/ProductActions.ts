import { SDK, Event } from "@commercetools/frontend-sdk";
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
import { Product } from "@commercetools/frontend-domain-types/product/Product";
import { Result } from "@commercetools/frontend-domain-types/product/Result";
import { FilterField } from "@commercetools/frontend-domain-types/product/FilterField";


export type ProductActions = {
	getProduct: GetProductAction,
	query: ProductQueryAction,
	queryCategories: QueryProductCategoriesAction,
	getSearchableAttributes: GetSearchableProductAttributesAction
}

export const getProductActions = (sdk: SDK): ProductActions => {
	return {
		getProduct: async (payload: GetProductPayload) => {
			const response = await sdk.callAction<Product>("product/getProduct", undefined, payload.query);

			if (!response.isError && response.data) {
				sdk.trigger(new Event({
					eventName: "productFetched",
					data: {
						product: response.data
					}
				}))
			}
			return response;
		},
		query: async (payload: ProductQueryPayload) => {
			const response = await sdk.callAction<Result>("product/query", payload);

			if (!response.isError) {
				sdk.trigger(new Event({
					eventName: "productsQueried",
					data: {
						query: payload.query,
						result: response.data
					}
				}))
			}
			return response;
		},
		queryCategories: async (payload: QueryProductCategoriesPayload) => {
			const response = await sdk.callAction<Result>("product/queryCategories", undefined, payload.query);

			if (!response.isError) {
				sdk.trigger(new Event({
					eventName: "productCategoriesQueried",
					data: {
						query: payload.query,
						result: response.data
					}
				}))
			}
			return response;
		},
		getSearchableAttributes: async () => {
			const response = await sdk.callAction<FilterField[]>("product/searchableAttributes");

			if (!response.isError) {
				sdk.trigger(new Event({
					eventName: "searchableProductAttributesFetched",
					data: {
						filterFields: response.data
					}
				}))
			}
			return response;
		}
	}
};
